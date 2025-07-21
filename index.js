const channels = [
    {
        name: "Premier League TV",
        category: "Football",
        url: "https://difwk89tryvik.cloudfront.net/v1/master/dfe581e0a446a1e548014078b2d81b62b917979d/KRON_AD_CAMPAIGN/index.m3u8",
        logo: "data:image/jpeg;base64,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"
    },
    {
        name: "La Liga TV",
        category: "Football",
        url: "https://content.uplynk.com/channel/ext/4413701bf5a1488db55b767f8ae9d4fa/kgo_24x7_news.m3u8",
        logo: "https://www.google.com/imgres?q=laliga%20logo&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F0f%2FLaLiga_logo_2023.svg%2F2048px-LaLiga_logo_2023.svg.png&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFile%3ALaLiga_logo_2023.svg&docid=ED7S2x1rw-cdaM&tbnid=XTfeyc5rNA94mM&w=2048&h=2048&hcb=2"
    },
    {
        name: "Sky Sports",
        category: "Football",
        url: "https://skynewsau-live.akamaized.net/hls/live/2002689/skynewsau-extra1/master.m3u8",
        logo: "https://via.placeholder.com/24?text=SS"
    },
    {
        name: "ESPN Football",
        category: "Football",
        url: "https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master.m3u8",
        logo: "https://via.placeholder.com/24?text=ESPN"
    }
];

const otherChannels = [
    {
        name: "Sky News",
        category: "News",
        url: "https://skynewsau-live.akamaized.net/hls/live/2002689/skynewsau-extra1/master.m3u8",
        logo: "https://via.placeholder.com/24?text=SN"
    },
    {
        name: "Red Bull TV",
        category: "Sports",
        url: "https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master.m3u8",
        logo: "https://via.placeholder.com/24?text=RB"
    },
    {
        name: "Tastemade",
        category: "Lifestyle",
        url: "https://tastemadessai.akamaized.net/amagi_hls_data_tastemade-tastemade/CDN/playlist.m3u8",
        logo: "https://via.placeholder.com/24?text=TM"
    },
    {
        name: "30A Music",
        category: "Music",
        url: "https://30a-tv.com/feeds/ceftech/30atvmusic.m3u8",
        logo: "https://via.placeholder.com/24?text=30A"
    }
];

const channelList = document.getElementById("channelList");
const otherChannelsList = document.getElementById("otherChannelsList");
const channelListPlayer = document.getElementById("channelListPlayer");
const otherChannelsPlayer = document.getElementById("otherChannelsPlayer");
const loading = document.getElementById("loading");
const otherLoading = document.getElementById("otherLoading");
const videoGlows = document.querySelectorAll(".video-glow");
let currentChannelIndex = -1;
let currentOtherChannelIndex = -1;
let lastGlowColor = { r: 0, g: 0, b: 0 };
let glowUpdateInterval;

function loadChannels() {
    loading.style.display = "none";
    channels.forEach((channel, index) => {
        const channelItem = document.createElement("div");
        channelItem.className = "channel-item fade-in";
        channelItem.style.animationDelay = `${index * 0.05}s`;
        channelItem.innerHTML = `
            <img src="${channel.logo}" alt="${channel.name} Logo">
            <div>
                <div class="channel-name">${channel.name}</div>
                <div class="channel-category">${channel.category}</div>
            </div>
        `;
        channelItem.addEventListener("click", () => {
            selectChannel(index, "channelListPlayer");
        });
        channelList.appendChild(channelItem);
    });
}

function loadOtherChannels() {
    otherLoading.style.display = "none";
    otherChannels.forEach((channel, index) => {
        const channelItem = document.createElement("div");
        channelItem.className = "channel-item fade-in";
        channelItem.style.animationDelay = `${index * 0.05}s`;
        channelItem.innerHTML = `
            <img src="${channel.logo}" alt="${channel.name} Logo">
            <div>
                <div class="channel-name">${channel.name}</div>
                <div class="channel-category">${channel.category}</div>
            </div>
        `;
        channelItem.addEventListener("click", () => {
            selectOtherChannel(index);
        });
        otherChannelsList.appendChild(channelItem);
    });
}

function selectChannel(index, playerId) {
    currentChannelIndex = index;
    const selectedChannel = channels[index];
    const videoPlayer = document.getElementById(playerId);
    const videoGlow = videoPlayer.parentElement.querySelector(".video-glow");
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
    glowUpdateInterval = setInterval(() => updateVideoGlow(videoPlayer, videoGlow), 100);
}

function selectOtherChannel(index) {
    currentOtherChannelIndex = index;
    const selectedChannel = otherChannels[index];
    const videoPlayer = otherChannelsPlayer;
    const videoGlow = videoPlayer.parentElement.querySelector(".video-glow");
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

    const channelItems = otherChannelsList.getElementsByClassName("channel-item");
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
    glowUpdateInterval = setInterval(() => updateVideoGlow(videoPlayer, videoGlow), 100);
}

function updateVideoGlow(videoPlayer, videoGlow) {
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
loadOtherChannels();

channelList.addEventListener("wheel", (e) => {
    e.preventDefault();
    channelList.scrollBy({
        top: e.deltaY,
        behavior: "smooth"
    });
});

otherChannelsList.addEventListener("wheel", (e) => {
    e.preventDefault();
    otherChannelsList.scrollBy({
        top: e.deltaY,
        behavior: "smooth"
    });
});

document.addEventListener("keydown", (e) => {
    const activePage = document.querySelector(".page.active").id;
    if (activePage === "channel-list") {
        if (e.key === "ArrowUp") {
            e.preventDefault();
            if (currentChannelIndex > 0) {
                selectChannel(currentChannelIndex - 1, "channelListPlayer");
            }
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            if (currentChannelIndex < channels.length - 1) {
                selectChannel(currentChannelIndex + 1, "channelListPlayer");
            }
        }
    } else if (activePage === "other-channels") {
        if (e.key === "ArrowUp") {
            e.preventDefault();
            if (currentOtherChannelIndex > 0) {
                selectOtherChannel(currentOtherChannelIndex - 1);
            }
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            if (currentOtherChannelIndex < otherChannels.length - 1) {
                selectOtherChannel(currentOtherChannelIndex + 1);
            }
        }
    }
});

if (channels.length > 0) {
    selectChannel(0, "channelListPlayer");
}
if (otherChannels.length > 0) {
    selectOtherChannel(0);
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
