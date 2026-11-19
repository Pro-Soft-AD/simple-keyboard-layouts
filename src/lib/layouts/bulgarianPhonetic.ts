import { LayoutItem } from "../interfaces";

/**
 * Layout: Bulgarian Phonetic
 * Source: Pro-Soft-AD (https://github.com/Pro-Soft-AD)
 *         Based on the Windows "Bulgarian (Phonetic Traditional)" layout (KBDBGPH1),
 *         except that Shift + ь gives Ь (Windows gives ѝ)
 */
export default <LayoutItem>{
  layout: {
    default: [
      "ч 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
      "{tab} я в е р т ъ у и о п ш щ ю",
      "{lock} а с д ф г х й к л ; ' {enter}",
      "{shift} з ь ц ж б н м , . / {shift}",
      ".com @ {space}",
    ],
    shift: [
      "Ч ! @ № $ % € § * ( ) _ + {bksp}",
      "{tab} Я В Е Р Т Ъ У И О П Ш Щ Ю",
      '{lock} А С Д Ф Г Х Й К Л : " {enter}',
      "{shift} З Ь Ц Ж Б Н М < > ? {shift}",
      ".com @ {space}",
    ],
  },
};
