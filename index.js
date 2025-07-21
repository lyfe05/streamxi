const channels = [
    {
        name: "Premier League TV",
        category: "Football",
        url: "https://difwk89tryvik.cloudfront.net/v1/master/dfe581e0a446a1e548014078b2d81b62b917979d/KRON_AD_CAMPAIGN/index.m3u8"
    },
    {
        name: "La Liga TV",
        category: "Football",
        url: "https://content.uplynk.com/channel/ext/4413701bf5a1488db55b767f8ae9d4fa/kgo_24x7_news.m3u8"
    },
    {
        name: "Sky Sports",
        category: "Football",
        url: "https://skynewsau-live.akamaized.net/hls/live/2002689/skynewsau-extra1/master.m3u8"
    },
    {
        name: "ESPN Football",
        category: "Football",
        url: "https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master.m3u8"
    }
];

const channelList = document.getElementById("channelList");
const videoPlayer = document.getElementById("videoPlayer");
const loading = document.getElementById("loading");
const videoGlow = document.querySelector(".video-glow");
let currentChannelIndex = -1;
let lastGlowColor = { r: 0, g: 0, b: 0 };
let glowUpdateInterval;

function loadChannels() {
    loading.style.display = "none";
    channels.forEach((channel, index) => {
        const channelItem = document.createElement("div");
        channelItem.className = "channel-item fade-in";
        channelItem.style.animationDelay = `${index * 0.05}s`;
        channelItem.innerHTML = `
            <div class="channel-name">${channel.name}</div>
            <div class="channel-category">${channel.category}</div>
        `;
        channelItem.addEventListener("click", () => {
            selectChannel(index);
        });
        channelList.appendChild(channelItem);
    });
}

function selectChannel(index) {
    currentChannelIndex = index;
    const selectedChannel = channels[index];
    if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(selectedChannel.url);
        hls.attachMedia(videoPlayer);
        hls.on(Hls.Events.MANIFEST_PARSED, function () {
            videoPlayer.play().catch(error => {
                console.error("Playback error:", error);
            });
        });
        hls.on(Hls.Events.ERROR, function (event, data) {
            console.error("HLS error:", data);
            alert("Error loading channel: " + selectedChannel.name);
        });
    } else if (videoPlayer.canPlayType("application/vnd.apple.mpegurl")) {
        videoPlayer.src = selectedChannel.url;
        videoPlayer.addEventListener("loadedmetadata", function () {
            videoPlayer.play().catch(error => {
                console.error("Playback error:", error);
            });
        });
    } else {
        alert("Your browser does not support HLS streaming.");
    }

    const channelItems = channelList.getElementsByClassName("channel-item");
    for (let i = 0; i < channelItems.length; i++) {
        channelItems[i].classList.remove("active");
    }
    channelItems[index].classList.add("active");

    channelItems[index].scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });

    videoPlayer.classList.add("fade-in");
    setTimeout(() => videoPlayer.classList.remove("fade-in"), 500);

    lastGlowColor = { r: 0, g: 0, b: 0 };
    clearInterval(glowUpdateInterval);
    glowUpdateInterval = setInterval(updateVideoGlow, 100);
}

function updateVideoGlow() {
    if (!videoPlayer.videoWidth || !videoPlayer.videoHeight) return;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = videoPlayer.videoWidth;
    canvas.height = videoPlayer.videoHeight;
    ctx.drawImage(videoPlayer, 0, 0, canvas.width, canvas.height);
    const samplePoints = [
        { x: 0, y: 0 },
        { x: canvas.width - 1, y: 0 },
        { x: 0, y: canvas.height - 1 },
        { x: canvas.width - 1, y: canvas.height - 1 },
        { x: Math.floor(canvas.width / 2), y: Math.floor(canvas.height / 2) }
    ];
    let r = 0, g = 0, b = 0;
    samplePoints.forEach((point) => {
        const pixel = ctx.getImageData(point.x, point.y, 1, 1).data;
        r += pixel[0];
        g += pixel[1];
        b += pixel[2];
    });
    r = Math.floor(r / samplePoints.length);
    g = Math.floor(g / samplePoints.length);
    b = Math.floor(b / samplePoints.length);
    const transitionSpeed = 0.1;
    lastGlowColor.r += (r - lastGlowColor.r) * transitionSpeed;
    lastGlowColor.g += (g - lastGlowColor.g) * transitionSpeed;
    lastGlowColor.b += (b - lastGlowColor.b) * transitionSpeed;
    const glowColor = `rgb(${Math.round(lastGlowColor.r)},${Math.round(lastGlowColor.g)},${Math.round(lastGlowColor.b)})`;
    videoGlow.style.background = `radial-gradient(circle, ${glowColor} 0%, rgba(${Math.round(lastGlowColor.r)},${Math.round(lastGlowColor.g)},${Math.round(lastGlowColor.b)},0.2) 70%, rgba(${Math.round(lastGlowColor.r)},${Math.round(lastGlowColor.g)},${Math.round(lastGlowColor.b)},0) 100%)`;
}

loadChannels();

channelList.addEventListener("wheel", (e) => {
    e.preventDefault();
    channelList.scrollBy({
        top: e.deltaY,
        behavior: "smooth"
    });
});

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") {
        e.preventDefault();
        if (currentChannelIndex > 0) {
            selectChannel(currentChannelIndex - 1);
        }
    } else if (e.key === "ArrowDown") {
        e.preventDefault();
        if (currentChannelIndex < channels.length - 1) {
            selectChannel(currentChannelIndex + 1);
        }
    }
});

if (channels.length > 0) {
    selectChannel(0);
}

const navLinks = document.querySelectorAll(".nav-link");
const pages = document.querySelectorAll(".page");

navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const pageId = link.getAttribute("data-page");
        pages.forEach(page => page.classList.remove("active"));
        document.getElementById(pageId).classList.add("active");
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    });
});
