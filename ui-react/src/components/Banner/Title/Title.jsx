import React, { useEffect } from 'react';
import './Title.css';

const svg = (
    <svg width="1370" height="123" viewBox="0 0 1370 123" fill="none" xmlns="http://www.w3.org/2000/svg" className="title">
        <path d="M35.89 117.55C30 117.55 24.5233 116.362 19.46 113.985C14.3967 111.505 10.2633 108.095 7.06001 103.755C5.82001 101.895 5.20001 100.087 5.20001 98.33C5.20001 95.85 6.18168 93.7317 8.14501 91.975C10.1083 90.115 12.1233 89.185 14.19 89.185C16.8767 89.185 19.77 90.735 22.87 93.835C24.8333 95.695 26.8483 97.0383 28.915 97.865C30.9817 98.5883 33.3067 98.95 35.89 98.95C38.8867 98.95 41.7283 98.175 44.415 96.625C47.205 95.075 49.4267 93.0083 51.08 90.425C52.7334 87.7383 53.56 84.9483 53.56 82.055V16.955C53.56 14.2683 54.5417 12.0467 56.505 10.29C58.4683 8.42998 60.7417 7.49998 63.325 7.49998C66.2183 7.49998 68.5434 8.37831 70.3 10.135C72.0567 11.8917 72.935 14.165 72.935 16.955V82.055C72.935 88.255 71.2817 94.0933 67.975 99.57C64.6684 105.047 60.1733 109.438 54.49 112.745C48.8067 115.948 42.6067 117.55 35.89 117.55Z" stroke="white" strokeWidth="10" mask="url(#path-1-outside-1)" />
        <path d="M195.967 61.75C195.967 71.98 193.694 81.3833 189.147 89.96C184.601 98.4333 178.297 105.15 170.237 110.11C162.281 115.07 153.291 117.55 143.267 117.55C133.244 117.55 124.202 115.07 116.142 110.11C108.186 105.15 101.934 98.4333 97.3875 89.96C92.9441 81.3833 90.7225 71.98 90.7225 61.75C90.7225 51.52 92.9441 42.1683 97.3875 33.695C101.934 25.1183 108.186 18.35 116.142 13.39C124.202 8.42998 133.244 5.94998 143.267 5.94998C153.291 5.94998 162.281 8.42998 170.237 13.39C178.297 18.35 184.601 25.1183 189.147 33.695C193.694 42.1683 195.967 51.52 195.967 61.75ZM175.817 61.75C175.817 54.8267 174.422 48.575 171.632 42.995C168.842 37.3116 164.967 32.8167 160.007 29.51C155.047 26.2033 149.467 24.55 143.267 24.55C136.964 24.55 131.332 26.2033 126.372 29.51C121.516 32.7133 117.692 37.1567 114.902 42.84C112.216 48.5233 110.872 54.8267 110.872 61.75C110.872 68.6733 112.216 74.9767 114.902 80.66C117.692 86.3433 121.516 90.8383 126.372 94.145C131.332 97.3483 136.964 98.95 143.267 98.95C149.467 98.95 155.047 97.2967 160.007 93.99C164.967 90.6833 168.842 86.24 171.632 80.66C174.422 74.9767 175.817 68.6733 175.817 61.75Z" stroke="white" strokeWidth="10" mask="url(#path-1-outside-1)" />
        <path d="M248.635 117.55C241.195 117.55 234.581 116.62 228.795 114.76C223.008 112.9 217.583 109.748 212.52 105.305C209.73 102.825 208.335 100.087 208.335 97.09C208.335 94.7133 209.213 92.6466 210.97 90.89C212.726 89.03 214.845 88.1 217.325 88.1C219.288 88.1 221.045 88.72 222.595 89.96C226.728 93.37 230.758 95.85 234.685 97.4C238.611 98.95 243.261 99.725 248.635 99.725C254.421 99.725 259.381 98.4333 263.515 95.85C267.751 93.2666 269.87 90.0633 269.87 86.24C269.87 81.59 267.803 77.9733 263.67 75.39C259.536 72.7033 252.975 70.6883 243.985 69.345C221.355 66.0383 210.04 55.4983 210.04 37.725C210.04 31.215 211.745 25.5833 215.155 20.83C218.565 15.9733 223.215 12.305 229.105 9.82498C234.995 7.24165 241.556 5.94998 248.79 5.94998C255.3 5.94998 261.396 6.93165 267.08 8.89498C272.866 10.8583 277.671 13.4416 281.495 16.645C284.491 19.0217 285.99 21.76 285.99 24.86C285.99 27.2367 285.111 29.355 283.355 31.215C281.598 32.9716 279.531 33.85 277.155 33.85C275.605 33.85 274.21 33.385 272.97 32.455C270.283 30.285 266.511 28.3217 261.655 26.565C256.901 24.705 252.613 23.775 248.79 23.775C242.28 23.775 237.216 25.015 233.6 27.495C230.086 29.8717 228.33 33.0233 228.33 36.95C228.33 41.3933 230.138 44.7517 233.755 47.025C237.475 49.2983 243.261 51.1583 251.115 52.605C260.001 54.155 267.08 56.17 272.35 58.65C277.723 61.0267 281.753 64.3333 284.44 68.57C287.126 72.7033 288.47 78.2317 288.47 85.155C288.47 91.665 286.61 97.4 282.89 102.36C279.273 107.217 274.416 110.988 268.32 113.675C262.223 116.258 255.661 117.55 248.635 117.55Z" stroke="white" strokeWidth="10" mask="url(#path-1-outside-1)" />
        <path d="M341.12 117.55C333.68 117.55 327.067 116.62 321.28 114.76C315.493 112.9 310.068 109.748 305.005 105.305C302.215 102.825 300.82 100.087 300.82 97.09C300.82 94.7133 301.698 92.6466 303.455 90.89C305.212 89.03 307.33 88.1 309.81 88.1C311.773 88.1 313.53 88.72 315.08 89.96C319.213 93.37 323.243 95.85 327.17 97.4C331.097 98.95 335.747 99.725 341.12 99.725C346.907 99.725 351.867 98.4333 356 95.85C360.237 93.2666 362.355 90.0633 362.355 86.24C362.355 81.59 360.288 77.9733 356.155 75.39C352.022 72.7033 345.46 70.6883 336.47 69.345C313.84 66.0383 302.525 55.4983 302.525 37.725C302.525 31.215 304.23 25.5833 307.64 20.83C311.05 15.9733 315.7 12.305 321.59 9.82498C327.48 7.24165 334.042 5.94998 341.275 5.94998C347.785 5.94998 353.882 6.93165 359.565 8.89498C365.352 10.8583 370.157 13.4416 373.98 16.645C376.977 19.0217 378.475 21.76 378.475 24.86C378.475 27.2367 377.597 29.355 375.84 31.215C374.083 32.9716 372.017 33.85 369.64 33.85C368.09 33.85 366.695 33.385 365.455 32.455C362.768 30.285 358.997 28.3217 354.14 26.565C349.387 24.705 345.098 23.775 341.275 23.775C334.765 23.775 329.702 25.015 326.085 27.495C322.572 29.8717 320.815 33.0233 320.815 36.95C320.815 41.3933 322.623 44.7517 326.24 47.025C329.96 49.2983 335.747 51.1583 343.6 52.605C352.487 54.155 359.565 56.17 364.835 58.65C370.208 61.0267 374.238 64.3333 376.925 68.57C379.612 72.7033 380.955 78.2317 380.955 85.155C380.955 91.665 379.095 97.4 375.375 102.36C371.758 107.217 366.902 110.988 360.805 113.675C354.708 116.258 348.147 117.55 341.12 117.55Z" stroke="white" strokeWidth="10" mask="url(#path-1-outside-1)" />
        <path d="M460.11 98.175C462.797 98.175 465.019 99.105 466.775 100.965C468.635 102.722 469.565 104.788 469.565 107.165C469.565 109.748 468.635 111.867 466.775 113.52C465.019 115.173 462.797 116 460.11 116H408.185C405.499 116 403.225 115.122 401.365 113.365C399.609 111.505 398.73 109.232 398.73 106.545V16.955C398.73 14.2683 399.609 12.0467 401.365 10.29C403.225 8.42998 405.499 7.49998 408.185 7.49998H460.11C462.797 7.49998 465.019 8.37831 466.775 10.135C468.635 11.7883 469.565 13.9583 469.565 16.645C469.565 19.2283 468.687 21.3466 466.93 23C465.174 24.55 462.9 25.325 460.11 25.325H418.105V51.675H453.135C455.822 51.675 458.044 52.5533 459.8 54.31C461.66 55.9633 462.59 58.1333 462.59 60.82C462.59 63.4033 461.712 65.5217 459.955 67.175C458.199 68.725 455.925 69.5 453.135 69.5H418.105V98.175H460.11Z" stroke="white" strokeWidth="10" mask="url(#path-1-outside-1)" />
        <path d="M606.824 12.77C610.027 14.4233 611.629 17.0583 611.629 20.675C611.629 22.845 610.854 24.9633 609.304 27.03C607.651 29.2 605.532 30.285 602.949 30.285C601.192 30.285 599.436 29.82 597.679 28.89C592.616 26.5133 587.139 25.325 581.249 25.325C574.016 25.325 567.712 26.875 562.339 29.975C556.966 32.9717 552.832 37.26 549.939 42.84C547.046 48.3167 545.599 54.62 545.599 61.75C545.599 73.9433 548.854 83.1916 555.364 89.495C561.977 95.7983 570.606 98.95 581.249 98.95C587.552 98.95 593.029 97.7616 597.679 95.385C599.539 94.5583 601.192 94.145 602.639 94.145C605.326 94.145 607.599 95.2816 609.459 97.555C611.009 99.5183 611.784 101.637 611.784 103.91C611.784 105.563 611.371 107.062 610.544 108.405C609.717 109.748 608.529 110.782 606.979 111.505C598.919 115.535 590.342 117.55 581.249 117.55C571.122 117.55 561.822 115.432 553.349 111.195C544.876 106.855 538.107 100.5 533.044 92.13C527.981 83.76 525.449 73.6333 525.449 61.75C525.449 51.21 527.826 41.755 532.579 33.385C537.436 25.015 544.101 18.505 552.574 13.855C561.047 9.10165 570.606 6.72498 581.249 6.72498C590.446 6.72498 598.971 8.73999 606.824 12.77Z" stroke="white" strokeWidth="10" mask="url(#path-1-outside-1)" />
        <path d="M727.872 61.75C727.872 71.98 725.598 81.3833 721.052 89.96C716.505 98.4333 710.202 105.15 702.142 110.11C694.185 115.07 685.195 117.55 675.172 117.55C665.148 117.55 656.107 115.07 648.047 110.11C640.09 105.15 633.838 98.4333 629.292 89.96C624.848 81.3833 622.627 71.98 622.627 61.75C622.627 51.52 624.848 42.1683 629.292 33.695C633.838 25.1183 640.09 18.35 648.047 13.39C656.107 8.42998 665.148 5.94998 675.172 5.94998C685.195 5.94998 694.185 8.42998 702.142 13.39C710.202 18.35 716.505 25.1183 721.052 33.695C725.598 42.1683 727.872 51.52 727.872 61.75ZM707.722 61.75C707.722 54.8267 706.327 48.575 703.537 42.995C700.747 37.3116 696.872 32.8167 691.912 29.51C686.952 26.2033 681.372 24.55 675.172 24.55C668.868 24.55 663.237 26.2033 658.277 29.51C653.42 32.7133 649.597 37.1567 646.807 42.84C644.12 48.5233 642.777 54.8267 642.777 61.75C642.777 68.6733 644.12 74.9767 646.807 80.66C649.597 86.3433 653.42 90.8383 658.277 94.145C663.237 97.3483 668.868 98.95 675.172 98.95C681.372 98.95 686.952 97.2967 691.912 93.99C696.872 90.6833 700.747 86.24 703.537 80.66C706.327 74.9767 707.722 68.6733 707.722 61.75Z" stroke="white" strokeWidth="10" mask="url(#path-1-outside-1)" />
        <path d="M813.937 7.49998C816.727 7.49998 819 8.32665 820.757 9.97998C822.513 11.6333 823.392 13.8033 823.392 16.49C823.392 19.1766 822.513 21.3466 820.757 23C819 24.55 816.727 25.325 813.937 25.325H789.602V106.545C789.602 109.232 788.62 111.505 786.657 113.365C784.693 115.122 782.265 116 779.372 116C776.478 116 774.102 115.122 772.242 113.365C770.382 111.505 769.452 109.232 769.452 106.545V25.325H745.117C742.327 25.325 740.053 24.4983 738.297 22.845C736.54 21.1916 735.662 19.0217 735.662 16.335C735.662 13.7517 736.54 11.6333 738.297 9.97998C740.157 8.32665 742.43 7.49998 745.117 7.49998H813.937Z" stroke="white" strokeWidth="10" mask="url(#path-1-outside-1)" />
        <path d="M915.655 7.49998C918.445 7.49998 920.719 8.32665 922.475 9.97998C924.232 11.6333 925.11 13.8033 925.11 16.49C925.11 19.1766 924.232 21.3466 922.475 23C920.719 24.55 918.445 25.325 915.655 25.325H891.32V106.545C891.32 109.232 890.339 111.505 888.375 113.365C886.412 115.122 883.984 116 881.09 116C878.197 116 875.82 115.122 873.96 113.365C872.1 111.505 871.17 109.232 871.17 106.545V25.325H846.835C844.045 25.325 841.772 24.4983 840.015 22.845C838.259 21.1916 837.38 19.0217 837.38 16.335C837.38 13.7517 838.259 11.6333 840.015 9.97998C841.875 8.32665 844.149 7.49998 846.835 7.49998H915.655Z" stroke="white" strokeWidth="10" mask="url(#path-1-outside-1)" />
        <path d="M1002.76 98.175C1005.45 98.175 1007.67 99.105 1009.43 100.965C1011.29 102.722 1012.22 104.788 1012.22 107.165C1012.22 109.748 1011.29 111.867 1009.43 113.52C1007.67 115.173 1005.45 116 1002.76 116H950.837C948.15 116 945.877 115.122 944.017 113.365C942.26 111.505 941.382 109.232 941.382 106.545V16.955C941.382 14.2683 942.26 12.0467 944.017 10.29C945.877 8.42998 948.15 7.49998 950.837 7.49998H1002.76C1005.45 7.49998 1007.67 8.37831 1009.43 10.135C1011.29 11.7883 1012.22 13.9583 1012.22 16.645C1012.22 19.2283 1011.34 21.3466 1009.58 23C1007.83 24.55 1005.55 25.325 1002.76 25.325H960.757V51.675H995.787C998.474 51.675 1000.7 52.5533 1002.45 54.31C1004.31 55.9633 1005.24 58.1333 1005.24 60.82C1005.24 63.4033 1004.36 65.5217 1002.61 67.175C1000.85 68.725 998.577 69.5 995.787 69.5H960.757V98.175H1002.76Z" stroke="white" strokeWidth="10" mask="url(#path-1-outside-1)" />
        <path d="M1112.39 7.49998C1114.87 7.49998 1116.88 8.32665 1118.43 9.97998C1119.98 11.6333 1120.76 13.7 1120.76 16.18V106.545C1120.76 109.232 1119.83 111.505 1117.97 113.365C1116.21 115.122 1113.99 116 1111.3 116C1109.86 116 1108.41 115.793 1106.96 115.38C1105.62 114.863 1104.64 114.192 1104.02 113.365L1047.13 41.135V107.32C1047.13 109.8 1046.31 111.867 1044.65 113.52C1043.1 115.173 1041.04 116 1038.45 116C1035.97 116 1033.96 115.173 1032.41 113.52C1030.86 111.867 1030.08 109.8 1030.08 107.32V16.955C1030.08 14.2683 1030.96 12.0467 1032.72 10.29C1034.58 8.42998 1036.85 7.49998 1039.54 7.49998C1041.09 7.49998 1042.59 7.80998 1044.03 8.42999C1045.58 9.04999 1046.72 9.87665 1047.44 10.91L1103.86 82.83V16.18C1103.86 13.7 1104.64 11.6333 1106.19 9.97998C1107.84 8.32665 1109.91 7.49998 1112.39 7.49998Z" stroke="white" strokeWidth="10" mask="url(#path-1-outside-1)" />
        <path d="M1163.44 106.545C1163.44 109.232 1162.46 111.505 1160.49 113.365C1158.53 115.122 1156.26 116 1153.67 116C1150.88 116 1148.56 115.122 1146.7 113.365C1144.94 111.505 1144.06 109.232 1144.06 106.545V16.955C1144.06 14.2683 1144.99 12.0467 1146.85 10.29C1148.71 8.42998 1151.09 7.49998 1153.98 7.49998C1156.57 7.49998 1158.79 8.42998 1160.65 10.29C1162.51 12.0467 1163.44 14.2683 1163.44 16.955V106.545Z" stroke="white" strokeWidth="10" mask="url(#path-1-outside-1)" />
        <path d="M1248.13 98.175C1250.81 98.175 1253.04 99.105 1254.79 100.965C1256.65 102.722 1257.58 104.788 1257.58 107.165C1257.58 109.748 1256.65 111.867 1254.79 113.52C1253.04 115.173 1250.81 116 1248.13 116H1196.2C1193.52 116 1191.24 115.122 1189.38 113.365C1187.63 111.505 1186.75 109.232 1186.75 106.545V16.955C1186.75 14.2683 1187.63 12.0467 1189.38 10.29C1191.24 8.42998 1193.52 7.49998 1196.2 7.49998H1248.13C1250.81 7.49998 1253.04 8.37831 1254.79 10.135C1256.65 11.7883 1257.58 13.9583 1257.58 16.645C1257.58 19.2283 1256.7 21.3466 1254.95 23C1253.19 24.55 1250.92 25.325 1248.13 25.325H1206.12V51.675H1241.15C1243.84 51.675 1246.06 52.5533 1247.82 54.31C1249.68 55.9633 1250.61 58.1333 1250.61 60.82C1250.61 63.4033 1249.73 65.5217 1247.97 67.175C1246.22 68.725 1243.94 69.5 1241.15 69.5H1206.12V98.175H1248.13Z" stroke="white" strokeWidth="10" mask="url(#path-1-outside-1)" />
        <path d="M1360.54 100.81C1361.89 101.637 1362.92 102.722 1363.64 104.065C1364.47 105.408 1364.88 106.803 1364.88 108.25C1364.88 110.11 1364.26 111.815 1363.02 113.365C1361.47 115.225 1359.1 116.155 1355.89 116.155C1353.41 116.155 1351.14 115.587 1349.07 114.45C1341.63 110.213 1337.91 101.585 1337.91 88.565C1337.91 84.845 1336.67 81.9 1334.19 79.73C1331.82 77.56 1328.36 76.475 1323.81 76.475H1294.82V106.545C1294.82 109.335 1294.05 111.608 1292.5 113.365C1291.05 115.122 1289.09 116 1286.61 116C1283.61 116 1280.98 115.122 1278.7 113.365C1276.53 111.505 1275.45 109.232 1275.45 106.545V16.955C1275.45 14.2683 1276.33 12.0467 1278.08 10.29C1279.94 8.42998 1282.22 7.49998 1284.9 7.49998H1329.54C1334.92 7.49998 1339.98 8.94665 1344.73 11.84C1349.49 14.7333 1353.26 18.7116 1356.05 23.775C1358.94 28.8383 1360.39 34.5217 1360.39 40.825C1360.39 45.9917 1358.99 51.055 1356.2 56.015C1353.41 60.8717 1349.8 64.7467 1345.35 67.64C1351.86 72.1867 1355.43 78.2833 1356.05 85.93C1356.36 87.5833 1356.51 89.185 1356.51 90.735C1356.93 93.9383 1357.34 96.2633 1357.75 97.71C1358.17 99.0533 1359.1 100.087 1360.54 100.81ZM1328.77 60.51C1330.63 60.51 1332.44 59.6316 1334.19 57.875C1335.95 56.1183 1337.4 53.7933 1338.53 50.9C1339.67 47.9033 1340.24 44.7 1340.24 41.29C1340.24 38.3966 1339.67 35.7616 1338.53 33.385C1337.4 30.905 1335.95 28.9417 1334.19 27.495C1332.44 26.0483 1330.63 25.325 1328.77 25.325H1294.82V60.51H1328.77Z" stroke="white" strokeWidth="10" mask="url(#path-1-outside-1)" />
    </svg>
);

const Title = () => {
    return (
        svg
    );
}

export default Title;