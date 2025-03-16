import SegwiseLogo from '../assets/SegwiseLogo'

function TopBar() {
  return (
    <header className="flex px-4 sm:px-10 bg-white font-[sans-serif] tracking-wide relative z-50 ">
      <div className="space-y-8 mt-2 pl-3 flex-1">
        <SegwiseLogo />
      </div>
    </header>
  )
}

export default TopBar