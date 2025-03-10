import {useState, useRef} from 'react'
import clsx from 'clsx';

//<div className="flex items-center">
//<a href="https://www.youtube.com/@damianzukiewicz">
//	<svg className="h-[50px] text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
//		  <path fillRule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" clipRule="evenodd"/>
//	</svg>
//</a>
//</div>

function HamburgerMenu({openMenu, switchMenu}) {

	return (
		<div className="flex items-center  mr-[15px]">
			<div className={clsx("w-[40px] h-[30px] cursor-pointer", {
				"flex flex-col justify-between": !openMenu,
				"relative": openMenu,
			})} onClick={() => switchMenu(!openMenu)}>
				<div className={clsx("w-full bg-white h-[5px] rounded-[2px]", {
					"rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute": openMenu,
				})}></div>
				{!openMenu && <div className="w-full bg-white h-[5px] rounded-[2px]"></div>}
				<div className={clsx("w-full bg-white h-[5px] rounded-[2px]", {
					"-rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute": openMenu,
				})}></div>
			</div>
		</div>
	)
}

function App() {
	const [openMenu, setOpenMenu] = useState(false);

	const [openCard, setOpenCard] = useState(0);

	const [closeMenu, setCloseMenu] = useState(false);

	const handleScroll = (height) => {
		window.scrollTo({
			top: height,
			behavior: "smooth"
		});
	};

	const handleNavigate = (url) => {
		window.open(url, "_blank");
	}

	const handleOpenCard = (arg) => {
		if (arg === openCard) {
			setOpenCard(0);
		} else {
			setOpenCard(arg);
		}
		console.log(arg);
	}

	const switchMenu = (arg) => {
		if (arg) {
			handleScroll(0);
			setOpenMenu(arg);
			document.body.style.overflow = "hidden";
		} else {
			setCloseMenu(true);
			setTimeout(() => {
				setOpenMenu(arg);
				setCloseMenu(false);
				document.body.style.overflow = "";
			}, 300);
		}
	}

  	return (
		<>
			<div className="h-[100dvh] w-full bg-cover relative" style={{backgroundImage: `url("background.svg")`}}>
				<div className={clsx("w-full h-[100px] flex justify-between transition-bg duration-300", {
					"bg-[rgb(255,255,255,0.3)]": !openMenu,
					"bg-[rgb(0,0,0,0.4)]": openMenu,
				})}>
					<div className="flex gap-[7px] items-center ml-[15px]">
						<img src="logo.png" alt="logo" className="rounded-[50%] h-[60%]" />
						<div className="flex flex-col justify-center">
							<h1 className="text-white font-bold text-[22px]">TEST.PL</h1>
							<span className="text-white">KRYPTOWALUTY</span>
						</div>
					</div>
					<HamburgerMenu openMenu={openMenu} switchMenu={switchMenu}/>
				</div>
				{openMenu &&
					<div className={clsx("absolute bg-[rgb(0,0,0,0.3)] w-full z-10 backdrop-blur-[10px] flex flex-col items-center text-white overflow-hidden gap-[10px]", {
						"animate-openmenu": !closeMenu,
						"animate-closemenu": closeMenu,
					})}>
						<div className="w-[90%] text-[20px] mt-[10px] bg-[rgb(0,0,0,0.1)] rounded-[15px] p-[5px] backdrop-blur-[5px] flex items-center gap-[3px]">
							<svg className="w-[30px] h-[30px] text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  								<path fillRule="evenodd" d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z" clipRule="evenodd"/>
							</svg>

							<span>Sprawdzone Giełdy Kryptowalut</span>
						</div>
						<div className="w-[90%] text-[20px] bg-[rgb(0,0,0,0.1)] rounded-[15px] p-[5px] backdrop-blur-[5px] flex items-center gap-[3px]">
							<svg class="w-[30px] h-[30px] text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  								<path d="M12.4472 4.10557c-.2815-.14076-.6129-.14076-.8944 0L2.76981 8.49706l9.21949 4.39024L21 8.38195l-8.5528-4.27638Z"/>
  								<path d="M5 17.2222v-5.448l6.5701 3.1286c.278.1325.6016.1293.8771-.0084L19 11.618v5.6042c0 .2857-.1229.5583-.3364.7481l-.0025.0022-.0041.0036-.0103.009-.0119.0101-.0181.0152c-.024.02-.0562.0462-.0965.0776-.0807.0627-.1942.1465-.3405.2441-.2926.195-.7171.4455-1.2736.6928C15.7905 19.5208 14.1527 20 12 20c-2.15265 0-3.79045-.4792-4.90614-.9751-.5565-.2473-.98098-.4978-1.27356-.6928-.14631-.0976-.2598-.1814-.34049-.2441-.04036-.0314-.07254-.0576-.09656-.0776-.01201-.01-.02198-.0185-.02991-.0253l-.01038-.009-.00404-.0036-.00174-.0015-.0008-.0007s-.00004 0 .00978-.0112l-.00009-.0012-.01043.0117C5.12215 17.7799 5 17.5079 5 17.2222Zm-3-6.8765 2 .9523V17c0 .5523-.44772 1-1 1s-1-.4477-1-1v-6.6543Z"/>
							</svg>

							<span>Poradniki Krypto</span>
						</div>
						<div className="w-[90%] text-[20px] bg-[rgb(0,0,0,0.1)] rounded-[15px] p-[5px] backdrop-blur-[5px] flex items-center gap-[3px]" onClick={() => handleNavigate("")}>
							<svg class="w-[30px] h-[30px] text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  								<path fillRule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" clipRule="evenodd"/>
							</svg>

							<span>Youtube</span>
						</div>
						<div className="w-[90%] text-[20px] bg-[rgb(0,0,0,0.1)] rounded-[15px] p-[5px] backdrop-blur-[5px] flex items-center gap-[3px]" onClick={() => handleNavigate("")}>
							<svg className="w-[30px] h-[30px] text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  								<path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd"/>
							</svg>

							<span>Instagram</span>
						</div>
					</div>
				}
				<div className="h-[calc(100dvh-200px)] flex justify-center">
					<div className="flex flex-col max-w-[700px] justify-center items-center gap-[20px]">
						<div className="flex items-center gap-[10px]">
							<img src="bitcoin.png" alt='money' className="w-[150px] sm:w-[200px] p-[10px]"/>
							<span className="text-[20px] sm:text-[25px] md:text-[30px] text-white">Jak zarabiać na Kryptowalutach. Trading. Instrukcje, poradniki i grupa wsparcia</span>
						</div>
						<div className="flex items-center justify-center gap-[5px] bg-[rgba(255,255,255,0.2)] p-[5px] rounded-[15px] cursor-pointer" onClick={() => handleNavigate("")}>
							<svg class="w-[50px] h-[50px] text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  								<path fillRule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" clipRule="evenodd"/>
							</svg>
							<span className="text-[22px] text-white">@xxxxxxxxx</span>
						</div>
						<div className="flex items-center justify-center gap-[5px] bg-[rgba(255,255,255,0.2)] p-[5px] rounded-[15px] cursor-pointer" onClick={() => handleNavigate("")}>
							<svg className="w-[50px] h-[50px] text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  								<path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd"/>
							</svg>

							<span className="text-[22px] text-white">@xxxxxxxxx</span>
						</div>
					</div>
				</div>
				<div className="relative h-[100px] flex items-center justify-center">
					<div className="bg-[rgba(255,255,255,0.2)] flex items-center rounded-[15px] p-[5px] animate-pulse-custom cursor-pointer" onClick={() => handleScroll(window.innerHeight)}>
						<svg className="w-[40px] h-[40px] text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  							<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7"/>
						</svg>
						<span className="text-[18px] text-white">Sprawdzone Giełdy Kryptowalut</span>
					</div>
				</div>
			</div>



			<div className="h-[100dvh] relative flex flex-col">
				<div className="h-[calc(100%-80px)] flex flex-col items-center justify-center">
					<h1 className="text-[4vh]">Sprawdzone Giełdy</h1>
					<div className="flex flex-col">
						<div className="flex flex-col p-[10px] bg-gray-200 rounded-[20px] m-[10px] min-h-[16vh] cursor-pointer gap-[10px] justify-between" onClick={() => handleNavigate("")}>
							<div className="flex items-center gap-[15px]">
								<img src="mexc_logo.png" alt="mexc logo" className="w-[15vh] m-[3px]" />
								<div className="flex flex-col">
									<h1 className="text-[25px]">Mexc</h1>
									<span className="text-[12px]">ODBIERZ BONUS $100-$8,000 | Trading x400 czyli MASZ $100 ➡ KUPUJESZ za $40,000</span>
								</div>
							</div>
							<button className="w-full bg-blue-400 text-[20px] rounded-[15px] text-white p-[2px]">Zarejestruj się</button>
						</div>
						<div className="flex flex-col p-[10px] bg-gray-200 rounded-[20px] m-[10px] min-h-[16vh] cursor-pointer gap-[10px] justify-between" onClick={() => handleNavigate("")}>
							<div className="flex items-center gap-[15px]">
								<img src="binance_logo.png" alt="binance logo" className="w-[15vh] m-[3px]" />
								<div className="flex flex-col">
									<h1 className="text-[25px]">Binance</h1>
									<span className="text-[12px]">Największa giełda kryptowalut na świecie. Krypto kupisz KARTĄ lub PRZELEWEM</span>
								</div>
							</div>
							<button className="w-full bg-blue-400 text-[20px] rounded-[15px] text-white p-[2px]">Zarejestruj się</button>
						</div>
						<div className="flex flex-col p-[10px] bg-gray-200 rounded-[20px] m-[10px] min-h-[16vh] cursor-pointer gap-[10px] justify-between" onClick={() => handleNavigate("")}>
							<div className="flex items-center gap-[15px]">
								<img src="bybit_logo.png" alt="mexc logo" className="w-[15vh] m-[3px]" />
								<div className="flex flex-col">
									<h1 className="text-[25px]">ByBit</h1>
									<span className="text-[12px]">Kryptowaluty kupisz KARTĄ, PRZELEWEM lub BLIK</span>
								</div>
							</div>
							<button className="w-full bg-blue-400 text-[20px] rounded-[15px] text-white p-[2px]">Zarejestruj się</button>
						</div>
					</div>
				</div>
				<div className="relative h-[80px] flex flex-1 items-center justify-center">
					<div className="bg-gray-200 flex items-center rounded-[15px] p-[5px] animate-pulse-custom h-fit cursor-pointer" onClick={() => handleScroll(window.innerHeight * 2)}>
						<svg className="w-[40px] h-[40px] text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  							<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7"/>
						</svg>
						<span className="text-[18px] text-black">Krypto Poradniki</span>
					</div>
				</div>
			</div>




			<div className="h-[100dvh] relative bg-cover" style={{backgroundImage: `url("background.svg")`}}>
				<div className="h-full flex flex-col items-center justify-center text-white">
					<div className="flex flex-col items-center p-[10px]">
						<h1 className="text-[4vh]">Krypto Poradniki</h1>
						<div className="flex flex-col gap-[10px] w-[calc(100dvw-20px)] max-w-[700px]">

							<div className="flex bg-[rgba(255,255,255,0.2)] p-[10px] rounded-[20px] flex-col overflow-hidden">
								<div className="flex items-center justify-between w-full">
									<svg className="w-[50px] h-[50px] text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  										<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4.5V19a1 1 0 0 0 1 1h15M7 14l4-4 4 4 5-5m0 0h-3.207M20 9v3.207"/>
									</svg>

									<span className="text-[18px] max-w-[300px]">Trading: Jak ZAROBIĆ 2x WIĘCEJ?</span>

									<svg onClick={() => handleOpenCard(1)} className={clsx("w-[35px] h-[35px] text-white cursor-pointer transition duration-300", {
										"rotate-180": openCard === 1,
										"rotate-0": openCard !== 1,
									})} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  										<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 15 7-7 7 7"/>
									</svg>
								</div>
								<div className={clsx("rounded-[15px] overflow-hidden sm:transition-all sm:duration-300", {
									"max-h-[350px] w-full opacity-1 scale-100": openCard === 1,
									"max-h-0 w-full opacity-0 scale-98": openCard !== 1,
								})}>

								</div>
							</div>

							<div className="flex bg-[rgba(255,255,255,0.2)] p-[10px] rounded-[20px] flex-col overflow-hidden">
								<div className="flex items-center justify-between w-full">
									<svg className="w-[50px] h-[50px] text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  										<path fillRule="evenodd" d="M20.337 3.664c.213.212.354.486.404.782.294 1.711.657 5.195-.906 6.76-1.77 1.768-8.485 5.517-10.611 6.683a.987.987 0 0 1-1.176-.173l-.882-.88-.877-.884a.988.988 0 0 1-.173-1.177c1.165-2.126 4.913-8.841 6.682-10.611 1.562-1.563 5.046-1.198 6.757-.904.296.05.57.191.782.404ZM5.407 7.576l4-.341-2.69 4.48-2.857-.334a.996.996 0 0 1-.565-1.694l2.112-2.111Zm11.357 7.02-.34 4-2.111 2.113a.996.996 0 0 1-1.69-.565l-.422-2.807 4.563-2.74Zm.84-6.21a1.99 1.99 0 1 1-3.98 0 1.99 1.99 0 0 1 3.98 0Z" clipRule="evenodd"/>
									</svg>

									<span className="text-[20px] max-w-[300px]">Trading: SZYBKIE $5,000 ZYSKU</span>

									<svg onClick={() => handleOpenCard(2)} className={clsx("w-[35px] h-[35px] text-white cursor-pointer transition duration-300", {
										"rotate-180": openCard === 2,
										"rotate-0": openCard !== 2,
									})} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  										<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 15 7-7 7 7"/>
									</svg>
								</div>
								<div className={clsx("rounded-[15px] overflow-hidden sm:transition-all sm:duration-300", {
									"max-h-[350px] w-full opacity-1 scale-100": openCard === 2,
									"max-h-0 w-full opacity-0 scale-98": openCard !== 2,
								})}>

								</div>
							</div>

							<div className="flex items-center gap-[5px] bg-[rgba(255,255,255,0.2)] p-[10px] rounded-[20px] justify-between">
								<svg className="w-[50px] h-[50px] text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  									<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4.5V19a1 1 0 0 0 1 1h15M7 10l4 4 4-4 5 5m0 0h-3.207M20 15v-3.207"/>
								</svg>

								<span className="text-[15px] max-w-[300px]">Trading: SHORT. Jak ZARABIAĆ podczas SPADKÓW</span>

								<svg className="w-[35px] h-[35px] text-white rotate-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  									<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 15 7-7 7 7"/>
								</svg>
							</div>
							
						</div>
					</div>
				</div>
			</div>
		</>
  	)
}

export default App
 