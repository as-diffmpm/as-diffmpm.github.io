// JavaScript to handle mouseover and mouseout events
var activeMethodPill = null;
var activeScenePill = null;
var activeModePill = null;
var activeMetricsPill = null;
var activeVidID = 0;
var activeColVidID = 0;
var select = false;
var selectC = false;


function selectGalleryVideo(methodPill, scenePill, modePill, metricsPill) {
    // Your existing logic for video selection
    select = true;

    activeMethodPill.classList.remove("active");
    activeScenePill.classList.remove("active");
    activeModePill.classList.remove("active");
    activeMetricsPill.classList.remove("active");

    activeMethodPill = methodPill;
    activeScenePill = scenePill;
    activeModePill = modePill;
    activeMetricsPill = metricsPill;
    activeMethodPill.classList.add("active");
    activeScenePill.classList.add("active");
    activeModePill.classList.add("active");
    activeMetricsPill.classList.add("active");

    method = activeMethodPill.getAttribute("data-value");
    scene = activeScenePill.getAttribute("data-value");
    mode = activeModePill.getAttribute("data-value");
    metrics = activeMetricsPill.getAttribute("data-value");

    // swap video to avoid flickering
    activeVidID = 1 - activeVidID;
    var video_active = document.getElementById("compVideo" + activeVidID);
    var video_hidden = document.getElementById("compVideo" + (1 - activeVidID));
    video_active.src = "assets/videos/" + metrics + "/" + scene + "_" + method + "_" + mode + ".mp4";
    video_active.load();
}

function selectGalleryVideoCollision(colliderPill) {
    selectC = true;

    activeCollisionPill.classList.remove("active");

    activeCollisionPill = colliderPill;
    activeCollisionPill.classList.add("active");

    // swap video to avoid flickering
    activeColVidID = 1 - activeColVidID;
    var video_active = document.getElementById("compVideoC" + activeColVidID);
    var video_hidden = document.getElementById("compVideoC" + (1 - activeColVidID));
    video_active.src = "assets/videos/collisions/" + colliderPill.getAttribute("data-value") + ".mp4";
    video_active.load();
}