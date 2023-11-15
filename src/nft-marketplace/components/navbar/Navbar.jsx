import React, { useState } from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from './logo.svg'
import { Link } from "react-router-dom";

const Menu = () => (
  <>
    <Link className="nav-link" target="_blank" rel="noreferrer" to='https://github.com/usecapsule/capsule-examples'>GitHub</Link>
    <Link className="nav-link" target="_blank" rel="noreferrer" to='https://docs.usecapsule.com/'>Docs</Link>
    <Link className="nav-link ui-button size-small style-border" target="_blank" rel="noreferrer" to='https://7f4shq8oyfd.typeform.com/to/F86oVLhb'>Get&nbsp;Access</Link>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <header className="site-header theme-dark">
      <div className="site-header__content">

        <a className="our-logo-container" href="/">
          <Link className="our-logo-container" to="https://usecapsule.com">
            <svg width="79" height="22" viewBox="0 0 79 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="wordmark_black" clip-path="url(#clip0_7130_173)">
            <path id="Vector" d="M11.1637 7.65972C11.0285 8.13258 10.5113 8.36678 10.0607 8.17842C9.65442 8.00865 9.45082 7.55403 9.55058 7.12194C9.61395 6.84743 9.65961 6.58598 9.68758 6.33757C9.74258 5.86437 9.74198 5.44376 9.68579 5.07572C9.62963 4.70766 9.51836 4.40275 9.35206 4.16097C9.19091 3.91445 8.98041 3.73689 8.72055 3.62828C8.25886 3.43534 7.74829 3.51143 7.18882 3.85647C6.63174 4.19567 6.05792 4.7966 5.46728 5.65929C4.8791 6.51609 4.30608 7.62389 3.74823 8.98267C3.18072 10.365 2.80345 11.5718 2.61646 12.6031C2.43464 13.6298 2.42165 14.4582 2.57748 15.0884C2.73849 15.7139 3.04846 16.1226 3.50737 16.3143C3.76169 16.4206 4.02843 16.4494 4.30754 16.4006C4.59185 16.3472 4.88042 16.2162 5.17327 16.0078C5.46887 15.8006 5.76202 15.5165 6.05271 15.1556C6.205 14.9689 6.35335 14.762 6.4978 14.5349C6.73645 14.1597 7.20291 13.9865 7.60923 14.1618C8.05644 14.3546 8.25313 14.8887 8.01242 15.3151C7.71669 15.8389 7.40027 16.3262 7.06315 16.7769C6.56328 17.4502 6.04021 18.0103 5.49391 18.4573C4.95005 18.8985 4.40435 19.1942 3.85686 19.3444C3.31178 19.4888 2.78628 19.4552 2.28037 19.2438C1.53395 18.9319 1.01863 18.2858 0.73442 17.3056C0.450209 16.3254 0.424431 15.0707 0.657087 13.5416C0.889742 12.0125 1.40453 10.2774 2.20147 8.33625C3.00082 6.38927 3.85425 4.79568 4.76181 3.55547C5.67177 2.30939 6.57073 1.44118 7.45867 0.950837C8.34663 0.460494 9.16103 0.370134 9.90193 0.679757C10.3747 0.877314 10.7563 1.20218 11.0467 1.65435C11.3372 2.10653 11.5291 2.67256 11.6224 3.35247C11.7182 4.02649 11.7065 4.80034 11.5875 5.67404C11.5062 6.29431 11.365 6.95619 11.1637 7.65972Z" fill="white"/>
            <path id="Vector_2" d="M8.27016 10.601C8.46834 10.1184 9.0168 9.88917 9.49518 10.0891L9.54109 10.1083C10.0195 10.3082 10.2467 10.8615 10.0485 11.3442C9.85035 11.8269 9.30189 12.0561 8.82349 11.8562L8.77758 11.837C8.2992 11.637 8.072 11.0837 8.27016 10.601Z" fill="white"/>
            <path id="Vector_3" d="M26.0306 16.8575C25.7367 17.0418 25.3979 17.2196 25.0143 17.3908C24.6308 17.5621 24.2089 17.6938 23.7487 17.7859C23.2884 17.8913 22.7898 17.944 22.2529 17.944C21.2173 17.944 20.2777 17.7596 19.4339 17.3908C18.5901 17.0089 17.8678 16.4953 17.2669 15.8499C16.666 15.1914 16.1994 14.4407 15.867 13.5978C15.5474 12.7417 15.3876 11.833 15.3876 10.8716C15.3876 9.84427 15.5602 8.88944 15.9054 8.00703C16.2505 7.12462 16.7364 6.35415 17.3628 5.69565C17.9892 5.03712 18.7179 4.52349 19.5489 4.15471C20.3799 3.78595 21.2812 3.60156 22.2529 3.60156C22.9688 3.60156 23.64 3.70034 24.2664 3.89789C24.8929 4.09545 25.4617 4.35226 25.9732 4.66836L25.5705 5.55735C25.123 5.26761 24.618 5.02395 24.0555 4.8264C23.493 4.62885 22.8985 4.53007 22.272 4.53007C21.4666 4.53007 20.7059 4.69469 19.99 5.02395C19.2741 5.34003 18.6412 5.78784 18.0915 6.36731C17.5546 6.93365 17.1327 7.59873 16.8258 8.36262C16.519 9.12648 16.3656 9.94963 16.3656 10.832C16.3656 11.6749 16.4998 12.4717 16.7683 13.2225C17.0496 13.9732 17.4459 14.6317 17.9573 15.198C18.4814 15.7643 19.1079 16.2121 19.8366 16.5414C20.5653 16.8575 21.3771 17.0155 22.272 17.0155C22.9368 17.0155 23.5441 16.9233 24.0938 16.7389C24.6564 16.5414 25.155 16.2977 25.5897 16.008L26.0306 16.8575Z" fill="white"/>
            <path id="Vector_4" d="M32.1558 17.9439C31.4399 17.9439 30.7879 17.7793 30.1999 17.4501C29.6246 17.1076 29.1643 16.6335 28.8192 16.0277C28.4866 15.4218 28.3204 14.7172 28.3204 13.9138C28.3204 13.0577 28.4995 12.3268 28.8575 11.721C29.2154 11.102 29.7013 10.6344 30.3149 10.3183C30.9285 9.98908 31.6252 9.82446 32.4052 9.82446C33.07 9.82446 33.6965 10.0286 34.2845 10.4369C34.8854 10.8451 35.3136 11.3588 35.5695 11.9778L35.4351 12.2544L35.5501 10.0615H36.3557V17.7859H35.4542V15.3955L35.646 15.7511C35.5565 16.0145 35.4033 16.2779 35.1859 16.5413C34.9686 16.7915 34.7 17.0286 34.3803 17.2525C34.0736 17.4632 33.7283 17.6344 33.3447 17.7661C32.9741 17.8846 32.5779 17.9439 32.1558 17.9439ZM32.3476 17.1537C32.9103 17.1537 33.4153 17.0352 33.8627 16.7981C34.323 16.5479 34.6936 16.2054 34.9748 15.7708C35.2562 15.3362 35.4159 14.8358 35.4542 14.2694V13.1631C35.3521 12.6758 35.1474 12.2412 34.8406 11.8593C34.5465 11.4773 34.1824 11.1744 33.7476 10.9505C33.3129 10.7266 32.84 10.6147 32.3285 10.6147C31.7658 10.6147 31.2482 10.7529 30.7752 11.0295C30.3022 11.2929 29.9249 11.6683 29.6437 12.1556C29.3625 12.6429 29.2219 13.2158 29.2219 13.8743C29.2219 14.4801 29.3625 15.0333 29.6437 15.5338C29.9249 16.0211 30.3022 16.4162 30.7752 16.7191C31.2611 17.0088 31.7852 17.1537 32.3476 17.1537Z" fill="white"/>
            <path id="Vector_5" d="M43.9036 17.9439C43.1876 17.9439 42.5164 17.753 41.89 17.371C41.2635 16.9759 40.8032 16.4689 40.5091 15.8499L40.6626 15.514V21.4999H39.7614V10.0022H40.5667L40.6626 12.531L40.4899 11.958C40.8223 11.339 41.3082 10.832 41.9473 10.4369C42.5867 10.0286 43.2835 9.82446 44.0377 9.82446C44.7536 9.82446 45.3992 10.0022 45.9745 10.3578C46.5498 10.7135 47.0037 11.2008 47.336 11.8197C47.6813 12.4256 47.854 13.1236 47.854 13.9138C47.854 14.6909 47.6749 15.3889 47.3169 16.0079C46.9716 16.6137 46.4987 17.0879 45.8978 17.4303C45.3098 17.7727 44.645 17.9439 43.9036 17.9439ZM43.75 17.1735C44.3383 17.1735 44.8686 17.0286 45.3418 16.7388C45.8275 16.4491 46.211 16.0606 46.4925 15.5733C46.7863 15.0728 46.9334 14.5197 46.9334 13.9138C46.9334 13.2948 46.7928 12.7417 46.5116 12.2544C46.2301 11.7539 45.8531 11.3588 45.3801 11.069C44.9198 10.7793 44.3956 10.6344 43.8077 10.6344C43.245 10.6344 42.7338 10.7661 42.2735 11.0295C41.8132 11.2929 41.4426 11.6485 41.1611 12.0963C40.8799 12.5441 40.7137 13.0512 40.6626 13.6175V14.2497C40.7008 14.7897 40.8608 15.2835 41.142 15.7313C41.4361 16.1791 41.8067 16.5347 42.2544 16.7981C42.7144 17.0483 43.2132 17.1735 43.75 17.1735Z" fill="white"/>
            <path id="Vector_6" d="M52.2938 17.944C51.8591 17.944 51.4052 17.865 50.9322 17.7069C50.4593 17.5357 50.0757 17.2657 49.7816 16.8969L50.2034 16.2845C50.4593 16.5611 50.7596 16.785 51.1049 16.9562C51.4628 17.1143 51.8399 17.1933 52.2361 17.1933C52.5302 17.1933 52.8052 17.1538 53.0608 17.0747C53.3294 16.9826 53.5467 16.8311 53.7129 16.6204C53.8791 16.4096 53.9621 16.1265 53.9621 15.7709C53.9621 15.4021 53.86 15.119 53.6553 14.9214C53.4635 14.7239 53.2144 14.5658 52.9073 14.4473C52.6135 14.3156 52.3002 14.197 51.9679 14.0917C51.4181 13.9073 50.9643 13.6571 50.6061 13.341C50.261 13.0249 50.0884 12.5771 50.0884 11.9976C50.0884 11.5762 50.1843 11.2074 50.3761 10.8913C50.5807 10.5752 50.8555 10.3316 51.2008 10.1603C51.5458 9.97598 51.9358 9.88379 52.3705 9.88379C52.7667 9.88379 53.1567 9.94963 53.5403 10.0813C53.9365 10.213 54.2944 10.4369 54.6141 10.753L54.2115 11.405C54.0068 11.1152 53.732 10.9177 53.3868 10.8123C53.0544 10.7069 52.7603 10.6477 52.5047 10.6345C52.2873 10.6345 52.0573 10.6806 51.8143 10.7728C51.5843 10.865 51.3861 11.0033 51.2199 11.1876C51.0664 11.3589 50.9896 11.5893 50.9896 11.8791C50.9896 12.182 51.0728 12.4322 51.239 12.6298C51.4052 12.8142 51.6161 12.9656 51.872 13.0842C52.1402 13.2027 52.4152 13.3147 52.6964 13.42C53.0673 13.5385 53.4123 13.6834 53.732 13.8546C54.0644 14.0127 54.3329 14.23 54.5374 14.5066C54.7547 14.77 54.8635 15.1255 54.8635 15.5733C54.8635 16.0211 54.7677 16.4294 54.5759 16.7982C54.3841 17.1538 54.0965 17.4369 53.7129 17.6477C53.342 17.8452 52.8691 17.944 52.2938 17.944Z" fill="white"/>
            <path id="Vector_7" d="M59.9484 18.0032C59.2452 18.0032 58.6828 17.7925 58.2607 17.371C57.8389 16.9364 57.6151 16.3767 57.5898 15.6918V10.0615H58.491V15.4152C58.5166 15.9157 58.6699 16.3306 58.9513 16.6599C59.2452 16.9891 59.6799 17.1669 60.2552 17.1932C60.7411 17.1932 61.1949 17.0615 61.6167 16.7981C62.0388 16.5347 62.3773 16.1791 62.6332 15.7313C62.9017 15.2704 63.0359 14.7502 63.0359 14.1707V10.0615H63.9371V17.7859H63.1318L63.0359 15.356L63.17 15.8894C63.0423 16.2845 62.8121 16.6467 62.4797 16.9759C62.1602 17.292 61.7767 17.5422 61.3291 17.7266C60.8944 17.911 60.4343 18.0032 59.9484 18.0032Z" fill="white"/>
            <path id="Vector_8" d="M67.3465 2.77197H68.248V17.7861H67.3465V2.77197Z" fill="white"/>
            <path id="Vector_9" d="M74.914 17.9439C74.134 17.9439 73.4437 17.7661 72.8428 17.4105C72.2419 17.0549 71.7689 16.5742 71.4239 15.9684C71.0915 15.3494 70.925 14.6579 70.925 13.8941C70.925 13.1434 71.1041 12.4585 71.4621 11.8395C71.8201 11.2205 72.2995 10.7266 72.9004 10.3578C73.514 9.98908 74.1916 9.80469 74.9331 9.80469C75.8281 9.80469 76.5758 10.0747 77.1767 10.6147C77.7905 11.1547 78.2315 11.8593 78.5 12.7285L71.9415 15.3362L71.673 14.6645L77.6753 12.2544L77.4835 12.5309C77.2664 12.0041 76.9338 11.5498 76.4864 11.1678C76.0517 10.7859 75.5149 10.5949 74.8755 10.5949C74.3002 10.5949 73.7825 10.7398 73.3222 11.0295C72.8621 11.3193 72.4913 11.7078 72.2101 12.1951C71.9415 12.6824 71.8074 13.2356 71.8074 13.8545C71.8074 14.434 71.9351 14.974 72.1909 15.4745C72.4592 15.975 72.8301 16.3767 73.3031 16.6796C73.776 16.9825 74.3195 17.1339 74.9331 17.1339C75.3422 17.1339 75.7322 17.0549 76.1029 16.8969C76.4864 16.7388 76.8252 16.5347 77.1193 16.2845L77.5794 16.9562C77.2214 17.2459 76.8061 17.483 76.3331 17.6673C75.8728 17.8517 75.3999 17.9439 74.914 17.9439Z" fill="white"/>
            </g>
            <defs>
            <clipPath id="clip0_7130_173">
            <rect width="78" height="21" fill="white" transform="translate(0.5 0.5)"/>
            </clipPath>
            </defs>
            </svg>
          </Link>
        </a>

        <nav className="header-main__nav">
          <Menu />
        </nav>

      </div>
    </header>
  );
}

export default Navbar
