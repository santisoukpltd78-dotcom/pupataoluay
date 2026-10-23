import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Shield, Users, DollarSign, BarChart3, Radio, RotateCcw, 
  CheckCircle, XCircle, ArrowUpRight, ArrowDownLeft, Clock, 
  Send, Dice5, Eye, PlusCircle, Search, UserCheck, RefreshCw,
  TrendingUp, AlertCircle, LogOut, Lock, Phone, User, Award, 
  ChevronRight, ChevronDown, Volume2, VolumeX, Shuffle, FileText, Check,
  ArrowLeft, History, ShoppingCart, Wallet, Trash2, Copy,
  MessageCircle, QrCode, UserPlus, Sparkles, Upload, Calendar, Video
} from 'lucide-react';

// ==================== COMPACT CUSTOM SVG ILLUSTRATIONS (MOBILE OPTIMIZED) ====================
const WhiteLotusLogo = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 8C26 18 24 30 32 44C40 30 38 18 32 8Z" fill="white" />
    <path d="M32 44C22 36 14 26 16 15C24 20 29 30 32 44Z" fill="white" fillOpacity="0.88" />
    <path d="M32 44C42 36 50 26 48 15C40 20 35 30 32 44Z" fill="white" fillOpacity="0.88" />
    <path d="M32 45C18 44 7 36 6 24C16 26 25 34 32 45Z" fill="white" fillOpacity="0.72" />
    <path d="M32 45C46 44 57 36 58 24C48 26 39 34 32 45Z" fill="white" fillOpacity="0.72" />
    <path d="M18 49C27 52 37 52 46 49C41 55 23 55 18 49Z" fill="#FDE68A" />
  </svg>
);

const RedLotusCoinArtwork = ({ className = "w-20 h-16" }) => (
  <svg viewBox="0 0 140 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="75" cy="65" r="46" fill="url(#lotusGlow)" />
    <path d="M72 10L74.5 17.5L82 20L74.5 22.5L72 30L69.5 22.5L62 20L69.5 17.5L72 10Z" fill="#F59E0B" />
    <circle cx="38" cy="30" r="2.5" fill="#FBBF24" />
    <circle cx="112" cy="34" r="2" fill="#EF4136" />
    <path d="M72 88C52 68 48 44 72 26C96 44 92 68 72 88Z" fill="#DC2626" />
    <path d="M72 88C46 78 32 56 38 34C56 42 66 62 72 88Z" fill="#EF4136" />
    <path d="M72 88C98 78 112 56 106 34C88 42 78 62 72 88Z" fill="#EF4136" />
    <path d="M72 92C42 90 20 74 18 52C38 54 56 68 72 92Z" fill="#F87171" />
    <path d="M72 92C102 90 124 74 126 52C106 54 88 68 72 92Z" fill="#F87171" />
    <path d="M30 94C48 104 96 104 114 94C102 108 42 108 30 94Z" fill="#FEE2E2" />
    <circle cx="76" cy="73" r="19" fill="url(#coinGold)" stroke="#B45309" strokeWidth="2.5" />
    <circle cx="76" cy="73" r="14" stroke="#FEF3C7" strokeWidth="1.5" strokeDasharray="3 2" />
    <rect x="72" y="69" width="8" height="8" rx="1.5" transform="rotate(15 76 73)" fill="#B45309" />
    <defs>
      <radialGradient id="lotusGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(75 65) scale(46)">
        <stop stopColor="#FEE2E2" stopOpacity="0.9" />
        <stop offset="1" stopColor="#FFF5F5" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="coinGold" x1="57" y1="54" x2="95" y2="92" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FDE047" />
        <stop offset="0.5" stopColor="#F59E0B" />
        <stop offset="1" stopColor="#D97706" />
      </linearGradient>
    </defs>
  </svg>
);

const AnimalIllustration = ({ id, className = "w-8 h-8" }) => {
  switch (id) {
    case 1: // ປູ (Crab)
      return (
        <svg viewBox="0 0 120 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M35 62C22 64 14 72 12 80" stroke="#C2410C" strokeWidth="5" strokeLinecap="round"/>
          <path d="M38 70C26 74 18 82 17 90" stroke="#C2410C" strokeWidth="5" strokeLinecap="round"/>
          <path d="M85 62C98 64 106 72 108 80" stroke="#C2410C" strokeWidth="5" strokeLinecap="round"/>
          <path d="M82 70C94 74 102 82 103 90" stroke="#C2410C" strokeWidth="5" strokeLinecap="round"/>
          <path d="M40 48C28 42 20 34 22 24" stroke="#EA580C" strokeWidth="6" strokeLinecap="round"/>
          <path d="M22 24C10 18 8 8 18 6C26 5 32 14 28 22C33 17 38 19 36 26C33 32 25 30 22 24Z" fill="#EF4444" stroke="#991B1B" strokeWidth="2"/>
          <path d="M80 48C92 42 100 34 98 24" stroke="#EA580C" strokeWidth="6" strokeLinecap="round"/>
          <path d="M98 24C110 18 112 8 102 6C94 5 88 14 92 22C87 17 82 19 84 26C87 32 95 30 98 24Z" fill="#EF4444" stroke="#991B1B" strokeWidth="2"/>
          <ellipse cx="60" cy="58" rx="28" ry="20" fill="url(#crabGrad)" stroke="#9A3412" strokeWidth="2.5"/>
          <circle cx="49" cy="36" r="5.5" fill="white" stroke="#9A3412" strokeWidth="2"/>
          <circle cx="49" cy="36" r="2.5" fill="#1E293B"/>
          <circle cx="71" cy="36" r="5.5" fill="white" stroke="#9A3412" strokeWidth="2"/>
          <circle cx="71" cy="36" r="2.5" fill="#1E293B"/>
          <path d="M52 60C55 64 65 64 68 60" stroke="#7C2D12" strokeWidth="2.5" strokeLinecap="round" fill="#FEF2F2"/>
          <defs>
            <radialGradient id="crabGrad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60 52) rotate(90) scale(22 28)">
              <stop stopColor="#FB923C"/>
              <stop offset="0.6" stopColor="#EA580C"/>
              <stop offset="1" stopColor="#DC2626"/>
            </radialGradient>
          </defs>
        </svg>
      );
    case 2: // ປາ (Fish)
      return (
        <svg viewBox="0 0 120 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M45 32C48 14 68 12 78 28C66 30 55 30 45 32Z" fill="#F97316" stroke="#C2410C" strokeWidth="2"/>
          <path d="M32 54C16 36 8 38 12 54C8 70 16 72 32 54Z" fill="#0EA5E9" stroke="#0369A1" strokeWidth="2"/>
          <path d="M52 72C48 84 60 88 68 74" fill="#FB923C" stroke="#C2410C" strokeWidth="2"/>
          <ellipse cx="64" cy="54" rx="32" ry="21" fill="url(#fishGrad)" stroke="#0369A1" strokeWidth="2"/>
          <path d="M38 62C52 74 80 74 92 58C86 70 52 73 38 62Z" fill="#FDE68A"/>
          <circle cx="82" cy="46" r="5.5" fill="white" stroke="#0369A1" strokeWidth="1.8"/>
          <circle cx="84" cy="46" r="3" fill="#0F172A"/>
          <defs>
            <linearGradient id="fishGrad" x1="30" y1="30" x2="98" y2="77" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38BDF8"/>
              <stop offset="0.65" stopColor="#0284C7"/>
              <stop offset="1" stopColor="#F59E0B"/>
            </linearGradient>
          </defs>
        </svg>
      );
    case 3: // ນ້ຳເຕົ້າ (Golden Gourd)
      return (
        <svg viewBox="0 0 120 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M58 16C58 10 62 7 65 9" stroke="#78350F" strokeWidth="3.5" strokeLinecap="round"/>
          <circle cx="58" cy="32" r="13" fill="url(#gourdGrad)" stroke="#92400E" strokeWidth="2"/>
          <circle cx="58" cy="66" r="22" fill="url(#gourdGrad)" stroke="#92400E" strokeWidth="2"/>
          <path d="M45 44C52 46 64 46 71 44" stroke="#DC2626" strokeWidth="4" strokeLinecap="round"/>
          <path d="M70 44C80 48 84 62 80 76C78 82 85 86 90 82" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round"/>
          <text x="58" y="71" textAnchor="middle" fill="#92400E" fontSize="12" fontWeight="bold">招財</text>
          <defs>
            <radialGradient id="gourdGrad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(52 55) rotate(75) scale(36)">
              <stop stopColor="#FDE68A"/>
              <stop offset="0.55" stopColor="#F59E0B"/>
              <stop offset="1" stopColor="#B45309"/>
            </radialGradient>
          </defs>
        </svg>
      );
    case 4: // ເສືອ (Tiger)
      return (
        <svg viewBox="0 0 120 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M84 72C96 68 102 52 94 42C90 38 94 30 99 32" stroke="#F59E0B" strokeWidth="5" strokeLinecap="round"/>
          <rect x="40" y="48" width="40" height="34" rx="12" fill="#F59E0B" stroke="#78350F" strokeWidth="2"/>
          <ellipse cx="56" cy="65" rx="11" ry="14" fill="#FEF3C7"/>
          <rect x="42" y="72" width="10" height="18" rx="4" fill="#F59E0B" stroke="#78350F" strokeWidth="2"/>
          <rect x="64" y="72" width="10" height="18" rx="4" fill="#F59E0B" stroke="#78350F" strokeWidth="2"/>
          <circle cx="35" cy="23" r="7" fill="#F59E0B" stroke="#78350F" strokeWidth="2"/>
          <circle cx="69" cy="23" r="7" fill="#F59E0B" stroke="#78350F" strokeWidth="2"/>
          <circle cx="52" cy="36" r="19" fill="#F59E0B" stroke="#78350F" strokeWidth="2"/>
          <ellipse cx="52" cy="42" rx="11" ry="7" fill="#FFFBEB"/>
          <polygon points="52,40 48,36 56,36" fill="#EC4899"/>
          <circle cx="44" cy="31" r="3" fill="#1E293B"/>
          <circle cx="60" cy="31" r="3" fill="#1E293B"/>
        </svg>
      );
    case 5: // ໄກ່ (Rooster)
      return (
        <svg viewBox="0 0 120 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M70 54C86 32 104 38 100 58C96 48 84 48 74 60Z" fill="#0F172A" stroke="#0F172A" strokeWidth="1.5"/>
          <path d="M52 75V88M47 88H57" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M64 75V88M59 88H69" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M36 52C36 38 48 36 56 46C68 46 76 52 72 64C68 76 42 76 36 62Z" fill="#EA580C" stroke="#7C2D12" strokeWidth="2"/>
          <ellipse cx="57" cy="58" rx="11" ry="7" transform="rotate(-15 57 58)" fill="#B91C1C" stroke="#7F1D1D" strokeWidth="1.5"/>
          <path d="M34 25C32 16 39 14 42 19C45 14 50 18 48 24" fill="#EF4444" stroke="#991B1B" strokeWidth="1.5"/>
          <path d="M35 34C35 25 46 25 47 34L52 48H34L35 34Z" fill="#F59E0B" stroke="#9A3412" strokeWidth="2"/>
          <polygon points="34,32 25,35 34,38" fill="#FBBF24" stroke="#B45309" strokeWidth="1"/>
          <circle cx="41" cy="33" r="2" fill="#0F172A"/>
        </svg>
      );
    case 6: // ກຸ້ງ (Shrimp)
    default:
      return (
        <svg viewBox="0 0 120 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M38 28C22 15 12 18 10 28" stroke="#D97706" strokeWidth="2" strokeLinecap="round"/>
          <path d="M36 34C52 24 84 32 90 54C94 70 82 82 66 78C74 72 76 60 68 52C60 44 44 44 34 38Z" fill="url(#shrimpGrad)" stroke="#B45309" strokeWidth="2"/>
          <path d="M68 78L54 84L58 72Z" fill="#EA580C" stroke="#9A3412" strokeWidth="1.5"/>
          <circle cx="42" cy="34" r="2.5" fill="#0F172A"/>
          <defs>
            <linearGradient id="shrimpGrad" x1="36" y1="30" x2="92" y2="78" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FDBA74"/>
              <stop offset="0.5" stopColor="#F97316"/>
              <stop offset="1" stopColor="#EA580C"/>
            </linearGradient>
          </defs>
        </svg>
      );
  }
};

const ANIMALS = [
  { id: 1, name: 'ປູ', emoji: '🦀', pastelBg: 'bg-[#FFF3EE]' },
  { id: 2, name: 'ປາ', emoji: '🐟', pastelBg: 'bg-[#EEF8FF]' },
  { id: 3, name: 'ນ້ຳເຕົ້າ', emoji: '🏺', pastelBg: 'bg-[#FFF9EB]' },
  { id: 4, name: 'ເສືອ', emoji: '🐯', pastelBg: 'bg-[#FFF6EB]' },
  { id: 5, name: 'ໄກ່', emoji: '🐓', pastelBg: 'bg-[#FFF1F1]' },
  { id: 6, name: 'ກຸ້ງ', emoji: '🦐', pastelBg: 'bg-[#FFF4ED]' }
];

const STORAGE_KEYS = {
  USERS: 'lao_lrl_users_v24',
  BETS: 'lao_lrl_bets_v24',
  TXS: 'lao_lrl_txs_v24',
  ROUNDS: 'lao_lrl_rounds_v24',
  CURRENT_ROUND: 'lao_lrl_cur_round_v24',
  ACTIVE_USER: 'lao_lrl_active_uid_v24'
};

const INITIAL_USERS = [
  {
    id: 'USR-101',
    phone: '02055551122',
    name: 'ສົມໄຊ ວິໄລວັນ',
    password: '123',
    balance: 150000,
    totalDeposited: 300000,
    totalWithdrawn: 100000,
    totalBet: 120000,
    totalWon: 70000,
    status: 'active',
    createdAt: '2026-10-23 10:15'
  }
];

const INITIAL_ROUND = {
  roundId: 36260463,
  status: 'betting',
  winningAnimals: [1, 2, 4],
  timer: 2552,
  timestamp: '23/10/2026 12:08',
  prevRoundId: 36260462,
  prevTimestamp: '22/10/2026 20:08'
};

const INITIAL_ROUNDS_HISTORY = [
  { roundId: 36260462, winningAnimals: [1, 4, 6], timestamp: '22/10/2026 20:08', totalBetsVol: 80000 },
  { roundId: 36260461, winningAnimals: [5, 4, 1], timestamp: '22/10/2026 18:08', totalBetsVol: 1650000 }
];

export default function App() {
  const [appAccessMode, setAppAccessMode] = useState('auth'); // 'auth' | 'player' | 'admin'
  const [authViewMode, setAuthViewMode] = useState('login'); // 'login' | 'register' | 'admin_login'
  const [authPhone, setAuthPhone] = useState('');
  const [authPassword, setAuthPassword] = useState('');
  const [authName, setAuthName] = useState('');

  const [playerTab, setPlayerTab] = useState('bet'); // 'bet' | 'live'
  const [adminTab, setAdminTab] = useState('draw'); // 'draw' | 'create_user' | 'users' | 'requests' | 'analytics' | 'admin_live'
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [selectedDateFilter, setSelectedDateFilter] = useState('23/10/2026');

  // Persistent Database State with Cross-Tab Synchronization
  const [users, setUsers] = useState(() => {
    const s = localStorage.getItem(STORAGE_KEYS.USERS);
    return s ? JSON.parse(s) : INITIAL_USERS;
  });

  const [activeUserId, setActiveUserId] = useState(() => {
    return localStorage.getItem(STORAGE_KEYS.ACTIVE_USER) || INITIAL_USERS[0].id;
  });

  const [currentRound, setCurrentRound] = useState(() => {
    const s = localStorage.getItem(STORAGE_KEYS.CURRENT_ROUND);
    return s ? JSON.parse(s) : INITIAL_ROUND;
  });

  const [roundsHistory, setRoundsHistory] = useState(() => {
    const s = localStorage.getItem(STORAGE_KEYS.ROUNDS);
    return s ? JSON.parse(s) : INITIAL_ROUNDS_HISTORY;
  });

  const [bets, setBets] = useState(() => {
    const s = localStorage.getItem(STORAGE_KEYS.BETS);
    return s ? JSON.parse(s) : [];
  });

  const [transactions, setTransactions] = useState(() => {
    const s = localStorage.getItem(STORAGE_KEYS.TXS);
    return s ? JSON.parse(s) : [];
  });

  const [selectedAnimals, setSelectedAnimals] = useState([1, 2, 3]);
  const [betInput, setBetInput] = useState(1000);
  const [betQueue, setBetQueue] = useState([]);
  const [toast, setToast] = useState(null);
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [historyTab, setHistoryTab] = useState('slips');
  const [slipFilter, setSlipFilter] = useState('all');
  const [selectedSlipDetail, setSelectedSlipDetail] = useState(null);
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  const [showDepositModal, setShowDepositModal] = useState(false);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [depositAmount, setDepositAmount] = useState(50000);
  const [depositBank, setDepositBank] = useState('BCEL One');
  const [depositRef, setDepositRef] = useState('');
  const [depositSlipAttached, setDepositSlipAttached] = useState(false);
  const [withdrawForm, setWithdrawForm] = useState({
    amount: 50000,
    bank: 'BCEL One',
    accNumber: '010-12-00045892',
    accName: 'SOMCHAY VILAYVANH'
  });

  const [lineNotifyTx, setLineNotifyTx] = useState(null);
  const [adminLineId] = useState('@lrl888');

  const [showRulesModal, setShowRulesModal] = useState(false);
  const [rulesSubTab, setRulesSubTab] = useState('1img');

  const [showWinCelebration, setShowWinCelebration] = useState(false);
  const [lastWinSummary, setLastWinSummary] = useState(null);

  const [adminManualDice, setAdminManualDice] = useState([1, 4, 6]);
  const [userSearchQuery, setUserSearchQuery] = useState('');
  const [newUserForm, setNewUserForm] = useState({
    phone: '',
    name: '',
    password: '888' + Math.floor(100 + Math.random() * 900),
    initialBalance: 50000,
    bankName: 'BCEL One',
    bankAccount: '',
    adminNote: ''
  });
  const [createdUserCard, setCreatedUserCard] = useState(null);
  const [analyticsSortAsc, setAnalyticsSortAsc] = useState(false);

  const [chatMessages, setChatMessages] = useState([
    { id: 1, user: 'XXXXX534', text: 'ເຕົ້າແດງໆ ງວດນີ້', time: '20:56' },
    { id: 2, user: 'XXXXX770', text: 'ໃຫ້ຖືກແດ່ເດີ້ ລວຍໆ', time: '20:56' },
    { id: 3, user: 'XXXXX241', text: 'ປູຊໍ້າແນ່ນອນ', time: '20:57' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const chatScrollRef = useRef(null);

  // Admin Camera Live Stream Refs
  const adminVideoRef = useRef(null);
  const [isAdminCameraActive, setIsAdminCameraActive] = useState(false);
  const [adminCameraError, setAdminCameraError] = useState(null);

  const currentUser = useMemo(() => {
    return users.find(u => u.id === activeUserId) || users[0] || null;
  }, [users, activeUserId]);

  const audioCtxRef = useRef(null);
  const playTone = (freq, type = 'sine', duration = 0.1, gain = 0.1) => {
    if (!soundEnabled) return;
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      g.gain.setValueAtTime(gain, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
      osc.connect(g);
      g.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {}
  };

  const soundClick = () => playTone(580, 'sine', 0.05, 0.06);
  const soundSelect = () => playTone(800, 'triangle', 0.08, 0.08);
  const soundFanfare = () => {
    [523, 659, 784, 1046].forEach((f, idx) => setTimeout(() => playTone(f, 'triangle', 0.2, 0.15), idx * 90));
  };

  const triggerToast = (msg, type = 'info') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  // Cross-Tab Synchronization via BroadcastChannel & Storage Event
  const broadcastRef = useRef(null);
  useEffect(() => {
    try {
      broadcastRef.current = new BroadcastChannel('lao_lrl_sync_v24');
      broadcastRef.current.onmessage = (event) => {
        if (event.data?.type === 'SYNC') loadStorageData();
      };
    } catch (e) {}

    const handleStorageEvent = (e) => {
      if (Object.values(STORAGE_KEYS).includes(e.key)) {
        loadStorageData();
      }
    };
    window.addEventListener('storage', handleStorageEvent);

    return () => {
      broadcastRef.current?.close();
      window.removeEventListener('storage', handleStorageEvent);
    };
  }, []);

  const notifySync = () => {
    try {
      broadcastRef.current?.postMessage({ type: 'SYNC' });
    } catch (e) {}
  };

  const loadStorageData = () => {
    const u = localStorage.getItem(STORAGE_KEYS.USERS);
    const b = localStorage.getItem(STORAGE_KEYS.BETS);
    const t = localStorage.getItem(STORAGE_KEYS.TXS);
    const r = localStorage.getItem(STORAGE_KEYS.ROUNDS);
    const cr = localStorage.getItem(STORAGE_KEYS.CURRENT_ROUND);
    if (u) setUsers(JSON.parse(u));
    if (b) setBets(JSON.parse(b));
    if (t) setTransactions(JSON.parse(t));
    if (r) setRoundsHistory(JSON.parse(r));
    if (cr) setCurrentRound(JSON.parse(cr));
  };

  useEffect(() => { localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users)); }, [users]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.BETS, JSON.stringify(bets)); }, [bets]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.TXS, JSON.stringify(transactions)); }, [transactions]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.ROUNDS, JSON.stringify(roundsHistory)); }, [roundsHistory]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.CURRENT_ROUND, JSON.stringify(currentRound)); }, [currentRound]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.ACTIVE_USER, activeUserId); }, [activeUserId]);

  useEffect(() => {
    const timerId = setInterval(() => {
      loadStorageData();
      setCurrentRound(prev => {
        if (prev.status !== 'betting') return prev;
        if (prev.timer > 1) {
          return { ...prev, timer: prev.timer - 1 };
        } else {
          executeDraw(adminManualDice);
          return { ...prev, timer: 2552, status: 'betting' };
        }
      });
    }, 1000);
    return () => clearInterval(timerId);
  }, [adminManualDice, currentRound.status]);

  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [chatMessages, playerTab]);

  const startAdminCamera = async () => {
    setAdminCameraError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      if (adminVideoRef.current) {
        adminVideoRef.current.srcObject = stream;
        adminVideoRef.current.play();
      }
      setIsAdminCameraActive(true);
      triggerToast('ເປີດກ້ອງໄລສົດສຳເລັດ!', 'success');
    } catch (err) {
      setAdminCameraError('ບໍ່ສາມາດເຂົ້າເຖິງກ້ອງວິດີໂອໄດ້ (ກະລຸນາອະນຸຍາດສິດກ້ອງ)');
      triggerToast('ບໍ່ສາມາດເປີດກ້ອງໄດ້', 'error');
    }
  };

  const stopAdminCamera = () => {
    if (adminVideoRef.current && adminVideoRef.current.srcObject) {
      const stream = adminVideoRef.current.srcObject;
      stream.getTracks().forEach(track => track.stop());
      adminVideoRef.current.srcObject = null;
    }
    setIsAdminCameraActive(false);
    triggerToast('ປິດກ້ອງໄລສົດແລ້ວ', 'info');
  };

  // ==================== AUTH LOGIN & REGISTER (STRICT PHONE UNIQUE CHECK) ====================
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    soundClick();
    const phone = authPhone.trim();
    const pwd = authPassword.trim();
    if (!phone || !pwd) {
      triggerToast('ກະລຸນາປ້ອນເບີໂທ ແລະ ລະຫັດຜ່ານ', 'error');
      return;
    }

    const found = users.find(u => u.phone === phone && u.password === pwd);
    if (!found) {
      triggerToast('ເບີໂທ ຫຼື ລະຫັດຜ່ານບໍ່ຖືກຕ້ອງ!', 'error');
      return;
    }
    if (found.status === 'suspended') {
      triggerToast('ບັນຊີຂອງທ່ານຖືກລະງັບການໃຊ້ງານຊົ່ວຄາວ!', 'error');
      return;
    }

    setActiveUserId(found.id);
    setAppAccessMode('player');
    triggerToast(`ຍິນດີຕ້ອນຮັບທ່ານ ${found.name}`, 'success');
    soundFanfare();
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    soundClick();
    const phone = authPhone.trim();
    const pwd = authPassword.trim();
    const name = authName.trim();

    if (!phone || !pwd || !name) {
      triggerToast('ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບຖ້ວນ', 'error');
      return;
    }

    // STRICT UNIQUE PHONE CHECK
    const exists = users.find(u => u.phone === phone);
    if (exists) {
      triggerToast('❌ ເບີໂທລະສັບນີ້ໄດ້ລົງທະບຽນແລ້ວ! ບໍ່ສາມາດໃຊ້ຊ້ຳໄດ້', 'error');
      return;
    }

    const newUser = {
      id: 'USR-' + Math.floor(100 + Math.random() * 900),
      phone,
      name,
      password: pwd,
      balance: 50000,
      totalDeposited: 50000,
      totalWithdrawn: 0,
      totalBet: 0,
      totalWon: 0,
      status: 'active',
      createdAt: new Date().toISOString().replace('T', ' ').substring(0, 16)
    };

    setUsers(prev => [newUser, ...prev]);
    setActiveUserId(newUser.id);
    setAppAccessMode('player');
    notifySync();
    triggerToast(`ລົງທະບຽນສຳເລັດ! ຍິນດີຕ້ອນຮັບ ${name}`, 'success');
    soundFanfare();
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();
    soundClick();
    if (authPassword.trim() === 'admin888' || authPassword.trim() === '1234' || authPassword.trim() === 'admin') {
      setAppAccessMode('admin');
      triggerToast('ເຂົ້າສູ່ລະບົບແອັດມິນສຳເລັດ', 'success');
      soundFanfare();
    } else {
      triggerToast('ລະຫັດຜ່ານແອັດມິນບໍ່ຖືກຕ້ອງ', 'error');
    }
  };

  const handleAdminAddUser = (e) => {
    e.preventDefault();
    soundClick();
    const phone = newUserForm.phone.trim();
    if (!phone || !newUserForm.name.trim()) {
      triggerToast('ກະລຸນາປ້ອນຊື່ ແລະ ເບີໂທລູກຄ້າໃຫ້ຄົບຖ້ວນ', 'error');
      return;
    }

    // STRICT UNIQUE PHONE CHECK FOR ADMIN USER CREATION
    const exists = users.find(u => u.phone === phone);
    if (exists) {
      triggerToast(`❌ ເບີໂທ ${phone} ມີໃນຖານຂໍ້ມູນແລ້ວ! ບໍ່ສາມາດສ້າງຊ້ຳໄດ້`, 'error');
      return;
    }

    const initBal = Number(newUserForm.initialBalance) || 0;
    const pwd = newUserForm.password.trim() || '123456';
    const createdUser = {
      id: 'USR-' + Math.floor(100 + Math.random() * 900),
      phone,
      name: newUserForm.name.trim(),
      password: pwd,
      balance: initBal,
      totalDeposited: initBal,
      totalWithdrawn: 0,
      totalBet: 0,
      totalWon: 0,
      bankName: newUserForm.bankName || 'BCEL One',
      bankAccount: newUserForm.bankAccount?.trim() || '',
      adminNote: newUserForm.adminNote?.trim() || '',
      status: 'active',
      createdAt: new Date().toISOString().replace('T', ' ').substring(0, 16)
    };

    setUsers(prev => [createdUser, ...prev]);
    setCreatedUserCard(createdUser);
    setNewUserForm({
      phone: '',
      name: '',
      password: '888' + Math.floor(100 + Math.random() * 900),
      initialBalance: 50000,
      bankName: 'BCEL One',
      bankAccount: '',
      adminNote: ''
    });
    notifySync();
    soundFanfare();
    triggerToast(`ສ້າງບັນຊີລູກຄ້າ ${createdUser.name} ສຳເລັດ!`, 'success');
  };

  const copyToClipboard = (text, label = 'ກ໊ອບປີ້ຂໍ້ມູນສຳເລັດ!') => {
    soundSelect();
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        triggerToast(label, 'success');
      }).catch(() => {
        triggerToast(label, 'success');
      });
    } else {
      triggerToast(label, 'success');
    }
  };

  const handleAdminUpdateUserBalance = (userId, diffAmount) => {
    soundClick();
    const num = Number(diffAmount);
    if (isNaN(num) || num === 0) return;

    setUsers(prev => prev.map(u => {
      if (u.id === userId) {
        const newBal = Math.max(0, u.balance + num);
        return {
          ...u,
          balance: newBal,
          totalDeposited: num > 0 ? u.totalDeposited + num : u.totalDeposited,
          totalWithdrawn: num < 0 ? u.totalWithdrawn + Math.abs(num) : u.totalWithdrawn
        };
      }
      return u;
    }));
    notifySync();
    triggerToast('ປັບປຸງຍອດເງິນລູກຄ້າສຳເລັດ', 'success');
  };

  const handleToggleUserStatus = (userId) => {
    soundClick();
    setUsers(prev => prev.map(u => {
      if (u.id === userId) {
        return { ...u, status: u.status === 'active' ? 'suspended' : 'active' };
      }
      return u;
    }));
    notifySync();
    triggerToast('ອັບເດດສະຖານະບັນຊີແລ້ວ', 'info');
  };

  // ==================== EXACT PAYOUT RULES ====================
  // - 1 ໂຕ (ແທງດ່ຽວ): ຖ້າອອກ 1 ໂຕ (1 ໃນ 3) ໄດ້ x2 ເທົ່າ + ຕົ້ນທຶນ (Total = amount * 3)
  // - 2 ໂຕ (ເຕັດຄູ່): ຖ້າອອກກົງທັງ 2 ໂຕ ໄດ້ x6 ເທົ່າ + ຕົ້ນທຶນ (Total = amount * 7)
  // - 3 ໂຕ (ຊຸດ 3 ໂຕ): ຖ້າອອກກົງທັງ 3 ໂຕ ໄດ້ x20 ເທົ່າ + ຕົ້ນທຶນ (Total = amount * 21)
  const calculateWin = (betItem, winningDices) => {
    const { animals, amount } = betItem;
    const activeThreeDices = winningDices.slice(0, 3);

    if (animals.length === 1) {
      const targetId = animals[0];
      const matchCount = activeThreeDices.filter(id => id === targetId).length;
      if (matchCount > 0) {
        const winTotal = amount * (matchCount === 1 ? 3 : (matchCount === 2 ? 4 : 5));
        return { win: winTotal, label: `x${matchCount * 2} ເທົ່າ + ຕົ້ນທຶນ (ອອກ ${matchCount} ໂຕ)` };
      }
      return { win: 0, label: 'ບໍ່ຖືກລາງວັນ' };
    }

    if (animals.length === 2) {
      const [a, b] = animals;
      const countA = activeThreeDices.filter(id => id === a).length;
      const countB = activeThreeDices.filter(id => id === b).length;
      if (countA > 0 && countB > 0) {
        return { win: amount * 7, label: 'x6 ເທົ່າ + ຕົ້ນທຶນ (ຖືກຄູ່ເຕັດ)' };
      }
      return { win: 0, label: 'ບໍ່ຖືກລາງວັນ' };
    }

    if (animals.length === 3) {
      const sortedWin = [...activeThreeDices].sort().join(',');
      const sortedBet = [...animals].sort().join(',');
      if (sortedWin === sortedBet) {
        return { win: amount * 21, label: 'x20 ເທົ່າ + ຕົ້ນທຶນ (ຖືກຊຸດ 3 ໂຕ)' };
      }
      return { win: 0, label: 'ບໍ່ຖືກລາງວັນ' };
    }

    return { win: 0, label: 'ບໍ່ຖືກລາງວັນ' };
  };

  const handleToggleAnimal = (animalId) => {
    soundSelect();
    if (selectedAnimals.length < 3) {
      setSelectedAnimals([...selectedAnimals, animalId]);
    } else {
      setSelectedAnimals([selectedAnimals[1], selectedAnimals[2], animalId]);
    }
  };

  const handleRandomAnimals = () => {
    soundSelect();
    const r1 = Math.floor(Math.random() * 6) + 1;
    const r2 = Math.floor(Math.random() * 6) + 1;
    const r3 = Math.floor(Math.random() * 6) + 1;
    setSelectedAnimals([r1, r2, r3]);
    triggerToast('ສຸ່ມເລືອກເລກສັດນຳໂຊກ 3 ປ່ອງແລ້ວ!', 'info');
  };

  const handleлотоAddToQueue = () => {
    if (selectedAnimals.length === 0) {
      triggerToast('ກະລຸນາເລືອກຕົວສັດຢ່າງໜ້ອຍ 1 ຕົວ', 'error');
      return;
    }
    const amount = Number(betInput);
    if (isNaN(amount) || amount < 1000) {
      triggerToast('ຈຳນວນເງິນແທງຂັ້ນຕ່ຳ 1,000 ₭', 'error');
      return;
    }
    soundSelect();
    setBetQueue(prev => [...prev, {
      id: Date.now() + Math.random(),
      animals: [...selectedAnimals],
      amount
    }]);
    setSelectedAnimals([1, 2]);
    triggerToast('ເພີ່ມລາຍການລົງໃນບິນແລ້ວ', 'success');
  };

  const handleRemoveFromQueue = (index) => {
    soundClick();
    setBetQueue(prev => prev.filter((_, i) => i !== index));
  };

  const handleConfirmBet = () => {
    if (!currentUser) {
      setAppAccessMode('auth');
      return;
    }

    let itemsToProcess = [...betQueue];
    if (itemsToProcess.length === 0) {
      if (selectedAnimals.length === 0) {
        triggerToast('ກະລຸນາເລືອກຕົວສັດຢ່າງໜ້ອຍ 1 ຕົວ', 'error');
        return;
      }
      const amount = Number(betInput);
      if (isNaN(amount) || amount < 1000) {
        triggerToast('ຈຳນວນເງິນແທງຂັ້ນຕ່ຳ 1,000 ₭', 'error');
        return;
      }
      itemsToProcess = [{
        id: Date.now(),
        animals: [...selectedAnimals],
        amount
      }];
    }

    const totalCost = itemsToProcess.reduce((sum, item) => sum + item.amount, 0);

    if (currentUser.balance < totalCost) {
      triggerToast('ຍອດເງິນບໍ່ພຽງພໍ! ກະລຸນາກົດ "ເຕີມເງິນ"', 'error');
      setShowDepositModal(true);
      return;
    }

    setUsers(prev => prev.map(u => {
      if (u.id === currentUser.id) {
        return {
          ...u,
          balance: u.balance - totalCost,
          totalBet: u.totalBet + totalCost
        };
      }
      return u;
    }));

    const nowStr = new Date().toLocaleDateString('en-GB') + ' ' + new Date().toTimeString().substring(0, 8);
    const slipId = currentRound.roundId + 'A' + Math.random().toString(36).substring(2, 8).toUpperCase() + Math.floor(100 + Math.random() * 900);
    const refNo = new Date().toISOString().slice(0, 10).replace(/-/g, '') + Math.floor(1000000 + Math.random() * 9000000);

    const evaluatedItems = itemsToProcess.map(item => {
      const type = item.animals.length === 1 ? 'single' : (item.animals.length === 2 ? 'pair' : 'triple');
      const potWin = type === 'single' ? item.amount * 3 : (type === 'pair' ? item.amount * 7 : item.amount * 21);
      return {
        animals: item.animals,
        betType: type,
        amount: item.amount,
        potentialWin: potWin,
        actualWin: 0,
        status: 'pending',
        payoutLabel: 'ລໍຖ້າຜົນອອກ'
      };
    });

    const newSlip = {
      id: slipId,
      refCode: refNo,
      roundId: currentRound.roundId,
      drawTime: currentRound.timestamp || '23/10/2026 12:08',
      userId: currentUser.id,
      userName: currentUser.name,
      userPhone: currentUser.phone,
      items: evaluatedItems,
      amount: totalCost,
      potentialWin: evaluatedItems.reduce((s, item) => s + item.potentialWin, 0),
      actualWin: 0,
      status: 'pending',
      payoutLabel: 'ລໍຖ້າຜົນອອກ',
      winningAnimals: null,
      timestamp: nowStr
    };

    setBets(prev => [newSlip, ...prev]);
    setBetQueue([]);
    soundFanfare();
    notifySync();
    triggerToast(`ຢືນຢັນການຊື້ສຳເລັດ (${fmt(totalCost)} ₭)`, 'success');
    setSelectedSlipDetail(newSlip);
  };

  const executeDraw = (winningDices) => {
    soundSelect();
    const finalDice = winningDices && winningDices.length >= 3 ? winningDices.slice(0, 3) : [
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1
    ];

    const roundId = currentRound.roundId;
    let roundTotalVol = 0;
    const userPayouts = {};

    const updatedBets = bets.map(b => {
      if (b.roundId === roundId && b.status === 'pending') {
        roundTotalVol += b.amount;
        const rawItems = b.items && b.items.length > 0
          ? b.items
          : [{ animals: b.animals, betType: b.betType, amount: b.amount }];

        let slipTotalWin = 0;
        let wonCount = 0;
        const evaluatedItems = rawItems.map(item => {
          const res = calculateWin(item, finalDice);
          if (res.win > 0) {
            slipTotalWin += res.win;
            wonCount += 1;
            return { ...item, actualWin: res.win, status: 'won', payoutLabel: res.label };
          }
          return { ...item, actualWin: 0, status: 'lost', payoutLabel: 'ບໍ່ຖືກລາງວັນ' };
        });

        if (slipTotalWin > 0) {
          userPayouts[b.userId] = (userPayouts[b.userId] || 0) + slipTotalWin;
          return {
            ...b,
            items: evaluatedItems,
            actualWin: slipTotalWin,
            status: 'won',
            payoutLabel: `ຖືກລາງວັນ ${wonCount} ລາຍການ`,
            winningAnimals: finalDice
          };
        } else {
          return {
            ...b,
            items: evaluatedItems,
            actualWin: 0,
            status: 'lost',
            payoutLabel: 'ບໍ່ຖືກລາງວັນ',
            winningAnimals: finalDice
          };
        }
      }
      return b;
    });

    setBets(updatedBets);
    if (selectedSlipDetail && selectedSlipDetail.roundId === roundId) {
      const refreshed = updatedBets.find(x => x.id === selectedSlipDetail.id);
      if (refreshed) setSelectedSlipDetail(refreshed);
    }

    setUsers(prev => prev.map(u => {
      const wonAmt = userPayouts[u.id] || 0;
      if (wonAmt > 0) {
        return {
          ...u,
          balance: u.balance + wonAmt,
          totalWon: u.totalWon + wonAmt
        };
      }
      return u;
    }));

    const nowFormatted = new Date().toLocaleDateString('en-GB') + ' ' + new Date().toTimeString().substring(0, 5);
    const completedRound = {
      roundId,
      winningAnimals: finalDice,
      timestamp: nowFormatted,
      totalBetsVol: roundTotalVol
    };
    setRoundsHistory(prev => [completedRound, ...prev]);

    const nextRound = {
      roundId: roundId + 1,
      status: 'betting',
      winningAnimals: finalDice,
      timer: 2552,
      timestamp: '23/10/2026 12:08',
      prevRoundId: roundId,
      prevTimestamp: nowFormatted
    };
    setCurrentRound(nextRound);

    const myWinnings = userPayouts[activeUserId] || 0;
    if (myWinnings > 0) {
      setLastWinSummary({
        roundId,
        amount: myWinnings,
        dices: finalDice
      });
      setShowWinCelebration(true);
      soundFanfare();
    }

    notifySync();
    triggerToast(`ອອກລາງວັນງວດ #${roundId} ຮຽບຮ້ອຍແລ້ວ!`, 'success');
  };

  const handleRequestDeposit = (e) => {
    e.preventDefault();
    soundClick();
    if (!currentUser) return;
    const amt = Number(depositAmount);
    if (isNaN(amt) || amt < 20000) {
      triggerToast('ຈຳນວນເງິນເຕີມຂັ້ນຕ່ຳ 20,000 ₭', 'error');
      return;
    }

    const refCode = depositRef.trim() || ('REF' + Math.floor(100000 + Math.random() * 900000));
    const newTx = {
      id: 'TX-DEP-' + Math.floor(1000 + Math.random() * 9000),
      userId: currentUser.id,
      userName: currentUser.name,
      userPhone: currentUser.phone,
      type: 'deposit',
      amount: amt,
      bank: depositBank,
      accNumber: refCode,
      accName: currentUser.name,
      slipProof: depositSlipAttached ? 'bcel_slip_attached.jpg' : 'bcel_proof_verified.jpg',
      status: 'pending',
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 16),
      adminNote: 'ລໍຖ້າແອັດມິນກວດສອບສະເຕດເມັ້ນທາງ LINE'
    };

    setTransactions(prev => [newTx, ...prev]);
    setShowDepositModal(false);
    setDepositRef('');
    setDepositSlipAttached(false);
    setLineNotifyTx(newTx);
    notifySync();
    soundFanfare();
    triggerToast('ບັນທຶກຄຳຂໍແລ້ວ! ກະລຸນາສະແກນສົ່ງແຈ້ງແອັດມິນທາງ LINE', 'success');
  };

  const handleRequestWithdraw = (e) => {
    e.preventDefault();
    soundClick();
    if (!currentUser) return;
    const amt = Number(withdrawForm.amount);
    if (isNaN(amt) || amt < 20000) {
      triggerToast('ຈຳນວນເງິນຖອນຂັ້ນຕ່ຳ 20,000 ₭', 'error');
      return;
    }
    if (currentUser.balance < amt) {
      triggerToast('ຍອດເງິນຂອງທ່ານບໍ່ພຽງພໍ!', 'error');
      return;
    }

    setUsers(prev => prev.map(u => u.id === currentUser.id ? { ...u, balance: u.balance - amt } : u));

    const newTx = {
      id: 'TX-WTH-' + Math.floor(1000 + Math.random() * 9000),
      userId: currentUser.id,
      userName: currentUser.name,
      userPhone: currentUser.phone,
      type: 'withdraw',
      amount: amt,
      bank: withdrawForm.bank,
      accNumber: withdrawForm.accNumber,
      accName: withdrawForm.accName,
      slipProof: null,
      status: 'pending',
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 16),
      adminNote: 'ລໍຖ້າແອັດມິນກວດສອບທາງ LINE ແລະ ໂອນເງິນ'
    };

    setTransactions(prev => [newTx, ...prev]);
    setShowWithdrawModal(false);
    setLineNotifyTx(newTx);
    notifySync();
    soundFanfare();
    triggerToast('ບັນທຶກຄຳຂໍຖອນແລ້ວ! ກະລຸນາສະແກນສົ່ງແຈ້ງແອັດມິນທາງ LINE', 'info');
  };

  const handleAdminApproveTx = (txId) => {
    soundFanfare();
    const tx = transactions.find(t => t.id === txId);
    if (!tx || tx.status !== 'pending') return;

    if (tx.type === 'deposit') {
      setUsers(prev => prev.map(u => {
        if (u.id === tx.userId) {
          return {
            ...u,
            balance: u.balance + tx.amount,
            totalDeposited: u.totalDeposited + tx.amount
          };
        }
        return u;
      }));
    } else {
      setUsers(prev => prev.map(u => {
        if (u.id === tx.userId) {
          return {
            ...u,
            totalWithdrawn: u.totalWithdrawn + tx.amount
          };
        }
        return u;
      }));
    }

    setTransactions(prev => prev.map(t => t.id === txId ? { ...t, status: 'approved', adminNote: 'ແອັດມິນອະນຸມັດຮຽບຮ້ອຍ' } : t));
    notifySync();
    triggerToast(`ອະນຸມັດລາຍການ ${txId} ສຳເລັດ`, 'success');
  };

  const handleAdminRejectTx = (txId) => {
    soundClick();
    const tx = transactions.find(t => t.id === txId);
    if (!tx || tx.status !== 'pending') return;

    if (tx.type === 'withdraw') {
      setUsers(prev => prev.map(u => u.id === tx.userId ? { ...u, balance: u.balance + tx.amount } : u));
    }

    setTransactions(prev => prev.map(t => t.id === txId ? { ...t, status: 'rejected', adminNote: 'ປະຕິເສດໂດຍແອັດມິນ' } : t));
    notifySync();
    triggerToast(`ປະຕິເສດລາຍການ ${txId} ແລ້ວ`, 'info');
  };

  const currentRoundBets = useMemo(() => {
    return bets.filter(b => b.roundId === currentRound.roundId);
  }, [bets, currentRound.roundId]);

  const animalAnalytics = useMemo(() => {
    const stats = ANIMALS.map(a => {
      let totalAmount = 0;
      let totalCount = 0;
      currentRoundBets.forEach(bet => {
        const subItems = bet.items && bet.items.length > 0
          ? bet.items
          : [{ animals: bet.animals, amount: bet.amount }];
        subItems.forEach(sub => {
          if (sub.animals.includes(a.id)) {
            totalAmount += sub.amount;
            totalCount += 1;
          }
        });
      });
      return { ...a, totalAmount, totalCount };
    });

    return stats.sort((a, b) => {
      return analyticsSortAsc ? a.totalAmount - b.totalAmount : b.totalAmount - a.totalAmount;
    });
  }, [currentRoundBets, analyticsSortAsc]);

  const mySlipsSummary = useMemo(() => {
    const myBets = bets.filter(b => b.userId === currentUser?.id);
    const totalSpent = myBets.reduce((s, b) => s + (b.amount || 0), 0);
    const totalWon = myBets.reduce((s, b) => s + (b.actualWin || 0), 0);
    const wonCount = myBets.filter(b => b.status === 'won').length;
    const lostCount = myBets.filter(b => b.status === 'lost').length;
    const pendingCount = myBets.filter(b => b.status === 'pending').length;
    return { myBets, totalSpent, totalWon, wonCount, lostCount, pendingCount };
  }, [bets, currentUser]);

  const totalCurrentPool = useMemo(() => {
    return currentRoundBets.reduce((acc, b) => acc + b.amount, 0);
  }, [currentRoundBets]);

  const filteredUsers = useMemo(() => {
    const q = userSearchQuery.trim().toLowerCase();
    if (!q) return users;
    return users.filter(u => u.name.toLowerCase().includes(q) || u.phone.includes(q));
  }, [users, userSearchQuery]);

  const fmt = (num) => Number(num || 0).toLocaleString('en-US');

  const timerParts = useMemo(() => {
    const total = Math.max(0, currentRound.timer || 0);
    const days = Math.floor(total / 86400);
    const hours = Math.floor((total % 86400) / 3600);
    const mins = Math.floor((total % 3600) / 60);
    const secs = total % 60;
    return {
      d: String(days).padStart(2, '0'),
      h: String(hours).padStart(2, '0'),
      m: String(mins).padStart(2, '0'),
      s: String(secs).padStart(2, '0')
    };
  }, [currentRound.timer]);

  const showcaseRowAnimals = useMemo(() => {
    const win3 = currentRound.winningAnimals.slice(0, 3);
    return [...win3, 6, 5].slice(0, 5);
  }, [currentRound.winningAnimals]);

  return (
    <div className="min-h-screen bg-[#FFF5F5] text-slate-900 flex justify-center selection:bg-[#EF4136] selection:text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
        *, body, button, input, select, textarea {
          font-family: 'Noto Sans Lao', 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif !important;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        .font-num {
          font-family: 'Plus Jakarta Sans', 'Noto Sans Lao', sans-serif !important;
          letter-spacing: -0.02em;
        }
      `}</style>

      {toast && (
        <div className={`fixed top-14 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-2xl shadow-2xl flex items-center gap-2 text-xs font-extrabold animate-bounce border ${
          toast.type === 'error' ? 'bg-[#EF4136] text-white border-red-800' :
          toast.type === 'success' ? 'bg-[#DC2626] text-white border-white/40' :
          'bg-white text-[#EF4136] border-red-200'
        }`}>
          <span>{toast.type === 'error' ? '⚠️' : (toast.type === 'success' ? '✅' : '✨')}</span>
          <span>{toast.msg}</span>
        </div>
      )}

      {/* Main Container */}
      <div className="w-full max-w-md bg-[#FAFAFA] min-h-screen flex flex-col shadow-2xl relative overflow-x-hidden border-x border-red-100">

        {/* ========================================================================= */}
        {/* ==================== 0. AUTH LOGIN & REGISTER VIEW ====================== */}
        {/* ========================================================================= */}
        {appAccessMode === 'auth' && (
          <div className="flex-1 bg-gradient-to-br from-[#EF4136] via-[#DC2626] to-[#991B1B] text-white flex flex-col justify-between p-6 relative overflow-hidden">
            <div className="absolute -right-12 -top-10 opacity-15 pointer-events-none">
              <WhiteLotusLogo className="w-64 h-64" />
            </div>

            <div className="pt-8 text-center relative z-10 space-y-2">
              <div className="w-20 h-20 rounded-3xl bg-white/15 backdrop-blur-md mx-auto flex items-center justify-center border border-white/30 shadow-xl">
                <WhiteLotusLogo className="w-12 h-12" />
              </div>
              <h1 className="text-2xl font-black tracking-tight text-white drop-shadow-md">
                ປູປາເຕົ້າ ລວຍ ລວຍ ລວຍ
              </h1>
              <p className="text-xs text-red-100 font-medium">
                ລະບົບສ່ຽງໂຊກມະຫາໂຊກ ປອດໄພ 100%
              </p>
            </div>

            <div className="bg-white text-slate-900 rounded-[32px] p-6 shadow-2xl relative z-10 my-auto border border-red-100 space-y-4">
              <div className="flex bg-red-50 p-1 rounded-2xl text-xs font-extrabold">
                <button
                  type="button"
                  onClick={() => { soundClick(); setAuthViewMode('login'); }}
                  className={`flex-1 py-2 rounded-xl transition ${authViewMode === 'login' ? 'bg-[#EF4136] text-white shadow-sm' : 'text-slate-600'}`}
                >
                  ລູກຄ້າເຂົ້າລະບົບ
                </button>
                <button
                  type="button"
                  onClick={() => { soundClick(); setAuthViewMode('register'); }}
                  className={`flex-1 py-2 rounded-xl transition ${authViewMode === 'register' ? 'bg-[#EF4136] text-white shadow-sm' : 'text-slate-600'}`}
                >
                  ສະໝັກສະມາຊິກ
                </button>
                <button
                  type="button"
                  onClick={() => { soundClick(); setAuthViewMode('admin_login'); }}
                  className={`flex-1 py-2 rounded-xl transition ${authViewMode === 'admin_login' ? 'bg-slate-900 text-amber-300 shadow-sm' : 'text-slate-600'}`}
                >
                  ແອັດມິນ
                </button>
              </div>

              {authViewMode === 'login' ? (
                <form onSubmit={handleLoginSubmit} className="space-y-3.5 text-xs">
                  <div>
                    <label className="text-slate-700 font-bold block mb-1">ເບີໂທລະສັບ (User):</label>
                    <input
                      type="tel"
                      required
                      placeholder="020xxxxxxxx"
                      value={authPhone}
                      onChange={(e) => setAuthPhone(e.target.value)}
                      className="w-full bg-slate-50 border border-red-200 rounded-2xl px-3.5 py-3 text-[#EF4136] font-num font-extrabold focus:border-[#EF4136] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-slate-700 font-bold block mb-1">ລະຫັດຜ່ານ:</label>
                    <input
                      type="password"
                      required
                      placeholder="••••••"
                      value={authPassword}
                      onChange={(e) => setAuthPassword(e.target.value)}
                      className="w-full bg-slate-50 border border-red-200 rounded-2xl px-3.5 py-3 text-slate-900 font-num font-bold focus:border-[#EF4136] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#EF4136] hover:bg-[#DC2626] text-white font-black py-3.5 rounded-2xl shadow-md transition active:scale-95 text-sm"
                  >
                    ເຂົ້າສູ່ລະບົບລູກຄ້າ
                  </button>
                </form>
              ) : authViewMode === 'register' ? (
                <form onSubmit={handleRegisterSubmit} className="space-y-3 text-xs">
                  <div>
                    <label className="text-slate-700 font-bold block mb-1">ຊື່ ແລະ ນາມສະກຸນ:</label>
                    <input
                      type="text"
                      required
                      placeholder="ທ້າວ ສົມໄຊ ວິໄລວັນ"
                      value={authName}
                      onChange={(e) => setAuthName(e.target.value)}
                      className="w-full bg-slate-50 border border-red-200 rounded-2xl px-3.5 py-2.5 text-slate-900 focus:border-[#EF4136] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-slate-700 font-bold block mb-1">ເບີໂທລະສັບ (User ເຂົ້າລະບົບ - ຫ້າມຊ້ຳ):</label>
                    <input
                      type="tel"
                      required
                      placeholder="020xxxxxxxx"
                      value={authPhone}
                      onChange={(e) => setAuthPhone(e.target.value)}
                      className="w-full bg-slate-50 border border-red-200 rounded-2xl px-3.5 py-2.5 text-[#EF4136] font-num font-extrabold focus:border-[#EF4136] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-slate-700 font-bold block mb-1">ລະຫັດຜ່ານ:</label>
                    <input
                      type="password"
                      required
                      placeholder="••••••"
                      value={authPassword}
                      onChange={(e) => setAuthPassword(e.target.value)}
                      className="w-full bg-slate-50 border border-red-200 rounded-2xl px-3.5 py-2.5 text-slate-900 font-num font-bold focus:border-[#EF4136] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#EF4136] hover:bg-[#DC2626] text-white font-black py-3.5 rounded-2xl shadow-md transition active:scale-95 text-sm"
                  >
                    ລົງທະບຽນບັນຊີໃໝ່ (+50,000 ₭)
                  </button>
                </form>
              ) : (
                <form onSubmit={handleAdminLogin} className="space-y-3.5 text-xs">
                  <div>
                    <label className="text-slate-700 font-bold block mb-1">ລະຫັດຜ່ານແອັດມິນ:</label>
                    <input
                      type="password"
                      required
                      placeholder="••••••••"
                      value={authPassword}
                      onChange={(e) => setAuthPassword(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-3.5 py-3 text-slate-900 font-num font-bold focus:border-slate-900 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-slate-900 hover:bg-slate-800 text-amber-300 font-black py-3.5 rounded-2xl shadow-md transition active:scale-95 text-sm flex items-center justify-center gap-1.5"
                  >
                    <Shield className="w-4 h-4" />
                    <span>ເຂົ້າສູ່ລະບົບແອັດມິນ</span>
                  </button>
                </form>
              )}
            </div>

            <div className="text-center text-[11px] text-red-200 font-medium">
              ປູປາເຕົ້າ ລວຍ ລວຍ ລວຍ • ລຸ້ນໂຊກ ຮອບດ້ານ
            </div>
          </div>
        )}

        {/* ==================== UNIFIED PLAYER HEADER ==================== */}
        {appAccessMode === 'player' && (
          <header className="bg-gradient-to-br from-[#EF4136] via-[#E02D22] to-[#C81E14] text-white sticky top-0 z-40 shadow-md overflow-hidden">
            <div className="absolute -right-8 -top-6 opacity-15 pointer-events-none">
              <WhiteLotusLogo className="w-36 h-36" />
            </div>

            {/* Row 1: Lotus Logo + Title + Date Selector */}
            <div className="px-4 pt-3.5 pb-2 flex items-center justify-between relative z-10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-2xl bg-white/15 backdrop-blur-xs flex items-center justify-center border border-white/25 shadow-xs">
                  <WhiteLotusLogo className="w-5 h-5" />
                </div>
                <div>
                  <h1 className="text-[17px] font-black tracking-tight text-white leading-tight drop-shadow-xs">
                    ປູປາເຕົ້າ ລວຍ ລວຍ ລວຍ
                  </h1>
                  <p className="text-[10px] text-red-100 font-medium leading-none mt-0.5">
                    ເລກມະຫາໂຊກ ວັນນີ້ ແລະ ວັນທີ່ຜ່ານມາ
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => {
                    soundClick();
                    setShowHistoryModal(true);
                    setHistoryTab('results');
                  }}
                  className="bg-white/15 hover:bg-white/25 border border-white/40 rounded-full px-2.5 py-1.5 flex items-center gap-1 text-xs font-bold text-white transition active:scale-95 shadow-2xs"
                >
                  <Calendar className="w-3.5 h-3.5 text-white" />
                  <span className="font-num text-[11px]">{selectedDateFilter}</span>
                  <ChevronDown className="w-3.5 h-3.5 opacity-90" />
                </button>

                <button
                  onClick={() => {
                    soundClick();
                    setAppAccessMode('auth');
                    setAuthViewMode('login');
                  }}
                  className="w-7 h-7 rounded-full bg-white/15 hover:bg-white/25 border border-white/35 flex items-center justify-center text-white transition active:scale-95"
                  title="ອອກຈາກລະບົບ"
                >
                  <LogOut className="w-3.5 h-3.5 text-red-200" />
                </button>
              </div>
            </div>

            {/* Row 2: Mode Switcher Tabs (ກະດານແທງ | ຖ່າຍທອດສົດ) + Wallet Ribbon */}
            <div className="px-3.5 pb-3 pt-1 flex items-center justify-between gap-2 relative z-10">
              <div className="bg-black/20 p-1 rounded-full border border-white/25 flex items-center flex-1">
                <button
                  onClick={() => {
                    soundClick();
                    setPlayerTab('bet');
                  }}
                  className={`flex-1 py-1.5 px-2 rounded-full text-xs font-extrabold transition flex items-center justify-center gap-1 ${
                    playerTab === 'bet' ? 'bg-white text-[#EF4136] shadow-sm' : 'text-white hover:bg-white/10'
                  }`}
                >
                  <span>ກະດານແທງ</span>
                </button>

                <button
                  onClick={() => {
                    soundClick();
                    setPlayerTab('live');
                  }}
                  className={`flex-1 py-1.5 px-2 rounded-full text-xs font-extrabold transition flex items-center justify-center gap-1 ${
                    playerTab === 'live' ? 'bg-white text-[#EF4136] shadow-sm' : 'text-white hover:bg-white/10'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${playerTab === 'live' ? 'bg-[#EF4136]' : 'bg-amber-300'} animate-ping`}></span>
                  <span>ຖ່າຍທອດສົດ</span>
                </button>
              </div>

              <div className="bg-black/20 border border-white/25 rounded-2xl px-2.5 py-1.5 flex items-center gap-2">
                <div onClick={() => setShowUserDropdown(!showUserDropdown)} className="cursor-pointer text-right">
                  <div className="text-[9px] text-red-100 font-semibold leading-none flex items-center justify-end gap-0.5">
                    <span className="truncate max-w-[64px]">{currentUser?.name}</span>
                    <ChevronDown className="w-2.5 h-2.5" />
                  </div>
                  <div className="text-xs font-black font-num text-white leading-tight mt-0.5">
                    {fmt(currentUser?.balance)} ₭
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <button
                    onClick={() => { soundClick(); setShowDepositModal(true); }}
                    className="bg-white hover:bg-red-50 text-[#EF4136] text-[10px] font-extrabold px-2 py-0.5 rounded-md shadow-2xs transition active:scale-95 leading-tight"
                  >
                    +ເຕີມ
                  </button>
                  <button
                    onClick={() => { soundClick(); setShowWithdrawModal(true); }}
                    className="bg-red-900/70 hover:bg-red-950 text-white border border-white/30 text-[10px] font-extrabold px-2 py-0.5 rounded-md transition active:scale-95 leading-tight"
                  >
                    ຖອນ
                  </button>
                </div>
              </div>
            </div>

            {showUserDropdown && (
              <div className="bg-white text-slate-800 px-4 py-2.5 border-t border-red-100 flex items-center justify-between text-xs">
                <div>
                  <span className="text-[10px] text-slate-400 block">ເບີໂທຜູ້ໃຊ້ປັດຈຸບັນ:</span>
                  <span className="font-extrabold text-slate-900">{currentUser?.name} <span className="text-[#EF4136] font-num">({currentUser?.phone})</span></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => {
                      setShowHistoryModal(true);
                      setHistoryTab('tx');
                      setShowUserDropdown(false);
                    }}
                    className="bg-red-50 text-[#EF4136] border border-red-200 px-2.5 py-1 rounded-xl font-bold text-[11px]"
                  >
                    ປະຫວັດເຕີມ-ຖອນ
                  </button>
                  <button
                    onClick={() => {
                      setAppAccessMode('auth');
                      setAuthViewMode('login');
                      setShowUserDropdown(false);
                    }}
                    className="bg-[#EF4136] text-white px-2.5 py-1 rounded-xl font-bold text-[11px]"
                  >
                    ອອກຈາກລະບົບ
                  </button>
                </div>
              </div>
            )}
          </header>
        )}

        {/* ========================================================================= */}
        {/* ==================== UNIFIED ADMIN HEADER =============================== */}
        {/* ========================================================================= */}
        {appAccessMode === 'admin' && (
          <header className="bg-gradient-to-r from-[#EF4136] via-[#DC2626] to-[#B91C1C] text-white p-3.5 sticky top-0 z-40 border-b border-red-200 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-2xl bg-white text-[#EF4136] flex items-center justify-center font-black shadow-xs">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-sm font-black text-white leading-tight">ແຜງຄວບຄຸມແອັດມິນ</h2>
                <p className="text-[10px] text-red-100">ງວດ #{currentRound.roundId} • ລູກຄ້າ {users.length} ຄົນ</p>
              </div>
            </div>

            <button
              onClick={() => {
                soundClick();
                setAppAccessMode('auth');
                setAuthViewMode('admin_login');
              }}
              className="bg-white hover:bg-red-50 text-[#EF4136] text-xs font-extrabold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-sm transition active:scale-95"
            >
              <span>ອອກຈາກລະບົບແອັດມິນ</span>
              <LogOut className="w-3.5 h-3.5" />
            </button>
          </header>
        )}

        {/* ========================================================================= */}
        {/* ==================== 1. PLAYER VIEW ===================================== */}
        {/* ========================================================================= */}
        {appAccessMode === 'player' && (
          <div className="flex-1 flex flex-col">
            {playerTab === 'bet' && (
              <div className="flex-1 px-3.5 py-3.5 space-y-3.5 pb-6">

                {/* CARD 1: TODAY'S DRAW & COUNTDOWN */}
                <div className="bg-[#FFF5F5] rounded-[24px] p-4 border border-red-200/80 shadow-xs relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#EF4136] text-white flex items-center justify-center shadow-xs flex-shrink-0">
                        <Calendar className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <div className="flex items-baseline gap-1.5 flex-wrap">
                        <span className="text-[17px] font-black text-slate-900">ວັນນີ້</span>
                        <span className="text-[13px] font-bold text-slate-600 font-num">
                          {currentRound.timestamp || '23/10/2026 12:08'}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        soundClick();
                        setShowHistoryModal(true);
                        setHistoryTab('slips');
                      }}
                      className="bg-[#EF4136] hover:bg-[#DC2626] text-white text-xs font-extrabold px-3 py-1.5 rounded-full shadow-xs transition active:scale-95 flex-shrink-0"
                    >
                      ບິນລາງວັນ
                    </button>
                  </div>

                  <div className="mt-2.5 flex items-center gap-1.5">
                    <span className="text-[#EF4136] font-black text-xs select-none">⚡</span>
                    <span className="text-[14px] font-extrabold text-[#EF4136]">
                      ປິດການຂາຍໃນອີກ:
                    </span>
                  </div>

                  <div className="mt-2 flex items-center justify-between gap-2">
                    <div className="grid grid-cols-4 gap-1.5 flex-1">
                      <div className="bg-white border border-red-200/90 rounded-2xl py-2 px-1 flex flex-col items-center justify-center shadow-2xs">
                        <span className="text-[20px] font-black text-[#EF4136] font-num leading-none">
                          {timerParts.d}
                        </span>
                        <span className="text-[10px] font-bold text-slate-700 mt-1">ມື້</span>
                      </div>
                      <div className="bg-white border border-red-200/90 rounded-2xl py-2 px-1 flex flex-col items-center justify-center shadow-2xs">
                        <span className="text-[20px] font-black text-[#EF4136] font-num leading-none">
                          {timerParts.h}
                        </span>
                        <span className="text-[10px] font-bold text-slate-700 mt-1">ຊົ່ວໂມງ</span>
                      </div>
                      <div className="bg-white border border-red-200/90 rounded-2xl py-2 px-1 flex flex-col items-center justify-center shadow-2xs">
                        <span className="text-[20px] font-black text-[#EF4136] font-num leading-none">
                          {timerParts.m}
                        </span>
                        <span className="text-[10px] font-bold text-slate-700 mt-1">ນາທີ</span>
                      </div>
                      <div className="bg-white border border-red-200/90 rounded-2xl py-2 px-1 flex flex-col items-center justify-center shadow-2xs">
                        <span className="text-[20px] font-black text-[#EF4136] font-num leading-none">
                          {timerParts.s}
                        </span>
                        <span className="text-[10px] font-bold text-slate-700 mt-1">ວິນາທີ</span>
                      </div>
                    </div>

                    <div className="flex-shrink-0 -mr-1">
                      <RedLotusCoinArtwork className="w-20 h-16" />
                    </div>
                  </div>
                </div>

                {/* CARD 2: LATEST DRAW RESULT */}
                <div className="bg-white rounded-[24px] p-3.5 border border-red-100 shadow-xs">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#EF4136] text-white flex items-center justify-center shadow-xs flex-shrink-0">
                        <Calendar className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <div className="flex items-baseline gap-1 flex-wrap">
                        <span className="text-[15px] font-extrabold text-slate-900">ຜົນລາງວັນ ວັນທີ</span>
                        <span className="text-[12px] font-bold text-slate-500 font-num">
                          {currentRound.prevTimestamp || '22/10/2026 20:08'}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        soundClick();
                        setShowHistoryModal(true);
                        setHistoryTab('results');
                      }}
                      className="bg-red-50 hover:bg-red-100 text-[#EF4136] border border-red-200 text-xs font-extrabold px-3 py-1 rounded-full transition active:scale-95 flex-shrink-0"
                    >
                      ຜົນລາງວັນ
                    </button>
                  </div>

                  <div className="grid grid-cols-5 gap-2 mt-3">
                    {showcaseRowAnimals.map((animalId, idx) => {
                      const isPrimaryWin = idx < 3;
                      return (
                        <div
                          key={idx}
                          className={`aspect-square rounded-full flex items-center justify-center p-1.5 relative transition ${
                            isPrimaryWin
                              ? 'bg-[#FFF5F5] ring-2 ring-[#EF4136]/40 shadow-2xs'
                              : 'bg-slate-50 opacity-85'
                          }`}
                        >
                          <AnimalIllustration id={animalId} className="w-6 h-6 object-contain" />
                          {isPrimaryWin && (
                            <span className="absolute -top-1 -right-0.5 bg-[#EF4136] text-white text-[8px] font-black px-1.5 py-0.2 rounded-full">
                              ອອກ
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 3 DASHED SLOTS (1, 2, 3) */}
                <div className="grid grid-cols-3 gap-2">
                  {[0, 1, 2].map(slotIdx => {
                    const animalId = selectedAnimals[slotIdx];
                    const animalObj = ANIMALS.find(a => a.id === animalId);
                    return (
                      <div
                        key={slotIdx}
                        onClick={() => {
                          soundClick();
                          const next = [...selectedAnimals];
                          next.splice(slotIdx, 1);
                          setSelectedAnimals(next);
                        }}
                        className={`h-14 rounded-2xl border-2 border-dashed flex flex-col items-center justify-center cursor-pointer transition relative ${
                          animalObj
                            ? 'border-[#EF4136] bg-[#FFF5F5] shadow-2xs'
                            : 'border-red-200 bg-white hover:border-red-400'
                        }`}
                      >
                        <span className="absolute top-1 left-2 text-[10px] font-mono font-black text-slate-400">
                          {slotIdx + 1}
                        </span>
                        {animalObj ? (
                          <>
                            <div className="w-5 h-5">
                              <AnimalIllustration id={animalObj.id} className="w-5 h-5 object-contain" />
                            </div>
                            <span className="text-[10px] font-bold text-slate-800 leading-none mt-0.5">
                              {animalObj.name}
                            </span>
                          </>
                        ) : (
                          <span className="text-[11px] font-bold text-slate-300 font-num">ປ່ອງ {slotIdx + 1}</span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* SECTION HEADER */}
                <div className="pt-1 text-center">
                  <div className="flex items-center justify-center gap-3">
                    <span className="h-[2px] w-10 bg-[#EF4136] rounded-full"></span>
                    <h2 className="text-[17px] font-black text-slate-900 tracking-tight">
                      ເລືອກເລກຂອງທ່ານ
                    </h2>
                    <span className="h-[2px] w-10 bg-[#EF4136] rounded-full"></span>
                  </div>
                  <p className="text-[11px] font-medium text-slate-500 mt-0.5">
                    ກັດເລກທີ່ຕ້ອງການເພື່ອເປັນຜົນລາງວັນ (ເລືອກຊ້ຳກັນໄດ້)
                  </p>

                  <div className="flex items-center justify-center gap-2 mt-2">
                    <button
                      onClick={handleRandomAnimals}
                      className="inline-flex items-center gap-1 bg-white hover:bg-red-50 text-[#EF4136] border border-red-200 px-3 py-1 rounded-full text-xs font-extrabold shadow-2xs transition active:scale-95"
                    >
                      <Shuffle className="w-3 h-3" />
                      <span>ສຸ່ມເລກ</span>
                    </button>

                    <button
                      onClick={() => { soundClick(); setShowRulesModal(true); }}
                      className="inline-flex items-center gap-1 bg-white hover:bg-red-50 text-slate-700 border border-slate-200 px-3 py-1 rounded-full text-xs font-bold shadow-2xs transition active:scale-95"
                    >
                      <Award className="w-3 h-3 text-[#EF4136]" />
                      <span>ອັດຕາຈ່າຍລາງວັນ</span>
                    </button>

                    {selectedAnimals.length > 0 && (
                      <button
                        onClick={() => { soundClick(); setSelectedAnimals([]); }}
                        className="inline-flex items-center gap-1 bg-red-100 text-[#EF4136] px-2.5 py-1 rounded-full text-xs font-extrabold"
                      >
                        <span>ລ້າງ ({selectedAnimals.length})</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* 6-ANIMAL GRID (Optimized Sizing & Images) */}
                <div className="grid grid-cols-3 gap-2.5">
                  {ANIMALS.map((animal) => {
                    const countInSelection = selectedAnimals.filter(id => id === animal.id).length;
                    const isSelected = countInSelection > 0;
                    return (
                      <button
                        key={animal.id}
                        onClick={() => handleToggleAnimal(animal.id)}
                        className={`bg-white rounded-[20px] p-2 flex flex-col items-center justify-between relative transition active:scale-95 ${
                          isSelected
                            ? 'border-2 border-[#EF4136] ring-2 ring-red-200 shadow-md bg-[#FFFBFB]'
                            : 'border border-red-100/90 hover:border-red-300 shadow-xs'
                        }`}
                      >
                        <span className="self-start w-5 h-5 rounded-lg text-[11px] font-black font-num flex items-center justify-center shadow-2xs bg-[#22C55E] text-white">
                          {animal.id}
                        </span>

                        {isSelected && (
                          <span className="absolute top-2 right-2 bg-[#EF4136] text-white text-[10px] font-black px-1.5 py-0.2 rounded-full shadow-2xs">
                            x{countInSelection}
                          </span>
                        )}

                        <div className={`w-10 h-10 rounded-full ${animal.pastelBg} flex items-center justify-center my-1 p-0.5`}>
                          <AnimalIllustration id={animal.id} className="w-7 h-7 object-contain" />
                        </div>

                        <span className="text-[11px] font-extrabold text-slate-900 mt-0.5">
                          {animal.name}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* BETTING CONTROLS BAR (ສຸ່ມເລກ | 1000 | ເພີ່ມ) */}
                <div className="bg-white border border-red-200 rounded-[20px] p-2 flex items-center gap-2 shadow-sm">
                  <button
                    onClick={handleRandomAnimals}
                    className="bg-[#EF4136] hover:bg-[#DC2626] text-white px-3.5 py-2.5 rounded-xl font-extrabold text-xs flex items-center gap-1 shadow-2xs transition active:scale-95 flex-shrink-0"
                  >
                    <Shuffle className="w-3.5 h-3.5" />
                    <span>ສຸ່ມເລກ</span>
                  </button>

                  <div className="relative flex-1">
                    <input
                      type="number"
                      min="1000"
                      step="1000"
                      value={betInput}
                      onChange={(e) => {
                        const val = e.target.value;
                        setBetInput(val === '' ? '' : Number(val));
                      }}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-2 text-center text-xs font-extrabold font-num text-slate-900 focus:outline-none focus:border-[#EF4136] shadow-2xs"
                      placeholder="1000"
                    />
                  </div>

                  <button
                    onClick={handleлотоAddToQueue}
                    className="bg-[#22C55E] hover:bg-emerald-600 text-white px-4 py-2.5 rounded-xl font-extrabold text-xs flex items-center gap-1 shadow-2xs transition active:scale-95 flex-shrink-0"
                  >
                    <PlusCircle className="w-3.5 h-3.5" />
                    <span>ເພີ່ມ</span>
                  </button>
                </div>

                {/* QUEUE LIST (IF MULTIPLE BETS ADDED TO TICKET) */}
                {betQueue.length > 0 && (
                  <div className="bg-red-50/70 border border-red-200 rounded-2xl p-3 space-y-2">
                    <div className="flex justify-between items-center text-xs font-black text-slate-800">
                      <span>🛒 ລາຍການໃນບິນນີ້ ({betQueue.length} ລາຍການ):</span>
                      <span className="text-[#EF4136] font-num">
                        ລວມ: {fmt(betQueue.reduce((s, i) => s + i.amount, 0))} ₭
                      </span>
                    </div>

                    <div className="space-y-1.5 max-h-36 overflow-y-auto">
                      {betQueue.map((item, qIdx) => (
                        <div key={item.id} className="bg-white p-2 rounded-xl border border-red-100 flex items-center justify-between text-xs shadow-2xs">
                          <div className="flex items-center gap-1.5">
                            <span className="font-mono text-slate-400 font-bold">#{qIdx + 1}</span>
                            <div className="flex items-center gap-0.5">
                              {item.animals.map((aId, aSubIdx) => (
                                <span key={aSubIdx} className="text-base">
                                  {ANIMALS.find(x => x.id === aId)?.emoji}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="font-num font-extrabold text-[#EF4136]">{fmt(item.amount)} ₭</span>
                            <button
                              onClick={() => handleRemoveFromQueue(qIdx)}
                              className="text-slate-400 hover:text-[#EF4136] p-0.5"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* BOTTOM CONFIRM BUTTON */}
                <button
                  onClick={handleConfirmBet}
                  className="w-full bg-[#22C55E] hover:bg-emerald-600 text-white font-black text-sm py-3.5 px-6 rounded-2xl shadow-md flex items-center justify-center gap-2 transition active:scale-95"
                >
                  <Send className="w-4 h-4 -rotate-12" />
                  <span>ຢືນຢັນຊື້ (ລວມທັງໝົດ {betQueue.length > 0 ? fmt(betQueue.reduce((s, i) => s + i.amount, 0)) : fmt(betInput)} ₭)</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <div className="text-center text-[11px] font-semibold text-slate-400 pt-1">
                  ປູປາເຕົ້າ ລວຍ ລວຍ ລວຍ • ສຸກໂຊກ ຮອບດ້ານ
                </div>

              </div>
            )}

            {/* PLAYER TAB 2: LIVE STREAM */}
            {playerTab === 'live' && (
              <div className="flex-1 flex flex-col bg-white text-slate-900 overflow-hidden">
                <div className="relative aspect-video bg-gradient-to-b from-[#991B1B] via-[#DC2626] to-[#7F1D1D] border-b border-red-200 flex flex-col items-center justify-between p-3 text-white">
                  <div className="w-full flex justify-between items-center text-[11px]">
                    <div className="flex items-center gap-1.5 bg-black/35 px-2.5 py-1 rounded-full">
                      <span className="w-2 h-2 rounded-full bg-amber-300 animate-ping"></span>
                      <span className="font-extrabold">ຖ່າຍທອດສົດ ປູປາເຕົ້າ ລວຍ ລວຍ ລວຍ</span>
                    </div>
                    <span className="font-num bg-white text-[#EF4136] px-2.5 py-0.5 rounded-full font-black text-xs shadow-2xs">
                      ງວດ #{currentRound.roundId}
                    </span>
                  </div>

                  <div className="my-auto text-center">
                    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-amber-500 via-yellow-300 to-white p-1 flex items-center justify-center shadow-2xl">
                      <div className="w-full h-full rounded-full bg-[#991B1B] border-2 border-amber-200 flex flex-col items-center justify-center">
                        <AnimalIllustration id={3} className="w-10 h-10 animate-bounce" />
                      </div>
                    </div>

                    <div className="mt-3 flex items-center justify-center gap-3">
                      {currentRound.winningAnimals.slice(0, 3).map((id, idx) => (
                        <div key={idx} className="w-12 h-12 rounded-2xl bg-white border-2 border-amber-300 flex items-center justify-center p-1 shadow-lg">
                          <AnimalIllustration id={id} className="w-9 h-9" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="w-full flex justify-between items-center text-[10px] text-red-100">
                    <span className="font-bold">● ສະຕູດິໂອຖ່າຍທອດສົດທາງການ</span>
                    <span className="text-amber-200 font-num font-bold">ຜູ້ຊົມສົດ: 3,142 ຄົນ</span>
                  </div>
                </div>

                <div className="flex-1 bg-white flex flex-col">
                  <div className="px-4 py-2.5 bg-red-50/70 border-b border-red-100 text-xs font-extrabold text-slate-800 flex justify-between items-center">
                    <span>💬 ຫ້ອງສົນທະນາສົດ (Live Chat)</span>
                    <button
                      onClick={() => setPlayerTab('bet')}
                      className="text-xs bg-[#EF4136] text-white px-3 py-1 rounded-full font-bold shadow-2xs"
                    >
                      ກັບໄປກະດານແທງ
                    </button>
                  </div>

                  <div ref={chatScrollRef} className="flex-1 p-3.5 space-y-2.5 overflow-y-auto text-xs">
                    {chatMessages.map(msg => (
                      <div key={msg.id} className="flex items-start gap-2.5 border-b border-slate-100 pb-2">
                        <div className="w-7 h-7 rounded-full bg-red-50 text-[#EF4136] border border-red-200 flex items-center justify-center text-xs font-bold flex-shrink-0">
                          👤
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-num text-[11px] font-extrabold text-slate-800">{msg.user}</span>
                            <span className="text-[10px] text-slate-400 font-num">{msg.time}</span>
                          </div>
                          <p className="text-slate-700 text-xs mt-0.5">{msg.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-2.5 border-t border-red-100 flex items-center gap-2 bg-white">
                    <input
                      type="text"
                      placeholder="ພິມຂໍ້ຄວາມລຸ້ນໂຊກ..."
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && chatInput.trim()) {
                          soundClick();
                          setChatMessages(prev => [...prev, {
                            id: Date.now(),
                            user: currentUser ? currentUser.phone.replace(/(\d{5})\d{4}/, 'XXXXX$1'.slice(-8)) : 'XXXXX999',
                            text: chatInput.trim(),
                            time: new Date().toTimeString().substring(0, 5)
                          }]);
                          setChatInput('');
                        }
                      }}
                      className="flex-1 bg-slate-50 border border-red-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#EF4136] focus:bg-white"
                    />
                    <button
                      onClick={() => {
                        if (chatInput.trim()) {
                          soundClick();
                          setChatMessages(prev => [...prev, {
                            id: Date.now(),
                            user: currentUser ? currentUser.phone.replace(/(\d{5})\d{4}/, 'XXXXX$1'.slice(-8)) : 'XXXXX999',
                            text: chatInput.trim(),
                            time: new Date().toTimeString().substring(0, 5)
                          }]);
                          setChatInput('');
                        }
                      }}
                      className="bg-[#EF4136] hover:bg-[#DC2626] text-white px-3.5 py-2 rounded-xl font-bold text-xs flex items-center gap-1 transition"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>ສົ່ງ</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* ==================== 2. ADMIN PANEL ===================================== */}
        {/* ========================================================================= */}
        {appAccessMode === 'admin' && (
          <div className="flex-1 flex flex-col bg-[#FFF5F5] text-slate-900 overflow-y-auto pb-8">
            <div className="bg-white p-1.5 border-b border-red-100 grid grid-cols-6 gap-1 text-[10px] font-extrabold sticky top-[62px] z-30 shadow-2xs">
              <button
                onClick={() => { soundClick(); setAdminTab('draw'); }}
                className={`py-2 rounded-xl text-center transition flex flex-col items-center gap-0.5 ${
                  adminTab === 'draw' ? 'bg-[#EF4136] text-white shadow-xs' : 'text-slate-600 hover:bg-red-50'
                }`}
              >
                <Dice5 className="w-4 h-4" />
                <span>ກົດຜົນອອກ</span>
              </button>
              <button
                onClick={() => { soundClick(); setAdminTab('create_user'); }}
                className={`py-2 rounded-xl text-center transition flex flex-col items-center gap-0.5 ${
                  adminTab === 'create_user' ? 'bg-[#EF4136] text-white shadow-xs' : 'text-slate-600 hover:bg-red-50'
                }`}
              >
                <UserPlus className="w-4 h-4" />
                <span>ສ້າງ User</span>
              </button>
              <button
                onClick={() => { soundClick(); setAdminTab('users'); }}
                className={`py-2 rounded-xl text-center transition flex flex-col items-center gap-0.5 ${
                  adminTab === 'users' ? 'bg-[#EF4136] text-white shadow-xs' : 'text-slate-600 hover:bg-red-50'
                }`}
              >
                <Users className="w-4 h-4" />
                <span>ລູກຄ້າ CRM</span>
              </button>
              <button
                onClick={() => { soundClick(); setAdminTab('requests'); }}
                className={`py-2 rounded-xl text-center transition flex flex-col items-center gap-0.5 relative ${
                  adminTab === 'requests' ? 'bg-[#EF4136] text-white shadow-xs' : 'text-slate-600 hover:bg-red-50'
                }`}
              >
                <DollarSign className="w-4 h-4" />
                <span>ເຕີມ-ຖອນ</span>
                {transactions.filter(t => t.status === 'pending').length > 0 && (
                  <span className="absolute top-1 right-1.5 w-2 h-2 rounded-full bg-amber-500 animate-ping"></span>
                )}
              </button>
              <button
                onClick={() => { soundClick(); setAdminTab('analytics'); }}
                className={`py-2 rounded-xl text-center transition flex flex-col items-center gap-0.5 ${
                  adminTab === 'analytics' ? 'bg-[#EF4136] text-white shadow-xs' : 'text-slate-600 hover:bg-red-50'
                }`}
              >
                <BarChart3 className="w-4 h-4" />
                <span>ສະຖິຕິແທງ</span>
              </button>
              <button
                onClick={() => { soundClick(); setAdminTab('admin_live'); }}
                className={`py-2 rounded-xl text-center transition flex flex-col items-center gap-0.5 ${
                  adminTab === 'admin_live' ? 'bg-[#EF4136] text-white shadow-xs' : 'text-slate-600 hover:bg-red-50'
                }`}
              >
                <Video className="w-4 h-4" />
                <span>ສະຕູດິໂອໄລສົດ</span>
              </button>
            </div>

            {adminTab === 'create_user' && (
              <div className="p-4 space-y-4">
                <div className="bg-white border border-red-200 rounded-3xl p-4 shadow-xs space-y-3.5">
                  <div className="flex items-center gap-2 border-b border-red-100 pb-2.5">
                    <div className="w-9 h-9 rounded-2xl bg-[#EF4136] text-white flex items-center justify-center">
                      <UserPlus className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-black text-slate-900">ສ້າງບັນຊີ User ໃໝ່ໃຫ້ລູກຄ້າ</h3>
                      <p className="text-[10px] text-slate-500">ກວດສອບເບີໂທຊ້ຳອັດຕະໂນມັດ • ພ້ອມສົ່ງລະຫັດທາງ LINE</p>
                    </div>
                  </div>

                  <form onSubmit={handleAdminAddUser} className="space-y-3 text-xs">
                    <div>
                      <label className="text-slate-700 font-bold block mb-1">1. ຊື່ ແລະ ນາມສະກຸນລູກຄ້າ *</label>
                      <input
                        type="text"
                        required
                        placeholder="ຕົວຢ່າງ: ທ້າວ ສົມພອນ ໄຊຍະວົງ"
                        value={newUserForm.name}
                        onChange={(e) => setNewUserForm({ ...newUserForm, name: e.target.value })}
                        className="w-full bg-slate-50 border border-red-200 rounded-xl px-3 py-2.5 text-slate-900 focus:border-[#EF4136] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-slate-700 font-bold block mb-1">2. ເບີໂທລະສັບ (User ເຂົ້າລະບົບ - ຫ້າມຊ້ຳ) *</label>
                      <input
                        type="tel"
                        required
                        placeholder="020xxxxxxxx"
                        value={newUserForm.phone}
                        onChange={(e) => setNewUserForm({ ...newUserForm, phone: e.target.value })}
                        className="w-full bg-slate-50 border border-red-200 rounded-xl px-3 py-2.5 text-[#EF4136] font-num font-extrabold focus:border-[#EF4136] focus:outline-none"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <label className="text-slate-700 font-bold">3. ລະຫັດຜ່ານລູກຄ້າ *</label>
                        <button
                          type="button"
                          onClick={() => {
                            soundClick();
                            setNewUserForm({ ...newUserForm, password: '888' + Math.floor(100 + Math.random() * 900) });
                          }}
                          className="text-[10px] text-[#EF4136] hover:underline font-extrabold flex items-center gap-1"
                        >
                          <Sparkles className="w-3 h-3" />
                          <span>ສຸ່ມລະຫັດໃໝ່</span>
                        </button>
                      </div>
                      <input
                        type="text"
                        required
                        value={newUserForm.password}
                        onChange={(e) => setNewUserForm({ ...newUserForm, password: e.target.value })}
                        className="w-full bg-slate-50 border border-red-200 rounded-xl px-3 py-2.5 text-slate-900 font-num font-bold focus:border-[#EF4136] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-slate-700 font-bold block mb-1">4. ຍອດເງິນເຕີມເລີ່ມຕົ້ນ (ກີບ):</label>
                      <input
                        type="number"
                        step="10000"
                        min="0"
                        value={newUserForm.initialBalance}
                        onChange={(e) => setNewUserForm({ ...newUserForm, initialBalance: e.target.value })}
                        className="w-full bg-slate-50 border border-red-200 rounded-xl px-3 py-2.5 text-[#EF4136] font-num font-extrabold text-sm focus:border-[#EF4136] focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#EF4136] to-[#DC2626] text-white font-black py-3 rounded-2xl shadow-md transition active:scale-95 flex items-center justify-center gap-1.5 text-xs"
                    >
                      <UserCheck className="w-4 h-4" />
                      <span>ບັນທຶກ ແລະ ສ້າງບັນຊີລູກຄ້າທັນທີ</span>
                    </button>
                  </form>
                </div>

                {createdUserCard && (
                  <div className="bg-white border-2 border-[#EF4136] rounded-3xl p-4 space-y-3 shadow-md">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-black text-[#EF4136] flex items-center gap-1.5">
                        <CheckCircle className="w-4 h-4" />
                        <span>ສ້າງບັນຊີສຳເລັດ! ພ້ອມສົ່ງໃຫ້ລູກຄ້າ</span>
                      </span>
                      <button onClick={() => setCreatedUserCard(null)} className="text-slate-400 hover:text-slate-700 text-xs">✕</button>
                    </div>

                    <div className="bg-red-50/70 rounded-2xl p-3 border border-red-200 space-y-1 text-xs">
                      <div>🎲 <strong className="text-[#EF4136]">ປູປາເຕົ້າ ລວຍ ລວຍ ລວຍ</strong></div>
                      <div>👤 ຊື່ລູກຄ້າ: <strong>{createdUserCard.name}</strong></div>
                      <div>📱 ເບີໂທ (User): <strong className="font-num text-[#EF4136]">{createdUserCard.phone}</strong></div>
                      <div>🔑 ລະຫັດຜ່ານ: <strong className="font-num">{createdUserCard.password}</strong></div>
                      <div>💰 ຍອດເງິນເລີ່ມຕົ້ນ: <strong className="font-num text-[#EF4136]">{fmt(createdUserCard.balance)} ₭</strong></div>
                    </div>

                    <button
                      onClick={() => {
                        const msg = `🎲 ປູປາເຕົ້າ ລວຍ ລວຍ ລວຍ\n✅ ບັນຊີຂອງທ່ານພ້ອມໃຊ້ງານແລ້ວ!\n👤 ຊື່: ${createdUserCard.name}\n📱 User: ${createdUserCard.phone}\n🔑 ລະຫັດຜ່ານ: ${createdUserCard.password}\n💰 ຍອດເງິນ: ${fmt(createdUserCard.balance)} ₭`;
                        copyToClipboard(msg, 'ກ໊ອບປີ້ User & ລະຫັດຜ່ານແລ້ວ!');
                      }}
                      className="w-full bg-[#EF4136] text-white font-black py-2.5 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>ກ໊ອບປີ້ສົ່ງໃຫ້ລູກຄ້າທາງ LINE</span>
                    </button>
                  </div>
                )}
              </div>
            )}

            {adminTab === 'draw' && (
              <div className="p-4 space-y-4">
                <div className="bg-white border border-red-200 rounded-3xl p-4 shadow-xs">
                  <div className="flex justify-between items-center pb-2.5 border-b border-red-100">
                    <div>
                      <h3 className="text-sm font-black text-slate-900">ຄວບຄຸມຜົນອອກງວດ #{currentRound.roundId}</h3>
                      <p className="text-[10px] text-slate-500">ເລືອກ 3 ຕົວສັດທີ່ຕ້ອງການໃຫ້ອອກ ຫຼື ກົດສຸ່ມ</p>
                    </div>
                    <span className="text-xs font-num font-extrabold text-[#EF4136] bg-red-50 px-2.5 py-1 rounded-full border border-red-200">
                      ຍອດແທງ: {fmt(totalCurrentPool)} ₭
                    </span>
                  </div>

                  <div className="my-3">
                    <span className="text-[11px] text-slate-600 font-bold block mb-1.5">ໝາກເຕົ້າ 3 ຕົວ ທີ່ເລືອກໄວ້:</span>
                    <div className="grid grid-cols-3 gap-2.5">
                      {adminManualDice.map((id, idx) => {
                        const a = ANIMALS.find(x => x.id === id);
                        return (
                          <div key={idx} className="bg-[#FFF5F5] border-2 border-[#EF4136] rounded-2xl p-2.5 text-center flex flex-col items-center justify-center">
                            <AnimalIllustration id={id} className="w-9 h-9" />
                            <span className="text-xs font-extrabold text-slate-900 mt-1">{a?.name}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[11px] text-slate-500 font-bold">ກົດເພື່ອປ່ຽນຜົນອອກ:</span>
                    <div className="grid grid-cols-6 gap-1.5">
                      {ANIMALS.map(a => (
                        <button
                          key={a.id}
                          onClick={() => {
                            soundClick();
                            setAdminManualDice([adminManualDice[1], adminManualDice[2], a.id]);
                          }}
                          className="bg-slate-50 hover:bg-red-50 border border-red-200 rounded-xl p-1.5 flex flex-col items-center justify-center transition active:scale-95"
                        >
                          <AnimalIllustration id={a.id} className="w-7 h-7" />
                          <span className="text-[10px] font-bold text-slate-700 mt-0.5">{a.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3.5 flex gap-2">
                    <button
                      onClick={() => {
                        soundSelect();
                        setAdminManualDice([
                          Math.floor(Math.random() * 6) + 1,
                          Math.floor(Math.random() * 6) + 1,
                          Math.floor(Math.random() * 6) + 1
                        ]);
                        triggerToast('ສຸ່ມເລືອກຜົນອອກໃໝ່ແລ້ວ', 'info');
                      }}
                      className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 font-extrabold text-xs py-2.5 rounded-xl transition flex items-center justify-center gap-1"
                    >
                      <Shuffle className="w-3.5 h-3.5" />
                      <span>ສຸ່ມຜົນຍຸດຕິທຳ</span>
                    </button>

                    <button
                      onClick={() => executeDraw(adminManualDice)}
                      className="flex-1 bg-gradient-to-r from-[#EF4136] to-[#DC2626] text-white font-black text-xs py-2.5 rounded-xl transition shadow-md active:scale-95 flex items-center justify-center gap-1"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>ກົດຜົນອອກທັນທີ 🎲</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {adminTab === 'admin_live' && (
              <div className="p-4 space-y-4">
                <div className="bg-white border border-red-200 rounded-3xl p-4 shadow-xs space-y-3">
                  <div className="flex items-center gap-2 border-b border-red-100 pb-2.5">
                    <div className="w-9 h-9 rounded-2xl bg-[#EF4136] text-white flex items-center justify-center">
                      <Video className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-black text-slate-900">ສະຕູດິໂອໄລສົດ (Admin Live Broadcaster)</h3>
                      <p className="text-[10px] text-slate-500">ເປີດກ້ອງວິດີໂອຕົວຈິງເພື່ອຖ່າຍທອດສົດໃຫ້ຜູ້ຫຼິ້ນເຫັນ</p>
                    </div>
                  </div>

                  {/* Admin Video Camera Stream Stage */}
                  <div className="aspect-video bg-slate-950 rounded-2xl overflow-hidden relative flex flex-col items-center justify-center border-2 border-slate-800 shadow-inner">
                    <video 
                      ref={adminVideoRef} 
                      autoPlay 
                      playsInline 
                      muted 
                      className={`w-full h-full object-cover ${isAdminCameraActive ? 'block' : 'hidden'}`}
                    />

                    {!isAdminCameraActive && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-slate-950 text-white p-4 text-center">
                        <Video className="w-12 h-12 text-[#EF4136] mb-2 animate-bounce" />
                        <span className="text-xs font-bold text-slate-300">ກ້ອງໄລສົດຍັງບໍ່ໄດ້ເປີດ</span>
                        <p className="text-[10px] text-slate-500 mt-1">ກົດປຸ່ມ "ເປີດກ້ອງໄລສົດ" ດ້ານລຸ່ມເພື່ອເລີ່ມຕົ້ນອອກອາກາດ</p>
                      </div>
                    )}

                    {isAdminCameraActive && (
                      <div className="absolute top-2 right-3 bg-red-600 text-white text-[9px] font-black px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-md">
                        <span className="w-2 h-2 rounded-full bg-amber-300 animate-ping"></span>
                        <span>ADMIN LIVE ON AIR</span>
                      </div>
                    )}
                  </div>

                  {adminCameraError && (
                    <div className="bg-red-50 text-[#EF4136] p-2.5 rounded-xl border border-red-200 text-xs font-bold text-center">
                      {adminCameraError}
                    </div>
                  )}

                  <div className="flex gap-2">
                    {!isAdminCameraActive ? (
                      <button
                        onClick={startAdminCamera}
                        className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-black py-3 rounded-2xl text-xs transition active:scale-95 shadow flex items-center justify-center gap-1.5"
                      >
                        <Video className="w-4 h-4" />
                        <span>ເປີດກ້ອງໄລສົດ (Start Camera)</span>
                      </button>
                    ) : (
                      <button
                        onClick={stopAdminCamera}
                        className="flex-1 bg-red-700 hover:bg-red-800 text-white font-black py-3 rounded-2xl text-xs transition active:scale-95 shadow flex items-center justify-center gap-1.5"
                      >
                        <XCircle className="w-4 h-4" />
                        <span>ປິດກ້ອງໄລສົດ (Stop Camera)</span>
                      </button>
                    )}
                  </div>

                  <button
                    onClick={() => {
                      soundFanfare();
                      executeDraw(adminManualDice);
                      triggerToast('ອອກອາກາດຜົນລາງວັນສຳເລັດ!', 'success');
                    }}
                    className="w-full bg-[#EF4136] hover:bg-[#DC2626] text-white font-black py-3 rounded-2xl text-xs transition active:scale-95 shadow-md flex items-center justify-center gap-1.5"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>ອອກອາກາດຜົນລາງວັນ ແລະ ຕັດຮອບໃໝ່ທັນທີ</span>
                  </button>
                </div>
              </div>
            )}

            {adminTab === 'users' && (
              <div className="p-4 space-y-3">
                <div className="flex justify-between items-center gap-2">
                  <div className="relative flex-1">
                    <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
                    <input
                      type="text"
                      placeholder="ຄົ້ນຫາເບີໂທ ຫຼື ຊື່ລູກຄ້າ..."
                      value={userSearchQuery}
                      onChange={(e) => setUserSearchQuery(e.target.value)}
                      className="w-full bg-white border border-red-200 rounded-xl pl-8 pr-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-[#EF4136]"
                    />
                  </div>
                  <button
                    onClick={() => setAdminTab('create_user')}
                    className="bg-[#EF4136] text-white font-extrabold text-xs px-3 py-2 rounded-xl flex items-center gap-1 flex-shrink-0 shadow-2xs"
                  >
                    <PlusCircle className="w-3.5 h-3.5" />
                    <span>ເພີ່ມ User</span>
                  </button>
                </div>

                <div className="space-y-2.5">
                  {filteredUsers.map(user => {
                    const isSuspended = user.status === 'suspended';
                    return (
                      <div key={user.id} className="bg-white border border-red-100 rounded-2xl p-3.5 space-y-2 shadow-2xs">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="flex items-center gap-1.5">
                              <span className="text-xs font-black text-slate-900">{user.name}</span>
                              <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded-full ${
                                isSuspended ? 'bg-red-100 text-[#EF4136]' : 'bg-emerald-100 text-emerald-700'
                              }`}>
                                {isSuspended ? 'ລະງັບ' : 'ປົກກະຕິ'}
                              </span>
                            </div>
                            <span className="font-num text-[11px] text-[#EF4136] font-bold flex items-center gap-1 mt-0.5">
                              <Phone className="w-2.5 h-2.5" />
                              {user.phone} (Pass: {user.password})
                            </span>
                          </div>

                          <div className="text-right">
                            <span className="text-[10px] text-slate-400 block">ຍອດເງິນຄົງເຫຼືອ:</span>
                            <span className="font-num font-black text-sm text-[#EF4136]">{fmt(user.balance)} ₭</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-4 gap-1 py-1.5 px-2 bg-[#FFF5F5] rounded-xl text-center text-[10px] border border-red-100">
                          <div>
                            <span className="text-slate-500 block">ເຕີມທັງໝົດ</span>
                            <span className="font-num font-bold text-slate-800">{fmt(user.totalDeposited)}</span>
                          </div>
                          <div>
                            <span className="text-slate-500 block">ຖອນທັງໝົດ</span>
                            <span className="font-num font-bold text-slate-800">{fmt(user.totalWithdrawn)}</span>
                          </div>
                          <div>
                            <span className="text-slate-500 block">ຍອດແທງ</span>
                            <span className="font-num font-bold text-slate-800">{fmt(user.totalBet)}</span>
                          </div>
                          <div>
                            <span className="text-slate-500 block">ຖືກລາງວັນ</span>
                            <span className="font-num font-bold text-[#EF4136]">{fmt(user.totalWon)}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-1 text-xs">
                          <div className="flex gap-1">
                            <button
                              onClick={() => handleAdminUpdateUserBalance(user.id, 50000)}
                              className="bg-red-50 hover:bg-red-100 text-[#EF4136] border border-red-200 px-2.5 py-1 rounded-lg text-[10px] font-extrabold"
                            >
                              +50k
                            </button>
                            <button
                              onClick={() => handleAdminUpdateUserBalance(user.id, -50000)}
                              className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-2.5 py-1 rounded-lg text-[10px] font-extrabold"
                            >
                              -50k
                            </button>
                          </div>

                          <div className="flex gap-2 items-center">
                            <button
                              onClick={() => handleToggleUserStatus(user.id)}
                              className="text-[10px] text-slate-500 hover:text-[#EF4136] underline font-bold"
                            >
                              {isSuspended ? 'ປົດລະງັບ' : 'ລະງັບບັນຊີ'}
                            </button>
                            <button
                              onClick={() => {
                                soundClick();
                                setActiveUserId(user.id);
                                setAppAccessMode('player');
                                triggerToast(`ສະຫຼັບໄປຫຼິ້ນດ້ວຍບັນຊີ: ${user.name}`, 'info');
                              }}
                              className="bg-[#EF4136] text-white font-extrabold px-2.5 py-1 rounded-lg text-[10px]"
                            >
                              ເຂົ້າໃຊ້ງານແທນ
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {adminTab === 'requests' && (
              <div className="p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="text-xs font-black text-slate-900">ຄຳຂໍເຕີມ - ຖອນເງິນຈາກລູກຄ້າ</h3>
                  <span className="text-[11px] text-slate-600 font-bold">
                    ຄ້າງກວດສອບ: <strong className="text-[#EF4136] font-num">{transactions.filter(t => t.status === 'pending').length}</strong>
                  </span>
                </div>

                {transactions.map(tx => {
                  const isPending = tx.status === 'pending';
                  const isDeposit = tx.type === 'deposit';

                  return (
                    <div key={tx.id} className="bg-white border border-red-100 rounded-2xl p-3.5 space-y-2 shadow-2xs">
                      <div className="flex justify-between items-center pb-1.5 border-b border-red-50">
                        <span className="font-num text-xs text-[#EF4136] font-extrabold">{tx.id}</span>
                        <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full ${
                          isPending ? 'bg-amber-100 text-amber-800' :
                          tx.status === 'approved' ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-[#EF4136]'
                        }`}>
                          {isPending ? 'ລໍຖ້າອະນຸມັດ' : tx.status === 'approved' ? 'ອະນຸມັດແລ້ວ' : 'ຖືກປະຕິເສດ'}
                        </span>
                      </div>

                      <div className="flex justify-between items-start text-xs">
                        <div>
                          <span className="font-extrabold text-slate-900 block">{tx.userName}</span>
                          <span className="font-num text-[11px] text-slate-500">{tx.userPhone}</span>
                          <div className="text-[10px] text-slate-600 mt-1">
                            {tx.bank} • {tx.accNumber}
                          </div>
                        </div>

                        <div className="text-right">
                          <span className={`font-num font-black text-base ${isDeposit ? 'text-emerald-600' : 'text-[#EF4136]'}`}>
                            {isDeposit ? '+' : '-'}{fmt(tx.amount)} ₭
                          </span>
                          <span className="text-[9px] text-slate-400 block font-num">{tx.timestamp}</span>
                        </div>
                      </div>

                      {isPending && (
                        <div className="flex gap-2 pt-1.5 border-t border-red-50">
                          <button
                            onClick={() => handleAdminApproveTx(tx.id)}
                            className="flex-1 bg-[#EF4136] hover:bg-[#DC2626] text-white font-black text-xs py-2 rounded-xl transition active:scale-95"
                          >
                            ✓ ອະນຸມັດທັນທີ
                          </button>
                          <button
                            onClick={() => handleAdminRejectTx(tx.id)}
                            className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs py-2 rounded-xl transition active:scale-95"
                          >
                            ✕ ປະຕິເສດ
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {adminTab === 'analytics' && (
              <div className="p-4 space-y-4">
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="bg-white border border-red-100 p-3.5 rounded-2xl shadow-2xs">
                    <span className="text-[10px] text-slate-500 block font-bold">ຍອດແທງງວດນີ້ທັງໝົດ</span>
                    <span className="text-xl font-black font-num text-[#EF4136]">{fmt(totalCurrentPool)} ₭</span>
                  </div>
                  <div className="bg-white border border-red-100 p-3.5 rounded-2xl shadow-2xs">
                    <span className="text-[10px] text-slate-500 block font-bold">ຈຳນວນໃບບິນທີ່ແທງ</span>
                    <span className="text-xl font-black font-num text-slate-900">{currentRoundBets.length} ບິນ</span>
                  </div>
                </div>

                <div className="bg-white border border-red-100 rounded-3xl p-4 space-y-3 shadow-2xs">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-xs font-black text-slate-900">ສະຖິຕິຄົນແທງແຕ່ລະປ່ອງ</h4>
                      <p className="text-[10px] text-slate-500">ຈັດລຳດັບຍອດແທງໜ້ອຍຫາຫຼາຍ</p>
                    </div>

                    <button
                      onClick={() => {
                        soundClick();
                        setAnalyticsSortAsc(!analyticsSortAsc);
                      }}
                      className="text-[10px] bg-red-50 border border-red-200 text-[#EF4136] px-2.5 py-1 rounded-xl flex items-center gap-1 font-extrabold"
                    >
                      <TrendingUp className="w-3 h-3" />
                      <span>{analyticsSortAsc ? 'ໜ້ອຍ ➔ ຫຼາຍ' : 'ຫຼາຍ ➔ ໜ້ອຍ'}</span>
                    </button>
                  </div>

                  <div className="space-y-2">
                    {animalAnalytics.map((item, idx) => {
                      const percent = totalCurrentPool > 0 ? (item.totalAmount / totalCurrentPool) * 100 : 0;
                      return (
                        <div key={item.id} className="bg-[#FFF5F5] rounded-2xl p-2.5 border border-red-100 space-y-1">
                          <div className="flex justify-between items-center text-xs">
                            <div className="flex items-center gap-2">
                              <span className="font-num text-[#EF4136] font-extrabold text-xs">#{idx + 1}</span>
                              <AnimalIllustration id={item.id} className="w-6 h-6" />
                              <span className="font-extrabold text-slate-900">{item.name}</span>
                            </div>

                            <div className="text-right">
                              <span className="font-num font-black text-[#EF4136]">{fmt(item.totalAmount)} ₭</span>
                              <span className="text-[10px] text-slate-500 block font-num">({item.totalCount} ບິນ)</span>
                            </div>
                          </div>

                          <div className="w-full bg-red-100 h-1.5 rounded-full overflow-hidden">
                            <div
                              className="bg-[#EF4136] h-full rounded-full transition-all duration-500"
                              style={{ width: `${percent}%` }}
                            ></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ==================== MODALS ==================== */}

        {showDepositModal && (
          <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-xs z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl w-full max-w-sm overflow-hidden shadow-2xl border border-red-100">
              <div className="bg-gradient-to-r from-[#EF4136] to-[#DC2626] px-5 py-3.5 text-white flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <ArrowDownLeft className="w-5 h-5 text-white" />
                  <div>
                    <h3 className="text-sm font-black">ແຈ້ງເຕີມເງິນເຂົ້າລະບົບ</h3>
                    <p className="text-[10px] text-red-100">ກອກຂໍ້ມູນແລ້ວສະແກນສົ່ງແຈ້ງແອັດມິນທາງ LINE</p>
                  </div>
                </div>
                <button onClick={() => setShowDepositModal(false)} className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white">✕</button>
              </div>

              <div className="p-5 space-y-3.5">
                <div className="bg-red-50/70 p-3 rounded-2xl border border-red-200 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[10px] text-slate-500 block">ບັນຊີຮັບໂອນ (BCEL One):</span>
                    <span className="font-num font-black text-[#EF4136] text-sm">010-12-00045892</span>
                    <span className="text-[10px] font-bold text-slate-700 block">ປູປາເຕົ້າ ລວຍ ລວຍ ລວຍ</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard('010-12-00045892', 'ກ໊ອບປີ້ເລກບັນຊີແລ້ວ')}
                    className="bg-white border border-red-200 text-[#EF4136] px-2.5 py-1.5 rounded-xl text-[11px] font-bold flex items-center gap-1 shadow-2xs"
                  >
                    <Copy className="w-3 h-3" />
                    <span>ກ໊ອບປີ້</span>
                  </button>
                </div>

                <form onSubmit={handleRequestDeposit} className="space-y-3 text-xs">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">ຈຳນວນເງິນທີ່ຕ້ອງການເຕີມ (₭):</label>
                    <input
                      type="number"
                      min="20000"
                      step="10000"
                      value={depositAmount}
                      onChange={(e) => setDepositAmount(e.target.value)}
                      className="w-full bg-slate-50 border-2 border-red-200 rounded-xl py-2 px-3 text-center text-lg font-black font-num text-slate-900 focus:border-[#EF4136] focus:outline-none"
                    />
                    <div className="flex justify-between gap-1.5 mt-1.5">
                      {[20000, 50000, 100000, 500000].map(val => (
                        <button
                          key={val}
                          type="button"
                          onClick={() => setDepositAmount(val)}
                          className={`flex-1 py-1 text-[11px] font-num font-bold rounded-lg border transition ${
                            Number(depositAmount) === val
                              ? 'bg-[#EF4136] text-white border-[#EF4136]'
                              : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-red-50'
                          }`}
                        >
                          {val >= 1000 ? `${val / 1000}k` : val}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">ໂອນຈາກທະນາຄານ:</label>
                      <select
                        value={depositBank}
                        onChange={(e) => setDepositBank(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2 font-bold text-slate-800"
                      >
                        <option value="BCEL One">BCEL One</option>
                        <option value="LDB Trust">LDB Trust</option>
                        <option value="JDB Yes">JDB Yes</option>
                        <option value="APB">APB</option>
                      </select>
                    </div>
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">ເລກອ້າງອີງບິນ (ຖ້າມີ):</label>
                      <input
                        type="text"
                        placeholder="4 ຕົວທ້າຍບິນ"
                        value={depositRef}
                        onChange={(e) => setDepositRef(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2 font-num"
                      />
                    </div>
                  </div>

                  <div
                    onClick={() => {
                      soundSelect();
                      setDepositSlipAttached(true);
                    }}
                    className={`cursor-pointer border-2 border-dashed rounded-xl p-2.5 text-center transition flex items-center justify-center gap-2 ${
                      depositSlipAttached ? 'border-[#EF4136] bg-red-50 text-[#EF4136]' : 'border-red-200 bg-red-50/30 text-slate-600 hover:border-[#EF4136]'
                    }`}
                  >
                    <Upload className="w-4 h-4" />
                    <span className="font-bold text-[11px]">
                      {depositSlipAttached ? '✓ ແນບຮູບໃບບິນໂອນເງິນຮຽບຮ້ອຍ' : 'ກົດເພື່ອແນບຮູບສະລິບໂອນເງິນ'}
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#EF4136] to-[#DC2626] text-white font-black py-3 rounded-xl transition shadow-md shadow-red-600/20 active:scale-95 flex items-center justify-center gap-1.5"
                  >
                    <QrCode className="w-4 h-4" />
                    <span>ບັນທຶກ & ສະແກນສົ່ງແຈ້ງແອັດມິນທາງ LINE</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

        {showWithdrawModal && (
          <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-xs z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl w-full max-w-sm overflow-hidden shadow-2xl border border-red-100">
              <div className="bg-gradient-to-r from-[#EF4136] to-[#DC2626] px-5 py-3.5 text-white flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                  <div>
                    <h3 className="text-sm font-black">ແຈ້ງຖອນເງິນເຂົ້າບັນຊີ</h3>
                    <p className="text-[10px] text-red-100">ກອກຂໍ້ມູນແລ້ວສະແກນສົ່ງແຈ້ງແອັດມິນທາງ LINE</p>
                  </div>
                </div>
                <button onClick={() => setShowWithdrawModal(false)} className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white">✕</button>
              </div>

              <div className="p-5 space-y-3.5">
                <div className="bg-red-50/70 p-2.5 rounded-2xl border border-red-100 flex justify-between items-center text-xs">
                  <span className="text-slate-600 font-bold">ຍອດເງິນພ້ອມຖອນ:</span>
                  <span className="font-num font-black text-[#EF4136] text-sm">{fmt(currentUser?.balance)} ₭</span>
                </div>

                <form onSubmit={handleRequestWithdraw} className="space-y-3 text-xs">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">ຈຳນວນເງິນທີ່ຕ້ອງການຖອນ (₭):</label>
                    <input
                      type="number"
                      min="20000"
                      step="10000"
                      value={withdrawForm.amount}
                      onChange={(e) => setWithdrawForm({ ...withdrawForm, amount: e.target.value })}
                      className="w-full bg-slate-50 border-2 border-red-200 rounded-xl py-2 px-3 text-center text-lg font-black font-num focus:border-[#EF4136] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 block mb-1">ທະນາຄານປາຍທາງ:</label>
                    <select
                      value={withdrawForm.bank}
                      onChange={(e) => setWithdrawForm({ ...withdrawForm, bank: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 font-bold"
                    >
                      <option value="BCEL One">BCEL One (ການຄ້າຕ່າງປະເທດລາວ)</option>
                      <option value="LDB Trust">LDB Trust (ພັດທະນາລາວ)</option>
                      <option value="JDB Yes">JDB (ຮ່ວມພັດທະນາ)</option>
                      <option value="APB">APB (ສົ່ງເສີມກະສິກຳ)</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 block mb-1">ເລກບັນຊີຮັບເງິນ:</label>
                    <input
                      type="text"
                      required
                      value={withdrawForm.accNumber}
                      onChange={(e) => setWithdrawForm({ ...withdrawForm, accNumber: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 font-num font-bold"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 block mb-1">ຊື່ ແລະ ນາມສະກຸນເຈົ້າຂອງບັນຊີ:</label>
                    <input
                      type="text"
                      required
                      value={withdrawForm.accName}
                      onChange={(e) => setWithdrawForm({ ...withdrawForm, accName: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 font-bold"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#EF4136] to-[#DC2626] text-white font-black py-3 rounded-xl transition shadow-md shadow-red-600/20 active:scale-95 flex items-center justify-center gap-1.5"
                  >
                    <QrCode className="w-4 h-4" />
                    <span>ຢືນຢັນ & ສະແກນສົ່ງແຈ້ງແອັດມິນທາງ LINE</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

        {lineNotifyTx && (
          <div className="fixed inset-0 bg-slate-950/85 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl w-full max-w-sm overflow-hidden shadow-2xl border-2 border-[#EF4136]">
              <div className="bg-gradient-to-r from-[#EF4136] to-[#DC2626] px-5 py-3.5 text-white flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <div>
                    <h3 className="text-sm font-black">ສະແກນສົ່ງແຈ້ງແອັດມິນທາງ LINE</h3>
                    <p className="text-[10px] text-red-100">LINE Official: {adminLineId}</p>
                  </div>
                </div>
                <button onClick={() => setLineNotifyTx(null)} className="w-7 h-7 rounded-full bg-black/15 flex items-center justify-center text-white">✕</button>
              </div>

              <div className="p-4 space-y-3 text-xs">
                <div className="bg-[#FFF5F5] border border-red-200 rounded-2xl p-3 flex items-center gap-3.5">
                  <div className="w-24 h-24 bg-white p-1.5 rounded-xl border-2 border-[#EF4136] flex flex-col items-center justify-center flex-shrink-0 shadow-xs">
                    <svg viewBox="0 0 100 100" className="w-18 h-18 text-slate-900" fill="currentColor">
                      <rect x="6" y="6" width="26" height="26" rx="4" fill="none" stroke="currentColor" strokeWidth="6" />
                      <rect x="13" y="13" width="12" height="12" rx="2" />
                      <rect x="68" y="6" width="26" height="26" rx="4" fill="none" stroke="currentColor" strokeWidth="6" />
                      <rect x="75" y="13" width="12" height="12" rx="2" />
                      <rect x="6" y="68" width="26" height="26" rx="4" fill="none" stroke="currentColor" strokeWidth="6" />
                      <rect x="13" y="75" width="12" height="12" rx="2" />
                      <rect x="38" y="38" width="24" height="24" rx="6" fill="#EF4136" />
                      <text x="50" y="54" textAnchor="middle" fill="white" fontSize="10" fontWeight="900">LINE</text>
                    </svg>
                    <span className="text-[8px] font-extrabold text-[#EF4136] mt-0.5">ສະແກນແອັດມິນ</span>
                  </div>

                  <div className="space-y-1 flex-1">
                    <span className="inline-block text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-red-100 text-[#EF4136]">
                      {lineNotifyTx.type === 'deposit' ? '📥 ແຈ້ງເຕີມເງິນ' : '📤 ແຈ້ງຖອນເງິນ'}
                    </span>
                    <div className="font-extrabold text-[#EF4136] text-sm font-num">
                      {fmt(lineNotifyTx.amount)} ກີບ
                    </div>
                    <div className="text-[11px] text-slate-700">
                      ລູກຄ້າ: <strong>{lineNotifyTx.userName}</strong>
                    </div>
                    <div className="text-[11px] text-slate-700 font-num">
                      ເບີໂທ: <strong>{lineNotifyTx.userPhone}</strong>
                    </div>
                    <div className="text-[10px] text-slate-400 font-num">
                      ລະຫັດບິນ: {lineNotifyTx.id}
                    </div>
                  </div>
                </div>

                <div className="bg-red-50/60 border border-red-200 rounded-2xl p-3 space-y-1.5">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-extrabold text-[#EF4136]">ຂໍ້ຄວາມສຳລັບສົ່ງແຈ້ງແອັດມິນ:</span>
                    <button
                      type="button"
                      onClick={() => {
                        const msg = `🔔 ແຈ້ງ${lineNotifyTx.type === 'deposit' ? 'ເຕີມເງິນ' : 'ຖອນເງິນ'} (ປູປາເຕົ້າ ລວຍ ລວຍ ລວຍ)\n📄 ລະຫັດ: ${lineNotifyTx.id}\n👤 ຊື່ລູກຄ້າ: ${lineNotifyTx.userName}\n📱 ເບີໂທ: ${lineNotifyTx.userPhone}\n💰 ຈຳນວນເງິນ: ${fmt(lineNotifyTx.amount)} ກີບ\n🏦 ທະນາຄານ: ${lineNotifyTx.bank} (${lineNotifyTx.accNumber})`;
                        copyToClipboard(msg, 'ກ໊ອບປີ້ຂໍ້ຄວາມແຈ້ງແອັດມິນແລ້ວ!');
                      }}
                      className="text-[10px] bg-white border border-red-200 text-[#EF4136] px-2 py-0.5 rounded-lg font-bold flex items-center gap-1 shadow-2xs"
                    >
                      <Copy className="w-3 h-3" />
                      <span>ກ໊ອບປີ້ຂໍ້ຄວາມ</span>
                    </button>
                  </div>
                  <div className="text-[11px] text-slate-700 bg-white p-2 rounded-xl border border-red-100 leading-relaxed">
                    🔔 ແຈ້ງ{lineNotifyTx.type === 'deposit' ? 'ເຕີມເງິນ' : 'ຖອນເງິນ'} • ລະຫັດ <strong>{lineNotifyTx.id}</strong><br/>
                    👤 {lineNotifyTx.userName} ({lineNotifyTx.userPhone})<br/>
                    💰 ຈຳນວນ: <strong className="text-[#EF4136] font-num">{fmt(lineNotifyTx.amount)} ກີບ</strong> • 🏦 {lineNotifyTx.bank}
                  </div>
                </div>

                <div className="space-y-2 pt-1">
                  <a
                    href={`https://line.me/R/msg/text/?${encodeURIComponent(
                      `🔔 ແຈ້ງ${lineNotifyTx.type === 'deposit' ? 'ເຕີມເງິນ' : 'ຖອນເງິນ'} (ປູປາເຕົ້າ ລວຍ ລວຍ ລວຍ)\n📄 ລະຫັດ: ${lineNotifyTx.id}\n👤 ຊື່: ${lineNotifyTx.userName}\n📱 ເບີໂທ: ${lineNotifyTx.userPhone}\n💰 ຈຳນວນ: ${fmt(lineNotifyTx.amount)} ກີບ\n🏦 ທະນາຄານ: ${lineNotifyTx.bank} (${lineNotifyTx.accNumber})`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundSelect()}
                    className="w-full bg-[#EF4136] hover:bg-[#DC2626] text-white font-black py-3 rounded-2xl shadow-lg flex items-center justify-center gap-2 text-xs transition active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>ກົດສົ່ງແຈ້ງແອັດມິນທາງ LINE ທັນທີ</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setLineNotifyTx(null)}
                    className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-2.5 rounded-2xl text-xs transition"
                  >
                    ປິດໜ້າຕ່າງນີ້
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {showRulesModal && (
          <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-xs z-50 flex items-center justify-center p-4">
            <div className="bg-white border-2 border-[#EF4136] rounded-3xl w-full max-w-sm overflow-hidden shadow-2xl">
              <div className="bg-gradient-to-r from-[#EF4136] to-[#DC2626] px-4 py-3 text-white flex justify-between items-center">
                <div className="flex items-center gap-1.5">
                  <Award className="w-5 h-5 text-amber-200" />
                  <h3 className="text-xs font-black">ອັດຕາຈ່າຍລາງວັນ ປູປາເຕົ້າ ລວຍ ລວຍ ລວຍ</h3>
                </div>
                <button onClick={() => setShowRulesModal(false)} className="text-white/80 hover:text-white">✕</button>
              </div>

              <div className="p-4 space-y-3">
                <div className="flex bg-red-50 p-1 rounded-xl text-xs font-extrabold border border-red-100">
                  <button
                    onClick={() => setRulesSubTab('1img')}
                    className={`flex-1 py-1.5 rounded-lg transition ${
                      rulesSubTab === '1img' ? 'bg-[#EF4136] text-white shadow' : 'text-[#EF4136]'
                    }`}
                  >
                    ຊື້ 1 ໂຕ (ແທງດ່ຽວ)
                  </button>
                  <button
                    onClick={() => setRulesSubTab('2img')}
                    className={`flex-1 py-1.5 rounded-lg transition ${
                      rulesSubTab === '2img' ? 'bg-[#EF4136] text-white shadow' : 'text-[#EF4136]'
                    }`}
                  >
                    ຊື້ 2-3 ໂຕ (ເຕັດ/ຊຸດ)
                  </button>
                </div>

                {rulesSubTab === '1img' ? (
                  <div className="space-y-2 text-center text-xs">
                    <div className="bg-[#FFF5F5] border border-red-200 p-2.5 rounded-2xl">
                      <span className="text-2xl font-black font-num block text-[#EF4136]">x2 ເທົ່າ + ຕົ້ນທຶນ</span>
                      <span className="text-[11px] text-slate-600 font-bold">ຊື້ 1 ໂຕ ຖືກ 1 ໃນ 3 (ຊື້ 1,000 ₭ ໄດ້ 3,000 ₭)</span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2 text-center text-xs">
                    <div className="bg-[#FFF5F5] border-2 border-[#EF4136] p-3 rounded-2xl">
                      <span className="text-2xl font-black font-num block text-[#EF4136]">ຊື້ 2 ໂຕ ຖືກ 2/3 = x6 ເທົ່າ + ທຶນ</span>
                      <span className="text-[10px] text-slate-600 font-bold block mt-0.5">(ຊື້ 1,000 ₭ ໄດ້ຮັບ 7,000 ₭)</span>
                    </div>
                    <div className="bg-red-50/70 border border-red-200 p-2.5 rounded-xl text-[11px] text-slate-700">
                      ⭐ ຊື້ 3 ໂຕ ຖືກ 3/3 ຮັບ <strong className="text-[#EF4136]">x20 ເທົ່າ + ຕົ້ນທຶນ (ຊື້ 1,000 ₭ ໄດ້ 21,000 ₭)</strong>
                    </div>
                  </div>
                )}

                <button
                  onClick={() => setShowRulesModal(false)}
                  className="w-full bg-[#EF4136] hover:bg-[#DC2626] text-white font-black py-2.5 rounded-xl text-xs transition"
                >
                  ເຂົ້າໃຈແລ້ວ
                </button>
              </div>
            </div>
          </div>
        )}

        {showWinCelebration && lastWinSummary && (
          <div className="fixed inset-0 bg-slate-950/85 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <div className="bg-white border-2 border-[#EF4136] rounded-3xl w-full max-w-sm p-5 text-slate-900 text-center shadow-2xl space-y-3">
              <span className="text-5xl block animate-bounce">🎉</span>
              <h2 className="text-xl font-black text-[#EF4136]">ຂໍສະແດງຄວາມຍິນດີ! ທ່ານຖືກລາງວັນ</h2>
              <p className="text-xs text-slate-500 font-bold">ຜົນອອກງວດ #{lastWinSummary.roundId}</p>

              <div className="flex justify-center gap-3 py-2">
                {lastWinSummary.dices.map((d, idx) => (
                  <div key={idx} className="w-12 h-12 bg-[#FFF5F5] border border-red-200 rounded-2xl p-1 flex items-center justify-center shadow-xs">
                    <AnimalIllustration id={d} className="w-10 h-10" />
                  </div>
                ))}
              </div>

              <div className="bg-[#FFF5F5] border-2 border-[#EF4136] rounded-2xl p-3 my-2">
                <span className="text-[10px] text-slate-500 uppercase font-extrabold block">ເງິນລາງວັນທີ່ໄດ້ຮັບ:</span>
                <span className="text-3xl font-black font-num text-[#EF4136] tracking-tight">
                  +{fmt(lastWinSummary.amount)} ₭
                </span>
              </div>

              <button
                onClick={() => setShowWinCelebration(false)}
                className="w-full bg-[#EF4136] hover:bg-[#DC2626] text-white font-black py-3 rounded-xl transition text-xs shadow-md"
              >
                ຮັບເງິນລາງວັນ & ສືບຕໍ່ຫຼິ້ນ
              </button>
            </div>
          </div>
        )}

        {showHistoryModal && (
          <div className="fixed inset-0 bg-slate-950/75 backdrop-blur-xs z-50 flex flex-col justify-end sm:justify-center items-center">
            <div className="bg-[#FFF5F5] w-full max-w-md h-[90vh] sm:h-[800px] sm:rounded-3xl flex flex-col overflow-hidden shadow-2xl border border-red-100">
              <div className="bg-gradient-to-r from-[#EF4136] to-[#DC2626] px-4 py-3.5 text-white flex items-center justify-between">
                <button
                  onClick={() => setShowHistoryModal(false)}
                  className="p-1 text-white hover:bg-white/15 rounded-full"
                >
                  <ArrowLeft className="w-6 h-6" />
                </button>
                <h2 className="text-base font-black text-white">ປະຫວັດການຊື້ & ຜົນລາງວັນ</h2>
                <button
                  onClick={() => soundClick()}
                  className="p-1 text-white hover:bg-white/15 rounded-full"
                >
                  <RotateCcw className="w-5 h-5" />
                </button>
              </div>

              <div className="bg-white flex border-b border-red-100 text-xs font-extrabold">
                <button
                  onClick={() => { soundClick(); setHistoryTab('slips'); }}
                  className={`flex-1 py-3 text-center border-b-3 transition ${
                    historyTab === 'slips' ? 'border-[#EF4136] text-[#EF4136]' : 'border-transparent text-slate-500'
                  }`}
                >
                  ໃບບິນລາງວັນ
                </button>
                <button
                  onClick={() => { soundClick(); setHistoryTab('results'); }}
                  className={`flex-1 py-3 text-center border-b-3 transition ${
                    historyTab === 'results' ? 'border-[#EF4136] text-[#EF4136]' : 'border-transparent text-slate-500'
                  }`}
                >
                  ຜົນອອກລາງວັນ
                </button>
                <button
                  onClick={() => { soundClick(); setHistoryTab('tx'); }}
                  className={`flex-1 py-3 text-center border-b-3 transition ${
                    historyTab === 'tx' ? 'border-[#EF4136] text-[#EF4136]' : 'border-transparent text-slate-500'
                  }`}
                >
                  ປະຫວັດເຕີມ-ຖອນ
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-3.5 space-y-2.5">
                {historyTab === 'slips' && (
                  <>
                    <div className="bg-white rounded-2xl p-3 border border-red-200 shadow-2xs space-y-2.5">
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="bg-[#FFF5F5] rounded-xl p-2 border border-red-100">
                          <span className="text-[10px] font-bold text-slate-500 block">ຍອດຊື້ທັງໝົດ</span>
                          <span className="text-xs font-black font-num text-slate-900">{fmt(mySlipsSummary.totalSpent)} ₭</span>
                        </div>
                        <div className="bg-emerald-50 rounded-xl p-2 border border-emerald-200">
                          <span className="text-[10px] font-bold text-emerald-700 block">ເງິນລາງວັນທີ່ໄດ້ຮັບ</span>
                          <span className="text-xs font-black font-num text-emerald-600">+{fmt(mySlipsSummary.totalWon)} ₭</span>
                        </div>
                        <div className="bg-[#FFF5F5] rounded-xl p-2 border border-red-100">
                          <span className="text-[10px] font-bold text-slate-500 block">ບິນຖືກ / ທັງໝົດ</span>
                          <span className="text-xs font-black font-num text-[#EF4136]">
                            {mySlipsSummary.wonCount} / {mySlipsSummary.myBets.length} ບິນ
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-4 gap-1 bg-red-50/80 p-1 rounded-xl text-[11px] font-extrabold">
                        <button
                          onClick={() => { soundClick(); setSlipFilter('all'); }}
                          className={`py-1.5 rounded-lg transition ${slipFilter === 'all' ? 'bg-[#EF4136] text-white shadow-2xs' : 'text-slate-600 hover:text-[#EF4136]'}`}
                        >
                          ທັງໝົດ ({mySlipsSummary.myBets.length})
                        </button>
                        <button
                          onClick={() => { soundClick(); setSlipFilter('won'); }}
                          className={`py-1.5 rounded-lg transition ${slipFilter === 'won' ? 'bg-emerald-600 text-white shadow-2xs' : 'text-emerald-700 hover:bg-emerald-100/60'}`}
                        >
                          ຖືກ ({mySlipsSummary.wonCount})
                        </button>
                        <button
                          onClick={() => { soundClick(); setSlipFilter('lost'); }}
                          className={`py-1.5 rounded-lg transition ${slipFilter === 'lost' ? 'bg-slate-700 text-white shadow-2xs' : 'text-slate-600 hover:bg-slate-200/60'}`}
                        >
                          ບໍ່ຖືກ ({mySlipsSummary.lostCount})
                        </button>
                        <button
                          onClick={() => { soundClick(); setSlipFilter('pending'); }}
                          className={`py-1.5 rounded-lg transition ${slipFilter === 'pending' ? 'bg-amber-500 text-white shadow-2xs' : 'text-amber-700 hover:bg-amber-100/60'}`}
                        >
                          ລໍຖ້າ ({mySlipsSummary.pendingCount})
                        </button>
                      </div>
                    </div>

                    {mySlipsSummary.myBets.filter(b => slipFilter === 'all' ? true : b.status === slipFilter).length === 0 ? (
                      <div className="text-center py-14 bg-white rounded-2xl border border-red-100 text-slate-400 text-xs font-bold">
                        ບໍ່ພົບລາຍການໃບບິນໃນໝວດນີ້
                      </div>
                    ) : (
                      mySlipsSummary.myBets
                        .filter(b => slipFilter === 'all' ? true : b.status === slipFilter)
                        .map(bet => {
                          const isWon = bet.status === 'won';
                          const isLost = bet.status === 'lost';
                          const isPending = bet.status === 'pending';
                          const betSubItems = bet.items && bet.items.length > 0
                            ? bet.items
                            : [{ animals: bet.animals, betType: bet.betType, amount: bet.amount, status: bet.status, actualWin: bet.actualWin }];
                          const matchedRound = roundsHistory.find(r => r.roundId === bet.roundId);
                          const drawnAnimals = bet.winningAnimals || matchedRound?.winningAnimals || null;

                          return (
                            <div
                              key={bet.id}
                              onClick={() => {
                                soundSelect();
                                setSelectedSlipDetail({ ...bet, items: betSubItems, winningAnimals: drawnAnimals });
                              }}
                              className={`cursor-pointer bg-white rounded-2xl overflow-hidden shadow-xs border-2 transition hover:shadow-md ${
                                isWon ? 'border-emerald-400' : isLost ? 'border-red-100' : 'border-amber-300'
                              }`}
                            >
                              <div className={`px-3.5 py-2 flex items-center justify-between text-xs border-b ${
                                isWon ? 'bg-emerald-50/90 border-emerald-200' : isLost ? 'bg-slate-50 border-slate-200' : 'bg-amber-50/90 border-amber-200'
                              }`}>
                                <div className="flex items-center gap-2">
                                  <span className="font-black text-slate-800">ງວດທີ: <span className="font-num">{bet.roundId}</span></span>
                                  {drawnAnimals && (
                                    <div className="flex items-center gap-1 bg-white px-2 py-0.5 rounded-full border border-slate-200 shadow-2xs">
                                      <span className="text-[10px] font-bold text-slate-500">ຜົນອອກ:</span>
                                      {drawnAnimals.slice(0, 3).map((dId, idx) => (
                                        <AnimalIllustration key={idx} id={dId} className="w-4 h-4" />
                                      ))}
                                    </div>
                                  )}
                                </div>

                                <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-black flex items-center gap-1 ${
                                  isWon ? 'bg-emerald-600 text-white shadow-2xs' : isLost ? 'bg-slate-200 text-slate-700' : 'bg-amber-500 text-white'
                                }`}>
                                  {isWon ? '🎉 ຖືກລາງວັນ' : isLost ? '✕ ບໍ່ຖືກລາງວັນ' : '⏳ ລໍຖ້າຜົນອອກ'}
                                </span>
                              </div>

                              <div className="p-3.5 space-y-2.5">
                                <div className="flex justify-between items-start">
                                  <div className="space-y-0.5">
                                    <div className="text-xs font-extrabold text-slate-800 font-num">{bet.timestamp}</div>
                                    <div className="text-[11px] text-slate-500 font-num">ເລກບິນ: {bet.id}</div>
                                  </div>

                                  <div className="text-right">
                                    <span className="text-[10px] text-slate-500 font-bold block">ຈຳນວນເງິນທີ່ຊື້:</span>
                                    <span className="text-base font-black text-slate-900 font-num">
                                      {fmt(bet.amount)} ກີບ
                                    </span>

                                    <div className="mt-1">
                                      {isWon && (
                                        <div className="bg-emerald-50 border border-emerald-300 rounded-xl px-2.5 py-1 text-right">
                                          <span className="text-[9px] font-extrabold text-emerald-700 block">ເງິນລາງວັນທີ່ໄດ້ຮັບ:</span>
                                          <span className="text-sm font-black font-num text-emerald-600">
                                            +{fmt(bet.actualWin)} ກີບ
                                          </span>
                                        </div>
                                      )}
                                      {isLost && (
                                        <div className="bg-red-50/70 border border-red-200 rounded-xl px-2.5 py-1 text-right">
                                          <span className="text-[10px] font-extrabold text-[#EF4136] block">
                                            ບໍ່ຖືກລາງວັນ (0 ກີບ)
                                          </span>
                                        </div>
                                      )}
                                      {isPending && (
                                        <div className="bg-amber-50 border border-amber-200 rounded-xl px-2.5 py-1 text-right">
                                          <span className="text-[9px] font-bold text-amber-800 block">ລຸ້ນຮັບສູງສຸດ:</span>
                                          <span className="text-xs font-black font-num text-amber-700">
                                            {fmt(bet.potentialWin)} ກີບ
                                          </span>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>

                                <div className="pt-2 border-t border-red-50 flex items-center justify-between">
                                  <button
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      soundSelect();
                                      setSelectedSlipDetail({ ...bet, items: betSubItems, winningAnimals: drawnAnimals });
                                    }}
                                    className="flex-1 bg-red-50 hover:bg-red-100 text-[#EF4136] border border-red-200 text-xs font-extrabold py-2 rounded-xl flex items-center justify-center gap-1.5 transition active:scale-95"
                                  >
                                    <Eye className="w-3.5 h-3.5" />
                                    <span>ກົດເບິ່ງລາຍລະອຽດໃບບິນ</span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          );
                        })
                    )}
                  </>
                )}

                {historyTab === 'results' && (
                  roundsHistory.map(r => (
                    <div key={r.roundId} className="bg-white rounded-2xl p-3.5 shadow-2xs border border-red-100 flex items-center justify-between">
                      <div>
                        <div className="text-sm font-extrabold text-slate-900">ງວດທີ: <span className="font-num">{r.roundId}</span></div>
                        <div className="text-xs font-bold text-[#EF4136] mt-1 font-num">{r.timestamp}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        {r.winningAnimals.slice(0, 3).map((d, i) => (
                          <div key={i} className="w-10 h-10 rounded-full bg-[#FFF5F5] border border-red-100 flex items-center justify-center p-1">
                            <AnimalIllustration id={d} className="w-8 h-8" />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))
                )}

                {historyTab === 'tx' && (
                  transactions.filter(t => t.userId === currentUser?.id).map(tx => (
                    <div key={tx.id} className="bg-white rounded-2xl p-3.5 shadow-2xs border border-red-100 flex items-center justify-between text-xs">
                      <div>
                        <span className="font-extrabold text-slate-900">
                          {tx.type === 'deposit' ? 'ເຕີມເງິນເຂົ້າລະບົບ' : 'ຖອນເງິນອອກ'}
                        </span>
                        <div className="text-[10px] text-slate-400 font-num mt-0.5">{tx.timestamp} • {tx.id}</div>
                        <div className="text-[10px] text-slate-500 mt-0.5">{tx.adminNote}</div>
                      </div>
                      <div className="text-right">
                        <div className={`font-num font-black text-sm ${tx.type === 'deposit' ? 'text-emerald-600' : 'text-[#EF4136]'}`}>
                          {tx.type === 'deposit' ? '+' : '-'}{fmt(tx.amount)} ₭
                        </div>
                        <span className={`inline-block mt-1 text-[10px] px-2.5 py-0.5 rounded-full font-extrabold ${
                          tx.status === 'pending' ? 'bg-amber-100 text-amber-800' :
                          tx.status === 'approved' ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-[#EF4136]'
                        }`}>
                          {tx.status === 'pending' ? 'ລໍຖ້າແອັດມິນ' : tx.status === 'approved' ? 'ສຳເລັດ' : 'ຖືກປະຕິເສດ'}
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}

        {selectedSlipDetail && (
          <div className="fixed inset-0 bg-slate-950/85 backdrop-blur-sm z-50 flex items-center justify-center p-3.5 overflow-y-auto">
            <div className="bg-white w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl border-2 border-[#EF4136] my-auto">
              <div className="bg-[#EF4136] px-4 py-3.5 text-white flex items-center justify-between">
                <button
                  onClick={() => setSelectedSlipDetail(null)}
                  className="p-1 rounded-full bg-white/15 hover:bg-white/25 text-white transition"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <h3 className="text-sm font-black tracking-tight text-white">ລາຍລະອຽດໃບບິນ</h3>
                <button
                  onClick={() => setSelectedSlipDetail(null)}
                  className="w-7 h-7 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white text-xs font-bold"
                >
                  ✕
                </button>
              </div>

              <div className="p-4 space-y-4 max-h-[82vh] overflow-y-auto bg-white">
                <div className="text-center pb-3 border-b border-dashed border-red-200 space-y-0.5">
                  <div className="text-sm font-black text-[#EF4136]">ປູປາເຕົ້າ ລວຍ ລວຍ ລວຍ</div>
                  <div className="text-[10px] text-slate-400 font-bold">ໃບຢັ້ງຢືນການຊື້ເລກສັດນຳໂຊກ</div>
                </div>

                <div className="space-y-1 text-xs text-slate-700 bg-red-50/50 p-2.5 rounded-2xl border border-red-100">
                  <div>ງວດທີ: <strong className="font-num text-slate-900">{selectedSlipDetail.roundId}</strong></div>
                  <div>ເວລາຊື້: <strong className="font-num text-slate-900">{selectedSlipDetail.timestamp}</strong></div>
                  <div>ຍອດຊື້ທັງໝົດ: <strong className="font-num text-[#EF4136]">{fmt(selectedSlipDetail.amount)} ₭</strong></div>
                </div>

                <div className="space-y-2 pt-1">
                  <span className="font-extrabold text-xs text-slate-800 block">ລາຍການສັດທີ່ຊື້ (ສະແດງຮູບໂຕສັດ):</span>
                  <div className="space-y-2">
                    {selectedSlipDetail.items?.map((item, idx) => {
                      const isItemWon = item.status === 'won';
                      const isItemLost = item.status === 'lost';
                      return (
                        <div key={idx} className="bg-white p-3 rounded-2xl border-2 border-red-100 flex justify-between items-center text-xs shadow-2xs">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            {item.animals.map((aId, aSubIdx) => {
                              const anObj = ANIMALS.find(x => x.id === aId);
                              return (
                                <div key={aSubIdx} className="flex items-center gap-1 bg-[#FFF5F5] px-2.5 py-1.5 rounded-xl border border-red-200 shadow-2xs">
                                  <AnimalIllustration id={aId} className="w-6 h-6 object-contain" />
                                  <span className="font-extrabold text-slate-900 text-[11px]">{anObj?.name}</span>
                                  {aSubIdx < item.animals.length - 1 && <span className="text-[#EF4136] font-bold">+</span>}
                                </div>
                              );
                            })}
                          </div>

                          <div className="text-right flex-shrink-0 ml-2">
                            <span className="font-num font-extrabold text-slate-900 block">{fmt(item.amount)} ₭</span>
                            {isItemWon ? (
                              <span className="block font-num font-black text-emerald-600 text-[11px]">+{fmt(item.actualWin)} ₭</span>
                            ) : isItemLost ? (
                              <span className="block text-[10px] font-bold text-slate-400">ບໍ່ຖືກ</span>
                            ) : (
                              <span className="block text-[10px] font-bold text-amber-600">ລໍຖ້າຜົນອອກ</span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedSlipDetail(null)}
                  className="w-full bg-[#EF4136] hover:bg-[#DC2626] text-white font-black py-3 rounded-2xl text-xs transition shadow-md active:scale-95"
                >
                  ປິດໜ້າຕ່າງນີ້
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}