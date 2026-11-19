import { LayoutItem } from "../interfaces";

/**
 * Layout: Spanish (Spain), also used for Catalan
 * Source: Pro-Soft-AD (https://github.com/Pro-Soft-AD)
 *         Based on the Windows "Spanish" layout (KBDSP). The accent keys are dead keys
 *         (grave, acute, circumflex, diaeresis), written as combining marks like in the "spanish" layout
 */
export default <LayoutItem>{
  layout: {
    default: [
      "º 1 2 3 4 5 6 7 8 9 0 ' ¡ {bksp}",
      "{tab} q w e r t y u i o p \u0300 +",
      "{lock} a s d f g h j k l ñ \u0301 ç {enter}",
      "{shift} < z x c v b n m , . - {shift}",
      ".com @ {space}",
    ],
    shift: [
      'ª ! " · $ % & / ( ) = ? ¿ {bksp}',
      "{tab} Q W E R T Y U I O P \u0302 *",
      "{lock} A S D F G H J K L Ñ \u0308 Ç {enter}",
      "{shift} > Z X C V B N M ; : _ {shift}",
      ".com @ {space}",
    ],
  },
};
