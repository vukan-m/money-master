import { ImageStyle, Platform, StyleProp, TextStyle, ViewStyle, Dimensions } from "react-native";

export type BasicStyleProp = StyleProp<ViewStyle | TextStyle | ImageStyle>;

const TAB_HEIGHT = 68;

export const fullHeight = () => Dimensions.get("window").height;

export const fullWidth = () => Dimensions.get("window").width;

export const colors = {
  gold: "#FFD700",
  white: "#FFFFFF",
  blue: "#2196F3",
  green: "#4CAF50",
  gray: "#1F1F1F",
  grayLowOpacity: "#1F1F1F99",
  lightGray: "#292929",
  darkWhite: "#EEEEEE",
  red: "#FF4136",
};

export const spacing = {
  half: 5,
  single: 10,
  singleAndAHalf: 15,
  double: 20,
  triple: 30,
};

export const typography = {
  xs: 8,
  sm: 12,
  md: 16,
  xmd: 18,
  lg: 20,
  xlg: 30,
};

// BACKGROUNDS START

export const bgGray: BasicStyleProp = {
  backgroundColor: colors.gray,
};

export const bgBlue: BasicStyleProp = {
  backgroundColor: colors.blue,
};

export const bgGreen: BasicStyleProp = {
  backgroundColor: colors.green,
};

export const bgRed: BasicStyleProp = {
  backgroundColor: colors.red,
};

export const bgGrayLowOpacity: BasicStyleProp = {
  backgroundColor: colors.grayLowOpacity,
};

export const bgLightGray: BasicStyleProp = {
  backgroundColor: colors.lightGray,
};

// BACKGROUNDS END

// PADDINGS START

export const halfPadding = {
  padding: spacing.half,
};

export const halfPaddingTop = {
  paddingTop: spacing.half,
};

export const halfPaddingBottom = {
  paddingBottom: spacing.half,
};

export const halfPaddingRight = {
  paddingRight: spacing.half,
};

export const halfPaddingLeft = {
  paddingLeft: spacing.half,
};

export const halfPaddingVertical = {
  paddingVertical: spacing.half,
};

export const halfPaddingHorizontal = {
  paddingHorizontal: spacing.half,
};

export const singlePadding = {
  padding: spacing.single,
};

export const singlePaddingTop = {
  paddingTop: spacing.single,
};

export const singlePaddingBottom = {
  paddingBottom: spacing.single,
};

export const singlePaddingRight = {
  paddingRight: spacing.single,
};

export const singlePaddingLeft = {
  paddingLeft: spacing.single,
};

export const singlePaddingVertical = {
  paddingVertical: spacing.single,
};

export const singlePaddingHorizontal = {
  paddingHorizontal: spacing.single,
};

export const singleAndAHalfPadding = {
  padding: spacing.singleAndAHalf,
};

export const singleAndAHalfPaddingTop = {
  paddingTop: spacing.singleAndAHalf,
};

export const singleAndAHalfPaddingBottom = {
  paddingBottom: spacing.singleAndAHalf,
};

export const singleAndAHalfPaddingRight = {
  paddingRight: spacing.singleAndAHalf,
};

export const singleAndAHalfPaddingLeft = {
  paddingLeft: spacing.singleAndAHalf,
};

export const singleAndAHalfPaddingVertical = {
  paddingVertical: spacing.singleAndAHalf,
};

export const singleAndAHalfPaddingHorizontal = {
  paddingHorizontal: spacing.singleAndAHalf,
};

export const doublePadding = {
  padding: spacing.double,
};

export const doublePaddingTop = {
  paddingTop: spacing.double,
};

export const doublePaddingBottom = {
  paddingBottom: spacing.double,
};

export const doublePaddingRight = {
  paddingRight: spacing.double,
};

export const doublePaddingLeft = {
  paddingLeft: spacing.double,
};

export const doublePaddingVertical = {
  paddingVertical: spacing.double,
};

export const doublePaddingHorizontal = {
  paddingHorizontal: spacing.double,
};

export const triplePadding = {
  padding: spacing.triple,
};

export const triplePaddingTop = {
  paddingTop: spacing.triple,
};

export const triplePaddingBottom = {
  paddingBottom: spacing.triple,
};

export const triplePaddingRight = {
  paddingRight: spacing.triple,
};

export const triplePaddingLeft = {
  paddingLeft: spacing.triple,
};

export const triplePaddingVertical = {
  paddingVertical: spacing.triple,
};

export const triplePaddingHorizontal = {
  paddingHorizontal: spacing.triple,
};

// PADDINGS END

// MARGINS START

export const halfMargin = {
  margin: spacing.half,
};

export const halfMarginTop = {
  marginTop: spacing.half,
};

export const halfMarginBottom = {
  marginBottom: spacing.half,
};

export const halfMarginRight = {
  marginRight: spacing.half,
};

export const halfMarginLeft = {
  marginLeft: spacing.half,
};

export const halfMarginVertical = {
  marginVertical: spacing.half,
};

export const halfMarginHorizontal = {
  marginHorizontal: spacing.half,
};

export const singleMargin = {
  margin: spacing.single,
};

export const singleMarginTop = {
  marginTop: spacing.single,
};

export const singleMarginBottom = {
  marginBottom: spacing.single,
};

export const singleMarginRight = {
  marginRight: spacing.single,
};

export const singleMarginLeft = {
  marginLeft: spacing.single,
};

export const singleMarginVertical = {
  marginVertical: spacing.single,
};

export const singleMarginHorizontal = {
  marginHorizontal: spacing.single,
};

export const singleAndAHalfMargin = {
  margin: spacing.singleAndAHalf,
};

export const singleAndAHalfMarginTop = {
  marginTop: spacing.singleAndAHalf,
};

export const singleAndAHalfMarginBottom = {
  marginBottom: spacing.singleAndAHalf,
};

export const singleAndAHalfMarginRight = {
  marginRight: spacing.singleAndAHalf,
};

export const singleAndAHalfMarginLeft = {
  marginLeft: spacing.singleAndAHalf,
};

export const singleAndAHalfMarginVertical = {
  marginVertical: spacing.singleAndAHalf,
};

export const singleAndAHalfMarginHorizontal = {
  marginHorizontal: spacing.singleAndAHalf,
};

export const doubleMargin = {
  margin: spacing.double,
};

export const doubleMarginTop = {
  marginTop: spacing.double,
};

export const doubleMarginBottom = {
  marginBottom: spacing.double,
};

export const doubleMarginRight = {
  marginRight: spacing.double,
};

export const doubleMarginLeft = {
  marginLeft: spacing.double,
};

export const doubleMarginVertical = {
  marginVertical: spacing.double,
};

export const doubleMarginHorizontal = {
  marginHorizontal: spacing.double,
};

export const tripleMargin = {
  margin: spacing.triple,
};

export const tripleMarginTop = {
  marginTop: spacing.triple,
};

export const tripleMarginBottom = {
  marginBottom: spacing.triple,
};

export const tripleMarginRight = {
  marginRight: spacing.triple,
};

export const tripleMarginLeft = {
  marginLeft: spacing.triple,
};

export const tripleMarginVertical = {
  marginVertical: spacing.triple,
};

export const tripleMarginHorizontal = {
  marginHorizontal: spacing.triple,
};

// MARGINS END

export const fillView: BasicStyleProp = {
  height: "100%",
  width: "100%",
};

export const fillWidth: BasicStyleProp = {
  width: "100%",
};

export const fillHeight: BasicStyleProp = {
  height: "100%",
};

export const flex: BasicStyleProp = {
  flex: 1,
};

export const flexGrow: BasicStyleProp = {
  flexGrow: 1,
};

export const row: BasicStyleProp = {
  flexDirection: "row",
};

export const wrap: BasicStyleProp = {
  flexWrap: "wrap",
};

export const alignCenter: BasicStyleProp = {
  alignItems: "center",
};

export const alignSelfCenter: BasicStyleProp = {
  alignSelf: "center",
};

export const alignSelfEnd: BasicStyleProp = {
  alignSelf: "flex-end",
};

export const alignSelfStart: BasicStyleProp = {
  alignSelf: "flex-start",
};

export const justifyStart: BasicStyleProp = {
  justifyContent: "flex-start",
};

export const justifyCenter: BasicStyleProp = {
  justifyContent: "center",
};

export const justifyEnd: BasicStyleProp = {
  justifyContent: "flex-end",
};

export const spaceAround: BasicStyleProp = {
  justifyContent: "space-around",
};

export const spaceBetween: BasicStyleProp = {
  justifyContent: "space-between",
};

export const spaceEvenly: BasicStyleProp = {
  justifyContent: "space-evenly",
};

export const center: BasicStyleProp = {
  ...alignCenter,
  ...justifyCenter,
};

export const absolute: BasicStyleProp = {
  position: "absolute",
};

export const container: BasicStyleProp = {
  ...flex,
  ...doublePadding,
  ...bgGray,
};

export const text: BasicStyleProp = {
  color: colors.white,
  fontSize: typography.sm,
};

export const titleStyle: BasicStyleProp = {
  color: colors.gold,
  fontSize: typography.lg,
  fontWeight: "bold",
  ...doubleMarginBottom,
  textAlign: "center",
};

export const subtitleStyle: BasicStyleProp = {
  color: colors.white,
  fontSize: typography.md,
  fontWeight: "bold",
  ...halfMarginBottom,
};

export const buttonText: BasicStyleProp = {
  color: colors.white,
  fontSize: typography.md,
  fontWeight: "bold",
};

export const button: BasicStyleProp = {
  ...singlePaddingVertical,
  ...doublePaddingHorizontal,
  ...singleMarginVertical,
  borderRadius: spacing.half,
  borderWidth: 1,
};

export const greenButton: BasicStyleProp = {
  ...button,
  ...bgGreen,
};

export const blueButton: BasicStyleProp = {
  ...button,
  ...bgBlue,
};

export const redButton: BasicStyleProp = {
  ...button,
  ...bgRed,
};

export const financeContainer: BasicStyleProp = {
  ...row,
  ...spaceBetween,
  ...doublePaddingHorizontal,
  ...fillWidth,
};

export const balanceText: BasicStyleProp = {
  color: colors.white,
  fontSize: typography.lg,
  fontWeight: "bold",
};

export const balanceContainer: BasicStyleProp = {
  ...bgLightGray,
  ...doublePadding,
  ...doubleMarginBottom,
  borderRadius: spacing.single,
};

export const tableContainer: BasicStyleProp = {
  ...bgLightGray,
  borderRadius: spacing.single,
  ...doublePadding,
  ...fillWidth,
};

export const tableHeader: BasicStyleProp = {
  ...row,
  ...spaceBetween,
  ...singleMarginBottom,
};

export const columnHeader: BasicStyleProp = {
  color: colors.white,
  fontSize: typography.xmd,
  fontWeight: "bold",
  ...flex,
  textAlign: "center",
};

export const rowContainer: BasicStyleProp = {
  ...row,
  ...halfMarginBottom,
};

export const incomeDataText: BasicStyleProp = {
  color: colors.green,
  fontSize: typography.md,
  ...flex,
  textAlign: "center",
};

export const expenseDataText: BasicStyleProp = {
  color: colors.red,
  fontSize: typography.md,
  ...flex,
  textAlign: "center",
};

export const modalContainer: BasicStyleProp = {
  ...flex,
  ...alignCenter,
  ...justifyCenter,
  ...bgGrayLowOpacity,
};

export const modalInnerContainer: BasicStyleProp = {
  backgroundColor: colors.gray,
  borderRadius: spacing.single,
  ...doublePaddingHorizontal,
  ...singlePaddingVertical,
  ...absolute,
};

export const textInput: BasicStyleProp = {
  borderWidth: 1,
  borderColor: colors.lightGray,
  borderRadius: spacing.half,
  padding: 0,
  color: colors.darkWhite,
  ...halfPaddingHorizontal,
  ...(Platform.OS === "ios" && halfPaddingVertical),
};

export const debugBorder = {
  borderWidth: 1,
  borderColor: "red",
};

export const categoryDropdownStyle: BasicStyleProp = {
  borderWidth: 1,
  borderColor: colors.lightGray,
  borderRadius: spacing.half,
  ...halfPadding,
  ...bgLightGray,
};

export const categoriesItemStyle: BasicStyleProp = {
  ...singleMarginBottom,
  ...row,
};

export const categoriesFlatListStyle: BasicStyleProp = {
  ...bgLightGray,
  borderRadius: spacing.half,
};

export const tabBarStyle = {
  backgroundColor: "#111111",
  ...row,
  height: TAB_HEIGHT,
};

export const tabRightBorder: BasicStyleProp = {
  borderRightColor: colors.lightGray,
  borderRightWidth: 1,
};

export const categoriesContainer = {
  ...bgLightGray,
  ...doubleMarginVertical,
  ...singlePadding,
  borderRadius: spacing.single,
};

export const categoriesItem = {
  borderWidth: 2,
  borderColor: colors.grayLowOpacity,
  borderRadius: spacing.half,
  ...singlePaddingVertical,
  ...doublePaddingHorizontal,
  ...center,
  ...singleMarginBottom,
};

export const categoriesLabel = {
  color: colors.white,
};
