import { cn } from "../util/cn.ts";

const Logo = ({
  className,
  classNameText,
}: {
  className?: string;
  classNameText?: string;
}) => {
  return (
    <div className={cn("flex items-center gap-x-1", className)}>
      <svg
        width="24"
        height="19"
        viewBox="0 0 24 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.4723 10.6755C11.627 10.6887 11.7871 10.643 11.9152 10.5357L19.7152 1.2505C19.7797 1.17374 19.8066 1.07792 19.7983 0.985519C19.79 0.893119 19.7462 0.803896 19.669 0.739607C19.6035 0.685096 19.5208 0.655274 19.4355 0.655274H3.54223C3.44568 0.655091 3.35301 0.69325 3.28459 0.761363C3.21859 0.826874 3.17776 0.917563 3.17776 1.01779C3.17782 1.10338 3.20822 1.18618 3.26356 1.25147L11.0596 10.4626C11.111 10.5235 11.1739 10.5736 11.2448 10.6102C11.3156 10.6467 11.3929 10.6689 11.4723 10.6755Z"
          fill="#BEEE62"
        />
        <path
          d="M8.60469 11.8463C8.59818 11.926 8.57602 12.0037 8.53949 12.0748C8.50296 12.1459 8.45276 12.2092 8.39178 12.2609L0.66587 18.3862C0.628146 18.4161 0.584898 18.4383 0.538594 18.4515C0.492291 18.4647 0.443838 18.4687 0.396003 18.4632C0.30287 18.4524 0.213647 18.406 0.150825 18.3268C0.0994009 18.262 0.0714029 18.1817 0.0713807 18.099V2.47946C0.0713588 2.4313 0.0808246 2.38361 0.0992372 2.33911C0.11765 2.29461 0.144649 2.25417 0.178692 2.22011C0.212676 2.18595 0.253098 2.15888 0.297617 2.14046C0.342137 2.12204 0.389868 2.11264 0.438047 2.11279C0.491329 2.1128 0.543971 2.12441 0.592308 2.14682C0.640645 2.16924 0.683516 2.20192 0.717936 2.24259L8.46218 11.4007C8.51411 11.4619 8.55342 11.5328 8.57783 11.6093C8.60225 11.6858 8.61154 11.7663 8.60469 11.8463ZM14.4958 11.8463C14.5023 11.926 14.5245 12.0037 14.561 12.0748C14.5975 12.1459 14.6477 12.2092 14.7087 12.2609L22.4346 18.3862C22.4723 18.4161 22.5156 18.4383 22.5619 18.4515C22.6082 18.4647 22.6567 18.4687 22.7045 18.4632C22.7976 18.4524 22.8868 18.406 22.9497 18.3268C23.0011 18.262 23.0291 18.1817 23.0291 18.099V2.47946C23.0291 2.4313 23.0197 2.38361 23.0013 2.33911C22.9828 2.29461 22.9558 2.25417 22.9218 2.22011C22.8878 2.18595 22.8474 2.15888 22.8029 2.14046C22.7584 2.12204 22.7106 2.11264 22.6624 2.11279C22.6092 2.1128 22.5565 2.12441 22.5082 2.14682C22.4599 2.16924 22.417 2.20192 22.3826 2.24259L14.6381 11.4007C14.5861 11.4619 14.5468 11.5328 14.5224 11.6093C14.498 11.6858 14.489 11.7663 14.4958 11.8463Z"
          fill="#68CEC7"
        />
      </svg>
      <div className="pb-[.313rem]">
        <svg
          width="133"
          height="22"
          viewBox="0 0 133 22"
          xmlns="http://www.w3.org/2000/svg"
          className={cn(
            "fill-current text-light-white dark:text-dark-white",
            classNameText,
          )}
        >
          <path
            d="M13.1302 20.8153C13.1302 20.9546 13.0806 21.0639 12.9811 21.1435C12.8816 21.2232 12.7249 21.2802 12.511 21.3152C12.2971 21.3501 11.9813 21.3675 11.5635 21.3675C11.116 21.3675 10.7901 21.3501 10.5862 21.3152C10.3824 21.2802 10.2382 21.2232 10.1536 21.1435C10.069 21.0639 10.0267 20.9546 10.0267 20.8153V19.7561C9.47965 20.343 8.85558 20.8004 8.15427 21.1286C7.45296 21.4569 6.67465 21.6209 5.81933 21.6209C5.11314 21.6209 4.46414 21.529 3.87234 21.345C3.28054 21.1609 2.76818 20.8874 2.33551 20.5244C1.90285 20.1614 1.56722 19.7113 1.3284 19.1741C1.08958 18.6368 0.970291 18.0103 0.970291 17.2943C0.970291 16.5184 1.12209 15.8445 1.42545 15.2727C1.7288 14.701 2.18127 14.2285 2.78309 13.8554C3.38491 13.4824 4.1334 13.2064 5.02856 13.0275C5.92371 12.8486 6.96309 12.7589 8.14669 12.7589H9.44469V11.9532C9.44469 11.5354 9.4024 11.17 9.31782 10.8566C9.23324 10.5432 9.09391 10.2822 8.90007 10.0734C8.70622 9.86464 8.4476 9.71039 8.1242 9.61091C7.8008 9.51142 7.40065 9.46179 6.92325 9.46179C6.29674 9.46179 5.7372 9.53146 5.24489 9.67055C4.75258 9.80964 4.31747 9.96388 3.93931 10.133C3.56116 10.3022 3.24558 10.4562 2.99185 10.5955C2.73811 10.7349 2.5318 10.8043 2.37267 10.8043C2.26635 10.8054 2.16315 10.7683 2.08178 10.6999C1.9972 10.6302 1.92754 10.5307 1.87302 10.4014C1.81851 10.2721 1.77598 10.113 1.74616 9.92404C1.71634 9.73508 1.70142 9.52608 1.70142 9.29753C1.70142 8.98928 1.72636 8.74557 1.77598 8.56639C1.8256 8.38722 1.9202 8.22564 2.05954 8.08142C2.19887 7.93719 2.44258 7.77806 2.79067 7.60402C3.13876 7.42997 3.54649 7.26839 4.01411 7.11904C4.48174 6.96968 4.9914 6.84795 5.54336 6.75359C6.09531 6.65924 6.66487 6.61182 7.25178 6.61182C8.29605 6.61182 9.18876 6.71375 9.92991 6.91762C10.6711 7.12148 11.2802 7.43486 11.7576 7.85751C12.235 8.28015 12.5831 8.82477 12.8019 9.49113C13.0207 10.1575 13.1302 10.9483 13.1302 11.8635V20.8153ZM9.44493 15.116H8.01274C7.40603 15.116 6.88878 15.1608 6.461 15.2502C6.03322 15.3397 5.68513 15.4741 5.41673 15.6531C5.14833 15.832 4.9518 16.0483 4.82738 16.3021C4.70296 16.5558 4.64087 16.8467 4.64087 17.175C4.64087 17.7321 4.81736 18.1696 5.17058 18.4879C5.5238 18.8062 6.01342 18.9653 6.64018 18.9653C7.16745 18.9653 7.65218 18.8311 8.09487 18.5625C8.53756 18.2938 8.98758 17.901 9.44518 17.3837V15.116H9.44493Z"
            fill="currentColor"
          />
          <path
            d="M29.5864 20.7705C29.588 20.8653 29.5564 20.9577 29.497 21.0316C29.4373 21.1062 29.3378 21.1683 29.1985 21.2181C29.0592 21.268 28.8678 21.3051 28.624 21.3301C28.3803 21.355 28.0794 21.3675 27.7213 21.3675C27.3532 21.3675 27.0474 21.355 26.8037 21.3301C26.56 21.3051 26.3686 21.268 26.2292 21.2181C26.0899 21.1683 25.9904 21.1062 25.9308 21.0316C25.8714 20.9577 25.8397 20.8653 25.8413 20.7705V13.1764C25.8413 12.5298 25.7941 12.0226 25.6995 11.6545C25.6049 11.2863 25.4683 10.9708 25.2893 10.707C25.1104 10.4433 24.8792 10.2396 24.5956 10.0954C24.312 9.95119 23.9813 9.87908 23.6034 9.87908C23.126 9.87908 22.6435 10.0531 22.1563 10.4012C21.6691 10.7493 21.1616 11.2565 20.6344 11.9231V20.7705C20.636 20.8653 20.6043 20.9577 20.5449 21.0316C20.4853 21.1062 20.3833 21.1683 20.2391 21.2181C20.0949 21.268 19.9035 21.3051 19.6647 21.3301C19.4258 21.355 19.1225 21.3675 18.7546 21.3675C18.3867 21.3675 18.0831 21.355 17.8445 21.3301C17.606 21.3051 17.4143 21.268 17.2701 21.2181C17.1259 21.1683 17.0239 21.1062 16.9643 21.0316C16.9049 20.9577 16.8732 20.8653 16.8748 20.7705V7.46201C16.8728 7.36947 16.8988 7.27847 16.9494 7.20094C16.999 7.12639 17.0887 7.0643 17.218 7.01443C17.3473 6.96457 17.514 6.92741 17.7179 6.90248C17.9218 6.87754 18.178 6.86508 18.4862 6.86508L19.277 6.90248C19.4857 6.92741 19.6476 6.96457 19.762 7.01443C19.8764 7.0643 19.9585 7.12639 20.0081 7.20094C20.0587 7.27847 20.0847 7.36947 20.0827 7.46201V8.99883C20.8187 8.20317 21.5672 7.60623 22.3281 7.20852C23.0891 6.81081 23.8823 6.61183 24.7078 6.61183C25.613 6.61183 26.3764 6.76094 26.998 7.05941C27.6196 7.35788 28.122 7.76317 28.505 8.27528C28.888 8.78739 29.164 9.38677 29.3329 10.0732C29.5018 10.7596 29.5867 11.5851 29.5867 12.5499L29.5864 20.7705ZM42.6412 17.0107C42.6412 17.7666 42.4994 18.4332 42.2159 19.0101C41.9323 19.5869 41.5322 20.0692 41.0149 20.4572C40.4977 20.8451 39.8861 21.136 39.1799 21.3301C38.4737 21.5242 37.7078 21.621 36.8824 21.621C36.3849 21.621 35.9102 21.5836 35.4575 21.509C35.0048 21.4345 34.5995 21.3399 34.2416 21.2255C33.8838 21.1111 33.585 20.9942 33.3465 20.8749C33.1079 20.7556 32.9336 20.6437 32.8243 20.5393C32.7151 20.4349 32.6305 20.2707 32.5706 20.047C32.5107 19.8233 32.4811 19.4926 32.4811 19.0548L32.511 18.3611C32.5308 18.187 32.5606 18.0477 32.6004 17.9433C32.6403 17.8389 32.6899 17.7693 32.7495 17.7345C32.8092 17.6998 32.8837 17.6822 32.9734 17.6822C33.083 17.6822 33.2445 17.7443 33.4584 17.8687C33.6723 17.9932 33.9383 18.1298 34.2565 18.2789C34.5748 18.428 34.9454 18.5674 35.368 18.6967C35.7907 18.826 36.2708 18.8905 36.8078 18.8905C37.1459 18.8905 37.4468 18.8558 37.7105 18.7861C37.9743 18.7165 38.2028 18.617 38.3969 18.4877C38.591 18.3584 38.7377 18.1943 38.8372 17.9954C38.9367 17.7964 38.9863 17.5676 38.9863 17.309C38.9863 17.0105 38.8944 16.7546 38.7103 16.5407C38.5262 16.3268 38.2825 16.1403 37.9792 15.9811C37.6758 15.822 37.3326 15.6729 36.9498 15.5336L35.7711 15.0711C35.3668 14.9013 34.9731 14.707 34.5924 14.4893C34.2118 14.2724 33.8651 14.0009 33.563 13.6836C33.2597 13.3653 33.016 12.9823 32.8319 12.5347C32.6478 12.0871 32.5559 11.5501 32.5559 10.9233C32.5559 10.2868 32.6804 9.70234 32.929 9.17019C33.1776 8.63803 33.5357 8.18312 34.0033 7.80497C34.4709 7.42681 35.0402 7.13348 35.7117 6.92472C36.3832 6.71597 37.1366 6.61134 37.9721 6.61134C38.3791 6.61055 38.7855 6.64045 39.188 6.70081C39.5808 6.76046 39.9364 6.83501 40.2547 6.92472C40.573 7.01443 40.8416 7.11123 41.0604 7.21561C41.2792 7.31999 41.4359 7.40946 41.5305 7.48426C41.6251 7.55906 41.692 7.63337 41.7319 7.70817C41.7717 7.78297 41.8016 7.87219 41.8214 7.97681C41.8412 8.08143 41.8588 8.2105 41.8737 8.36474C41.8886 8.51899 41.8962 8.71039 41.8962 8.93919L41.8737 9.59577C41.8588 9.76492 41.8338 9.89912 41.7991 9.99861C41.7644 10.0981 41.717 10.1653 41.6573 10.2C41.5977 10.2347 41.528 10.2523 41.4486 10.2523C41.3591 10.2523 41.2198 10.2 41.0308 10.0957C40.8419 9.99128 40.6055 9.87932 40.3222 9.76003C40.0389 9.64074 39.7106 9.52879 39.3376 9.42441C38.9645 9.32003 38.5395 9.26772 38.0618 9.26772C37.7237 9.26772 37.4302 9.30243 37.1816 9.3721C36.933 9.44177 36.7291 9.54125 36.57 9.67057C36.4108 9.79988 36.2915 9.95143 36.2118 10.1257C36.132 10.3014 36.0913 10.4923 36.0926 10.6853C36.0926 10.9935 36.1872 11.2521 36.3761 11.4611C36.5651 11.6701 36.8137 11.8539 37.1222 12.0131C37.4306 12.1722 37.7812 12.3213 38.174 12.4607L39.3676 12.9158C39.7768 13.083 40.1754 13.2748 40.5612 13.4903C40.9496 13.7056 41.304 13.9771 41.6131 14.2959C41.9213 14.6142 42.1702 14.9946 42.3591 15.4373C42.5481 15.8799 42.6427 16.4045 42.6427 17.0112L42.6412 17.0107Z"
            fill="currentColor"
          />
          <path
            d="M56.8002 20.8153C56.8002 20.9546 56.7506 21.0639 56.6511 21.1435C56.5516 21.2232 56.3949 21.2802 56.181 21.3152C55.9671 21.3501 55.6513 21.3675 55.2335 21.3675C54.786 21.3675 54.4601 21.3501 54.2563 21.3152C54.0524 21.2802 53.9082 21.2232 53.8236 21.1435C53.739 21.0639 53.6967 20.9546 53.6967 20.8153V19.7561C53.1497 20.343 52.5256 20.8004 51.8243 21.1286C51.123 21.4569 50.3447 21.6209 49.4893 21.6209C48.7831 21.6209 48.1341 21.529 47.5423 21.345C46.9505 21.1609 46.4382 20.8874 46.0055 20.5244C45.5729 20.1614 45.2372 19.7113 44.9984 19.1741C44.7596 18.6368 44.6403 18.0103 44.6403 17.2943C44.6403 16.5184 44.7921 15.8445 45.0955 15.2727C45.3988 14.701 45.8513 14.2285 46.4531 13.8554C47.0549 13.4824 47.8034 13.2064 48.6986 13.0275C49.5937 12.8486 50.6331 12.7589 51.8167 12.7589H53.1147V11.9532C53.1147 11.5354 53.0724 11.17 52.9878 10.8566C52.9033 10.5432 52.7639 10.2822 52.5701 10.0734C52.3762 9.86464 52.1176 9.71039 51.7942 9.61091C51.4708 9.51142 51.0707 9.46179 50.5933 9.46179C49.9667 9.46179 49.4072 9.53146 48.9149 9.67055C48.4226 9.80964 47.9875 9.96388 47.6093 10.133C47.2312 10.3022 46.9156 10.4562 46.6619 10.5955C46.4081 10.7349 46.2018 10.8043 46.0427 10.8043C45.9364 10.8054 45.8332 10.7683 45.7518 10.6999C45.6672 10.6302 45.5975 10.5307 45.543 10.4014C45.4885 10.2721 45.446 10.113 45.4162 9.92404C45.3863 9.73508 45.3714 9.52608 45.3714 9.29753C45.3714 8.98928 45.3964 8.74557 45.446 8.56639C45.4956 8.38722 45.5902 8.22564 45.7295 8.08142C45.8689 7.93719 46.1126 7.77806 46.4607 7.60402C46.8088 7.42997 47.2165 7.26839 47.6841 7.11904C48.1517 6.96968 48.6614 6.84795 49.2134 6.75359C49.7653 6.65924 50.3349 6.61182 50.9218 6.61182C51.9661 6.61182 52.8588 6.71375 53.5999 6.91762C54.3411 7.12148 54.9502 7.43486 55.4276 7.85751C55.905 8.28015 56.2531 8.82477 56.4719 9.49113C56.6907 10.1575 56.8002 10.9483 56.8002 11.8635V20.8153ZM53.1149 15.116H51.6827C51.076 15.116 50.5588 15.1608 50.131 15.2502C49.7032 15.3397 49.3551 15.4741 49.0867 15.6531C48.8183 15.832 48.6218 16.0483 48.4974 16.3021C48.373 16.5558 48.3109 16.8467 48.3109 17.175C48.3109 17.7321 48.4874 18.1696 48.8406 18.4879C49.1938 18.8062 49.6834 18.9653 50.3102 18.9653C50.8375 18.9653 51.3222 18.8311 51.7649 18.5625C52.2076 18.2938 52.6576 17.901 53.1152 17.3837V15.116H53.1149Z"
            fill="currentColor"
          />
          <path
            d="M64.9612 19.1292C64.9612 20.0542 64.7996 20.6758 64.4762 20.9941C64.1528 21.3124 63.5735 21.4715 62.738 21.4715C61.9025 21.4715 61.3256 21.3148 61.0073 21.0014C60.689 20.688 60.5299 20.0938 60.5299 19.2184C60.5299 18.2834 60.6915 17.6569 61.0149 17.3387C61.3383 17.0204 61.9225 16.8613 62.768 16.8613C63.5935 16.8613 64.1655 17.018 64.4838 17.3313C64.8021 17.6447 64.9612 18.2438 64.9612 19.1292ZM75.8375 19.4575C75.8375 19.8951 75.8101 20.2309 75.7554 20.4646C75.7006 20.6983 75.6285 20.8626 75.539 20.9569C75.4496 21.0513 75.3178 21.1359 75.1438 21.2107C74.9697 21.2855 74.7659 21.35 74.5322 21.4045C74.2813 21.4621 74.0272 21.5045 73.7712 21.5314C73.4977 21.5612 73.2217 21.5761 72.9433 21.5761C72.1972 21.5761 71.5507 21.4815 71.0036 21.2926C70.4566 21.1036 70.0041 20.8127 69.646 20.4196C69.2879 20.0266 69.0244 19.5318 68.8552 18.9351C68.686 18.3384 68.6015 17.6322 68.6015 16.8165V9.99824H67.005C66.816 9.99824 66.6718 9.8814 66.5723 9.64771C66.4728 9.41402 66.4232 9.02364 66.4232 8.47658C66.4232 8.18813 66.4357 7.94442 66.4606 7.74544C66.4855 7.54646 66.5227 7.38978 66.5726 7.27538C66.6224 7.16098 66.6845 7.07884 66.7591 7.02922C66.8366 6.97864 66.9276 6.95266 67.0202 6.95466H68.6017V3.98564C68.6017 3.88615 68.6291 3.79669 68.6838 3.717C68.7386 3.63731 68.8381 3.57033 68.9823 3.51558C69.1265 3.46082 69.3204 3.42098 69.5641 3.39629C69.8078 3.3716 70.1087 3.35889 70.4668 3.35889L71.3845 3.39629C71.6282 3.42122 71.8196 3.46082 71.9589 3.51558C72.0982 3.57033 72.1977 3.63731 72.2574 3.717C72.317 3.79669 72.3468 3.88615 72.3468 3.98564V6.95466H75.2413C75.3339 6.95266 75.4248 6.97864 75.5024 7.02922C75.5769 7.07884 75.639 7.16098 75.6889 7.27538C75.7388 7.38978 75.7759 7.54646 75.8008 7.74544C75.8258 7.94442 75.8382 8.18813 75.8382 8.47658C75.8382 9.02364 75.7886 9.41402 75.6891 9.64771C75.5896 9.8814 75.4454 9.99824 75.2565 9.99824H72.3471V16.2497C72.3471 16.9757 72.4615 17.5203 72.6903 17.8833C72.9191 18.2463 73.3268 18.4279 73.9137 18.4279C74.1127 18.4279 74.2916 18.4106 74.4508 18.3756C74.595 18.3449 74.737 18.3051 74.8761 18.2563L75.1895 18.137C75.2741 18.1023 75.3511 18.0847 75.4207 18.0847C75.4804 18.0847 75.5376 18.1021 75.5923 18.137C75.6471 18.172 75.6894 18.2414 75.7192 18.3458C75.749 18.4502 75.7764 18.5919 75.8013 18.7711C75.8263 18.9503 75.8387 19.1788 75.8387 19.4575H75.8375ZM87.102 8.70024L87.0722 9.58049C87.0524 9.80929 87.0226 9.98822 86.9827 10.1175C86.9429 10.2468 86.8908 10.3363 86.826 10.3862C86.7612 10.436 86.6793 10.4607 86.5799 10.4607C86.5002 10.4607 86.4107 10.4434 86.3112 10.4084L85.9756 10.2965L85.5654 10.1845C85.4163 10.1498 85.252 10.1322 85.0731 10.1322C84.8644 10.1322 84.6554 10.1745 84.4466 10.2591C84.2378 10.3436 84.0213 10.4754 83.7976 10.6543C83.5739 10.8333 83.34 11.0721 83.0963 11.3706C82.8526 11.669 82.5915 12.0369 82.3131 12.4747V20.7702C82.3147 20.865 82.283 20.9573 82.2236 21.0312C82.164 21.1058 82.062 21.1679 81.9178 21.2178C81.7736 21.2676 81.5822 21.3048 81.3434 21.3297C81.1045 21.3546 80.8012 21.3671 80.4333 21.3671C80.0654 21.3671 79.7618 21.3546 79.5232 21.3297C79.2847 21.3048 79.093 21.2676 78.9488 21.2178C78.8046 21.1679 78.7026 21.1058 78.643 21.0312C78.5836 20.9573 78.5519 20.865 78.5535 20.7702V7.46189C78.5515 7.36934 78.5775 7.27835 78.6281 7.20082C78.6777 7.12626 78.7674 7.06418 78.8967 7.01431C79.026 6.96444 79.1928 6.92729 79.3966 6.90235C79.6005 6.87742 79.8567 6.86495 80.1649 6.86495L80.9557 6.90235C81.1644 6.92729 81.3263 6.96444 81.4407 7.01431C81.5551 7.06418 81.6372 7.12626 81.6868 7.20082C81.7374 7.27835 81.7634 7.36934 81.7614 7.46189V9.118C82.1095 8.62055 82.4378 8.21038 82.746 7.88722C83.0542 7.56406 83.3478 7.30789 83.6262 7.11893C83.9047 6.92998 84.1833 6.79822 84.4618 6.72366C84.7341 6.64986 85.0151 6.61222 85.2973 6.61171C85.4368 6.61228 85.5762 6.61979 85.715 6.6342C85.8641 6.64911 86.0184 6.67404 86.1775 6.70875C86.3366 6.74346 86.476 6.78331 86.5953 6.82804C86.7146 6.87278 86.8016 6.91995 86.8563 6.96982C86.9111 7.01969 86.9509 7.0742 86.9756 7.13384C87.0003 7.19349 87.0228 7.27562 87.0428 7.38C87.0629 7.48438 87.0776 7.64106 87.0876 7.85006L87.1025 8.70049L87.102 8.70024Z"
            fill="currentColor"
          />
          <path
            d="M100.082 20.8153C100.082 20.9546 100.033 21.0639 99.9331 21.1435C99.8336 21.2232 99.677 21.2802 99.4631 21.3152C99.2492 21.3501 98.9334 21.3675 98.5156 21.3675C98.068 21.3675 97.7422 21.3501 97.5383 21.3152C97.3344 21.2802 97.1902 21.2232 97.1056 21.1435C97.0211 21.0639 96.9788 20.9546 96.9788 20.8153V19.7561C96.4317 20.343 95.8076 20.8004 95.1063 21.1286C94.405 21.4569 93.6267 21.6209 92.7714 21.6209C92.0652 21.6209 91.4162 21.529 90.8244 21.345C90.2326 21.1609 89.7202 20.8874 89.2876 20.5244C88.8549 20.1614 88.5193 19.7113 88.2805 19.1741C88.0416 18.6368 87.9224 18.0103 87.9224 17.2943C87.9224 16.5184 88.0742 15.8445 88.3775 15.2727C88.6809 14.701 89.1333 14.2285 89.7352 13.8554C90.337 13.4824 91.0855 13.2064 91.9806 13.0275C92.8758 12.8486 93.9152 12.7589 95.0988 12.7589H96.3968V11.9532C96.3968 11.5354 96.3545 11.17 96.2699 10.8566C96.1853 10.5432 96.046 10.2822 95.8521 10.0734C95.6583 9.86464 95.3997 9.71039 95.0763 9.61091C94.7529 9.51142 94.3527 9.46179 93.8753 9.46179C93.2488 9.46179 92.6893 9.53146 92.197 9.67055C91.7046 9.80964 91.2695 9.96388 90.8914 10.133C90.5132 10.3022 90.1976 10.4562 89.9439 10.5955C89.6902 10.7349 89.4839 10.8043 89.3247 10.8043C89.2184 10.8054 89.1152 10.7683 89.0338 10.6999C88.9493 10.6302 88.8796 10.5307 88.8251 10.4014C88.7706 10.2721 88.728 10.113 88.6982 9.92404C88.6684 9.73508 88.6535 9.52608 88.6535 9.29753C88.6535 8.98928 88.6784 8.74557 88.728 8.56639C88.7777 8.38722 88.8723 8.22564 89.0116 8.08142C89.1509 7.93719 89.3946 7.77806 89.7427 7.60402C90.0908 7.42997 90.4986 7.26839 90.9662 7.11904C91.4338 6.96968 91.9435 6.84795 92.4954 6.75359C93.0474 6.65924 93.6169 6.61182 94.2038 6.61182C95.2481 6.61182 96.1408 6.71375 96.882 6.91762C97.6231 7.12148 98.2323 7.43486 98.7097 7.85751C99.1871 8.28015 99.5352 8.82477 99.754 9.49113C99.9727 10.1575 100.082 10.9483 100.082 11.8635V20.8153ZM96.397 15.116H94.9648C94.3581 15.116 93.8408 15.1608 93.4131 15.2502C92.9853 15.3397 92.6372 15.4741 92.3688 15.6531C92.1004 15.832 91.9039 16.0483 91.7794 16.3021C91.655 16.5558 91.5929 16.8467 91.5929 17.175C91.5929 17.7321 91.7694 18.1696 92.1226 18.4879C92.4759 18.8062 92.9655 18.9653 93.5922 18.9653C94.1195 18.9653 94.6042 18.8311 95.0469 18.5625C95.4896 18.2938 95.9396 17.901 96.3972 17.3837V15.116H96.397Z"
            fill="currentColor"
          />
          <path
            d="M116.449 20.7705C116.449 20.88 116.424 20.9719 116.374 21.0465C116.325 21.121 116.24 21.1831 116.121 21.233C116.001 21.2828 115.84 21.3176 115.636 21.3374C115.432 21.3572 115.181 21.3672 114.882 21.3672C114.564 21.3672 114.305 21.3572 114.107 21.3374C113.908 21.3176 113.746 21.2826 113.622 21.233C113.497 21.1834 113.408 21.121 113.353 21.0465C113.298 20.9719 113.271 20.8798 113.271 20.7705V19.2936C112.584 20.0296 111.866 20.6016 111.115 21.0093C110.364 21.417 109.531 21.6209 108.616 21.6209C107.601 21.6209 106.743 21.4244 106.042 21.0316C105.351 20.6477 104.762 20.1027 104.326 19.4427C103.884 18.7763 103.563 17.998 103.364 17.1077C103.165 16.2175 103.065 15.28 103.065 14.2954C103.065 13.1118 103.192 12.0475 103.446 11.1025C103.699 10.1574 104.07 9.352 104.557 8.6854C105.045 8.0188 105.651 7.50669 106.377 7.14858C107.103 6.79047 107.939 6.61153 108.884 6.61153C109.63 6.61153 110.306 6.76333 110.913 7.06669C111.52 7.37004 112.122 7.81518 112.718 8.40209V1.19587C112.718 1.09638 112.746 1.00691 112.8 0.927221C112.855 0.847533 112.955 0.780555 113.099 0.725799C113.243 0.671044 113.435 0.628755 113.673 0.598933C113.912 0.56911 114.216 0.554199 114.583 0.554199C114.951 0.554199 115.255 0.56911 115.493 0.598933C115.732 0.628755 115.921 0.671044 116.06 0.725799C116.199 0.780555 116.299 0.847533 116.359 0.927221C116.418 1.00691 116.448 1.09638 116.448 1.19587V20.7705H116.449ZM112.719 11.8783C112.182 11.202 111.667 10.6847 111.175 10.3266C110.683 9.96849 110.168 9.78955 109.631 9.78955C109.143 9.78955 108.723 9.91129 108.37 10.155C108.017 10.3987 107.734 10.7246 107.52 11.1323C107.306 11.54 107.147 11.9952 107.042 12.4975C106.937 13.0055 106.885 13.5229 106.886 14.0417C106.885 14.5866 106.93 15.1306 107.02 15.668C107.109 16.1952 107.256 16.665 107.46 17.0779C107.664 17.4908 107.935 17.8215 108.273 18.0701C108.611 18.3187 109.039 18.4431 109.556 18.4431C109.811 18.4436 110.065 18.4059 110.31 18.3312C110.553 18.2566 110.802 18.1346 111.056 17.9657C111.309 17.7968 111.57 17.5754 111.839 17.3018C112.107 17.0283 112.401 16.6927 112.719 16.2947V11.8783ZM132.518 13.7283C132.518 14.1859 132.416 14.524 132.212 14.7427C132.008 14.9615 131.727 15.071 131.369 15.071H123.268C123.268 15.6379 123.335 16.1527 123.469 16.6152C123.603 17.0777 123.817 17.4705 124.111 17.7939C124.404 18.1173 124.782 18.3634 125.245 18.5324C125.707 18.7013 126.262 18.7861 126.908 18.7861C127.565 18.7861 128.142 18.7389 128.639 18.6443L129.929 18.3309L130.832 18.0176C131.071 17.923 131.265 17.8758 131.414 17.8758C131.503 17.8758 131.578 17.8931 131.638 17.9281C131.698 17.963 131.747 18.0251 131.787 18.1146C131.827 18.2041 131.854 18.3309 131.869 18.495C131.884 18.659 131.892 18.8655 131.892 19.1141L131.877 19.6737L131.832 20.0689C131.812 20.1784 131.782 20.2704 131.742 20.3449C131.703 20.4195 131.651 20.4916 131.586 20.5612C131.521 20.6309 131.344 20.7253 131.056 20.8448C130.768 20.9643 130.399 21.0809 129.952 21.1953C129.504 21.3097 128.992 21.4092 128.415 21.4938C127.838 21.5784 127.221 21.6207 126.565 21.6207C125.382 21.6207 124.345 21.4716 123.454 21.1731C122.564 20.8746 121.821 20.4222 121.224 19.8154C120.627 19.2087 120.182 18.4429 119.888 17.5179C119.595 16.5929 119.448 15.5088 119.448 14.2653C119.448 13.0817 119.602 12.015 119.911 11.0651C120.219 10.1152 120.666 9.30947 121.253 8.648C121.84 7.98653 122.554 7.48175 123.394 7.13367C124.235 6.78558 125.182 6.61153 126.237 6.61153C127.351 6.61153 128.303 6.77556 129.094 7.10384C129.884 7.43213 130.533 7.88704 131.041 8.46907C131.548 9.05109 131.921 9.73969 132.16 10.5354C132.399 11.331 132.518 12.1964 132.518 13.1314V13.728L132.518 13.7283ZM128.877 12.654C128.907 11.5997 128.695 10.7715 128.243 10.1699C127.791 9.56833 127.092 9.26718 126.147 9.26718C125.669 9.26718 125.254 9.35664 124.901 9.53582C124.548 9.715 124.255 9.95602 124.021 10.2594C123.787 10.5627 123.608 10.9208 123.484 11.3337C123.36 11.7466 123.287 12.1866 123.268 12.6542H128.877L128.877 12.654Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <span className="pl-1 pt-2 text-x-sm font-bold uppercase tracking-widest dark:text-dark-white">
        staking
      </span>
    </div>
  );
};

export default Logo;