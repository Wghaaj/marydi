import "../styles/css/products.css";


export default function ProductsPage() {
  return (
    <>
      <section className="bg-strange-pink py-[30px] px-[30px] md:px-[30px] shadow-xl/30 border-t-[2px]">
        <p className="text-white text-sm md:text-base"><span className="font-bold">Handmade Scented Candle Bouquet</span> &mdash; Available in Large, Medium, Small & Mini</p>
        <p className="text-white text-sm md:text-base pt-[20px] md:pt-[30px]">A heartfelt, one-of-a-kind gift for birthdays, Mother&rsquo;s Day, International Women&rsquo;s Day, or simply to make someone feel appreciated.</p>
        <p className="text-white text-sm md:text-base pt-[20px] md:pt-[30px]">Each bouquet is crafted with love from natural wax candles and paired with gentle dried florals — a little bundle of warmth, beauty, and intention.</p>
      </section>
      <main className="px-[30px] md:px-[60px] pt-[60px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="product-card flex flex-col max-w-fit">
            <img className="max-h-[15rem] md:max-h-[20rem]" src="/images/image1.png" alt="img1" />
            <div className="m-[0]! pl-[10px] py-[10px]">
              <p className="pb-[10px]">Name</p>
              <p className="pb-[10px]">£20.00</p>
              <div className="flex space-between w-fit m-[0]! items-center">
                <a href="#" className="underline pr-[10px] hover:text-strange-pink">Read More</a>
                <svg className="w-[20px]" viewBox="0 -6.5 36 36" version="1.1" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>right-arrow</title> <desc>Created with Sketch.</desc> <g id="icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="ui-gambling-website-lined-icnos-casinoshunter" transform="translate(-212.000000, -159.000000)" fill="#252528" fill-rule="nonzero"> <g id="square-filled" transform="translate(50.000000, 120.000000)"> <path d="M187.108012,39.2902857 L197.649804,49.7417043 L197.708994,49.7959169 C197.889141,49.9745543 197.986143,50.2044182 198,50.4382227 L198,50.5617773 C197.986143,50.7955818 197.889141,51.0254457 197.708994,51.2040831 L197.6571,51.2479803 L187.108012,61.7097143 C186.717694,62.0967619 186.084865,62.0967619 185.694547,61.7097143 C185.30423,61.3226668 185.30423,60.6951387 185.694547,60.3080911 L194.702666,51.3738496 L162.99947,51.3746291 C162.447478,51.3746291 162,50.9308997 162,50.3835318 C162,49.8361639 162.447478,49.3924345 162.99947,49.3924345 L194.46779,49.3916551 L185.694547,40.6919089 C185.30423,40.3048613 185.30423,39.6773332 185.694547,39.2902857 C186.084865,38.9032381 186.717694,38.9032381 187.108012,39.2902857 Z M197.115357,50.382693 L186.401279,61.0089027 L197.002151,50.5002046 L197.002252,50.4963719 L196.943142,50.442585 L196.882737,50.382693 L197.115357,50.382693 Z" id="right-arrow"> </path> </g> </g> </g> </g></svg>
              </div>
            </div>
          </div>
          <div className="product-card flex flex-col border border-black max-w-fit">
            <img className="max-h-[15rem] md:max-h-[20rem]" src="/images/image1.png" alt="img1" />
            <div className="m-[0]! pl-[10px] py-[10px]">
              <p className="pb-[10px]">Name</p>
              <p className="pb-[10px]">£20.00</p>
              <div className="flex space-between w-fit m-[0]! items-center">
                <a href="#" className="underline pr-[10px] hover:text-strange-pink">Read More</a>
                <svg className="w-[20px]" viewBox="0 -6.5 36 36" version="1.1" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>right-arrow</title> <desc>Created with Sketch.</desc> <g id="icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="ui-gambling-website-lined-icnos-casinoshunter" transform="translate(-212.000000, -159.000000)" fill="#252528" fill-rule="nonzero"> <g id="square-filled" transform="translate(50.000000, 120.000000)"> <path d="M187.108012,39.2902857 L197.649804,49.7417043 L197.708994,49.7959169 C197.889141,49.9745543 197.986143,50.2044182 198,50.4382227 L198,50.5617773 C197.986143,50.7955818 197.889141,51.0254457 197.708994,51.2040831 L197.6571,51.2479803 L187.108012,61.7097143 C186.717694,62.0967619 186.084865,62.0967619 185.694547,61.7097143 C185.30423,61.3226668 185.30423,60.6951387 185.694547,60.3080911 L194.702666,51.3738496 L162.99947,51.3746291 C162.447478,51.3746291 162,50.9308997 162,50.3835318 C162,49.8361639 162.447478,49.3924345 162.99947,49.3924345 L194.46779,49.3916551 L185.694547,40.6919089 C185.30423,40.3048613 185.30423,39.6773332 185.694547,39.2902857 C186.084865,38.9032381 186.717694,38.9032381 187.108012,39.2902857 Z M197.115357,50.382693 L186.401279,61.0089027 L197.002151,50.5002046 L197.002252,50.4963719 L196.943142,50.442585 L196.882737,50.382693 L197.115357,50.382693 Z" id="right-arrow"> </path> </g> </g> </g> </g></svg>
              </div>
            </div>
          </div>
          <div className="product-card flex flex-col border border-black max-w-fit">
            <img className="max-h-[15rem] md:max-h-[20rem]" src="/images/image1.png" alt="img1" />
            <div className="m-[0]! pl-[10px] py-[10px]">
              <p className="pb-[10px]">Name</p>
              <p className="pb-[10px]">£20.00</p>
              <div className="flex space-between w-fit m-[0]! items-center">
                <a href="#" className="underline pr-[10px] hover:text-strange-pink">Read More</a>
                <svg className="w-[20px]" viewBox="0 -6.5 36 36" version="1.1" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>right-arrow</title> <desc>Created with Sketch.</desc> <g id="icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="ui-gambling-website-lined-icnos-casinoshunter" transform="translate(-212.000000, -159.000000)" fill="#252528" fill-rule="nonzero"> <g id="square-filled" transform="translate(50.000000, 120.000000)"> <path d="M187.108012,39.2902857 L197.649804,49.7417043 L197.708994,49.7959169 C197.889141,49.9745543 197.986143,50.2044182 198,50.4382227 L198,50.5617773 C197.986143,50.7955818 197.889141,51.0254457 197.708994,51.2040831 L197.6571,51.2479803 L187.108012,61.7097143 C186.717694,62.0967619 186.084865,62.0967619 185.694547,61.7097143 C185.30423,61.3226668 185.30423,60.6951387 185.694547,60.3080911 L194.702666,51.3738496 L162.99947,51.3746291 C162.447478,51.3746291 162,50.9308997 162,50.3835318 C162,49.8361639 162.447478,49.3924345 162.99947,49.3924345 L194.46779,49.3916551 L185.694547,40.6919089 C185.30423,40.3048613 185.30423,39.6773332 185.694547,39.2902857 C186.084865,38.9032381 186.717694,38.9032381 187.108012,39.2902857 Z M197.115357,50.382693 L186.401279,61.0089027 L197.002151,50.5002046 L197.002252,50.4963719 L196.943142,50.442585 L196.882737,50.382693 L197.115357,50.382693 Z" id="right-arrow"> </path> </g> </g> </g> </g></svg>
              </div>
            </div>
          </div>
          <div className="product-card flex flex-col border border-black max-w-fit">
            <img className="max-h-[15rem] md:max-h-[20rem]" src="/images/image1.png" alt="img1" />
            <div className="m-[0]! pl-[10px] py-[10px]">
              <p className="pb-[10px]">Name</p>
              <p className="pb-[10px]">£20.00</p>
              <div className="flex space-between w-fit m-[0]! items-center">
                <a href="#" className="underline pr-[10px] hover:text-strange-pink">Read More</a>
                <svg className="w-[20px]" viewBox="0 -6.5 36 36" version="1.1" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>right-arrow</title> <desc>Created with Sketch.</desc> <g id="icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="ui-gambling-website-lined-icnos-casinoshunter" transform="translate(-212.000000, -159.000000)" fill="#252528" fill-rule="nonzero"> <g id="square-filled" transform="translate(50.000000, 120.000000)"> <path d="M187.108012,39.2902857 L197.649804,49.7417043 L197.708994,49.7959169 C197.889141,49.9745543 197.986143,50.2044182 198,50.4382227 L198,50.5617773 C197.986143,50.7955818 197.889141,51.0254457 197.708994,51.2040831 L197.6571,51.2479803 L187.108012,61.7097143 C186.717694,62.0967619 186.084865,62.0967619 185.694547,61.7097143 C185.30423,61.3226668 185.30423,60.6951387 185.694547,60.3080911 L194.702666,51.3738496 L162.99947,51.3746291 C162.447478,51.3746291 162,50.9308997 162,50.3835318 C162,49.8361639 162.447478,49.3924345 162.99947,49.3924345 L194.46779,49.3916551 L185.694547,40.6919089 C185.30423,40.3048613 185.30423,39.6773332 185.694547,39.2902857 C186.084865,38.9032381 186.717694,38.9032381 187.108012,39.2902857 Z M197.115357,50.382693 L186.401279,61.0089027 L197.002151,50.5002046 L197.002252,50.4963719 L196.943142,50.442585 L196.882737,50.382693 L197.115357,50.382693 Z" id="right-arrow"> </path> </g> </g> </g> </g></svg>
              </div>
            </div>
          </div>
          <div className="product-card flex flex-col border border-black max-w-fit">
            <img className="max-h-[15rem] md:max-h-[20rem]" src="/images/image1.png" alt="img1" />
            <div className="m-[0]! pl-[10px] py-[10px]">
              <p className="pb-[10px]">Name</p>
              <p className="pb-[10px]">£20.00</p>
              <div className="flex space-between w-fit m-[0]! items-center">
                <a href="#" className="underline pr-[10px] hover:text-strange-pink">Read More</a>
                <svg className="w-[20px]" viewBox="0 -6.5 36 36" version="1.1" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>right-arrow</title> <desc>Created with Sketch.</desc> <g id="icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="ui-gambling-website-lined-icnos-casinoshunter" transform="translate(-212.000000, -159.000000)" fill="#252528" fill-rule="nonzero"> <g id="square-filled" transform="translate(50.000000, 120.000000)"> <path d="M187.108012,39.2902857 L197.649804,49.7417043 L197.708994,49.7959169 C197.889141,49.9745543 197.986143,50.2044182 198,50.4382227 L198,50.5617773 C197.986143,50.7955818 197.889141,51.0254457 197.708994,51.2040831 L197.6571,51.2479803 L187.108012,61.7097143 C186.717694,62.0967619 186.084865,62.0967619 185.694547,61.7097143 C185.30423,61.3226668 185.30423,60.6951387 185.694547,60.3080911 L194.702666,51.3738496 L162.99947,51.3746291 C162.447478,51.3746291 162,50.9308997 162,50.3835318 C162,49.8361639 162.447478,49.3924345 162.99947,49.3924345 L194.46779,49.3916551 L185.694547,40.6919089 C185.30423,40.3048613 185.30423,39.6773332 185.694547,39.2902857 C186.084865,38.9032381 186.717694,38.9032381 187.108012,39.2902857 Z M197.115357,50.382693 L186.401279,61.0089027 L197.002151,50.5002046 L197.002252,50.4963719 L196.943142,50.442585 L196.882737,50.382693 L197.115357,50.382693 Z" id="right-arrow"> </path> </g> </g> </g> </g></svg>
              </div>
            </div>
          </div>
          <div className="product-card flex flex-col border border-black max-w-fit">
            <img className="max-h-[15rem] md:max-h-[20rem]" src="/images/image1.png" alt="img1" />
            <div className="m-[0]! pl-[10px] py-[10px]">
              <p className="pb-[10px]">Name</p>
              <p className="pb-[10px]">£20.00</p>
              <div className="flex space-between w-fit m-[0]! items-center">
                <a href="#" className="underline pr-[10px] hover:text-strange-pink">Read More</a>
                <svg className="w-[20px]" viewBox="0 -6.5 36 36" version="1.1" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>right-arrow</title> <desc>Created with Sketch.</desc> <g id="icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="ui-gambling-website-lined-icnos-casinoshunter" transform="translate(-212.000000, -159.000000)" fill="#252528" fill-rule="nonzero"> <g id="square-filled" transform="translate(50.000000, 120.000000)"> <path d="M187.108012,39.2902857 L197.649804,49.7417043 L197.708994,49.7959169 C197.889141,49.9745543 197.986143,50.2044182 198,50.4382227 L198,50.5617773 C197.986143,50.7955818 197.889141,51.0254457 197.708994,51.2040831 L197.6571,51.2479803 L187.108012,61.7097143 C186.717694,62.0967619 186.084865,62.0967619 185.694547,61.7097143 C185.30423,61.3226668 185.30423,60.6951387 185.694547,60.3080911 L194.702666,51.3738496 L162.99947,51.3746291 C162.447478,51.3746291 162,50.9308997 162,50.3835318 C162,49.8361639 162.447478,49.3924345 162.99947,49.3924345 L194.46779,49.3916551 L185.694547,40.6919089 C185.30423,40.3048613 185.30423,39.6773332 185.694547,39.2902857 C186.084865,38.9032381 186.717694,38.9032381 187.108012,39.2902857 Z M197.115357,50.382693 L186.401279,61.0089027 L197.002151,50.5002046 L197.002252,50.4963719 L196.943142,50.442585 L196.882737,50.382693 L197.115357,50.382693 Z" id="right-arrow"> </path> </g> </g> </g> </g></svg>
              </div>
            </div>
          </div>
          <div className="product-card flex flex-col border border-black max-w-fit">
            <img className="max-h-[15rem] md:max-h-[20rem]" src="/images/image1.png" alt="img1" />
            <div className="m-[0]! pl-[10px] py-[10px]">
              <p className="pb-[10px]">Name</p>
              <p className="pb-[10px]">£20.00</p>
              <div className="flex space-between w-fit m-[0]! items-center">
                <a href="#" className="underline pr-[10px] hover:text-strange-pink">Read More</a>
                <svg className="w-[20px]" viewBox="0 -6.5 36 36" version="1.1" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>right-arrow</title> <desc>Created with Sketch.</desc> <g id="icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="ui-gambling-website-lined-icnos-casinoshunter" transform="translate(-212.000000, -159.000000)" fill="#252528" fill-rule="nonzero"> <g id="square-filled" transform="translate(50.000000, 120.000000)"> <path d="M187.108012,39.2902857 L197.649804,49.7417043 L197.708994,49.7959169 C197.889141,49.9745543 197.986143,50.2044182 198,50.4382227 L198,50.5617773 C197.986143,50.7955818 197.889141,51.0254457 197.708994,51.2040831 L197.6571,51.2479803 L187.108012,61.7097143 C186.717694,62.0967619 186.084865,62.0967619 185.694547,61.7097143 C185.30423,61.3226668 185.30423,60.6951387 185.694547,60.3080911 L194.702666,51.3738496 L162.99947,51.3746291 C162.447478,51.3746291 162,50.9308997 162,50.3835318 C162,49.8361639 162.447478,49.3924345 162.99947,49.3924345 L194.46779,49.3916551 L185.694547,40.6919089 C185.30423,40.3048613 185.30423,39.6773332 185.694547,39.2902857 C186.084865,38.9032381 186.717694,38.9032381 187.108012,39.2902857 Z M197.115357,50.382693 L186.401279,61.0089027 L197.002151,50.5002046 L197.002252,50.4963719 L196.943142,50.442585 L196.882737,50.382693 L197.115357,50.382693 Z" id="right-arrow"> </path> </g> </g> </g> </g></svg>
              </div>
            </div>
          </div>
          <div className="product-card flex flex-col border border-black max-w-fit">
            <img className="max-h-[15rem] md:max-h-[20rem]" src="/images/image1.png" alt="img1" />
            <div className="m-[0]! pl-[10px] py-[10px]">
              <p className="pb-[10px]">Name</p>
              <p className="pb-[10px]">£20.00</p>
              <div className="flex space-between w-fit m-[0]! items-center">
                <a href="#" className="underline pr-[10px] hover:text-strange-pink">Read More</a>
                <svg className="w-[20px]" viewBox="0 -6.5 36 36" version="1.1" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>right-arrow</title> <desc>Created with Sketch.</desc> <g id="icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="ui-gambling-website-lined-icnos-casinoshunter" transform="translate(-212.000000, -159.000000)" fill="#252528" fill-rule="nonzero"> <g id="square-filled" transform="translate(50.000000, 120.000000)"> <path d="M187.108012,39.2902857 L197.649804,49.7417043 L197.708994,49.7959169 C197.889141,49.9745543 197.986143,50.2044182 198,50.4382227 L198,50.5617773 C197.986143,50.7955818 197.889141,51.0254457 197.708994,51.2040831 L197.6571,51.2479803 L187.108012,61.7097143 C186.717694,62.0967619 186.084865,62.0967619 185.694547,61.7097143 C185.30423,61.3226668 185.30423,60.6951387 185.694547,60.3080911 L194.702666,51.3738496 L162.99947,51.3746291 C162.447478,51.3746291 162,50.9308997 162,50.3835318 C162,49.8361639 162.447478,49.3924345 162.99947,49.3924345 L194.46779,49.3916551 L185.694547,40.6919089 C185.30423,40.3048613 185.30423,39.6773332 185.694547,39.2902857 C186.084865,38.9032381 186.717694,38.9032381 187.108012,39.2902857 Z M197.115357,50.382693 L186.401279,61.0089027 L197.002151,50.5002046 L197.002252,50.4963719 L196.943142,50.442585 L196.882737,50.382693 L197.115357,50.382693 Z" id="right-arrow"> </path> </g> </g> </g> </g></svg>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
    
  );
}
