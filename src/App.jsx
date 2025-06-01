import { useState } from 'react';
import './App.css';
import { FiMenu } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { IoAddSharp } from "react-icons/io5";
import { TbBell } from "react-icons/tb";
import { TiHome } from "react-icons/ti";
import { SiYoutubeshorts } from "react-icons/si";
import { BsCollectionPlay } from "react-icons/bs";
import { MdOutlineAccountCircle } from "react-icons/md";
import { LuHistory } from "react-icons/lu";
import { CgPlayList } from "react-icons/cg";
import { BsPlayBtn } from "react-icons/bs";
import { MdOutlineWatchLater } from "react-icons/md";
import { BiLike, BiRotateRight } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaFire } from "react-icons/fa6";
import { LiaMusicSolid } from "react-icons/lia";
import { PiFilmSlate } from "react-icons/pi";
import { SiYoutubegaming } from "react-icons/si";
import { MdNewspaper } from "react-icons/md";
import { TfiCup } from "react-icons/tfi";
import { MdOutlineSettings } from "react-icons/md";
import { MdOutlineOutlinedFlag } from "react-icons/md";
import { IoHelpCircleOutline } from "react-icons/io5";
import { RiFeedbackLine } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";
import { BiSolidBell } from "react-icons/bi";
import { GoVideo } from "react-icons/go";
import { HiMiniSignal } from "react-icons/hi2";
import { IoCreateOutline } from "react-icons/io5";
import { FaGoogle } from "react-icons/fa";
import { MdOutlineSwitchAccount } from "react-icons/md";
import { PiSignInThin } from "react-icons/pi";
import { PiPlayCircleThin } from "react-icons/pi";
import { AiOutlineDollar } from "react-icons/ai";
import { RiShieldUserLine } from "react-icons/ri";
import { IoMoonOutline } from "react-icons/io5";
import { IoLanguageOutline } from "react-icons/io5";
import { FaUserShield } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";
import { MdOutlineKeyboard } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";

const categories = ['Music', 'Gaming', 'Mixes', 'Chester Bennington', 'Alternative Metal', 'News', 'Strings', 'Racing video games', 'Hard rock', 'Live', 'Pop', 'Sports cars', 'Formula 1']

export default function App() {
  const [left, setLeft] = useState('-240px');
  const [display, setDisplay] = useState('none');
  const [mic, setMic] = useState('none');
  const [create, setCreate] = useState('none');
  const [account, setAccount] = useState('none')

  return (<>
    <div className="container">
      <div className="top">
        <div className="top-top">
          <div className='menu-bar-container' onClick={() => setLeft('0')}>
            <FiMenu className='menu-bar' />
          </div>
          <img className="youtube-logo" src="/img/youtube_logo.png" alt="logo" />
          <div className="search-input-container">
            <div className='search-logo-left'>
              <CiSearch className='search-logo-child-left' />
            </div>
            <input className="search-input" type="text" placeholder='Search' />
            <span className='search-delete'><span>x</span></span>
            <div className='search-logo'>
              <CiSearch className='search-logo-child' />
              <span className="search-info">Search</span>
            </div>
          </div>
          <div className="mic-logo" onClick={() => setMic('flex')}>
            <IoMdMic className='mic-logo-child' />
            <span className='mic-logo-info'>Search with your voice</span>
          </div>
          <div className="create-logo" onClick={() => setCreate(create === 'none' ? 'flex' : 'none')}>
            <IoAddSharp className='create-logo-child' />
            <span className='create-logo-child-text'>Create</span>
          </div>
          <div className="bell" onClick={() => setDisplay(display === 'none' ? 'flex' : 'none')} >
            <TbBell className='bell-logo' style={{ display: display === 'none' ? 'flex' : 'none' }} />
            <BiSolidBell className='bell-logo' style={{ display: display === 'none' ? 'none' : 'flex' }} />
            <span className='bell-info'>Notifications</span>
          </div>
          <img className="user-account" src="/img/user.jpg" alt="user" onClick={() => setAccount(account === 'none' ? 'flex' : 'none')} />
        </div>

        <div className="top-bottom">
          <span className='all-category'>All</span>
          {categories.map((category, index) => (<span key={index} className='category'>{category}</span>))}
          <span className='category'>New to you</span>
        </div>
      </div>

      <div className="side">
        <div className="side-icons home">
          <TiHome />
          <span className='side-icons-text'>Home</span>
          <span className="side-info">Home</span>
        </div>
        <div className="side-icons youtube-shorts">
          <SiYoutubeshorts />
          <span className='side-icons-text'>Shorts</span>
          <span className="side-info">Shorts</span>
        </div>
        <div className="side-icons subcriptions">
          <BsCollectionPlay />
          <span className='side-icons-text'>Subcriptions</span>
          <span className="side-info">Subcriptions</span>
        </div>
        <div className="side-icons you">
          <MdOutlineAccountCircle />
          <span className='side-icons-text'>You</span>
          <span className="side-info">You</span>
        </div>
      </div>

      <BarOpen left={left} setLeft={setLeft} />

      <MicOpen mic={mic} setMic={setMic} />

      <BellOpen display={display} setDisplay={setDisplay} />

      <CreateOpen create={create} setCreate={setCreate} />

      <AccountOpen account={account} setAccount={setAccount} />

      <div className="main" onClick={() => setAccount('none')}>
        <Boxs />
      </div>
    </div >
      <div className="blank-screen"
        style={{
          visibility: left === '0' || mic === 'flex' || create === 'flex' ? 'visible' : 'hidden',
          opacity: left === '0' ? 0.6 : mic === 'flex' ? 0.2 : 0,
        }}
        onClick={() => {
          setLeft('-240px');
          setMic('none');
          setCreate('none');
        }}
      >
      </div>
  </>);
}

function BarOpen({ left, setLeft }) {
  return (<>
    <div className="menu-bar-open" style={{ left }}>
      <div className='menu-bar-open-container'>
        <div className="menu-bar-open-logo" onClick={() => setLeft('-240px')}>
          <FiMenu className='menu-bar' />
        </div>
        <img className="youtube-logo" src="/img/youtube_logo.png" alt="logo" />
      </div>
      <div className='menu-bar-open-icons-container'>
        <div className="menu-bar-icons home home-bar-open">
          <TiHome />
          <span className='menu-icons-text'>Home</span>
          <span className="side-info">Home</span>
        </div>
        <div className="menu-bar-icons youtube-shorts">
          <SiYoutubeshorts />
          <span className='menu-icons-text'>Shorts</span>
          <span className="side-info">Shorts</span>
        </div>
        <div className="menu-bar-icons subcriptions">
          <BsCollectionPlay />
          <span className='menu-icons-text'>Subcriptions</span>
          <span className="side-info">Subcriptions</span>
        </div>

        <hr className='hr hr-top' />

        <div className="menu-bar-icons"><span style={{ fontSize: '18px' }}>You &nbsp;&gt;</span></div>
        <div className="menu-bar-icons">
          <LuHistory />
          <span className="menu-icons-text">History</span>
          <span className="side-info">History</span>
        </div>
        <div className="menu-bar-icons">
          <CgPlayList />
          <span className="menu-icons-text">Playlists</span>
          <span className="side-info">Playlists</span>
        </div>
        <div className="menu-bar-icons">
          <BsPlayBtn />
          <span className="menu-icons-text">Your videos</span>
          <span className="side-info">Your videos</span>
        </div>
        <div className="menu-bar-icons">
          <MdOutlineWatchLater />
          <span className="menu-icons-text">Watch later</span>
          <span className="side-info">Watch later</span>
        </div>
        <div className="menu-bar-icons">
          <BiLike />
          <span className="menu-icons-text">Liked videos</span>
          <span className="side-info">Liked videos</span>
        </div>

        <hr className='hr' />

        <div className="menu-bar-icons menu-bar-icons-subcriptions"><span style={{ fontSize: '16px', fontWeight: 'bold' }}>Subcriptions</span></div>
        <div className="menu-bar-icons">
          <MdKeyboardArrowDown />
          <span className="menu-icons-text">Show more</span>
          <span className="side-info">Show more</span>
        </div>

        <hr className='hr' />

        <div className="menu-bar-icons menu-bar-icons-subcriptions"><span style={{ fontSize: '16px', fontWeight: 'bold' }}>Explore</span></div>
        <div className="menu-bar-icons">
          <FaFire style={{ transform: 'rotate(35deg)' }} />
          <span className="menu-icons-text">Trending</span>
          <span className="side-info">Trending</span>
        </div>
        <div className="menu-bar-icons">
          <LiaMusicSolid />
          <span className="menu-icons-text">Music</span>
          <span className="side-info">Music</span>
        </div>
        <div className="menu-bar-icons">
          <PiFilmSlate />
          <span className="menu-icons-text">Movies</span>
          <span className="side-info">Movies</span>
        </div>
        <div className="menu-bar-icons">
          <SiYoutubegaming />
          <span className="menu-icons-text">Gaming</span>
          <span className="side-info">Gaming</span>
        </div>
        <div className="menu-bar-icons">
          <MdNewspaper />
          <span className="menu-icons-text">News</span>
          <span className="side-info">News</span>
        </div>
        <div className="menu-bar-icons">
          <TfiCup />
          <span className="menu-icons-text">Sports</span>
          <span className="side-info">Sports</span>
        </div>
        <hr className='hr' />

        <div className="menu-bar-icons menu-bar-icons-subcriptions"><span style={{ fontSize: '16px', fontWeight: 'bold' }}>More from YouTube</span></div>

        <hr className='hr' />

        <div className="menu-bar-icons">
          <MdOutlineSettings />
          <span className="menu-icons-text">Settings</span>
          <span className="side-info">Settings</span>
        </div>
        <div className="menu-bar-icons">
          <MdOutlineOutlinedFlag />
          <span className="menu-icons-text">Report history</span>
          <span className="side-info">Report history</span>
        </div>
        <div className="menu-bar-icons">
          <IoHelpCircleOutline />
          <span className="menu-icons-text">Help</span>
          <span className="side-info">Help</span>
        </div>
        <div className="menu-bar-icons">
          <RiFeedbackLine />
          <span className="menu-icons-text">Send feedback</span>
          <span className="side-info">Send feedback</span>
        </div>

        <hr className='hr' />

        <div className="menu-bar-icons menu-bar-icons-subcriptions"><span style={{ fontSize: '13px', color: 'silver' }}><p>About Press Copyright Contact us Creators Advertise Developers</p><br /><p>Terms Privacy Policy & Safety How YouTube works Test new features</p><br /><p style={{ fontSize: '12px', color: 'gray', marginBottom: '11px' }}> © 2025 Google LLC</p></span></div>
      </div>
    </div>
  </>);
}

function BellOpen({ display, setDisplay }) {

  return (<>
    <div className="notifications-window" style={{ display }}>
      <div className="notifications-window-top">
        <span>Notifications</span>
        <div className="notifications-window-setting">
          <MdOutlineSettings className='notifications-window-setting-logo' />
          <span className='bell-info-setting'>Settings</span>
        </div>
      </div>
      <div className="notifications-window-main">
        <div className="notifications-window-main-logo">
          <FaRegBell style={{ fontSize: '100px', color: '#878787' }} />
        </div>
        <span style={{ fontSize: '16px', marginTop: '28px', fontWeight: '600', marginBottom: '10px' }}>Your notifications live here</span><span style={{ fontSize: '14px', fontWeight: '600' }}>Subcribe to your favorite channels to get</span><span style={{ fontSize: '14px', fontWeight: '600' }}>notified about their latest videos.</span>
      </div>
    </div>
  </>);
}

function MicOpen({ mic, setMic }) {
  return (
    <div className="mic-open-container" style={{ display: mic }}>
      <div className='mic-open-exit' onClick={() => setMic('none')}><span>&times;</span></div>
      <span style={{ fontSize: '24px', color: 'aliceblue', marginLeft: '30px' }}>Search with your voice</span>
      <span style={{ fontSize: '14px', color: '#9f9f9f', margin: '25px auto auto 30px' }}>To search by voice, go to your browser settings and allow acces to microphone</span>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', marginBottom: '70px' }}>
        <div className="mic-btn" style={{
          display: 'flex',
          fontSize: '40px',
          color: 'aliceblue',
          background: '#878787',
          height: '70px',
          width: '70px',
          borderRadius: '70px',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer'
        }}><IoMdMic /></div>
      </div>
    </div>
  );
}

function CreateOpen({ create, setCreate }) {
  return (<>
    <div className="create-open-container" style={{ display: create }}>
      <div className="create-open-icons">
        <div><GoVideo /></div>
        <span>Upload video</span>
      </div>

      <div className="create-open-icons">
        <div><HiMiniSignal /></div>
        <span>Go live</span>
      </div>

      <div className="create-open-icons">
        <div><IoCreateOutline /></div>
        <span>Create post</span>
      </div>
    </div>
  </>);
}

function AccountOpen({ account, setAccountt }) {
  return (<>
    <div className="account-open-container" style={{ display: account }}>
      <div className="account-open-user">
        <img className="account-open-user-logo" src="/img/user.jpg" alt="user" />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ color: 'aliceblue', marginTop: '15px', fontWeight: '600' }}>Dyo 6678</span>
          <span style={{ color: 'aliceblue', fontWeight: '600', marginBottom: '10px' }}>@dyo89dd9</span>
          <a href="#" style={{ textDecoration: 'none', fontSize: '14px', fontWeight: '400', color: 'rgb(0, 166, 255)' }}>View your channel</a>
        </div>
      </div>

      <div className='account-open-items-container'>
        <div className="account-open-items">
          <FaGoogle className='account-open-items-logos' style={{ fontSize: '20px' }} />
          <span className='account-open-items-texts' style={{ marginLeft: '18px' }}>Google Account</span>
        </div>
        <div className="account-open-items">
          <MdOutlineSwitchAccount className='account-open-items-logos' />
          <span className='account-open-items-texts'>Switch account</span>
          <span className='account-open-arrows'>&gt;</span>
        </div>
        <div className="account-open-items">
          <PiSignInThin className='account-open-items-logos' />
          <span className='account-open-items-texts'>Sign out</span>
        </div>

        <hr className='hr hr-account-open' />

        <div className="account-open-items">
          <PiPlayCircleThin className='account-open-items-logos' />
          <span className='account-open-items-texts'>YouTube Studio</span>
        </div>
        <div className="account-open-items">
          <AiOutlineDollar className='account-open-items-logos' />
          <span className='account-open-items-texts'>Purchases and memberships</span>
        </div>

        <hr className='hr hr-account-open' />

        <div className="account-open-items">
          <RiShieldUserLine className='account-open-items-logos' />
          <span className='account-open-items-texts'>Your data in YouTube</span>
        </div>
        <div className="account-open-items">
          <IoMoonOutline className='account-open-items-logos' style={{ transform: 'rotate(-135deg)' }} />
          <span className='account-open-items-texts'>Apperance: Dark</span>
          <span className='account-open-arrows'>&gt;</span>
        </div>
        <div className="account-open-items">
          <IoLanguageOutline className='account-open-items-logos' />
          <span className='account-open-items-texts'>Language: English</span>
          <span className='account-open-arrows'>&gt;</span>
        </div>
        <div className="account-open-items">
          <FaUserShield className='account-open-items-logos' />
          <span className='account-open-items-texts'>Restricted Mode: Off</span>
          <span className='account-open-arrows'>&gt;</span>
        </div>
        <div className="account-open-items">
          <CiGlobe className='account-open-items-logos' />
          <span className='account-open-items-texts'>Location: Indonesia</span>
          <span className='account-open-arrows'>&gt;</span>
        </div>
        <div className="account-open-items">
          <MdOutlineKeyboard className='account-open-items-logos' />
          <span className='account-open-items-texts'>Keyboard shortcuts</span>
        </div>

        <hr className='hr hr-account-open' />

        <div className="account-open-items">
          <MdOutlineSettings className='account-open-items-logos' />
          <span className='account-open-items-texts'>Settings</span>
        </div>

        <hr className='hr hr-account-open' />

        <div className="account-open-items">
          <IoHelpCircleOutline className='account-open-items-logos' />
          <span className='account-open-items-texts'>Help</span>
        </div>
        <div className="account-open-items">
          <RiFeedbackLine className='account-open-items-logos' />
          <span className='account-open-items-texts'>Send feedback</span>
        </div>
      </div>

    </div>
  </>);
}

function Boxs() {
  return (<>
    <div className="main-boxs-window">
      <div className="main-boxs-window-thumbnail"></div>
      <div className='main-boxs-window-infos'>
        <img src='/img/user.jpg' className="channel-profile" />
        <div className="main-boxs-window-infos2">
          <h4 className="channel-tittle">Video title</h4>
          <span className="channel-name">Channel Name</span>
          <div className="video-infos">
            <span className="video-views">x views</span>
            <span className='middot'>&middot;</span>
            <span className="video-created">x minutes ago</span>
          </div>
        </div>
        <div className="main-boxs-window-setting">
          <BsThreeDotsVertical />
        </div>
      </div>
    </div>

    <div className="main-boxs-window">
      <div className="main-boxs-window-thumbnail"></div>
      <div className='main-boxs-window-infos'>
        <img src='/img/user.jpg' className="channel-profile" />
        <div className="main-boxs-window-infos2">
          <h4 className="channel-tittle">Video title</h4>
          <span className="channel-name">Channel Name</span>
          <div className="video-infos">
            <span className="video-views">x views</span>
            <span className='middot'>&middot;</span>
            <span className="video-created">x minutes ago</span>
          </div>
        </div>
        <div className="main-boxs-window-setting">
          <BsThreeDotsVertical />
        </div>
      </div>
    </div>

    <div className="main-boxs-window">
      <div className="main-boxs-window-thumbnail"></div>
      <div className='main-boxs-window-infos'>
        <img src='/img/user.jpg' className="channel-profile" />
        <div className="main-boxs-window-infos2">
          <h4 className="channel-tittle">Video title</h4>
          <span className="channel-name">Channel Name</span>
          <div className="video-infos">
            <span className="video-views">x views</span>
            <span className='middot'>&middot;</span>
            <span className="video-created">x minutes ago</span>
          </div>
        </div>
        <div className="main-boxs-window-setting">
          <BsThreeDotsVertical />
        </div>
      </div>
    </div>

    <div className="main-boxs-window">
      <div className="main-boxs-window-thumbnail"></div>
      <div className='main-boxs-window-infos'>
        <img src='/img/user.jpg' className="channel-profile" />
        <div className="main-boxs-window-infos2">
          <h4 className="channel-tittle">Video title</h4>
          <span className="channel-name">Channel Name</span>
          <div className="video-infos">
            <span className="video-views">x views</span>
            <span className='middot'>&middot;</span>
            <span className="video-created">x minutes ago</span>
          </div>
        </div>
        <div className="main-boxs-window-setting">
          <BsThreeDotsVertical />
        </div>
      </div>
    </div>

    <div className="main-boxs-window">
      <div className="main-boxs-window-thumbnail"></div>
      <div className='main-boxs-window-infos'>
        <img src='/img/user.jpg' className="channel-profile" />
        <div className="main-boxs-window-infos2">
          <h4 className="channel-tittle">Video title</h4>
          <span className="channel-name">Channel Name</span>
          <div className="video-infos">
            <span className="video-views">x views</span>
            <span className='middot'>&middot;</span>
            <span className="video-created">x minutes ago</span>
          </div>
        </div>
        <div className="main-boxs-window-setting">
          <BsThreeDotsVertical />
        </div>
      </div>
    </div>

    <div className="main-boxs-window">
      <div className="main-boxs-window-thumbnail"></div>
      <div className='main-boxs-window-infos'>
        <img src='/img/user.jpg' className="channel-profile" />
        <div className="main-boxs-window-infos2">
          <h4 className="channel-tittle">Video title</h4>
          <span className="channel-name">Channel Name</span>
          <div className="video-infos">
            <span className="video-views">x views</span>
            <span className='middot'>&middot;</span>
            <span className="video-created">x minutes ago</span>
          </div>
        </div>
        <div className="main-boxs-window-setting">
          <BsThreeDotsVertical />
        </div>
      </div>
    </div>

    <div className="main-boxs-window">
      <div className="main-boxs-window-thumbnail"></div>
      <div className='main-boxs-window-infos'>
        <img src='/img/user.jpg' className="channel-profile" />
        <div className="main-boxs-window-infos2">
          <h4 className="channel-tittle">Video title</h4>
          <span className="channel-name">Channel Name</span>
          <div className="video-infos">
            <span className="video-views">x views</span>
            <span className='middot'>&middot;</span>
            <span className="video-created">x minutes ago</span>
          </div>
        </div>
        <div className="main-boxs-window-setting">
          <BsThreeDotsVertical />
        </div>
      </div>
    </div>

    <div className="main-boxs-window">
      <div className="main-boxs-window-thumbnail"></div>
      <div className='main-boxs-window-infos'>
        <img src='/img/user.jpg' className="channel-profile" />
        <div className="main-boxs-window-infos2">
          <h4 className="channel-tittle">Video title</h4>
          <span className="channel-name">Channel Name</span>
          <div className="video-infos">
            <span className="video-views">x views</span>
            <span className='middot'>&middot;</span>
            <span className="video-created">x minutes ago</span>
          </div>
        </div>
        <div className="main-boxs-window-setting">
          <BsThreeDotsVertical />
        </div>
      </div>
    </div>

    <div className="main-boxs-window">
      <div className="main-boxs-window-thumbnail"></div>
      <div className='main-boxs-window-infos'>
        <img src='/img/user.jpg' className="channel-profile" />
        <div className="main-boxs-window-infos2">
          <h4 className="channel-tittle">Video title</h4>
          <span className="channel-name">Channel Name</span>
          <div className="video-infos">
            <span className="video-views">x views</span>
            <span className='middot'>&middot;</span>
            <span className="video-created">x minutes ago</span>
          </div>
        </div>
        <div className="main-boxs-window-setting">
          <BsThreeDotsVertical />
        </div>
      </div>
    </div>

    <div className="main-boxs-window">
      <div className="main-boxs-window-thumbnail"></div>
      <div className='main-boxs-window-infos'>
        <img src='/img/user.jpg' className="channel-profile" />
        <div className="main-boxs-window-infos2">
          <h4 className="channel-tittle">Video title</h4>
          <span className="channel-name">Channel Name</span>
          <div className="video-infos">
            <span className="video-views">x views</span>
            <span className='middot'>&middot;</span>
            <span className="video-created">x minutes ago</span>
          </div>
        </div>
        <div className="main-boxs-window-setting">
          <BsThreeDotsVertical />
        </div>
      </div>
    </div>
  </>);
}