window.PIXELFORGE_CONFIG = {
  productName: "PixelForge Studio",
  edition: "Web Edition",
  isProUnlocked: window.location.search.includes("paid_pro=1"),
  priceLabel: "$1.99 Instant Download",
  itchUrl: "https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=judasx0108%40gmail.com&item_name=PixelForge+Pro+MegaKit+%28120+WAVs+%2B+6+Shaders%29&amount=1.99&currency_code=USD&no_shipping=1&return=https%3A%2F%2Fchoikim0108.github.io%2Ftext-elo-lab%2Fpixelforge%2F%3Fpaid_pro%3D1",
  gumroadUrl: "https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=judasx0108%40gmail.com&item_name=PixelForge+Pro+MegaKit+%28120+WAVs+%2B+6+Shaders%29&amount=1.99&currency_code=USD&no_shipping=1&return=https%3A%2F%2Fchoikim0108.github.io%2Ftext-elo-lab%2Fpixelforge%2F%3Fpaid_pro%3D1",
  paypalMeUrl: "https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=judasx0108%40gmail.com&item_name=PixelForge+Indie+Tool+Tip+%28%240.99%29&amount=0.99&currency_code=USD&no_shipping=1&return=https%3A%2F%2Fchoikim0108.github.io%2Ftext-elo-lab%2Fpixelforge%2F%3Fpaid_pro%3D1"
};
if (window.location.search.includes("paid_pro=1")) {
  window.addEventListener("DOMContentLoaded", () => {
    const a = document.createElement("a");
    a.href = "./pro_dl_9f8a/PixelForge_Pro_MegaKit_v1.0.zip";
    a.download = "PixelForge_Pro_MegaKit_v1.0.zip";
    document.body.appendChild(a);
    a.click();
    alert("Thank you for your payment! Your PixelForge Pro Mega-Kit (120 WAVs + 6 Shaders) download has started automatically.");
  });
}
