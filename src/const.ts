import { CardConfig, EditorMode, Schedule, TConditionLogicType, TRepeatType, TWeekday } from "./types";

export const CARD_VERSION = 'v4.0.6';

export const DefaultCardConfig: CardConfig = {
  include: [],
  exclude: [],
  discover_existing: true,
  title: true,
  show_header_toggle: false,
  time_step: 15,
  default_editor: EditorMode.Single,
  display_options: {
    primary_info: 'default',
    secondary_info: ['relative-time', 'additional-tasks'],
    icon: 'action'
  },
  sort_by: ['relative-time', 'state'],
  customize: {},
  tags: [],
  exclude_tags: []
};

const defaultSlotConfig = {
  actions: [],
  conditions: {
    type: TConditionLogicType.Or,
    items: [],
    track_changes: false
  }
}

export const defaultTimeSchemeConfig: Schedule = {
  entries: [
    {
      weekdays: [TWeekday.Daily],
      slots: [
        {
          ...defaultSlotConfig,
          start: '00:00:00',
          stop: '08:00:00',
        },
        {
          ...defaultSlotConfig,
          start: '08:00:00',
          stop: '16:00:00',
        },
        {
          ...defaultSlotConfig,
          start: '16:00:00',
          stop: '00:00:00',
        }
      ]
    }
  ],
  repeat_type: TRepeatType.Repeat,
  next_entries: [],
  timestamps: [],
  enabled: true
};

export const defaultSingleTimerConfig: Schedule = {
  ...defaultTimeSchemeConfig,
  entries: [
    {
      weekdays: [TWeekday.Daily],
      slots: [
        {
          ...defaultSlotConfig,
          start: '00:00:00',
          stop: '12:00:00',
        },
        {
          ...defaultSlotConfig,
          start: '12:00:00',
        },
        {
          ...defaultSlotConfig,
          start: '12:01:00',
          stop: '00:00:00',
        }
      ]
    }
  ]
};