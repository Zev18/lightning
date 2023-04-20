// basics
const WHITE = "#FFFFFF";
const BLACK = "#000000";
const UNKNOWN = "#FF0000";

// ui colors
const BG_DEEP = "#0b031e";
const BG = "#0e0c29";
const BG1 = "#16183d";
const BG2 = "#181b53";
const BG3 = "#2c2361";
const BG4 = "#2b2672";

const ACCENT = "#65F7FF";
const DEFAULT_TEXT = "#91C9F0";
const EDITOR_DEFAULT = "#76c6ff";
const SECONDARY_ACCENT = "#3E5AEF";
const LINK = "#5691FC";
const TERTIARY_ACCENT = "#646fea";

const ERROR_BG = "#461827";
const ERROR = "#FF4171";
const WARNING = "#FF855F";

const MODIFIED = "#65ffd6";
const ADDED = ACCENT;
const DELETED = "#b62144";

const TRANSPARENT = "#00000000";

// syntax highlight colors
const COMMENT = "#4E548F";

const GREEN = "#66ffde";
const TEAL = "#21fbff";
const CYAN = "#61d0ff";
const SKY = "#44b1ff";
const BLUE = "#2681f9";
const TWILIGHT = "#3c6aff";
const INDIGO = "#9172FF";
const VIOLET = "#CCA0FF";
const RED = "#ff477e";
const PINK = "#ff7ca8";
const ORANGE = "#f07178";

// JSON keys
const JSON0 = "#6be4ff";
const JSON1 = "#6baeff";
const JSON2 = "#6b7aff";
const JSON3 = "#976bff";
const JSON4 = "#c66bff";
const JSON5 = "#f56bff";
const JSON6 = "#ff6bc9";
const JSON7 = "#ff6b9c";
const JSON8 = "#ff505b";

const colors = {
  json0: JSON0,
  json1: JSON1,
  json2: JSON2,
  json3: JSON3,
  json4: JSON4,
  json5: JSON5,
  json6: JSON6,
  json7: JSON7,
  json8: JSON8,

  white: WHITE,
  black: BLACK,
  unknown: UNKNOWN,

  accent: ACCENT,
  defaultText: DEFAULT_TEXT,
  secondaryAccent: SECONDARY_ACCENT,
  tertiaryAccent: TERTIARY_ACCENT,
  link: LINK,
  editorDefault: EDITOR_DEFAULT,

  added: ADDED,
  modified: MODIFIED,
  deleted: DELETED,

  errorBg: ERROR_BG,
  error: ERROR,
  warning: WARNING,

  transparent: TRANSPARENT,

  bg: BG,
  bg0: BG_DEEP,
  bg1: BG1,
  bg2: BG2,
  bg3: BG3,
  bg4: BG4,

  comment: COMMENT,
  green: GREEN,
  teal: TEAL,
  cyan: CYAN,
  sky: SKY,
  blue: BLUE,
  twilight: TWILIGHT,
  indigo: INDIGO,
  violet: VIOLET,
  red: RED,
};

module.exports = { colors };
