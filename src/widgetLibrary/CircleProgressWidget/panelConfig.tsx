import {
  HorizontalCenterIcon,
  HorizontalEndIcon,
  HorizontalStartIcon,
} from "@illa-design/icon"
import { colorSchemeOptions } from "@/widgetLibrary/PublicSector/colorSchemeOptions"
import { PanelConfig } from "@/page/App/components/InspectPanel/interface"
import { VALIDATION_TYPES } from "@/utils/validationFactory"
import i18n from "@/i18n/config"
import { EditableInputIconType } from "@/page/App/components/PanelSetters/InputSetter/interface"

const baseWidgetName = "circle-progress"
export const CIRCLE_PROGRESS_PANEL_CONFIG: PanelConfig[] = [
  {
    id: `${baseWidgetName}-basic`,
    groupName: i18n.t("editor.inspect.setter_group.basic"),
    children: [
      {
        id: `${baseWidgetName}-basic-Value`,
        labelName: i18n.t("editor.inspect.setter_label.value"),
        labelDesc: i18n.t("editor.inspect.setter_label.progress_percentage"),
        attrName: "value",
        setterType: "INPUT_SETTER",
        expectedType: VALIDATION_TYPES.STRING,
      },
    ],
  },
  {
    id: `${baseWidgetName}-adornments`,
    groupName: i18n.t("editor.inspect.setter_group.adornments"),
    children: [
      {
        id: `${baseWidgetName}-adornments-showText`,
        labelName: i18n.t("editor.inspect.setter_label.hide_value_label"),
        attrName: "showText",
        setterType: "SWITCH_SETTER",
      },
      {
        id: `${baseWidgetName}-adornments-tooltip`,
        labelName: i18n.t("editor.inspect.setter_label.tooltip"),
        labelDesc: i18n.t("editor.inspect.setter_tooltip.tooltip"),
        attrName: "tooltipText",
        setterType: "INPUT_SETTER",
        expectedType: VALIDATION_TYPES.STRING,
      },
    ],
  },
  {
    id: `${baseWidgetName}-layout`,
    groupName: i18n.t("editor.inspect.setter_group.layout"),
    children: [
      {
        id: `${baseWidgetName}-layout-hidden`,
        setterType: "DYNAMIC_SWITCH_SETTER",
        labelName: i18n.t("editor.inspect.setter_label.hidden"),
        labelDesc: i18n.t("editor.inspect.setter_tooltip.hidden"),
        attrName: "hidden",
        useCustomLayout: true,
        expectedType: VALIDATION_TYPES.BOOLEAN,
      },
      {
        id: `${baseWidgetName}-layout-alignment`,
        setterType: "RADIO_GROUP_SETTER",
        labelName: i18n.t("editor.inspect.setter_label.label_alignment"),
        attrName: "alignment",
        options: [
          {
            label: <HorizontalStartIcon />,
            value: "start",
          },
          {
            label: <HorizontalCenterIcon />,
            value: "center",
          },
          {
            label: <HorizontalEndIcon />,
            value: "end",
          },
        ],
      },
    ],
  },
  {
    id: `${baseWidgetName}-style`,
    groupName: i18n.t("editor.inspect.setter_group.style"),
    children: [
      {
        id: `${baseWidgetName}-color-list`,
        setterType: "LIST_SETTER",
        labelName: i18n.t("editor.inspect.setter_label.colors"),
        attrName: "styles",
        useCustomLayout: true,
        childrenSetter: [
          {
            id: `${baseWidgetName}-color`,
            labelName: i18n.t("editor.inspect.setter_label.styles"),
            setterType: "COLOR_PICKER_SETTER",
            attrName: "color",
            defaultValue: "blue",
            options: colorSchemeOptions,
          },
          {
            id: `${baseWidgetName}-trailColor`,
            labelName: i18n.t("editor.inspect.setter_label.trail_color"),
            setterType: "COLOR_PICKER_SETTER",
            attrName: "trailColor",
            defaultValue: "gray",
            options: colorSchemeOptions,
          },
        ],
      },
      {
        id: `${baseWidgetName}-style-list`,
        setterType: "LIST_SETTER",
        labelName: i18n.t("editor.inspect.setter_label.styles"),
        attrName: "styles",
        useCustomLayout: true,
        childrenSetter: [
          {
            id: `${baseWidgetName}-strokeWidth`,
            labelName: i18n.t("editor.inspect.setter_label.stroke_width"),
            setterType: "EDITABLE_INPUT_SETTER",
            iconName: EditableInputIconType.STROKE_WIDTH,
            attrName: "strokeWidth",
            defaultValue: "4px",
            expectedType: VALIDATION_TYPES.STRING,
          },
        ],
      },
    ],
  },
]
