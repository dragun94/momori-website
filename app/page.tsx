'use client'

import { useState } from 'react'
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Heart,
  Camera,
  Menu,
  ShoppingBag,
  Star,
  UserRound,
  X,
} from 'lucide-react'

const heroSlides = [
  { image: 'https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?auto=format&fit=crop&w=1800&q=85', eyebrow: '매일의 식사 시간을 더 다정하게', title: '작은 마음을 담은\n첫 번째 턱받이' },
  { image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1800&q=85', eyebrow: '우리 아이의 편안한 하루', title: '부드럽고 오래 쓰는\n생활의 기본' },
  { image: 'https://images.unsplash.com/photo-1607453998774-d533f65dac99?auto=format&fit=crop&w=1800&q=85', eyebrow: '모모리와 함께하는 순간', title: '부모의 마음으로\n만들었습니다' },
]

const products = [
  { name: '모모리 데일리 턱받이 · 크림', price: '29,000원', sale: '24,900원', tone: 'bg-[#e9dfd5]', image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=900&q=80' },
  { name: '모모리 데일리 턱받이 · 피치', price: '29,000원', sale: '24,900원', tone: 'bg-[#efd0c8]', image: 'https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?auto=format&fit=crop&w=900&q=80' },
  { name: '모모리 데일리 턱받이 · 오트', price: '29,000원', sale: '24,900원', tone: 'bg-[#d9cdbd]', image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=900&q=80' },
  { name: '모모리 데일리 턱받이 · 세이지', price: '29,000원', sale: '24,900원', tone: 'bg-[#cfd8ce]', image: 'https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=900&q=80' },
]

const reviews = [
  { quote: '아이가 편안해하고, 세탁 후에도 모양이 그대로예요.', name: '지은 · 10개월 아기 엄마', color: 'bg-[#e8d6cd]' },
  { quote: '외출할 때 꼭 챙기는 육아템이 되었어요. 너무 예뻐요.', name: '수아 · 14개월 아기 엄마', color: 'bg-[#d8d8cf]' },
  { quote: '실용적인데 감성까지 놓치지 않은 디자인이라 좋아요.', name: '민서 · 8개월 아기 엄마', color: 'bg-[#e5d7c9]' },
]

function PlaceholderImage({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return <img src={src} alt={alt} className={`h-full w-full object-cover ${className}`} />
}

export default function Page() {
  const [slide, setSlide] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const current = heroSlides[slide]

  return (
    <main className="min-h-screen overflow-hidden bg-[#FAF8F5] text-[#2B2B2B]">
      <div className="bg-[#2B2B2B] px-4 py-2 text-center text-[10px] font-medium tracking-[0.16em] text-white sm:text-[11px]">5만원 이상 무료배송</div>
      <header className="relative z-20 border-b border-[#2b2b2b]/10 bg-[#FAF8F5]/95 backdrop-blur-sm">
        <div className="mx-auto flex h-[68px] max-w-[1200px] items-center justify-between px-5 lg:h-[82px] lg:px-8">
          <button aria-label="메뉴 열기" onClick={() => setMenuOpen(!menuOpen)} className="flex items-center gap-2 text-xs lg:hidden"><Menu className="size-5 stroke-[1.5]" /><span className="sr-only">메뉴</span></button>
          <nav className="hidden items-center gap-8 text-[11px] tracking-[0.16em] lg:flex"><a href="#shop">상품 보기</a><a href="#story">브랜드 이야기</a><a href="#footer">주문조회</a></nav>
          <a href="#top" className="absolute left-1/2 -translate-x-1/2 font-serif text-[25px] tracking-[-0.08em] lg:text-[29px]">모모리<span className="ml-1 text-[#E8B4A8]">·</span></a>
          <div className="flex items-center gap-4"><button aria-label="로그인"><UserRound className="size-[18px] stroke-[1.5]" /></button><button aria-label="장바구니" className="relative"><ShoppingBag className="size-[19px] stroke-[1.5]" /><span className="absolute -right-2 -top-2 flex size-3.5 items-center justify-center rounded-full bg-[#E8B4A8] text-[8px]">0</span></button></div>
        </div>
        {menuOpen && <div className="absolute left-0 right-0 top-full border-b border-[#2b2b2b]/10 bg-[#FAF8F5] px-6 py-8 lg:hidden"><button onClick={() => setMenuOpen(false)} className="absolute right-5 top-5" aria-label="메뉴 닫기"><X className="size-5" /></button><nav className="flex flex-col gap-5 text-sm"><a href="#shop" onClick={() => setMenuOpen(false)}>상품 보기</a><a href="#story" onClick={() => setMenuOpen(false)}>브랜드 이야기</a><a href="#footer" onClick={() => setMenuOpen(false)}>주문조회</a></nav></div>}
      </header>

      <section id="top" className="relative h-[calc(100svh-100px)] min-h-[560px] max-h-[850px] overflow-hidden lg:h-[calc(100vh-115px)]">
        <PlaceholderImage src={current.image} alt="모모리의 따뜻한 일상" className="absolute inset-0 brightness-[0.84]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2b2b2b]/45 via-transparent to-[#2b2b2b]/10" />
        <div className="absolute inset-x-5 bottom-14 mx-auto max-w-[1200px] text-white lg:bottom-20 lg:px-8"><p className="mb-4 text-[11px] tracking-[0.12em]">{current.eyebrow}</p><h1 className="whitespace-pre-line text-[38px] font-light leading-[1.18] tracking-[-0.06em] sm:text-5xl lg:text-7xl">{current.title}</h1><button className="mt-8 flex items-center gap-3 border-b border-white/70 pb-2 text-xs tracking-[0.12em]">구경하기 <ArrowRight className="size-4" /></button></div>
        <div className="absolute bottom-6 right-5 flex items-center gap-3 text-xs text-white lg:bottom-10 lg:right-12"><span>0{slide + 1}</span><span className="h-px w-10 bg-white/60" /><span>03</span><button aria-label="이전 슬라이드" onClick={() => setSlide((slide + 2) % 3)}><ChevronLeft className="size-5" /></button><button aria-label="다음 슬라이드" onClick={() => setSlide((slide + 1) % 3)}><ChevronRight className="size-5" /></button></div>
      </section>

      <section id="shop" className="mx-auto max-w-[1200px] px-5 py-20 lg:px-8 lg:py-32"><div className="mb-9 flex items-end justify-between"><div><p className="mb-3 text-[10px] tracking-[0.2em] text-[#9d8178]">모모리 컬렉션</p><h2 className="text-2xl tracking-[-0.05em] lg:text-3xl">모모리의 첫 번째 이야기</h2></div><a href="#shop" className="hidden items-center gap-2 text-xs lg:flex">전체 상품 보기 <ArrowRight className="size-4" /></a></div><div className="grid grid-cols-2 gap-x-3 gap-y-10 lg:grid-cols-4 lg:gap-5">{products.map((product) => <article key={product.name} className="group"><div className={`relative aspect-[0.82] overflow-hidden rounded-[18px] ${product.tone}`}><PlaceholderImage src={product.image} alt="턱받이 상품 이미지" className="mix-blend-multiply opacity-80 transition duration-500 group-hover:scale-105" /><div className="absolute right-3 top-3 flex items-center gap-2"><button aria-label="찜하기" className="rounded-full bg-[#FAF8F5]/80 p-2 backdrop-blur"><Heart className="size-4 stroke-[1.4]" /></button><button aria-label={`${product.name} 장바구니에 바로 추가`} className="rounded-full bg-[#FAF8F5]/80 p-2 backdrop-blur"><ShoppingBag className="size-4 stroke-[1.4]" /></button></div></div><div className="mt-4"><h3 className="text-[12px] leading-relaxed lg:text-sm">{product.name}</h3><div className="mt-2 flex items-center gap-2"><span className="text-xs text-[#9d8178] line-through">{product.price}</span><strong className="text-sm">{product.sale}</strong></div></div></article>)}</div><a href="#shop" className="mx-auto mt-10 flex w-fit items-center gap-2 border-b border-[#2b2b2b]/40 pb-1 text-xs lg:hidden">전체 상품 보기 <ArrowRight className="size-4" /></a></section>

      <section className="bg-[#EDE4D8] px-5 py-20 lg:py-28"><div className="mx-auto max-w-[1200px]"><div className="mb-12 text-center"><p className="mb-3 whitespace-nowrap text-[10px] tracking-[0.12em] text-[#9d8178]">매일을 위해 만들었습니다</p><h2 className="text-2xl tracking-[-0.05em] lg:text-3xl">매일 쓰는 것이니까, 더 꼼꼼하게</h2></div><div className="grid grid-cols-3 gap-2 text-center sm:gap-6"><div><div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-[#FAF8F5] text-[#9d8178] sm:mb-5 sm:size-16"><span className="text-lg sm:text-xl">◌</span></div><h3 className="mb-2 text-[11px] sm:text-sm">부드러운 소재</h3><p className="text-[10px] leading-relaxed text-[#6d625b] sm:text-xs">아이의 피부에 닿는 순간까지<br />부드럽고 편안하게</p></div><div><div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-[#FAF8F5] text-[#9d8178] sm:mb-5 sm:size-16"><span className="text-lg sm:text-xl">⌁</span></div><h3 className="mb-2 text-[11px] sm:text-sm">든든한 방수 기능</h3><p className="text-[10px] leading-relaxed text-[#6d625b] sm:text-xs">흘림 걱정 없이<br />즐거운 식사 시간을 위해</p></div><div><div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-[#FAF8F5] text-[#9d8178] sm:mb-5 sm:size-16"><span className="text-lg sm:text-xl">✧</span></div><h3 className="mb-2 text-[11px] sm:text-sm">세탁기 사용 가능</h3><p className="text-[10px] leading-relaxed text-[#6d625b] sm:text-xs">매일의 번거로움을 덜어주는<br />쉬운 관리와 오래도록</p></div></div></div></section>

      <section id="story" className="mx-auto grid max-w-[1200px] gap-10 px-5 py-20 lg:grid-cols-2 lg:items-center lg:gap-24 lg:px-8 lg:py-32"><div className="aspect-[0.9] overflow-hidden rounded-[20px] bg-[#dfd2c8]"><PlaceholderImage src="https://images.unsplash.com/photo-1602030028438-4cf153cbae9e?auto=format&fit=crop&w=1200&q=85" alt="아이와 함께하는 따뜻한 순간" /></div><div className="max-w-md"><p className="mb-4 text-[10px] tracking-[0.2em] text-[#9d8178]">우리의 이야기</p><h2 className="text-3xl leading-[1.35] tracking-[-0.06em] lg:text-4xl">부모의 마음으로<br />만들었습니다.</h2><p className="mt-7 text-sm leading-[2] text-[#6d625b]">매일 반복되는 육아의 순간이 조금 더 편안하고 다정해지기를 바라는 마음으로 모모리를 시작했습니다. 필요한 것을 제대로 만들고, 오래 곁에 두고 싶은 디자인을 고민합니다.</p><a href="#story" className="mt-8 inline-flex items-center gap-2 border-b border-[#2b2b2b]/40 pb-2 text-xs">모모리 이야기 <ArrowRight className="size-4" /></a></div></section>

      <section className="border-y border-[#2b2b2b]/10 bg-[#f5eee8] px-5 py-20 lg:py-28"><div className="mx-auto max-w-[1200px]"><div className="mb-10 flex items-end justify-between"><div><p className="mb-3 text-[10px] tracking-[0.2em] text-[#9d8178]">우리 가족들의 이야기</p><h2 className="text-2xl tracking-[-0.05em] lg:text-3xl">먼저 만나본 가족들의 이야기</h2></div><div className="hidden items-center gap-1 text-[#9d8178] sm:flex"><Star className="size-3 fill-current" /><Star className="size-3 fill-current" /><Star className="size-3 fill-current" /><Star className="size-3 fill-current" /><Star className="size-3 fill-current" /></div></div><div className="-mx-5 flex snap-x gap-4 overflow-x-auto px-5 pb-3 lg:mx-0 lg:px-0">{reviews.map((review) => <article key={review.name} className="min-w-[78vw] snap-start rounded-[18px] bg-[#FAF8F5] p-5 sm:min-w-[330px] lg:flex-1 lg:p-7"><div className={`mb-5 aspect-[1.6] rounded-xl ${review.color}`} /><div className="mb-4 flex gap-1 text-[#d79e91]"><Star className="size-3 fill-current" /><Star className="size-3 fill-current" /><Star className="size-3 fill-current" /><Star className="size-3 fill-current" /><Star className="size-3 fill-current" /></div><p className="text-sm leading-relaxed">“{review.quote}”</p><p className="mt-5 text-[10px] text-[#9d8178]">{review.name}</p></article>)}</div></div></section>

      <section className="mx-auto max-w-[1200px] px-5 py-20 text-center lg:px-8 lg:py-28"><p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-[#9d8178]">@momori.kr</p><h2 className="mb-9 text-2xl tracking-[-0.05em] lg:text-3xl">모모리의 하루를 함께해요</h2><div className="grid grid-cols-3 gap-2 lg:grid-cols-6 lg:gap-3">{['photo-1555252333-9f8e92e65df9','photo-1522771930-78848d9293e8','photo-1514090458221-65bb69cf63e6','photo-1607453998774-d533f65dac99','photo-1596870230751-ebdfce98ec42','photo-1622290291468-a28f7a7dc6a8'].map((id, index) => <div key={id} className="aspect-square overflow-hidden rounded-lg bg-[#EDE4D8]"><PlaceholderImage src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=500&q=80`} alt={`모모리 인스타그램 이미지 ${index + 1}`} /></div>)}</div><button className="mx-auto mt-9 inline-flex items-center gap-2 rounded-full border border-[#2b2b2b]/25 px-6 py-3 text-xs"><Camera className="size-4" /> @momori 팔로우하기</button></section>

      <footer id="footer" className="bg-[#2B2B2B] px-5 py-12 text-[#FAF8F5] lg:px-8 lg:py-16"><div className="mx-auto grid max-w-[1200px] gap-10 sm:grid-cols-2 lg:grid-cols-4"><div><p className="font-serif text-2xl tracking-[-0.08em]">모모리<span className="ml-1 text-[#E8B4A8]">·</span></p><p className="mt-4 text-[11px] leading-relaxed text-white/55">작은 마음을 담아,<br />일상의 다정함을 만듭니다.</p></div><div><h3 className="mb-4 text-[10px] tracking-[0.15em] text-white/45">고객센터</h3><p className="text-sm">02 1234 5678</p><p className="mt-2 text-[11px] text-white/55">평일 10:00 - 17:00<br />점심 12:00 - 13:00</p></div><div><h3 className="mb-4 text-[10px] tracking-[0.15em] text-white/45">안내</h3><div className="flex flex-col gap-2 text-[11px] text-white/70"><a href="#footer">이용약관</a><a href="#footer">개인정보처리방침</a><a href="#footer">배송 및 교환 안내</a></div></div><div><h3 className="mb-4 text-[10px] tracking-[0.15em] text-white/45">사업자 정보</h3><p className="text-[11px] leading-[1.8] text-white/55">모모리 · 대표 김모모<br />사업자등록번호 000-00-00000<br />서울특별시 어딘가 00길 00</p></div></div><div className="mx-auto mt-12 flex max-w-[1200px] items-center justify-between border-t border-white/15 pt-6 text-[10px] text-white/40"><span>© 2025 모모리. 모든 권리 보유.</span><Camera className="size-4" /></div></footer>
    </main>
  )
}
