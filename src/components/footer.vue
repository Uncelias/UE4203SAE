<template>
  <div
    class="w-[375px] h-[769px] relative overflow-hidden bg-white"
    style="box-shadow: 0px 4px 200px 0 rgba(232, 249, 247, 0.2)"
  >
    <div
      class="
        flex flex-col
        justify-start
        items-center
        absolute
        left-[23px]
        top-[649px]
        gap-6
      "
    >
      <p
        class="
          flex-grow-0 flex-shrink-0
          w-[327px]
          opacity-50
          text-base text-center text-gray-900
        "
      >
        ©2021 Estatery. All rights reserved
      </p>
      <div
        class="
          flex
          justify-start
          items-start
          flex-grow-0 flex-shrink-0
          relative
          opacity-30
          gap-10
        "
      >
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
          preserveAspectRatio="none"
        >
          <path
            d="M16.01 5.32003H17.89V2.14003C16.9798 2.04538 16.0652 1.99865 15.15 2.00003C12.43 2.00003 10.57 3.66003 10.57 6.70003V9.32003H7.5V12.88H10.57V22H14.25V12.88H17.31L17.77 9.32003H14.25V7.05003C14.25 6.00003 14.53 5.32003 16.01 5.32003Z"
            fill="#111827"
          ></path></svg
        ><svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
          preserveAspectRatio="none"
        >
          <path
            d="M17.84 5.46C17.6027 5.46 17.3707 5.53038 17.1733 5.66224C16.976 5.79409 16.8222 5.98151 16.7313 6.20078C16.6405 6.42005 16.6168 6.66133 16.6631 6.89411C16.7094 7.12689 16.8236 7.34071 16.9915 7.50853C17.1593 7.67635 17.3731 7.79064 17.6059 7.83694C17.8387 7.88324 18.0799 7.85948 18.2992 7.76866C18.5185 7.67783 18.7059 7.52402 18.8378 7.32668C18.9696 7.12935 19.04 6.89734 19.04 6.66C19.04 6.34174 18.9136 6.03652 18.6885 5.81147C18.4635 5.58643 18.1583 5.46 17.84 5.46ZM22.44 7.88C22.4206 7.0503 22.2652 6.2294 21.98 5.45C21.7257 4.78313 21.33 4.17928 20.82 3.68C20.3248 3.16743 19.7196 2.77418 19.05 2.53C18.2727 2.23616 17.4508 2.07721 16.62 2.06C15.56 2 15.22 2 12.5 2C9.78 2 9.44 2 8.38 2.06C7.54915 2.07721 6.72734 2.23616 5.95 2.53C5.28168 2.77665 4.67693 3.16956 4.18 3.68C3.66743 4.17518 3.27418 4.78044 3.03 5.45C2.73616 6.22734 2.57721 7.04915 2.56 7.88C2.5 8.94 2.5 9.28 2.5 12C2.5 14.72 2.5 15.06 2.56 16.12C2.57721 16.9508 2.73616 17.7727 3.03 18.55C3.27418 19.2196 3.66743 19.8248 4.18 20.32C4.67693 20.8304 5.28168 21.2234 5.95 21.47C6.72734 21.7638 7.54915 21.9228 8.38 21.94C9.44 22 9.78 22 12.5 22C15.22 22 15.56 22 16.62 21.94C17.4508 21.9228 18.2727 21.7638 19.05 21.47C19.7196 21.2258 20.3248 20.8326 20.82 20.32C21.3322 19.8226 21.7283 19.2182 21.98 18.55C22.2652 17.7706 22.4206 16.9497 22.44 16.12C22.44 15.06 22.5 14.72 22.5 12C22.5 9.28 22.5 8.94 22.44 7.88ZM20.64 16C20.6327 16.6348 20.5178 17.2637 20.3 17.86C20.1403 18.2952 19.8839 18.6884 19.55 19.01C19.2256 19.3405 18.8332 19.5964 18.4 19.76C17.8037 19.9778 17.1748 20.0927 16.54 20.1C15.54 20.15 15.17 20.16 12.54 20.16C9.91 20.16 9.54 20.16 8.54 20.1C7.88089 20.1123 7.22459 20.0109 6.6 19.8C6.18578 19.6281 5.81136 19.3728 5.5 19.05C5.16809 18.7287 4.91484 18.3352 4.76 17.9C4.51586 17.2952 4.38044 16.6519 4.36 16C4.36 15 4.3 14.63 4.3 12C4.3 9.37 4.3 9 4.36 8C4.36448 7.35106 4.48295 6.70795 4.71 6.1C4.88605 5.67791 5.15627 5.30166 5.5 5C5.80381 4.65617 6.17929 4.3831 6.6 4.2C7.20955 3.98004 7.852 3.86508 8.5 3.86C9.5 3.86 9.87 3.8 12.5 3.8C15.13 3.8 15.5 3.8 16.5 3.86C17.1348 3.86728 17.7637 3.98225 18.36 4.2C18.8144 4.36865 19.2223 4.64285 19.55 5C19.8777 5.30718 20.1338 5.68273 20.3 6.1C20.5223 6.70893 20.6373 7.35178 20.64 8C20.69 9 20.7 9.37 20.7 12C20.7 14.63 20.69 15 20.64 16ZM12.5 6.87C11.4858 6.87198 10.495 7.17453 9.65265 7.73942C8.81035 8.30431 8.15438 9.1062 7.76763 10.0438C7.38089 10.9813 7.28072 12.0125 7.47979 13.0069C7.67886 14.0014 8.16824 14.9145 8.88608 15.631C9.60392 16.3474 10.518 16.835 11.5129 17.0321C12.5077 17.2293 13.5387 17.1271 14.4755 16.7385C15.4123 16.35 16.2129 15.6924 16.7761 14.849C17.3394 14.0056 17.64 13.0142 17.64 12C17.6413 11.3251 17.5092 10.6566 17.2512 10.033C16.9933 9.40931 16.6146 8.84281 16.1369 8.36605C15.6592 7.88929 15.0919 7.51168 14.4678 7.25493C13.8436 6.99818 13.1749 6.86736 12.5 6.87ZM12.5 15.33C11.8414 15.33 11.1976 15.1347 10.65 14.7688C10.1023 14.4029 9.67552 13.8828 9.42348 13.2743C9.17144 12.6659 9.1055 11.9963 9.23398 11.3503C9.36247 10.7044 9.67963 10.111 10.1453 9.64533C10.611 9.17963 11.2044 8.86247 11.8503 8.73398C12.4963 8.6055 13.1659 8.67144 13.7743 8.92348C14.3828 9.17552 14.9029 9.60234 15.2688 10.15C15.6347 10.6976 15.83 11.3414 15.83 12C15.83 12.4373 15.7439 12.8703 15.5765 13.2743C15.4092 13.6784 15.1639 14.0454 14.8547 14.3547C14.5454 14.6639 14.1784 14.9092 13.7743 15.0765C13.3703 15.2439 12.9373 15.33 12.5 15.33Z"
            fill="#111827"
          ></path></svg
        ><svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
          preserveAspectRatio="none"
        >
          <path
            d="M22.5 5.9506C21.7483 6.2767 20.9534 6.49226 20.14 6.5906C20.9982 6.07792 21.6413 5.27138 21.95 4.3206C21.1436 4.80066 20.2608 5.1389 19.34 5.3206C18.7245 4.65317 17.905 4.2089 17.0098 4.05745C16.1147 3.90601 15.1945 4.05596 14.3938 4.48379C13.593 4.91162 12.9569 5.59313 12.5852 6.42144C12.2135 7.24974 12.1273 8.17799 12.34 9.0606C10.7094 8.97813 9.11444 8.55355 7.65865 7.81446C6.20287 7.07537 4.91885 6.03829 3.89 4.7706C3.52914 5.40077 3.33952 6.11442 3.34 6.8406C3.33872 7.51498 3.50422 8.17922 3.82176 8.77416C4.13929 9.36911 4.59902 9.87631 5.16 10.2506C4.50798 10.2329 3.86989 10.0579 3.3 9.7406V9.7906C3.30489 10.7355 3.63599 11.6497 4.23731 12.3786C4.83864 13.1074 5.67326 13.6062 6.6 13.7906C6.24326 13.8992 5.87287 13.9564 5.5 13.9606C5.24189 13.9576 4.98442 13.9342 4.73 13.8906C4.99391 14.7034 5.50462 15.4137 6.19107 15.9228C6.87753 16.4318 7.70558 16.7142 8.56 16.7306C7.1172 17.8659 5.33588 18.4855 3.5 18.4906C3.16574 18.4917 2.83174 18.4717 2.5 18.4306C4.37443 19.6409 6.55881 20.2833 8.79 20.2806C10.3297 20.2966 11.8571 20.0056 13.2831 19.4247C14.7091 18.8437 16.005 17.9845 17.0952 16.8971C18.1854 15.8097 19.048 14.516 19.6326 13.0915C20.2172 11.667 20.512 10.1403 20.5 8.6006C20.5 8.4306 20.5 8.2506 20.5 8.0706C21.2847 7.48541 21.9615 6.76803 22.5 5.9506Z"
            fill="#111827"
          ></path></svg
        ><svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
          preserveAspectRatio="none"
        >
          <path
            d="M20.91 2.00014H3.97C3.77958 1.9975 3.5905 2.03239 3.41357 2.10282C3.23663 2.17326 3.0753 2.27786 2.9388 2.41065C2.80229 2.54344 2.69328 2.70182 2.61799 2.87675C2.5427 3.05167 2.50261 3.23972 2.5 3.43014V20.5701C2.50261 20.7606 2.5427 20.9486 2.61799 21.1235C2.69328 21.2985 2.80229 21.4568 2.9388 21.5896C3.0753 21.7224 3.23663 21.827 3.41357 21.8975C3.5905 21.9679 3.77958 22.0028 3.97 22.0001H20.91C21.1004 22.0028 21.2895 21.9679 21.4664 21.8975C21.6434 21.827 21.8047 21.7224 21.9412 21.5896C22.0777 21.4568 22.1867 21.2985 22.262 21.1235C22.3373 20.9486 22.3774 20.7606 22.38 20.5701V3.43014C22.3774 3.23972 22.3373 3.05167 22.262 2.87675C22.1867 2.70182 22.0777 2.54344 21.9412 2.41065C21.8047 2.27786 21.6434 2.17326 21.4664 2.10282C21.2895 2.03239 21.1004 1.9975 20.91 2.00014ZM8.53 18.7401H5.53V9.74014H8.53V18.7401ZM7.03 8.48014C6.61626 8.48014 6.21947 8.31578 5.92691 8.02323C5.63436 7.73067 5.47 7.33388 5.47 6.92014C5.47 6.5064 5.63436 6.10961 5.92691 5.81705C6.21947 5.5245 6.61626 5.36014 7.03 5.36014C7.2497 5.33522 7.47218 5.35699 7.68288 5.42402C7.89357 5.49105 8.08774 5.60183 8.25266 5.7491C8.41757 5.89637 8.54953 6.07682 8.63987 6.27862C8.73022 6.48043 8.77692 6.69904 8.77692 6.92014C8.77692 7.14124 8.73022 7.35985 8.63987 7.56166C8.54953 7.76346 8.41757 7.94391 8.25266 8.09118C8.08774 8.23845 7.89357 8.34923 7.68288 8.41626C7.47218 8.48329 7.2497 8.50505 7.03 8.48014ZM19.35 18.7401H16.35V13.9101C16.35 12.7001 15.92 11.9101 14.83 11.9101C14.4927 11.9126 14.1642 12.0184 13.8888 12.2133C13.6135 12.4082 13.4045 12.6828 13.29 13.0001C13.2117 13.2352 13.1778 13.4827 13.19 13.7301V18.7301H10.19C10.19 18.7301 10.19 10.5501 10.19 9.73014H13.19V11.0001C13.4625 10.5272 13.8589 10.1377 14.3364 9.87334C14.814 9.60902 15.3546 9.47999 15.9 9.50014C17.9 9.50014 19.35 10.7901 19.35 13.5601V18.7401Z"
            fill="#111827"
          ></path>
        </svg>
      </div>
    </div>
    <svg
      width="375"
      height="2"
      viewBox="0 0 375 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="absolute left-[-1.25px] top-[616.75px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <line
        y1="1.25"
        x2="375"
        y2="1.25"
        stroke="#E0E7FF"
        stroke-width="1.5"
      ></line>
    </svg>
    <div
      class="
        flex
        justify-start
        items-start
        w-[343px]
        absolute
        left-[15px]
        top-[135px]
        gap-8
      "
    >
      <div
        class="flex flex-col justify-start items-start flex-grow relative gap-8"
      >
        <div class="flex-grow-0 flex-shrink-0 w-[156px] h-[116px]">
          <p
            class="
              w-[156px]
              absolute
              left-0
              top-9
              opacity-70
              text-sm text-left text-gray-500
            "
          >
            <span class="w-[156px] opacity-70 text-sm text-left text-gray-500"
              >Request an offer</span
            ><br /><span
              class="w-[156px] opacity-70 text-sm text-left text-gray-500"
              >Pricing</span
            ><br /><span
              class="w-[156px] opacity-70 text-sm text-left text-gray-500"
              >Reviews</span
            ><br /><span
              class="w-[156px] opacity-70 text-sm text-left text-gray-500"
              >Stories</span
            >
          </p>
          <p
            class="
              absolute
              left-0
              top-0
              text-sm
              font-bold
              text-left text-gray-900
            "
          >
            SELL A HOME
          </p>
        </div>
        <div class="flex-grow-0 flex-shrink-0 w-[156px] h-[76px]">
          <p
            class="
              w-[156px]
              absolute
              left-0
              top-[184px]
              opacity-70
              text-sm text-left text-gray-500
            "
          >
            <span class="w-[156px] opacity-70 text-sm text-left text-gray-500"
              >Buy</span
            ><br /><span
              class="w-[156px] opacity-70 text-sm text-left text-gray-500"
              >Finance</span
            >
          </p>
          <p
            class="
              absolute
              left-0
              top-[148px]
              text-sm
              font-bold
              text-left text-gray-900
            "
          >
            BUY A HOME
          </p>
        </div>
        <div class="flex-grow-0 flex-shrink-0 w-[156px] h-24">
          <p
            class="
              w-[156px]
              absolute
              left-0
              top-[292px]
              opacity-70
              text-sm text-left text-gray-500
            "
          >
            <span class="w-[156px] opacity-70 text-sm text-left text-gray-500"
              >Buy &#x26; sell properties</span
            ><br /><span
              class="w-[156px] opacity-70 text-sm text-left text-gray-500"
              >Rent home</span
            ><br /><span
              class="w-[156px] opacity-70 text-sm text-left text-gray-500"
              >Builder trade-up</span
            >
          </p>
          <p
            class="
              absolute
              left-0
              top-64
              text-sm
              font-bold
              text-left text-gray-900
            "
          >
            BUY, RENT AND SELL
          </p>
        </div>
      </div>
      <div
        class="flex flex-col justify-start items-start flex-grow relative gap-8"
      >
        <div class="flex-grow-0 flex-shrink-0 w-[155px] h-24">
          <p
            class="
              w-[155px]
              absolute
              left-0
              top-9
              opacity-70
              text-sm text-left text-gray-500
            "
          >
            <span class="w-[155px] opacity-70 text-sm text-left text-gray-500"
              >Trust &#x26; Safety</span
            ><br /><span
              class="w-[155px] opacity-70 text-sm text-left text-gray-500"
              >Terms of Service</span
            ><br /><span
              class="w-[155px] opacity-70 text-sm text-left text-gray-500"
              >Privacy Policy</span
            >
          </p>
          <p
            class="
              absolute
              left-0
              top-0
              text-sm
              font-bold
              text-left text-gray-900
            "
          >
            TERMS &#x26; PRIVACY
          </p>
        </div>
        <div class="flex-grow-0 flex-shrink-0 w-[155px] h-[116px]">
          <p
            class="
              w-[155px]
              absolute
              left-0
              top-[164px]
              opacity-70
              text-sm text-left text-gray-500
            "
          >
            <span class="w-[155px] opacity-70 text-sm text-left text-gray-500"
              >Company</span
            ><br /><span
              class="w-[155px] opacity-70 text-sm text-left text-gray-500"
              >How it works</span
            ><br /><span
              class="w-[155px] opacity-70 text-sm text-left text-gray-500"
              >Contact</span
            ><br /><span
              class="w-[155px] opacity-70 text-sm text-left text-gray-500"
              >Investors</span
            >
          </p>
          <p
            class="
              absolute
              left-0
              top-32
              text-sm
              font-bold
              text-left text-gray-900
            "
          >
            ABOUT
          </p>
        </div>
        <div class="flex-grow-0 flex-shrink-0 w-[155px] h-[116px]">
          <p
            class="
              w-[155px]
              absolute
              left-0
              top-[312px]
              opacity-70
              text-sm text-left text-gray-500
            "
          >
            <span class="w-[155px] opacity-70 text-sm text-left text-gray-500"
              >Blog</span
            ><br /><span
              class="w-[155px] opacity-70 text-sm text-left text-gray-500"
              >Guides</span
            ><br /><span
              class="w-[155px] opacity-70 text-sm text-left text-gray-500"
              >FAQ</span
            ><br /><span
              class="w-[155px] opacity-70 text-sm text-left text-gray-500"
              >Help Center</span
            >
          </p>
          <p
            class="
              absolute
              left-0
              top-[276px]
              text-sm
              font-bold
              text-left text-gray-900
            "
          >
            RESOURCES
          </p>
        </div>
      </div>
    </div>
    <div class="w-[151px] h-10 absolute left-[23px] top-[47px] overflow-hidden">
      <p
        class="
          absolute
          left-11
          top-[9px]
          text-xl
          font-bold
          text-left text-gray-900
        "
      >
        Estatery
      </p>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="w-8 h-8 absolute left-[7px] top-[3px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M25.3335 11.6137L18.2229 6.08301C17.5989 5.59755 16.8308 5.33398 16.0402 5.33398C15.2496 5.33398 14.4816 5.59755 13.8575 6.08301L6.74554 11.6137C6.31813 11.9461 5.97233 12.3717 5.73454 12.8581C5.49676 13.3446 5.37328 13.8789 5.37354 14.4203V24.0203C5.37354 24.7276 5.65449 25.4059 6.15458 25.906C6.65468 26.4061 7.33296 26.687 8.0402 26.687H24.0402C24.7474 26.687 25.4257 26.4061 25.9258 25.906C26.4259 25.4059 26.7069 24.7276 26.7069 24.0203V14.4203C26.7069 13.323 26.2002 12.287 25.3335 11.6137Z"
          fill="#6366F1"
          stroke="#6366F1"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M21.3332 20C18.3865 21.7773 13.6105 21.7773 10.6665 20"
          stroke="white"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </div>
  </div>
</template>