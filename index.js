#!/usr/bin/env node

// for ava <3

const colors = require("colors/safe");

// prettier-ignore
let txts = [
    "                                                \n" +
    "                                  W             \n" +
    "                               WXK00XW          \n" +
    "                             WXOOO0kkKW         \n" +
    "                           WX0OOKWNOkKW         \n" +
    "                         WN0k0NW  N0kKW         \n" +
    "          WWWWWWWWW    NXKO0XW    N0kKW         \n" +
    "      WXK0OOkOOkkO0KNNKOkOKW      NOkKW         \n" +
    "    WXOkk00O0KKOO000OOO0KN        Xkx0W         \n" +
    "   W0xkOXW        WNKOKW         NOkokW         \n" +
    "   W0xkKW          WNNW          KxxkKW         \n" +
    "    WXOO0NW                      XOkKW          \n" +
    "      NKOO0XN                   WKkOX           \n" +
    "       WN0OkOKNW                XkxOX           \n" +
    "          WX0kk0XNW            W0xkKW           \n" +
    "            WNK0OO0XNW        WXOk0N            \n" +
    "               WNKOkOKXWWW    NOkOXW            \n" +
    "                 WNX0OOO00KNWN0kkXW             \n" +
    "                    WWXK0OOOOkxk0N              \n" +
    "                         WNKOO0XW               \n" +
    "                           WWNW                 \n" +
    "                                                \n" +
    "                                                \n" +
    "                                                \n",
    "                                                \n" +
    "                                                \n" +
    "                               WNNXNNW          \n" +
    "                           WNXKOO00OOKW         \n" +
    "                       WWWX0O0KXNWW0xOXW        \n" +
    "                      NKOO0KXW    WkdkKW        \n" +
    "       WXKXKKKKXXXW WXO0KXN       WkoOX         \n" +
    "     WNKkk00OOkOOOO0OO0NW         W0x0N         \n" +
    "    WKkk0NWWWWWWWNKkOXW           W0k0W         \n" +
    "   W0xkON        NOkKW           WKkkKW         \n" +
    "    XOkON        NKKN            NOk0N          \n" +
    "     X0O0NW                     WKkkX           \n" +
    "      WX0OKNW                  WXkk0N           \n" +
    "        WX0O0XNW               W0k0W            \n" +
    "          WX0OO0KNW           WKkkKW            \n" +
    "            WNK0Ok0XNW        XOk0W             \n" +
    "               WNK0OO0KXNW    XOkX              \n" +
    "                  WWX0OkkO0XWXOxkX              \n" +
    "                      NXK0kkOkxOXW              \n" +
    "                         WNXKOkOXW              \n" +
    "                             WXXNW              \n" +
    "                                                \n" +
    "                                                \n" +
    "                                                \n",
    "                                                \n" +
    "                                 NXKKXW         \n" +
    "                              WN0OOkxOXW        \n" +
    "                             WKOOKX0kxkX        \n" +
    "                           WX0OKNW N0xON        \n" +
    "                         WN0OKNW   WKkON        \n" +
    "                       NXKO0NW     WKkkKW       \n" +
    "       WWX0OOOO0KNNWWWN0O0XW       WKkkKW       \n" +
    "      WKOkOOOO00OOkOKK0KNW         WKkkKW       \n" +
    "     XOkx0NW    WNKKK0KN           W0kON        \n" +
    "     N0kkOXW                      WKkxkX        \n" +
    "      WXOkk0XW                    W0xxOX        \n" +
    "        WX0Ok0XW                  N0kON         \n" +
    "          WNKOk0XW               N0kx0W         \n" +
    "            WNKOk0XNW            Xkk0N          \n" +
    "              WNX0kO0XW         XOk0N           \n" +
    "                 WK0kkO00KNWW  N0x0N            \n" +
    "                   WNK0OkkOOOKX0k0NW            \n" +
    "                      WNNNXK00Ok0N              \n" +
    "                            W0k0N               \n" +
    "                           WXOKW                \n" +
    "                            WNW                 \n" +
    "                                                \n" +
    "                                                \n",
    "                                                \n" +
    "                                WK0KKN          \n" +
    "                             WX0OkxkkKW         \n" +
    "                           WXOkOKXX0k0W         \n" +
    "                         WXOkOKNW WKk0N         \n" +
    "                       NK0kk0NW   N0kKW         \n" +
    "                     WXOkkOXW     XOx0W         \n" +
    "         WNNXNXXNNNWN0kkk0NW     NOkkKW         \n" +
    "      WNK0OkxdddxkOOkkOXNW       XkkKW          \n" +
    "     N0kOKXXK000KXK0kk0NWW      WXOOX           \n" +
    "     KxxON         WNK0XWW      N0xkX           \n" +
    "     WKOk0N                    WKkkKW           \n" +
    "      WXOkOKN                  WKk0N            \n" +
    "        WXOk0XW                XOx0W            \n" +
    "          NKkk0XWW            NOkkKW            \n" +
    "           WNK0OOKNW          XOkKW             \n" +
    "              WXOkO0XNW      WKkOX              \n" +
    "                WK0OkkOKKXNNWN0xkX              \n" +
    "                   NXK0OOOkkO0Ok0N              \n" +
    "                       WWNX0Okk0N               \n" +
    "                            WKKW                \n" +
    "                                                \n" +
    "                                                \n" +
    "                                                \n",
    "                                                \n" +
    "                                WWX00XW         \n" +
    "                              WN0OOkkOX         \n" +
    "                            WNKO0KNN0kKW        \n" +
    "                           NKOOXW  WKkKW        \n" +
    "                         WX0O0N    W0kKW        \n" +
    "       WWWW            NXKOOXW     NOkKW        \n" +
    "    WXK0000KK0KNWWW  WXOkOKW      W0xOX         \n" +
    "   N0kOKKKK0OOkkOOOKNXOkOKW       WOd0N         \n" +
    "   XOxON   WWNXXK0OkkkkKWW        W0xKW         \n" +
    "   WKkOKW        WNKOO0N          WKkKW         \n" +
    "    WX0O0XW        WNNW           N0x0W         \n" +
    "      WXOOKNW                    WXkOX          \n" +
    "        N0kkKW                   XkxKW          \n" +
    "         WXOkOXW                 XkkX           \n" +
    "           WX0OOKNW              XkkK           \n" +
    "             WX0kOKXW           W0kkX           \n" +
    "               WNKOOO0XWW      WKkOX            \n" +
    "                  WX0OkO0KXNWW W0x0W            \n" +
    "                    WWX00OkkO0KKOxKW            \n" +
    "                        WWNKK00OOON             \n" +
    "                             WWWNN              \n" +
    "                                                \n" +
    "                                                \n",
    "                                                \n" +
    "                                  W             \n" +
    "                              WNX00KW           \n" +
    "                            WKOkkOOOOX          \n" +
    "                          WXOk0XNWN0x0W         \n" +
    "                         WKOOXW   W0xON         \n" +
    "    WWWWWWWW          WNX0O0N      NOkX         \n" +
    "  WX0OOOOOO0KK0KNWW  WXOkOKW       N0kKW        \n" +
    "  NOkk0KKK00OOkkkO0KXKOO0XW        NOkKW        \n" +
    "  NOkkXW    WNXXK0Okkk0NW         W0xON         \n" +
    "  WKOxONW        WNX00X           WOx0W         \n" +
    "   WXOkOKNW                       N0k0W         \n" +
    "     NKOkOKNW                    WXOON          \n" +
    "      WNKOkOKNW                  NOkX           \n" +
    "        WNKOkOKNW               WKkON           \n" +
    "          WNKOkOKXW            WXk0N            \n" +
    "             WX0OkOKNW         N0OXW            \n" +
    "               WNKOkk0KXNWW   N0kKW             \n" +
    "                  WX0kkkkO0XXNXO0N              \n" +
    "                    WNNK00OO0KOKW               \n" +
    "                          WWWNXW                \n" +
    "                                                \n" +
    "                                                \n" +
    "                                                \n",
    "                                 W              \n" +
    "                              WNK00XW           \n" +
    "                            WX0OO0OOKW          \n" +
    "                          WN0OOXWWNOx0W         \n" +
    "                        WNKOk0N   WKk0W         \n" +
    "                      WX0OkOXW    WKkKW         \n" +
    "                     WXOkOKN      WkdKW         \n" +
    "       WWNXKO0K0OKNNN0kO0XW       WkdKW         \n" +
    "     WK0OOkdodkkxdkOOkkXW         W0kKW         \n" +
    "   WXOkO0XXK0KNNKKXKOxkX          WKkKW         \n" +
    "   WKkk0N           WNNW          XOdOW         \n" +
    "   WXkkk0XNW                     N0kOX          \n" +
    "    WNKOkkk0XW                   XkkKW          \n" +
    "      WNXKOkkO0KW               WKkkX           \n" +
    "          WX0OkkOKNW           WKkk0W           \n" +
    "            WNXKOkkOKXN        N0k0N            \n" +
    "               WNKOOkkOXNNW   WKkkX             \n" +
    "                  WNX0kkkOKNWWN0kKW             \n" +
    "                     WNXK0kO0K0kkXW             \n" +
    "                         WNKOkkk0N              \n" +
    "                           WXOkON               \n" +
    "                            WXKXW               \n" +
    "                                                \n" +
    "                                                \n",
    "                                                \n" +
    "                              WNNXNW            \n" +
    "                            WX0OOOO0XW          \n" +
    "                          WXOk0XNNKkkKW         \n" +
    "                       WWNKOOXW   NOdkW         \n" +
    "                      N00OkKW     N0okW         \n" +
    "       WWWWWWWWW    WXOxkOXW      N0dkW         \n" +
    "    WXK0OOOOOOO0KXNNKkOKXN        XOkKW         \n" +
    "   N0kkO0KXXK00KK0OkkON          N0k0N          \n" +
    "  XkxkKW         WNKKNW          XOkXW          \n" +
    "  Xkx0N                         WXkkX           \n" +
    "  WKkkKW                        N0k0N           \n" +
    "   WX0kOKNW                    WXOON            \n" +
    "     WX0kk0XWW                 N0x0W            \n" +
    "       WXK0OO0KXWW            N0kkKW            \n" +
    "          WNX0OkOKXNW         XkkKW             \n" +
    "             WNX0OOOO0KNWWW   XOOX              \n" +
    "                 WNK0OkkOOOKNX0kON              \n" +
    "                     WXXXK0kkkxkKW              \n" +
    "                          WNXOxkK               \n" +
    "                             XKXW               \n" +
    "                                                \n" +
    "                                                \n" +
    "                                                \n",
    "                                                \n" +
    "                                WWW             \n" +
    "                             WX00000KN          \n" +
    "                           WX0kO0KKOkKW         \n" +
    "                         WN0kOKNW WKkKW         \n" +
    "                       WNKOOKNW   WKkKW         \n" +
    "                     WN0Ok0NW     WKkKW         \n" +
    "       WW   WWWW    WXOkk0N       WKkKW         \n" +
    "    WNKOO0000OkO0KKKKOOKXN        N0kKW         \n" +
    "   WKkkkO000OkkkOOOOkOXW          NOkKW         \n" +
    "   WOdkKNW  WNNNNWWNXNW           XOdkW         \n" +
    "    N0kOXW                       WKkx0W         \n" +
    "     NKOkOXNW                    Xkk0W          \n" +
    "      WNKOkOKNW                  XOOXW          \n" +
    "         WXOkOKNW               WKkkX           \n" +
    "           NX0OO0XWW           WKkkOX           \n" +
    "             WNX0kO0KNW        WOxON            \n" +
    "                WX0kkOOKXNNW  WXOx0W            \n" +
    "                  WNX0kkkkk0KKKK0OXW            \n" +
    "                     WNNXK0OOkkKWW              \n" +
    "                          WWNXXW                \n" +
    "                                                \n" +
    "                                                \n" +
    "                                                \n",
    "                                                \n" +
    "                                  WWW           \n" +
    "                               WNKOkOKW         \n" +
    "                            WNKOkkOOkkON        \n" +
    "                          WX0OO0XNWNOkOX        \n" +
    "                       WNX0O0XNW   NOkON        \n" +
    "         WWW         WX0OOKNW      NOxkX        \n" +
    "     WNK0000KK0KNWWWNK0KXNW       WKkxkX        \n" +
    "     NOk00O0KK0OkOOOO0NW          W0xkKW        \n" +
    "     XkOX     WWXKXK0XW           NOk0N         \n" +
    "     NOkKW                       NOxx0W         \n" +
    "      N0kKW                     WKkk0N          \n" +
    "       N0OKNW                   XOkkX           \n" +
    "        WX0OKNW                W0xkON           \n" +
    "          WX0OKXW              N0kON            \n" +
    "            WX0OOKXWW         NOkx0W            \n" +
    "              WN0OOO0KXWWW    Xkk0NW            \n" +
    "                 WNK0OOO00XNWN0kOXW             \n" +
    "                    WWXK0OkkOOkxOX              \n" +
    "                        WWNKOkkk0N              \n" +
    "                            WKOkx0W             \n" +
    "                              WNKXW             \n" +
    "                                                \n" +
    "                                                \n",
];

txts = txts.map((str) => colors.magenta(str));

let i = 0;
setInterval(() => {
  process.stdout.write("\x1bc");
  process.stdout.write(txts[i]);

  ++i;
  if (i == txts.length) i = 0;
}, 169);

// for ava <3
