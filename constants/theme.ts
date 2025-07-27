// constants/theme.ts
import { Colors } from "./Colors";

export const globalStyles = {
  // 🔹 Screen Layout Wrapper
  screen: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
    paddingHorizontal: 25,
    paddingTop: 80,
  },

  // 🔹 Headings
  heading: {
    fontSize: 30,
    fontFamily: "outfit-bold",
    color: Colors.TEXT,
    marginTop: 30,
  },

  // 🔹 Subheadings / Paragraphs
  subheading: {
    fontSize: 18,
    fontFamily: "outfit-medium",
    color: Colors.TEXT_SECONDARY,
    marginTop: 20,
  },

  // 🔹 Primary Button
  buttonPrimary: {
    backgroundColor: Colors.BUTTON_PRIMARY,
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
  },
  buttonPrimaryText: {
    color: Colors.BUTTON_TEXT_PRIMARY,
    fontFamily: "outfit-bold",
    fontSize: 16,
  },

  // 🔹 Secondary Button (e.g., outlined or muted)
  buttonSecondary: {
    backgroundColor: Colors.BUTTON_SECONDARY,
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
  },
  buttonSecondaryText: {
    color: Colors.BUTTON_TEXT_SECONDARY,
    fontFamily: "outfit-bold",
    fontSize: 16,
  },

  // 🔹 Disabled Button
  buttonDisabled: {
    backgroundColor: Colors.BUTTON_DISABLED,
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
  },
  buttonDisabledText: {
    color: Colors.BUTTON_TEXT_DISABLED,
    fontFamily: "outfit-bold",
    fontSize: 16,
  },

  // 🔹 Card Style (with subtle shadow)
  card: {
    backgroundColor: Colors.CARD,
    borderRadius: 18,
    padding: 20,
    marginBottom: 20,
    shadowColor: Colors.SHADOW,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },

  // 🔹 Input Fields
  input: {
    backgroundColor: Colors.LIGHT_GRAY,
    borderColor: Colors.BORDER,
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    fontFamily: "outfit",
    color: Colors.TEXT,
  },
};
