import { supportedActions } from "./supported_actions";
import { domainIcon } from "./domain_icon";
import { HomeAssistant } from "../../lib/types";
import { computeEntity } from "../../lib/entity";
import { Action } from "../../types";
import { hassLocalize } from "../../localize/hassLocalize";
import { parseCustomActions, parseExcludedActions } from "./parse_custom_actions";
import { formatActionDisplay } from "../format/format_action_display";
import { caseInsensitiveStringCompare } from "../../lib/string_compare";
import { serviceIcons } from "../format/service_icons";
import { parseCustomVariable } from "../selectors/selector_config";
import { defaultSelectorValue } from "../selectors/default_selector_value";
import { isDefined } from "../../lib/is_defined";
import { entityConfig } from "./compute_action_domains";
import { matchPattern } from "../../lib/patterns";

export interface actionItem {
  key: string,
  name: string,
  description: string,
  icon: string;
  action: Action;
}

export const computeActionsForDomain = (hass: HomeAssistant, domain: string, config: entityConfig) => {

  const isSupportedAction = (action: string) => {
    if (!Object.keys(supportedActions).includes(domain)) return false;
    let res = Object.keys(supportedActions[domain]).includes(action);
    if (!res && Object.keys(supportedActions[domain]).includes('{entity_id}')) {
      res = ((config.include || []).some(e => matchPattern(e, `${domain}.${action}`)) ||
        Object.keys(config.customize || {}).some(e => matchPattern(e, `${domain}.${action}`))) &&
        !(config.exclude || []).some(e => matchPattern(e, `${domain}.${action}`));
    }
    return res;
  };

  const services = Object.keys(hass.services).includes(domain)
    ? Object.keys(hass.services[domain]).filter(isSupportedAction)
    : [];

  const domainName = (domain: string) => hassLocalize(`component.${domain}.title`, hass, false) || domain.replace(/_/g, " ");

  const serviceName = (service: string) => hassLocalize(`component.${domain}.services.${service}.name`, hass, false) ||
    hass.services[domain][service].name ||
    service.replace(/_/g, ' ');

  const serviceDescription = (service: string) => {
    let description = hassLocalize(`component.${domain}.services.${service}.description`, hass, false);
    if (!description) description = hass.services[domain][service].description;
    if (!description && domain == 'script') description = hassLocalize(`component.${domain}.services.turn_on.description`, hass, false);
    return description;
  }

  let actionList: actionItem[] = services.map(e => Object(<actionItem>{
    key: e,
    name: `${domainName(domain)}: ${serviceName(e)}`,
    description: serviceDescription(e),
    icon: Object.keys(serviceIcons).includes(domain) && Object.keys(serviceIcons[domain].services).includes(e) ? serviceIcons[domain].services[e] : domainIcon(domain),
    action: <Action>{
      service: e.includes('.') ? e : `${domain}.${e}`,
      service_data: {},
      target: hass.services[domain][e].target ? {} : undefined
    }
  }));

  //get excluded actions for entity
  let excludedActions = parseExcludedActions(config.customize || {}, domain);
  if (excludedActions.length) {
    actionList = actionList.filter(e => !excludedActions.some(a => {
      return caseInsensitiveStringCompare(computeEntity(e.action.service), a) > 0
        || caseInsensitiveStringCompare(formatActionDisplay(e.action, hass, config.customize), a) > 0
    }));
  }

  let customActions = parseCustomActions(config.customize || {}, domain);
  customActions.forEach(action => {
    let key = action.service;
    while (actionList.find(e => e.key == key)) key += '_2';

    if (action.variables) {
      Object.entries(action.variables).forEach(([field, config]) => {
        let selector = parseCustomVariable(config);
        let defaultValue = defaultSelectorValue(selector);
        if (!isDefined(action.service_data[field]) && isDefined(defaultValue)) action = { ...action, service_data: { ...action.service_data, [field]: defaultValue } };
      });
    }

    actionList.push({
      key: key,
      name: action.name || "",
      description: action.name || "",
      icon: action.icon || domainIcon(domain),
      action: <Action>{
        service: action.service.includes('.') ? action.service : `${domain}.${action.service}`,
        service_data: action.service_data || {},
        target: action.target ? action.target : undefined,
        name: action.name,
        icon: action.icon
      }
    })
  });

  return actionList;
};