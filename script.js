/**
 * Discover Andong - Interactive Client Script
 * Features:
 * - Full Dual-Language (English <-> Korean) switching across the entire site
 * - Multilingual destination dataset with geo-coordinates, Korean taxi addresses, transit routes
 * - Leaflet map initialization with custom markers and popup bindings
 * - Search & Filter for attractions
 * - Destination detail popups
 * - Taxi flashcard generator
 * - Dynamic travel budget calculator
 * - Itinerary viewer
 * - Mobile responsive menu & language toggle
 */

// Global Attractions Data
const destinationsData = [
  {
    id: "hahoe",
    category: "unesco",
    nameEn: "Hahoe Folk Village",
    nameKo: "안동 하회마을",
    addrKo: "경북 안동시 풍천면 하회종가길 40",
    badgeEn: "UNESCO World Heritage",
    badgeKo: "유네스코 세계문화유산",
    image: "https://images.unsplash.com/photo-1548115184-bc6544d06a58?auto=format&fit=crop&w=1000&q=80",
    descEn: "A 600-year-old living clan village where Ryu descendants still reside in traditional thatched and tile-roof hanoks surrounded by the S-shaped Nakdong River.",
    descKo: "낙동강이 S자 모양으로 마을을 감싸 안고 흐르는 풍산 류씨 집성촌으로, 600여 년의 전통과 실제 주민들의 삶이 보존된 유네스코 세계문화유산입니다.",
    transitEn: "Bus #210 from Station (approx. 50 min)",
    transitKo: "안동역 앞 버스정류장에서 210번 버스 탑승 (약 50분 소요)",
    tagsEn: ["Joseon Architecture", "Nakdong River", "Living Heritage"],
    tagsKo: ["조선 건축", "낙동강", "살아있는 유산"],
    hoursEn: "09:00 - 18:00 (Apr-Oct) / 09:00 - 17:00 (Nov-Mar)",
    hoursKo: "09:00 - 18:00 (하절기) / 09:00 - 17:00 (동절기)",
    admissionEn: "5,000 KRW (Adults)",
    admissionKo: "성인 5,000원",
    lat: 36.5388,
    lng: 128.5186,
    highlightsEn: [
      "Watch the free Hahoe Mask Dance Drama at 14:00 (Wed-Sun)",
      "Climb Buyongdae Cliff across the river via the wooden boat",
      "Admire the 600-year-old Samsindang Zelkova tree where visitors hang prayer wishes"
    ],
    highlightsKo: [
      "매주 수~일요일 14:00 무료 하회별신굿탈놀이 상설 공연 관람",
      "나룻배를 타고 강을 건너 부용대 절벽에 올라 마을 전경 감상",
      "수령 600년 된 삼신당 느티나무에서 소원지 달기 체험"
    ]
  },
  {
    id: "buyongdae",
    category: "nature",
    nameEn: "Buyongdae Cliff",
    nameKo: "부용대",
    addrKo: "경북 안동시 풍천면 광덕솔밭길 72",
    badgeEn: "Breathtaking Vista",
    badgeKo: "최고의 절경 조망",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
    descEn: "A 64-meter towering cliff offering a sweeping panoramic view over the whole S-shaped bend of the Nakdong River and Hahoe Village.",
    descKo: "하회마을을 감싸 흐르는 낙동강과 연꽃 모양의 마을 전체를 한눈에 조망할 수 있는 64m 높이의 깎아지른 기암절벽입니다.",
    transitEn: "Ferry boat from Hahoe sandbar (KRW ~5,000 roundtrip) or 15-min taxi",
    transitKo: "하회마을 백사장에서 나룻배 탑승(왕복 약 5,000원) 또는 택시 15분",
    tagsEn: ["Panoramic View", "Photo Spot", "Cliff"],
    tagsKo: ["파노라마 뷰", "인생샷 명소", "절벽 산책로"],
    hoursEn: "Open all year (Daylight hours recommended)",
    hoursKo: "연중무휴 (일출~일몰 시간대 방문 권장)",
    admissionEn: "Free entry (Ferry boat fee applies)",
    admissionKo: "입장료 무료 (나룻배 탑승 시 별도 비용)",
    lat: 36.5450,
    lng: 128.5190,
    highlightsEn: [
      "The best photo vantage point to capture Hahoe Village's lotus-flower geography",
      "Short 10-minute pine forest hiking trail up to the cliff top",
      "Visit Ogyeonjeongsa pavilion nestled at the base"
    ],
    highlightsKo: [
      "하회마을의 연화포수형(연꽃 모양) 지형을 한눈에 담는 최고의 사진 명소",
      "소나무 숲길을 따라 10분 정도 가볍게 오르는 힐링 트레킹",
      "절벽 아래 고즈넉하게 자리 잡은 옥연정사 둘러보기"
    ]
  },
  {
    id: "woryeonggyo",
    category: "night",
    nameEn: "Woryeonggyo Wooden Bridge",
    nameKo: "월영교",
    addrKo: "경북 안동시 상아동 569",
    badgeEn: "Korea's Longest Wooden Bridge",
    badgeKo: "국내 최장 목책 인도교",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80",
    descEn: "A 387m footbridge built of pine wood spanning the tranquil Nakdong River. Famed for its touching love story and enchanting evening light illuminations.",
    descKo: "먼저 세상을 떠난 남편을 향한 아내의 애절한 사랑 이야기를 담아 미투리(짚신) 모양을 형상화한 국내 최장(387m)의 목책 인도교입니다. 환상적인 야경으로 유명합니다.",
    transitEn: "Bus #311 or #312 from Downtown / 10-min taxi from Station",
    transitKo: "시내에서 311번, 312번 버스 또는 안동역에서 택시로 약 10분",
    tagsEn: ["Romantic Night View", "Moonlight Boat", "Pavilion"],
    tagsKo: ["낭만 야경", "문보트", "월영정 정자"],
    hoursEn: "Open 24 hours (Lighting from dusk until 22:00)",
    hoursKo: "24시간 개방 (일몰 후 22:00까지 야간 조명 가동)",
    admissionEn: "Free entry",
    admissionKo: "무료 입장",
    lat: 36.5772,
    lng: 128.7592,
    highlightsEn: [
      "Stroll to Woryeongjeong Pavilion at the bridge's center under lantern lights",
      "Ride the colorful glowing 'Moon Boat' on the river (KRW 28,000 for 3 persons)",
      "Enjoy traditional Andong Salted Mackerel at the adjacent restaurant cluster"
    ],
    highlightsKo: [
      "다리 한가운데 월영정에 앉아 강바람을 쐬며 야경 즐기기",
      "강물 위를 알록달록 비추는 문보트 탑승 체험 (3인승 28,000원)",
      "다리 입구 맛집 골목에서 안동 간고등어와 헛제사밥 식사"
    ]
  },
  {
    id: "dosan",
    category: "cultural",
    nameEn: "Dosan Seowon Confucian Academy",
    nameKo: "도산서원",
    addrKo: "경북 안동시 도산면 도산서원길 207",
    badgeEn: "UNESCO World Heritage",
    badgeKo: "유네스코 세계문화유산",
    image: "https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?auto=format&fit=crop&w=1000&q=80",
    descEn: "Established in 1574 in honor of prominent Neo-Confucian scholar Yi Hwang (featured on the Korean 1,000 Won banknote). Serene scholar architecture overlooking Andong Lake.",
    descKo: "퇴계 이황 선생(1,000원 지폐 인물)의 학문과 덕행을 기리기 위해 세워진 서원으로, 안동호를 굽어보는 수려한 자연 속에 단아한 선비 건축의 극치를 보여줍니다.",
    transitEn: "Bus #512 from Andong Station (approx. 40 min)",
    transitKo: "안동역 정류장에서 512번 버스 탑승 (약 40분 소요)",
    tagsEn: ["Neo-Confucianism", "Lake View", "Historical"],
    tagsKo: ["성리학의 산실", "안동호 호수뷰", "선비 정신"],
    hoursEn: "09:00 - 18:00 (Mar-Oct) / 09:00 - 17:00 (Nov-Feb)",
    hoursKo: "09:00 - 18:00 (3~10월) / 09:00 - 17:00 (11~2월)",
    admissionEn: "2,000 KRW (Adults)",
    admissionKo: "성인 2,000원",
    lat: 36.7198,
    lng: 128.8312,
    highlightsEn: [
      "Compare the actual lecture hall with the engraving on the back of the 1,000 KRW note",
      "Gaze at the Sisadan island monument sitting peacefully in the lake waters",
      "Walk the peaceful tree-lined gravel paths of profound contemplation"
    ],
    highlightsKo: [
      "1,000원 지폐 뒷면의 도산서원 그림과 실제 서당 건물 대조해보기",
      "안동호 물가 위에 세워진 특별 과거시험 기념비 '시사단' 조망",
      "수백 년 된 고목 아래 펼쳐진 사색과 힐링의 산책로 걷기"
    ]
  },
  {
    id: "bongjeongsa",
    category: "unesco",
    nameEn: "Bongjeongsa Temple",
    nameKo: "봉정사",
    addrKo: "경북 안동시 서후면 봉정사길 222",
    badgeEn: "Korea's Oldest Wooden Building",
    badgeKo: "한국 최고(最古) 목조건축",
    image: "https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=1000&q=80",
    descEn: "Nestled on Mount Cheondeung, housing the Geungnakjeon Hall—scientifically proven as South Korea's oldest surviving wooden architectural structure (12th century). Queen Elizabeth II visited here in 1999.",
    descKo: "천등산 자락에 자리한 고찰로, 우리나라에서 가장 오래된 목조 건물인 국보 극락전(12세기 고려 건축)을 보유하고 있습니다. 1999년 영국 엘리자베스 2세 여왕이 직접 방문했습니다.",
    transitEn: "Bus #351 from Downtown (approx. 35 min)",
    transitKo: "시내에서 351번 버스 탑승 (약 35분 소요)",
    tagsEn: ["Buddhism", "Ancient Woodcraft", "Quiet Sanctuary"],
    tagsKo: ["유네스코 산사", "천년 고찰", "고즈넉한 숲길"],
    hoursEn: "08:00 - 18:30 (Summer) / 08:00 - 17:30 (Winter)",
    hoursKo: "08:00 - 18:30 (하절기) / 08:00 - 17:30 (동절기)",
    admissionEn: "2,000 KRW",
    admissionKo: "성인 2,000원",
    lat: 36.6548,
    lng: 128.6624,
    highlightsEn: [
      "Marvel at the 12th-century Goryeo dynasty carpentry of Geungnakjeon",
      "Walk the path where Queen Elizabeth II took off her shoes to experience Korean manners",
      "Discover the tranquil hermitage of Yeongsandam with its charming stone garden"
    ],
    highlightsKo: [
      "12세기 고려시대의 섬세한 배흘림기둥과 공포 구조를 간직한 극락전 관람",
      "엘리자베스 여왕이 신발을 벗고 예를 갖추며 걸었던 여왕의 길 걷기",
      "한국 전통 정원의 백미로 꼽히는 아름다운 영산암 마당 감상"
    ]
  },
  {
    id: "manhyujeong",
    category: "nature",
    nameEn: "Manhyujeong Pavilion",
    nameKo: "만휴정",
    addrKo: "경북 안동시 길안면 묵계하리길 42",
    badgeEn: "K-Drama Filming Location",
    badgeKo: "K-드라마 명장면 촬영지",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    descEn: "A secluded 16th-century pavilion poised above cascading stream waters and granite rocks. Gained worldwide fame as the iconic confession bridge scene in Netflix's hit drama 'Mr. Sunshine'.",
    descKo: "계곡 암반과 맑은 폭포수 위에 세워진 16세기 조선 정자로, 넷플릭스 인기 드라마 '미스터 션샤인'의 '합시다, 러브' 외나무다리 명장면 촬영지입니다.",
    transitEn: "Bus #610 or 35-min taxi from downtown Andong",
    transitKo: "610번 버스 이용 또는 안동 시내에서 택시로 약 35분",
    tagsEn: ["Mr. Sunshine", "Log Bridge Photo", "Forest Waterfall"],
    tagsKo: ["미스터 션샤인", "외나무다리 포토존", "청정 계곡"],
    hoursEn: "09:30 - 18:00",
    hoursKo: "09:30 - 18:00",
    admissionEn: "1,000 KRW maintenance fee",
    admissionKo: "관리보존료 1,000원",
    lat: 36.4258,
    lng: 128.9320,
    highlightsEn: [
      "Take the signature photo standing midway on the single-log tree bridge",
      "Listen to the soothing natural waterfall running underneath the cliff",
      "Explore the traditional Mukgye Seowon academy situated nearby"
    ],
    highlightsKo: [
      "외나무다리 한가운데 서서 그림 같은 인생 드라마 사진 촬영",
      "바위 계곡 사이를 흐르는 시원한 계곡 폭포 소리 들으며 휴식",
      "인근 묵계서원과 카페 만휴정 연계 방문"
    ]
  },
  {
    id: "oldmarket",
    category: "food",
    nameEn: "Andong Old Market (Gu-sijang)",
    nameKo: "안동 구시장 (찜닭골목)",
    addrKo: "경북 안동시 번영길 30",
    badgeEn: "Culinary Capital",
    badgeKo: "안동 미식의 성지",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80",
    descEn: "The bustling historical epicenter of Andong Jjimdak. Over 30 specialized restaurants with bubbling woks cooking savory braised chicken with glass noodles.",
    descKo: "전국적인 명성을 지닌 안동찜닭 골목이 위치한 대표 전통시장입니다. 30여 개 찜닭 전문점이 대형 화구에서 매콤달콤한 찜닭을 쉴 새 없이 조리합니다.",
    transitEn: "10-minute walk from Andong Station old terminal area / Bus #112",
    transitKo: "시내 중심가 위치, 안동역에서 도보 10분 또는 112번 버스",
    tagsEn: ["Jjimdak Alley", "Street Market", "Food Heaven"],
    tagsKo: ["찜닭골목", "전통시장", "먹거리 천국"],
    hoursEn: "10:00 - 22:00 (Varies by shop)",
    hoursKo: "10:00 - 22:00 (점포별 상이)",
    admissionEn: "Free entry",
    admissionKo: "자유 입장",
    lat: 36.5654,
    lng: 128.7290,
    highlightsEn: [
      "Order a steaming platter of Andong Jjimdak (KRW ~32,000, feeds 2-3)",
      "Walk 3 minutes to Mammoth Bakery to taste their Michelin-starred cream cheese bread",
      "Experience genuine warm Korean market hospitality"
    ],
    highlightsKo: [
      "푸짐한 당면과 채소가 듬뿍 들어간 정통 안동찜닭 맛보기 (2~3인분 약 32,000원)",
      "도보 3분 거리의 미슐랭 가이드 등재 '맘모스베이커리' 크림치즈빵 방문",
      "따뜻한 한국 전통시장의 정과 활기 체험"
    ]
  }
];

// Food Data
const foodsData = [
  {
    nameEn: "Andong Jjimdak",
    nameKo: "안동찜닭",
    image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=800&q=80",
    descEn: "Tender chicken braised at high heat with chewy glass noodles (dangmyeon), potatoes, carrots, and sweet-savory soy sauce infused with dried chili peppers.",
    descKo: "센 불에 토막 낸 닭고기와 쫄깃한 당면, 감자, 채소를 달콤짭조름한 간장 양념과 매콤한 건고추로 조려낸 안동의 대표 국민 요리입니다.",
    priceEn: "Approx. 32,000 KRW (Serves 2-3)",
    priceKo: "한 마리 약 32,000원 (2~3인분)",
    whereEn: "Andong Old Market (Jjimdak Alley)",
    whereKo: "안동 구시장 찜닭골목",
    tipEn: "If you cannot tolerate spiciness, say: 'An maep-ge hae-ju-se-yo' (안 맵게 해주세요).",
    tipKo: "매운 것을 잘 못 드신다면 주문 시 '안 맵게 해주세요'라고 말씀하세요."
  },
  {
    nameEn: "Heotjesatbap (Fake Ritual Meal)",
    nameKo: "헛제사밥",
    image: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?auto=format&fit=crop&w=800&q=80",
    descEn: "A unique Andong scholar delicacy: ritual ancestor offerings eaten by scholars without an actual ancestral rite. Bibimbap seasoned gently with soy sauce rather than spicy chili paste, served with beef, shark, and jeon pancakes.",
    descKo: "제사를 지내지 않고도 제사음식처럼 차려 먹던 안동 유생들의 향토음식입니다. 고추장 대신 간장과 참기름으로 비벼 먹는 담백한 비빔밥과 돔배기(상어고기), 전이 함께 나옵니다.",
    priceEn: "12,000 - 15,000 KRW per person",
    priceKo: "1인분 12,000원 ~ 15,000원",
    whereEn: "Restaurants clustered at the entrance of Woryeonggyo Bridge",
    whereKo: "월영교 진입로 향토음식 전문 식당가",
    tipEn: "A fantastic mild, non-spicy Korean cuisine experience!",
    tipKo: "자극적이지 않고 정갈하여 누구나 속 편하게 즐길 수 있습니다."
  },
  {
    nameEn: "Andong Salted Mackerel (Gandeungeo)",
    nameKo: "안동 간고등어",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
    descEn: "Historically transported inland from Yeongdeok port and preserved with sea salt. Grated over charcoal to deliver an exquisitely crispy skin and juicy, savory fish meat.",
    descKo: "바다와 떨어진 내륙 안동까지 신선하게 운반하기 위해 굵은 천일염으로 염장하던 염장 장인의 비법이 담긴 생선구이입니다. 겉은 바삭하고 속은 촉촉한 감칠맛이 일품입니다.",
    priceEn: "11,000 - 14,000 KRW set meal",
    priceKo: "정식 1인 11,000원 ~ 14,000원",
    whereEn: "Local restaurants near Andong Station & Woryeonggyo",
    whereKo: "안동역 인근 및 월영교 주변 맛집",
    tipEn: "Eaten wrapped in lettuce or dipped lightly in seasoned soy sauce with hot rice.",
    tipKo: "따뜻한 쌀밥 위에 짭조름한 살점을 얹어 드시거나 쌈에 싸 드시면 더욱 맛있습니다."
  },
  {
    nameEn: "Artisan Andong Soju",
    nameKo: "안동소주",
    image: "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=800&q=80",
    descEn: "Distilled liquor with centuries of noble family heritage. Crafted from 100% domestic rice and pure water. Distinctive clean finish with a floral aroma (typically 40% to 45% ABV).",
    descKo: "고려시대부터 전해 내려온 명문가의 전통 증류식 소주입니다. 100% 쌀과 천연 암반수로 빚어 알코올 도수는 40~45도로 높지만 목넘김이 부드럽고 향긋한 곡물 향이 특징입니다.",
    priceEn: "15,000 - 35,000 KRW per bottle",
    priceKo: "도자기병 기준 15,000원 ~ 35,000원 선",
    whereEn: "Traditional liquor shops, Andong Soju Museum, local supermarkets",
    whereKo: "안동소주 전통음식박물관, 관내 특산품점 및 마트",
    tipEn: "Makes the premier souvenir for liquor aficionados back home.",
    tipKo: "선물용으로 인기가 높으며, 차갑게 스트레이트로 마시거나 온더록스로 즐기기 좋습니다."
  },
  {
    nameEn: "Mammoth Bakery Cream Cheese Bread",
    nameKo: "맘모스베이커리",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    descEn: "Featured in the prestigious Michelin Green Guide. Famous for its pillowy white bread bursting with velvety, tangy cream cheese and toasted almond slivers.",
    descKo: "미슐랭 그린가이드에 등재된 전국 3대 빵집 중 하나로, 부드럽고 쫄깃한 빵 속에 진하고 새콤달콤한 크림치즈가 가득 찬 크림치즈빵이 시그니처입니다.",
    priceEn: "2,600 KRW each",
    priceKo: "크림치즈빵 개당 2,600원",
    whereEn: "Downtown Andong (near Culture Street, 5 min from Old Market)",
    whereKo: "안동 문화의거리 (구시장에서 도보 3분)",
    tipEn: "Lines form quickly on weekends! Try to visit around 10:00 - 11:30 AM.",
    tipKo: "주말에는 품절이 빠르므로 오전 10시~11시 30분경 방문을 권장합니다."
  }
];

// Itineraries Data
const itineraries = {
  "1day": {
    titleEn: "1-Day Express Highlights (From & Back to Seoul)",
    titleKo: "당일치기 알짜배기 코스 (서울 KTX 왕복)",
    summaryEn: "Ideal for travelers riding KTX early morning from Seoul Cheongnyangni and returning late evening.",
    summaryKo: "서울 청량리역에서 아침 KTX-이음을 타고 출발하여 안동의 핵심 명소와 먹거리를 하루 만에 정복하는 코스입니다.",
    steps: [
      {
        time: "09:00 AM",
        titleEn: "Arrive at Andong KTX Station",
        titleKo: "안동역 KTX 도착",
        descEn: "Take the 07:00 KTX-Eum from Seoul Cheongnyangni. Exit station and head to Bus Stop #1 right outside.",
        descKo: "아침 7시경 청량리역에서 KTX-이음 탑승 후 9시경 안동역 도착. 역사 바로 앞 버스정류장으로 이동합니다.",
        tipEn: "Have your T-money card charged or tap contactless foreign card at the bus reader.",
        tipKo: "티머니 교통카드 또는 후불교통카드를 준비해 두세요."
      },
      {
        time: "10:00 AM - 01:00 PM",
        titleEn: "Explore Hahoe Folk Village",
        titleKo: "안동 하회마을 & 부용대 탐방",
        descEn: "Ride Bus #210 directly to Hahoe. Walk between peaceful thatched roof homes, visit Samsindang tree, and take the small wooden boat across to Buyongdae Cliff.",
        descKo: "210번 버스로 하회마을 이동. 고즈넉한 토담길과 고택을 산책하고 삼신당 느티나무 소원 빌기, 나룻배 타고 부용대 오르기.",
        tipEn: "Mask dance performance starts at 14:00 (Wed-Sun) if timing permits!",
        tipKo: "수~일요일 방문 시 오후 2시 하회별신굿탈놀이 무료 공연 놓치지 마세요."
      },
      {
        time: "01:30 PM",
        titleEn: "Savor Andong Jjimdak at Old Market",
        titleKo: "구시장 찜닭골목 점심 식사",
        descEn: "Take Bus #210 back toward town or a 25-min taxi to Andong Old Market Jjimdak Alley.",
        descKo: "시내로 이동하여 안동 구시장 찜닭골목에서 푸짐하고 매콤달콤한 정통 안동찜닭 맛보기.",
        tipEn: "Walk 3 minutes to Mammoth Bakery for dessert.",
        tipKo: "식사 후 3분 거리의 맘모스베이커리에서 크림치즈빵 디저트 즐기기."
      },
      {
        time: "03:30 PM",
        titleEn: "Bongjeongsa Temple or Dosan Seowon",
        titleKo: "천년고찰 봉정사 또는 도산서원",
        descEn: "Experience Korea's oldest wooden architecture at Bongjeongsa or the serene lakeside courtyards of Dosan Seowon.",
        descKo: "가장 오래된 목조 건물 극락전을 간직한 봉정사 또는 호수를 품은 퇴계 이황의 도산서원 방문.",
        tipEn: "A quick taxi or city bus connects smoothly.",
        tipKo: "시간 절약을 위해 시내에서 택시를 이용하는 것도 좋은 방법입니다."
      },
      {
        time: "06:30 PM",
        titleEn: "Sunset & Night Illumination at Woryeonggyo Bridge",
        titleKo: "월영교 야경 산책 & 간고등어 저녁",
        descEn: "Cross Korea's longest wooden pedestrian bridge as the lanterns glow in the twilight.",
        descKo: "국내 최장 목책 인도교 월영교를 건너며 낭만적인 야간 조명 감상 및 인근에서 간고등어/헛제사밥 저녁 식사.",
        tipEn: "Dine on Heotjesatbap (bibimbap) or Salted Mackerel right by the bridge.",
        tipKo: "강바람이 시원하므로 가벼운 겉옷을 챙기시면 좋습니다."
      },
      {
        time: "08:30 PM",
        titleEn: "Depart via KTX back to Seoul",
        titleKo: "안동역에서 서울행 KTX 탑승",
        descEn: "Board the KTX-Eum at Andong Station arriving in Seoul before 10:45 PM.",
        descKo: "안동역으로 복귀하여 KTX-이음 탑승, 밤 10시 40분경 청량리역 편안하게 도착.",
        tipEn: "Buy your return train ticket in advance via the Korail Talk app.",
        tipKo: "코레일톡 앱으로 돌아오는 승차권을 사전 예매해 두세요."
      }
    ]
  },
  "2day": {
    titleEn: "2-Day Immersive Hanok Stay & Scholar Culture",
    titleKo: "1박 2일 고택 힐링 & 선비 문화 탐방",
    summaryEn: "Stay overnight in an authentic 200-year-old wooden hanok under starry skies and wake up to morning temple bells.",
    summaryKo: "200년 전통의 온돌 한옥 고택에서 하룻밤 머물며 선비의 기품과 여유를 오롯이 누리는 힐링 여정입니다.",
    steps: [
      {
        time: "Day 1 - Morning",
        titleEn: "Arrival & Check-in at Hanok Guesthouse",
        titleKo: "안동 도착 및 전통 한옥 고택 체크인",
        descEn: "Settle into a traditional ondol-heated room in Hahoe Village or downtown Jirye Artists' Colony.",
        descKo: "하회마을 또는 지례예술촌의 전통 온돌 고택에 짐을 풀고 따뜻한 차 한잔과 함께 여유를 즐깁니다.",
        tipEn: "Sleeping on traditional soft Korean yo (futon mattress) on heated floors is heavenly in cooler weather.",
        tipKo: "뜨끈한 온돌 바닥에 펴는 포근한 전통 요솜 이불은 최고의 힐링을 선사합니다."
      },
      {
        time: "Day 1 - Afternoon",
        titleEn: "Hahoe Mask Dance & Buyongdae Cliff Panorama",
        titleKo: "하회별신굿탈놀이 관람 및 부용대 절경",
        descEn: "Watch the satiric Joseon mask theater performance at 2:00 PM, then climb Buyongdae Cliff for sunset.",
        descKo: "오후 2시 신명나는 하회탈춤 공연을 관람하고, 늦은 오후 부용대에 올라 붉게 물드는 마을 노을 감상.",
        tipEn: "Enjoy roasted sweet corn sold by local village grandmothers.",
        tipKo: "마을 어르신들이 파는 구운 옥수수나 엿을 간식으로 맛보세요."
      },
      {
        time: "Day 1 - Evening",
        titleEn: "Moonlight Boat Ride at Woryeonggyo",
        titleKo: "월영교 문보트 체험 & 야경 만끽",
        descEn: "Glide along the river in an illuminated lunar-shaped motorboat gazing at the illuminated bridge.",
        descKo: "은은한 달빛 모양 보트를 타고 안동호 물결 위를 유영하며 월영정 야경 감상.",
        tipEn: "Bring a light jacket as the river breeze is refreshing.",
        tipKo: "문보트는 블루투스 스피커가 탑재되어 있어 좋아하는 음악을 들을 수 있습니다."
      },
      {
        time: "Day 2 - Morning",
        titleEn: "Dosan Seowon Confucian Academy & Andong Lake",
        titleKo: "도산서원 아침 산책 & 사색의 길",
        descEn: "Enjoy the morning calm among 450-year-old pine trees where Joseon scholars meditated.",
        descKo: "안동호가 내려다보이는 퇴계 이황 선생의 학문 공간 도산서원을 거닐며 조선 시대 선비들의 고결한 숨결 느끼기.",
        tipEn: "Check the tranquil wooden study pavilions facing the lake waters.",
        tipKo: "서원 앞 시사단과 호수 풍경을 배경으로 멋진 기념사진을 남겨보세요."
      },
      {
        time: "Day 2 - Afternoon",
        titleEn: "Gourmet Trail & Andong Soju Distillery",
        titleKo: "안동소주 박물관 & 전통 시장 쇼핑",
        descEn: "Savor grilled salted mackerel for lunch, followed by an educational tour and tasting at the Andong Soju Museum.",
        descKo: "점심으로 노릇하게 구운 간고등어 정식을 맛보고, 안동소주 박물관에서 빚는 과정 견학 및 시음.",
        tipEn: "Pick up hand-crafted bottles with genuine quality seal certificates.",
        tipKo: "기념품으로 선물하기 좋은 전통 도자기병 안동소주를 구매해 보세요."
      }
    ]
  },
  "foodie": {
    titleEn: "1-Day Ultimate Culinary Trail",
    titleKo: "미식가(Foodie) 1일 먹방 투어",
    summaryEn: "Designed exclusively for gastronomy enthusiasts looking to sample every iconic specialty.",
    summaryKo: "안동을 대표하는 5대 진미(찜닭, 크림치즈빵, 간고등어, 헛제사밥, 안동소주)를 하루 만에 정복하는 코스입니다.",
    steps: [
      {
        time: "10:30 AM",
        titleEn: "Morning Pastry at Mammoth Bakery",
        titleKo: "맘모스베이커리 크림치즈빵 모닝",
        descEn: "Start with freshly baked hot cream cheese bread and local persimmon tea.",
        descKo: "갓 구워져 나온 따뜻하고 진한 크림치즈빵과 시원한 아메리카노로 기분 좋게 시작.",
        tipEn: "Pair with an iced americano.",
        tipKo: "주말에는 오픈 직후 방문해야 대기 없이 빵을 구매할 수 있습니다."
      },
      {
        time: "12:30 PM",
        titleEn: "Feast on Andong Jjimdak in the Old Market",
        titleKo: "구시장 찜닭골목 화력 폭발 찜닭 점심",
        descEn: "Watch master chefs stir-fry giant woks with chili, tender chicken, and chewy glass noodles.",
        descKo: "대형 솥에서 펄펄 끓여내는 찜닭 달인들의 손맛과 쫄깃한 당면, 닭고기의 완벽한 조화.",
        tipEn: "Add steamed rice at the end to mix with the rich soy gravy.",
        tipKo: "마지막에 공깃밥을 양념에 쓱쓱 비벼 먹는 것이 한국인의 찐 노하우!"
      },
      {
        time: "03:30 PM",
        titleEn: "Artisan Andong Soju Tasting Session",
        titleKo: "전통 안동소주 시음 및 제조공정 체험",
        descEn: "Learn how pure rice is fermented with traditional Nuruk yeast before sampling 40% master distillation.",
        descKo: "누룩과 쌀로 빚어내는 장인의 증류 방식을 살펴보고 은은한 곡향이 감도는 45도 안동소주 맛보기.",
        tipEn: "Take small sips to appreciate the floral finish.",
        tipKo: "도수가 높으므로 입안에 머금고 향을 음미하듯 조금씩 시음하세요."
      },
      {
        time: "06:30 PM",
        titleEn: "Dinner: Gandeungeo (Charcoal Salted Mackerel)",
        titleKo: "월영교 앞 숯불 간고등어 구이 저녁",
        descEn: "Eat with a table full of local wild herb side dishes (banchan) by Woryeonggyo wooden bridge.",
        descKo: "참숯 향이 배어있는 기름진 간고등어 구이와 정갈한 나물 반찬, 구수한 된장찌개로 든든한 마무리.",
        tipEn: "Wrap a piece of piping hot crispy mackerel in seasoned seaweed (gim).",
        tipKo: "바삭한 생선살을 갓 지은 밥과 상추에 쌈장을 곁들여 드셔보세요."
      }
    ]
  }
};

// Site-wide Static Text Translations Dictionary
const i18n = {
  en: {
    // Nav
    navSpots: "Top Spots",
    navFood: "Cuisine & Drinks",
    navItinerary: "Itinerary",
    navMap: "Interactive Map",
    navTransport: "Transport",
    navTips: "Survival Tips",
    
    // Hero
    heroTag: "The Spiritual Capital of Korea",
    heroTitle: "Step Into 600 Years of Living Tradition",
    heroSubtitle: "From the mist-shrouded traditional thatched roofs of Hahoe Folk Village to the illuminated timber spans of Woryeonggyo Bridge and savory Andong Jjimdak. Your comprehensive English survival guide.",
    btnStart: "Start Exploring",
    btnViewMap: "View Map & Routes",
    stat1Val: "2h",
    stat1Label: "From Seoul via KTX-Eum",
    stat2Val: "3+",
    stat2Label: "UNESCO World Heritage Sites",
    stat3Val: "600+",
    stat3Label: "Years of Living Joseon Heritage",
    stat4Val: "100%",
    stat4Label: "English Transit & Etiquette Ready",

    // Quick info
    info1Title: "Seoul to Andong (KTX)",
    info1Desc: "Cheongnyangni Stn ➔ Andong Stn in just <strong>2 hours</strong> (KRW ~25,000).",
    info2Title: "Bus #210 to Hahoe",
    info2Desc: "Departs right outside Andong Station platform directly to Hahoe Folk Village.",
    info3Title: "Foreign Cards Accepted",
    info3Desc: "Visa/Mastercard widely accepted; T-Money card recommended for local buses.",
    info4Title: "Korea Travel Helpline 1330",
    info4Desc: "24/7 free interpretation in English, Japanese, and Chinese from any phone.",

    // Spots Section
    spotsBadge: "MUST-VISIT HIGHLIGHTS",
    spotsTitle: "Iconic Wonders of Andong",
    spotsDesc: "Curated historical, cultural, and scenic attractions with traveler tips, photography guides, and bus directions.",
    filterAll: "All Sites",
    filterUnesco: "UNESCO Heritage",
    filterNature: "Scenic & Romantic",
    filterCultural: "Academy & Scholar",
    filterNight: "Night Views",
    btnDetailGuide: "Detailed Guide & Tips",
    btnTaxiCard: "Taxi Card",

    // Map Section
    mapBadge: "INTERACTIVE NAVIGATOR",
    mapTitle: "Andong Tourist Map & Routes",
    mapDesc: "Click markers on the interactive map to preview spots, get bus route numbers, and view Korean addresses for taxi drivers.",
    mapSearchPlaceholder: "Search spot (e.g. Hahoe, Bridge)...",

    // Food Section
    foodBadge: "GASTRONOMIC ADVENTURE",
    foodTitle: "Flavors You Can Only Taste in Andong",
    foodDesc: "Andong has one of Korea's most celebrated regional food cultures. Here is what to order and how to eat it.",
    priceLabel: "Price:",
    whereLabel: "Where to eat:",
    tipLabel: "Pro-tip:",
    foodHelperBadge: "Useful Dining Phrases for Foreigners",

    // Itinerary Section
    itinBadge: "CURATED TRAVEL PLANS",
    itinTitle: "Tested Travel Itineraries",
    itinDesc: "Whether you have a 1-day quick express trip from Seoul or an immersive 2-day hanok stay, follow these proven routes.",
    itinTab1: "⚡ 1-Day Express Highlights",
    itinTab2: "🌿 2-Day Cultural Hanok Retreat",
    itinTab3: "🍲 1-Day Heritage & Food Trail",

    // Transport Section
    transBadge: "TRANSIT & LOGISTICS",
    transTitle: "How to Get Around Andong Like a Pro",
    transDesc: "Avoid getting stranded with our clear instructions on trains, city buses, and taxi services.",
    transCard1Title: "From Seoul (KTX-Eum)",
    transCard1P: "Take the <strong>KTX-Eum</strong> high-speed train from <strong>Cheongnyangni Station</strong> (Seoul) directly to <strong>Andong Station</strong>.",
    transCard1L1: "<strong>Duration:</strong> Approx. 2 hours",
    transCard1L2: "<strong>Cost:</strong> ~25,100 KRW (Standard seat)",
    transCard1L3: "<strong>Booking:</strong> Via Korail English App ('Korail Talk') or website",
    transCard1L4: "<strong>Frequency:</strong> Roughly every 1 to 2 hours",

    transCard2Title: "Key City Bus Routes",
    transCard2P: "Buses depart from the bus stops directly in front of Andong KTX Station.",
    transCard2L1: "<strong>Bus #210 (Direct to Hahoe):</strong> Every 30-40 min, stops right at Hahoe Ticket Booth. (Fare: 1,500 KRW with T-Money)",
    transCard2L2: "<strong>Bus #112 or #113:</strong> Andong Station ➔ Downtown Old Market (Jjimdak Alley).",
    transCard2L3: "<strong>Bus #311 or #312:</strong> Downtown ➔ Woryeonggyo Wooden Bridge.",
    transCard2L4: "<strong>Pro Tip:</strong> Install <em>Naver Map</em> or <em>KakaoMap</em> in English for real-time bus arrivals. Google Maps transit data is limited in Korea.",

    transCard3Title: "Taxis & Kakao T",
    transCard3P: "Taxis are convenient and affordable for groups or night visits to Woryeonggyo Bridge.",
    transCard3L1: "<strong>Base Fare:</strong> Starts at 4,000 KRW",
    transCard3L2: "<strong>Ride-Hailing:</strong> Download <strong>Kakao T</strong> (English interface available, accepts foreign credit cards).",
    transCard3L3: "<strong>Taxi Card Generator:</strong> Use our <em>Show Taxi Driver</em> button below to show the exact Korean destination address on your phone screen!",

    taxiHelperTitle: "Show to Taxi Driver (택시 기사님용 카드)",
    taxiHelperDesc: "Select your destination to enlarge the Korean name and address for your taxi driver:",
    btnDisplayTaxiCard: "Display Fullscreen Card",

    // Survival Tips Section
    tipsBadge: "LOCAL PROTOCOL & TIPS",
    tipsTitle: "International Traveler Survival Guide",
    tipsDesc: "Essential practical knowledge to make your journey through Andong smooth, respectful, and memorable.",
    tip1Head: "1. Respecting Living Hanok Residents in Hahoe Village",
    tip1Body: "<p>Hahoe Village is <strong>not</strong> an artificial theme park—real families (descendants of the Ryu clan) have lived here for generations. Please remember:</p><ul><li>Do not enter private courtyards if the outer gate (Daemun) is closed.</li><li>Keep noise levels down in the early morning and after sunset.</li><li>Always ask permission before taking close-up portraits of residents.</li></ul>",
    tip2Head: "2. Hanok & Temple Etiquette (Shoes & Flooring)",
    tip2Body: "<p>In traditional Korean architecture (Hanok, pavilions, tearooms, and temple prayer halls):</p><ul><li><strong>Always remove your shoes</strong> before stepping onto wooden wooden porches (Maru) or indoor ondol floors. Slippers or bare feet/socks only.</li><li>Wear comfortable, easy-to-slip-on walking shoes because you will be taking them off frequently.</li><li>At Buddhist temples like Bongjeongsa, do not step directly on the threshold beam of wooden doorways; step over it.</li></ul>",
    tip3Head: "3. Catching the Famous Hahoe Mask Dance (Byeolsingut)",
    tip3Body: "<p>The UNESCO-inscribed <strong>Hahoe Mask Dance Drama</strong> is performed regularly at the Mask Dance Theater near the entrance of Hahoe Village:</p><ul><li><strong>Schedule:</strong> Usually Wednesday to Sunday at 2:00 PM (March - December). Arrive 20 minutes early for good seats.</li><li><strong>Admission:</strong> Included free with your Hahoe Village ticket!</li><li><strong>Language:</strong> Subtitles in English, Japanese, and Chinese are displayed on the electronic boards beside the stage.</li></ul>",
    tip4Head: "4. Crucial Apps to Download Before Arriving",
    tip4Body: "<p>Due to national spatial data regulations, Google Maps has limited walking directions and transit tracking in South Korea. We strongly suggest downloading:</p><ul><li><strong>Naver Map:</strong> Fully available in English; accurate bus timing, walking navigation, and opening hours.</li><li><strong>Papago:</strong> The most natural Korean-English voice and photo translator (by Naver).</li><li><strong>Kakao T:</strong> To call taxis without needing to speak Korean to the driver.</li></ul>",
    tip5Head: "5. Andong Soju Warning (45% ABV!)",
    tip5Body: "<p>Traditional Andong Soju is not the green-bottle soju found in convenience stores; it is a meticulously distilled artisan liquor made from pure rice, yeast, and pure underground water. It has an alcohol content of <strong>40% to 45% ABV</strong>. Sip it slowly from small porcelain cups to savor its smooth, floral aroma!</p>",

    // Calculator Section
    calcBadge: "TRIP PLANNER TOOL",
    calcTitle: "Andong Travel Cost Estimator (KRW / USD)",
    calcDesc: "Estimate your trip budget including high-speed train, hanok stay, meals, and entry tickets.",
    calcDaysLabel: "Number of Days",
    calcPeopleLabel: "Travelers",
    calcHotelLabel: "Accommodation Style",
    calcTransitLabel: "Local Transportation",
    calcTotalLabel: "Total Estimated Budget:",

    // Footer
    footerDesc: "A non-commercial, dedicated traveler resource created to guide global travelers through the historical charm and vibrant culinary landscape of Andong, Gyeongsangbuk-do, Republic of Korea.",
    footerNavTitle: "Navigation",
    footerExtTitle: "Official External Resources",
    footerCopy: "© 2026 Discover Andong. Built for international explorers with HTML5, CSS3 & JavaScript."
  },

  ko: {
    // Nav
    navSpots: "주요 명소",
    navFood: "전통 음식 & 주류",
    navItinerary: "추천 여행코스",
    navMap: "관광 지도",
    navTransport: "교통 가이드",
    navTips: "여행 꿀팁 & 에티켓",

    // Hero
    heroTag: "한국 정신문화의 수도, 안동",
    heroTitle: "600년 조선의 숨결과 선비 정신을 만나다",
    heroSubtitle: "물안개 피어나는 유네스코 세계유산 하회마을부터 달빛 수놓는 월영교 야경, 매콤달콤한 안동찜닭까지. 외국인과 내국인 모두를 위한 완벽한 안동 여행 가이드입니다.",
    btnStart: "명소 둘러보기",
    btnViewMap: "지도 & 노선 보기",
    stat1Val: "2시간",
    stat1Label: "서울 청량리 KTX-이음 직통",
    stat2Val: "3개+",
    stat2Label: "유네스코 세계문화유산 등재",
    stat3Val: "600년+",
    stat3Label: "살아 숨 쉬는 조선 시대 고택",
    stat4Val: "100%",
    stat4Label: "외국인 맞춤 교통 & 에티켓 가이드",

    // Quick info
    info1Title: "서울에서 안동까지 (KTX)",
    info1Desc: "청량리역 ➔ 안동역 KTX-이음으로 단 <strong>2시간</strong> 소요 (편도 약 25,000원).",
    info2Title: "하회마을행 210번 버스",
    info2Desc: "안동역 바로 앞 버스정류장에서 하회마을 매표소까지 직행 버스 운행.",
    info3Title: "해외 카드 및 교통카드 사용",
    info3Desc: "비자/마스터 카드 대부분 사용 가능, 시내버스는 티머니 카드 추천.",
    info4Title: "관광 헬프라인 1330",
    info4Desc: "국번없이 1330으로 전화 시 영어·일어·중국어 24시간 무료 통역 서비스 지원.",

    // Spots Section
    spotsBadge: "안동 필수 여행지",
    spotsTitle: "안동의 대표 랜드마크 & 명소",
    spotsDesc: "유네스코 세계유산부터 낭만적인 야경 명소, 버스 탑승 안내와 사진 꿀팁까지 엄선했습니다.",
    filterAll: "전체 명소",
    filterUnesco: "유네스코 세계유산",
    filterNature: "자연 & 낭만 명소",
    filterCultural: "서원 & 선비 문화",
    filterNight: "야경 명소",
    btnDetailGuide: "상세 안내 & 꿀팁",
    btnTaxiCard: "택시 기사님용 카드",

    // Map Section
    mapBadge: "인터랙티브 관광 지도",
    mapTitle: "안동 관광 지도 & 길찾기",
    mapDesc: "지도의 마커를 클릭하여 명소 정보, 버스 노선, 기사님께 보여줄 한글 주소를 바로 확인하세요.",
    mapSearchPlaceholder: "명소 검색 (예: 하회마을, 월영교)...",

    // Food Section
    foodBadge: "미식의 고향 안동",
    foodTitle: "안동에서만 맛볼 수 있는 특별한 맛",
    foodDesc: "조선 시대 선비의 기품과 전통이 살아있는 안동의 독창적인 향토 음식들을 소개합니다.",
    priceLabel: "가격대:",
    whereLabel: "추천 장소:",
    tipLabel: "맛있게 먹는 꿀팁:",
    foodHelperBadge: "외국인 친구를 위한 필수 식당 회화",

    // Itinerary Section
    itinBadge: "추천 여행 코스",
    itinTitle: "검증된 안동 여행 일정",
    itinDesc: "서울 출발 당일치기 KTX 코스부터 고즈넉한 한옥 1박 2일 스테이, 미식 투어까지 원하는 일정을 선택하세요.",
    itinTab1: "⚡ 당일치기 알짜배기 코스",
    itinTab2: "🌿 1박 2일 고택 힐링 코스",
    itinTab3: "🍲 미식가 1일 먹방 코스",

    // Transport Section
    transBadge: "교통 & 이동 방법",
    transTitle: "안동 시내 대중교통 완벽 정복",
    transDesc: "KTX 고속열차, 주요 시내버스 노선, 택시 이용 팁을 통해 헤매지 않고 여행하세요.",
    transCard1Title: "서울에서 오실 때 (KTX-이음)",
    transCard1P: "서울 <strong>청량리역</strong>에서 <strong>KTX-이음</strong>을 타시면 <strong>안동역</strong>까지 환승 없이 2시간 만에 도착합니다.",
    transCard1L1: "<strong>소요 시간:</strong> 약 2시간",
    transCard1L2: "<strong>운임:</strong> 일반실 기준 약 25,100원",
    transCard1L3: "<strong>예매:</strong> 코레일 공식 앱(코레일톡) 또는 웹사이트",
    transCard1L4: "<strong>배차 간격:</strong> 약 1~2시간 간격",

    transCard2Title: "주요 시내버스 노선",
    transCard2P: "안동역사 바로 앞 버스 승강장에서 주요 관광지행 버스가 출발합니다.",
    transCard2L1: "<strong>210번 (하회마을 직행):</strong> 30~40분 간격, 하회마을 매표소 바로 앞 하차 (티머니 1,500원)",
    transCard2L2: "<strong>112번 또는 113번:</strong> 안동역 ➔ 원도심 구시장 (안동찜닭골목)",
    transCard2L3: "<strong>311번 또는 312번:</strong> 시내 ➔ 월영교 목책 인도교",
    transCard2L4: "<strong>꿀팁:</strong> 실시간 버스 도착 정보는 <em>네이버지도</em>나 <em>카카오맵</em> 앱을 활용하세요.",

    transCard3Title: "택시 & 카카오 T",
    transCard3P: "가족 단위 또는 늦은 저녁 월영교 야경 감상 후 귀가 시 편리하고 경제적입니다.",
    transCard3L1: "<strong>기본 요금:</strong> 4,000원부터 시작",
    transCard3L2: "<strong>호출 앱:</strong> <strong>카카오 T</strong> 앱 이용 시 기사님과 대화 없이 카드 자동 결제 가능",
    transCard3L3: "<strong>택시 카드 기능:</strong> 아래의 <em>택시 기사님용 카드</em> 버튼을 눌러 정확한 한글 주소를 기사님께 바로 보여주세요!",

    taxiHelperTitle: "택시 기사님께 보여주세요 (Show to Taxi Driver)",
    taxiHelperDesc: "목적지를 선택하시면 기사님이 한눈에 알아보실 수 있도록 큰 글씨의 한글 주소 카드가 표시됩니다:",
    btnDisplayTaxiCard: "전체화면 카드 열기",

    // Survival Tips Section
    tipsBadge: "로컬 에티켓 & 여행 꿀팁",
    tipsTitle: "외국인을 위한 안동 여행 서바이벌 가이드",
    tipsDesc: "안동의 전통문화를 존중하며 안전하고 품격 있는 여행을 즐기기 위한 기본 상식입니다.",
    tip1Head: "1. 하회마을 실제 주민 보호 및 관람 예절",
    tip1Body: "<p>하회마을은 인위적으로 꾸며진 민속촌이 아니라 <strong>실제 류씨 후손들이 수백 년째 살아가는 생활 공간</strong>입니다.</p><ul><li>대문이 닫힌 민가는 함부로 들어가지 마세요.</li><li>이른 아침이나 해가 진 저녁 시간에는 소음을 줄여주세요.</li><li>마을 어르신들의 인물 사진을 찍을 때는 반드시 사전 동의를 구하세요.</li></ul>",
    tip2Head: "2. 한옥 및 사찰 신발 벗는 에티켓",
    tip2Body: "<p>한국의 전통 한옥, 정자, 찻집, 사찰 법당에서는:</p><ul><li><strong>나무 마루나 온돌방에 올라가기 전 반드시 신발을 벗어야 합니다.</strong> 실내화 또는 양말 차림으로 이동합니다.</li><li>신발을 벗고 신는 일이 잦으므로 신고 벗기 편한 신발을 착용하세요.</li><li>봉정사 등 전통 사찰에서는 법당 문턱을 밟지 말고 살짝 건너뛰어 들어가는 것이 예의입니다.</li></ul>",
    tip3Head: "3. 유네스코 하회별신굿탈놀이 무료 관람",
    tip3Body: "<p>유네스코 인류무형문화유산인 <strong>하회별신굿탈놀이</strong>는 하회마을 입구 탈놀이 전수관에서 상설 공연됩니다:</p><ul><li><strong>공연 일정:</strong> 3월~12월 매주 수~일요일 오후 2시 (명당 선점을 위해 20분 전 입장 추천)</li><li><strong>관람료:</strong> 하회마을 입장권 소지 시 무료!</li><li><strong>자막 지원:</strong> 무대 양옆 전광판에 영어, 일본어, 중국어 자막이 제공됩니다.</li></ul>",
    tip4Head: "4. 한국 여행 필수 설치 앱",
    tip4Body: "<p>국내 공간정보 보안 규정으로 인해 구글맵의 대중교통 및 도보 안내가 제한적입니다. 아래 앱을 미리 설치하세요:</p><ul><li><strong>네이버지도 (Naver Map):</strong> 영어 인터페이스 지원, 실시간 버스 도착 및 도보 길찾기 최고 정확도</li><li><strong>파파고 (Papago):</strong> 음성 인식 및 간판 사진 번역에 가장 정확한 네이버 번역기</li><li><strong>카카오 T (Kakao T):</strong> 언어 소통 없이 목적지까지 택시 호출 및 자동 결제</li></ul>",
    tip5Head: "5. 안동소주 음주 주의 (도수 45도!)",
    tip5Body: "<p>전통 안동소주는 편의점의 초록색 희석식 소주와 완전히 다릅니다. 쌀과 누룩으로 빚은 전통 증류주로 <strong>알코올 도수가 40%~45%</strong>에 달합니다. 원샷하지 마시고 작은 도자기 잔에 조금씩 따라 그윽한 쌀 향을 음미하며 드세요!</p>",

    // Calculator Section
    calcBadge: "여행 경비 계산기",
    calcTitle: "안동 여행 예상 경비 계산기 (KRW / USD)",
    calcDesc: "KTX 고속열차, 한옥 숙박, 식비, 입장료를 조합하여 1인 또는 동행 인원별 총예산을 간편하게 산출해 보세요.",
    calcDaysLabel: "여행 기간",
    calcPeopleLabel: "여행 인원",
    calcHotelLabel: "숙소 스타일",
    calcTransitLabel: "현지 교통수단",
    calcTotalLabel: "예상 총여행 경비:",

    // Footer
    footerDesc: "경북 안동시를 방문하는 전 세계 여행자와 국내 관광객들이 안동의 깊은 역사와 미식을 편리하게 탐방할 수 있도록 제작된 비영리 관광 가이드 포털입니다.",
    footerNavTitle: "사이트 바로가기",
    footerExtTitle: "공식 관광 정보 사이트",
    footerCopy: "© 2026 Discover Andong. 순수 HTML5, CSS3 & JavaScript 기반으로 제작되었습니다."
  }
};

// State Variables
let currentFilter = 'all';
let currentLang = 'en';
let mapInstance = null;
let markersMap = {};

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  renderDestinations();
  renderFoods();
  renderItinerary('1day');
  initLeafletMap();
  initCalculator();
  initAccordion();
  initModals();
  initLanguageToggle();
});

// Update all static text across the page based on selected language
function applyLanguage(lang) {
  currentLang = lang;
  const t = i18n[lang];

  // Document title
  document.title = lang === 'en' 
    ? "Discover Andong | The Capital of Korean Mental Culture" 
    : "안동 관광 가이드 | 한국 정신문화의 수도 경북 안동";

  // Navigation
  safeSetText('navSpots', t.navSpots);
  safeSetText('navFood', t.navFood);
  safeSetText('navItinerary', t.navItinerary);
  safeSetText('navMap', t.navMap);
  safeSetText('navTransport', t.navTransport);
  safeSetText('navTips', t.navTips);

  // Hero
  safeSetText('heroTagText', t.heroTag);
  safeSetText('heroTitle', t.heroTitle);
  safeSetText('heroSubtitle', t.heroSubtitle);
  safeSetText('heroBtnStart', t.btnStart);
  safeSetText('heroBtnMap', t.btnViewMap);
  safeSetText('stat1Val', t.stat1Val);
  safeSetText('stat1Label', t.stat1Label);
  safeSetText('stat2Val', t.stat2Val);
  safeSetText('stat2Label', t.stat2Label);
  safeSetText('stat3Val', t.stat3Val);
  safeSetText('stat3Label', t.stat3Label);
  safeSetText('stat4Val', t.stat4Val);
  safeSetText('stat4Label', t.stat4Label);

  // Quick info
  safeSetText('info1Title', t.info1Title);
  safeSetHtml('info1Desc', t.info1Desc);
  safeSetText('info2Title', t.info2Title);
  safeSetHtml('info2Desc', t.info2Desc);
  safeSetText('info3Title', t.info3Title);
  safeSetHtml('info3Desc', t.info3Desc);
  safeSetText('info4Title', t.info4Title);
  safeSetHtml('info4Desc', t.info4Desc);

  // Destinations Section
  safeSetText('spotsBadge', t.spotsBadge);
  safeSetText('spotsTitle', t.spotsTitle);
  safeSetText('spotsDesc', t.spotsDesc);
  safeSetText('filterAll', t.filterAll);
  safeSetText('filterUnesco', t.filterUnesco);
  safeSetText('filterNature', t.filterNature);
  safeSetText('filterCultural', t.filterCultural);
  safeSetText('filterNight', t.filterNight);

  // Map Section
  safeSetText('mapBadge', t.mapBadge);
  safeSetText('mapTitle', t.mapTitle);
  safeSetText('mapDesc', t.mapDesc);
  const mapSearchInput = document.getElementById('mapSearchInput');
  if (mapSearchInput) mapSearchInput.placeholder = t.mapSearchPlaceholder;

  // Food Section
  safeSetText('foodBadge', t.foodBadge);
  safeSetText('foodTitle', t.foodTitle);
  safeSetText('foodDesc', t.foodDesc);
  safeSetText('foodHelperBadge', t.foodHelperBadge);

  // Itinerary Section
  safeSetText('itinBadge', t.itinBadge);
  safeSetText('itinTitle', t.itinTitle);
  safeSetText('itinDesc', t.itinDesc);
  safeSetText('itinTab1', t.itinTab1);
  safeSetText('itinTab2', t.itinTab2);
  safeSetText('itinTab3', t.itinTab3);

  // Transport Section
  safeSetText('transBadge', t.transBadge);
  safeSetText('transTitle', t.transTitle);
  safeSetText('transDesc', t.transDesc);
  safeSetText('transCard1Title', t.transCard1Title);
  safeSetHtml('transCard1P', t.transCard1P);
  safeSetHtml('transCard1L1', t.transCard1L1);
  safeSetHtml('transCard1L2', t.transCard1L2);
  safeSetHtml('transCard1L3', t.transCard1L3);
  safeSetHtml('transCard1L4', t.transCard1L4);

  safeSetText('transCard2Title', t.transCard2Title);
  safeSetHtml('transCard2P', t.transCard2P);
  safeSetHtml('transCard2L1', t.transCard2L1);
  safeSetHtml('transCard2L2', t.transCard2L2);
  safeSetHtml('transCard2L3', t.transCard2L3);
  safeSetHtml('transCard2L4', t.transCard2L4);

  safeSetText('transCard3Title', t.transCard3Title);
  safeSetHtml('transCard3P', t.transCard3P);
  safeSetHtml('transCard3L1', t.transCard3L1);
  safeSetHtml('transCard3L2', t.transCard3L2);
  safeSetHtml('transCard3L3', t.transCard3L3);

  safeSetText('taxiHelperTitle', t.taxiHelperTitle);
  safeSetText('taxiHelperDesc', t.taxiHelperDesc);
  safeSetText('btnDisplayTaxiCard', t.btnDisplayTaxiCard);

  // Tips Section
  safeSetText('tipsBadge', t.tipsBadge);
  safeSetText('tipsTitle', t.tipsTitle);
  safeSetText('tipsDesc', t.tipsDesc);
  safeSetText('tip1Head', t.tip1Head);
  safeSetHtml('tip1Body', t.tip1Body);
  safeSetText('tip2Head', t.tip2Head);
  safeSetHtml('tip2Body', t.tip2Body);
  safeSetText('tip3Head', t.tip3Head);
  safeSetHtml('tip3Body', t.tip3Body);
  safeSetText('tip4Head', t.tip4Head);
  safeSetHtml('tip4Body', t.tip4Body);
  safeSetText('tip5Head', t.tip5Head);
  safeSetHtml('tip5Body', t.tip5Body);

  // Calculator Section
  safeSetText('calcBadge', t.calcBadge);
  safeSetText('calcTitle', t.calcTitle);
  safeSetText('calcDesc', t.calcDesc);
  safeSetText('calcDaysLabel', t.calcDaysLabel);
  safeSetText('calcPeopleLabel', t.calcPeopleLabel);
  safeSetText('calcHotelLabel', t.calcHotelLabel);
  safeSetText('calcTransitLabel', t.calcTransitLabel);
  safeSetText('calcTotalLabel', t.calcTotalLabel);

  // Footer
  safeSetText('footerDesc', t.footerDesc);
  safeSetText('footerNavTitle', t.footerNavTitle);
  safeSetText('footerExtTitle', t.footerExtTitle);
  safeSetText('footerCopy', t.footerCopy);

  // Re-render dynamic components with current language
  renderDestinations();
  renderFoods();
  
  // Re-render currently active itinerary
  const activeItinBtn = document.querySelector('.itin-tab-btn.active');
  const activeItinType = activeItinBtn ? activeItinBtn.getAttribute('data-itin') : '1day';
  renderItinerary(activeItinType);

  // Update calculator result labels
  initCalculator();
}

function safeSetText(id, text) {
  const el = document.getElementById(id);
  if (el && text !== undefined) el.innerText = text;
}

function safeSetHtml(id, html) {
  const el = document.getElementById(id);
  if (el && html !== undefined) el.innerHTML = html;
}

// Navbar scroll & mobile menu
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Close mobile menu on click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
}

// Render Destinations Grid
function renderDestinations() {
  const grid = document.getElementById('destinationsGrid');
  if (!grid) return;
  grid.innerHTML = '';

  const filtered = destinationsData.filter(item => {
    if (currentFilter === 'all') return true;
    return item.category === currentFilter;
  });

  filtered.forEach(item => {
    const card = document.createElement('div');
    card.className = 'spot-card';
    const title = currentLang === 'en' ? item.nameEn : item.nameKo;
    const subTitle = currentLang === 'en' ? item.nameKo : item.nameEn;
    const desc = currentLang === 'en' ? item.descEn : item.descKo;
    const badge = currentLang === 'en' ? item.badgeEn : item.badgeKo;
    const transit = currentLang === 'en' ? item.transitEn.split('(')[0] : item.transitKo.split('(')[0];
    const tags = currentLang === 'en' ? item.tagsEn : item.tagsKo;
    const btnDetail = currentLang === 'en' ? 'Detailed Guide & Tips' : '상세 가이드 & 꿀팁';
    const btnTaxi = currentLang === 'en' ? 'Taxi Card' : '기사님용 카드';

    card.innerHTML = `
      <div class="spot-card-img-wrap">
        <img src="${item.image}" alt="${title}" loading="lazy">
        <span class="spot-badge">${badge}</span>
        <div class="spot-transit-tag"><i class="fa-solid fa-bus"></i> ${transit}</div>
      </div>
      <div class="spot-card-body">
        <div class="spot-header-row">
          <h3 class="spot-title">${title}</h3>
          <span class="spot-korean-name">${subTitle}</span>
        </div>
        <p class="spot-desc">${desc}</p>
        <div class="spot-features">
          ${tags.map(tag => `<span class="feature-tag">#${tag}</span>`).join('')}
        </div>
        <div class="spot-card-footer">
          <button class="spot-view-btn" onclick="openDestinationModal('${item.id}')">
            ${btnDetail} <i class="fa-solid fa-arrow-right"></i>
          </button>
          <button class="btn btn-secondary" style="padding: 6px 14px; font-size: 0.78rem;" onclick="showTaxiDirect('${item.nameKo}', '${item.addrKo}', '${item.nameEn}')">
            <i class="fa-solid fa-taxi"></i> ${btnTaxi}
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  // Filter Buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.onclick = (e) => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      currentFilter = e.target.getAttribute('data-filter');
      renderDestinations();
    };
  });
}

// Render Food Cards
function renderFoods() {
  const foodGrid = document.getElementById('foodGrid');
  if (!foodGrid) return;
  foodGrid.innerHTML = '';

  const t = i18n[currentLang];

  foodsData.forEach(food => {
    const card = document.createElement('div');
    card.className = 'food-card';
    const title = currentLang === 'en' ? food.nameEn : food.nameKo;
    const subTitle = currentLang === 'en' ? food.nameKo : food.nameEn;
    const desc = currentLang === 'en' ? food.descEn : food.descKo;
    const price = currentLang === 'en' ? food.priceEn : food.priceKo;
    const where = currentLang === 'en' ? food.whereEn : food.whereKo;
    const tip = currentLang === 'en' ? food.tipEn : food.tipKo;

    card.innerHTML = `
      <div class="food-card-img">
        <img src="${food.image}" alt="${title}" loading="lazy">
      </div>
      <div class="food-card-body">
        <div class="food-header">
          <h3 class="food-name">${title}</h3>
          <span class="food-korean">${subTitle}</span>
        </div>
        <p class="food-desc">${desc}</p>
        <div class="food-details">
          <p><strong><i class="fa-solid fa-wallet"></i> ${t.priceLabel}</strong> ${price}</p>
          <p><strong><i class="fa-solid fa-location-dot"></i> ${t.whereLabel}</strong> ${where}</p>
          <p><strong><i class="fa-regular fa-lightbulb"></i> ${t.tipLabel}</strong> ${tip}</p>
        </div>
      </div>
    `;
    foodGrid.appendChild(card);
  });
}

// Render Itineraries
function renderItinerary(type) {
  const itin = itineraries[type];
  const container = document.getElementById('itineraryContent');
  if (!container || !itin) return;

  const itinTitle = currentLang === 'en' ? itin.titleEn : itin.titleKo;
  const itinSummary = currentLang === 'en' ? itin.summaryEn : itin.summaryKo;
  const tipPrefix = currentLang === 'en' ? 'Pro-Tip:' : '여행 꿀팁:';

  let stepsHtml = itin.steps.map(step => {
    const title = currentLang === 'en' ? step.titleEn : step.titleKo;
    const desc = currentLang === 'en' ? step.descEn : step.descKo;
    const tip = currentLang === 'en' ? step.tipEn : step.tipKo;

    return `
      <div class="timeline-step">
        <span class="step-time">${step.time}</span>
        <h3 class="step-title">${title}</h3>
        <p class="step-desc">${desc}</p>
        <div class="step-tip"><i class="fa-regular fa-star"></i> ${tipPrefix} ${tip}</div>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <div style="margin-bottom: 24px;">
      <h3 style="font-size: 1.5rem; color: var(--primary-dark); margin-bottom: 6px;">${itinTitle}</h3>
      <p style="color: var(--text-muted); font-size: 0.95rem;">${itinSummary}</p>
    </div>
    <div class="timeline">
      ${stepsHtml}
    </div>
  `;

  // Itinerary tab buttons
  document.querySelectorAll('.itin-tab-btn').forEach(btn => {
    btn.onclick = (e) => {
      document.querySelectorAll('.itin-tab-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      renderItinerary(e.target.getAttribute('data-itin'));
    };
  });
}

// Initialize Leaflet Map
function initLeafletMap() {
  if (typeof L === 'undefined') return;

  mapInstance = L.map('andongMap').setView([36.5684, 128.7294], 11);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(mapInstance);

  const spotsList = document.getElementById('spotsList');
  if (!spotsList) return;
  spotsList.innerHTML = '';

  destinationsData.forEach(item => {
    const marker = L.marker([item.lat, item.lng]).addTo(mapInstance);
    
    const popupContent = `
      <div style="min-width: 200px;">
        <div class="popup-title">${item.nameEn}</div>
        <div class="popup-korean">${item.nameKo}</div>
        <div class="popup-info">${item.descEn.substring(0, 85)}...</div>
        <button class="popup-btn" onclick="openDestinationModal('${item.id}')">View Details</button>
      </div>
    `;
    marker.bindPopup(popupContent);
    markersMap[item.id] = marker;

    const listItem = document.createElement('div');
    listItem.className = 'spots-list-item';
    listItem.setAttribute('data-id', item.id);
    listItem.innerHTML = `
      <div class="item-title">
        <span>${item.nameEn}</span>
        <span class="item-badge">${item.badgeEn.split(' ')[0]}</span>
      </div>
      <div class="item-sub"><i class="fa-solid fa-map-pin"></i> ${item.nameKo}</div>
    `;
    listItem.addEventListener('click', () => {
      mapInstance.flyTo([item.lat, item.lng], 14, { duration: 1.2 });
      marker.openPopup();
      document.querySelectorAll('.spots-list-item').forEach(el => el.classList.remove('active'));
      listItem.classList.add('active');
    });
    spotsList.appendChild(listItem);
  });

  // Map Search Filtering
  const searchInput = document.getElementById('mapSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const val = e.target.value.toLowerCase();
      document.querySelectorAll('.spots-list-item').forEach(itemEl => {
        const id = itemEl.getAttribute('data-id');
        const spot = destinationsData.find(s => s.id === id);
        if (spot.nameEn.toLowerCase().includes(val) || spot.nameKo.includes(val)) {
          itemEl.style.display = 'block';
        } else {
          itemEl.style.display = 'none';
        }
      });
    });
  }
}

// Budget Calculator logic
function initCalculator() {
  const daysSelect = document.getElementById('calcDays');
  const peopleSelect = document.getElementById('calcPeople');
  const hotelSelect = document.getElementById('calcHotel');
  const transitSelect = document.getElementById('calcTransit');

  if (!daysSelect) return;

  function calculate() {
    const days = parseInt(daysSelect.value, 10);
    const people = parseInt(peopleSelect.value, 10);
    const hotelCostPerNight = parseInt(hotelSelect.value, 10);
    const transitType = transitSelect.value;

    const ktxTotal = 50200 * people;
    const nights = Math.max(0, days - 1);
    const rooms = Math.ceil(people / 2);
    const hotelTotal = nights * hotelCostPerNight * rooms;
    const foodTotal = 40000 * people * days;
    const ticketTotal = 7000 * people;

    let transitTotal = 0;
    if (transitType === 'bus') {
      transitTotal = 6000 * people * days;
    } else {
      transitTotal = 35000 * days;
    }

    const grandTotal = ktxTotal + hotelTotal + foodTotal + ticketTotal + transitTotal;
    const usdEstimate = Math.round(grandTotal / 1330);

    document.getElementById('resKtx').innerText = `₩${ktxTotal.toLocaleString()}`;
    document.getElementById('resHotel').innerText = `₩${hotelTotal.toLocaleString()}`;
    document.getElementById('resFood').innerText = `₩${foodTotal.toLocaleString()}`;
    document.getElementById('resTickets').innerText = `₩${ticketTotal.toLocaleString()}`;
    document.getElementById('resTransit').innerText = `₩${transitTotal.toLocaleString()}`;
    document.getElementById('resTotalKrw').innerText = `₩${grandTotal.toLocaleString()} KRW`;
    
    document.getElementById('resTotalUsd').innerText = currentLang === 'en'
      ? `Approx. $${usdEstimate} USD (for ${people} traveler${people > 1 ? 's' : ''})`
      : `약 $${usdEstimate} USD 상당 (동행 인원: ${people}인 기준)`;
  }

  daysSelect.onchange = calculate;
  peopleSelect.onchange = calculate;
  hotelSelect.onchange = calculate;
  transitSelect.onchange = calculate;

  calculate();
}

// Accordion
function initAccordion() {
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const parent = header.parentElement;
      parent.classList.toggle('active');
    });
  });
}

// Modals Handling
function initModals() {
  const detailModal = document.getElementById('detailModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const taxiModal = document.getElementById('taxiModal');
  const taxiCloseBtn = document.getElementById('taxiCloseBtn');
  const openTaxiCardBtn = document.getElementById('openTaxiCardBtn');

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', () => detailModal.classList.remove('open'));
  if (taxiCloseBtn) taxiCloseBtn.addEventListener('click', () => taxiModal.classList.remove('open'));

  window.addEventListener('click', (e) => {
    if (e.target === detailModal) detailModal.classList.remove('open');
    if (e.target === taxiModal) taxiModal.classList.remove('open');
  });

  if (openTaxiCardBtn) {
    openTaxiCardBtn.addEventListener('click', () => {
      const sel = document.getElementById('taxiDestSelect').value;
      const item = destinationsData.find(d => d.id === sel) || {
        nameKo: "안동역 KTX",
        addrKo: "경북 안동시 경동로 684",
        nameEn: "Andong KTX Station"
      };
      showTaxiDirect(item.nameKo, item.addrKo, item.nameEn);
    });
  }
}

// Open Destination Detail Modal
window.openDestinationModal = function(id) {
  const spot = destinationsData.find(d => d.id === id);
  if (!spot) return;

  const modalBody = document.getElementById('modalBody');
  const title = currentLang === 'en' ? spot.nameEn : spot.nameKo;
  const subTitle = currentLang === 'en' ? spot.nameKo : spot.nameEn;
  const badge = currentLang === 'en' ? spot.badgeEn : spot.badgeKo;
  const desc = currentLang === 'en' ? spot.descEn : spot.descKo;
  const hours = currentLang === 'en' ? spot.hoursEn : spot.hoursKo;
  const admission = currentLang === 'en' ? spot.admissionEn : spot.admissionKo;
  const transit = currentLang === 'en' ? spot.transitEn : spot.transitKo;
  const highlights = currentLang === 'en' ? spot.highlightsEn : spot.highlightsKo;

  const lblAddr = currentLang === 'en' ? 'Address:' : '주소:';
  const lblHours = currentLang === 'en' ? 'Hours:' : '이용 시간:';
  const lblAdmission = currentLang === 'en' ? 'Admission:' : '입장료:';
  const lblTransit = currentLang === 'en' ? 'How to Get There:' : '대중교통:';
  const lblAbout = currentLang === 'en' ? 'About this destination' : '명소 소개';
  const lblHighlights = currentLang === 'en' ? 'Traveler Highlights' : '여행 핵심 포인트';
  const btnTaxi = currentLang === 'en' ? 'Show Taxi Driver Card' : '기사님용 카드 열기';
  const btnMap = currentLang === 'en' ? 'Locate on Map' : '지도에서 위치 확인';

  modalBody.innerHTML = `
    <img src="${spot.image}" alt="${title}" class="modal-detail-img">
    <h2 class="modal-detail-title">${title}</h2>
    <div class="modal-detail-sub">${subTitle} • ${badge}</div>

    <div class="modal-info-box">
      <div><strong><i class="fa-solid fa-location-dot"></i> ${lblAddr}</strong> ${spot.addrKo}</div>
      <div><strong><i class="fa-solid fa-clock"></i> ${lblHours}</strong> ${hours}</div>
      <div><strong><i class="fa-solid fa-ticket"></i> ${lblAdmission}</strong> ${admission}</div>
      <div><strong><i class="fa-solid fa-bus"></i> ${lblTransit}</strong> ${transit}</div>
    </div>

    <h4 style="font-size: 1.1rem; margin-bottom: 8px; color: var(--primary-dark);">${lblAbout}</h4>
    <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-muted); margin-bottom: 20px;">
      ${desc}
    </p>

    <h4 style="font-size: 1.1rem; margin-bottom: 8px; color: var(--primary-dark);"><i class="fa-solid fa-star"></i> ${lblHighlights}</h4>
    <ul style="list-style: disc; padding-left: 20px; font-size: 0.92rem; color: var(--text-muted); margin-bottom: 24px; line-height: 1.6;">
      ${highlights.map(h => `<li>${h}</li>`).join('')}
    </ul>

    <div style="display: flex; gap: 12px; flex-wrap: wrap;">
      <button class="btn btn-primary" onclick="showTaxiDirect('${spot.nameKo}', '${spot.addrKo}', '${spot.nameEn}')">
        <i class="fa-solid fa-taxi"></i> ${btnTaxi}
      </button>
      <button class="btn btn-secondary" onclick="locateOnMap('${spot.id}')">
        <i class="fa-solid fa-map-location-dot"></i> ${btnMap}
      </button>
    </div>
  `;

  document.getElementById('detailModal').classList.add('open');
};

// Locate Spot on Map
window.locateOnMap = function(id) {
  document.getElementById('detailModal').classList.remove('open');
  const spot = destinationsData.find(d => d.id === id);
  if (spot && mapInstance) {
    document.getElementById('map-section').scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      mapInstance.flyTo([spot.lat, spot.lng], 14, { duration: 1.2 });
      if (markersMap[id]) {
        markersMap[id].openPopup();
      }
    }, 600);
  }
};

// Show Taxi Card directly
window.showTaxiDirect = function(titleKo, addrKo, titleEn) {
  document.getElementById('taxiCardTitleKo').innerText = titleKo;
  document.getElementById('taxiCardAddressKo').innerText = addrKo;
  document.getElementById('taxiCardTitleEn').innerText = titleEn;
  document.getElementById('taxiModal').classList.add('open');
};

// Language toggle (EN <-> KR)
function initLanguageToggle() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
      const lang = e.currentTarget.getAttribute('data-lang');
      e.currentTarget.classList.add('active');
      applyLanguage(lang);
    });
  });
}
