$(".img-hide,.text-hide1,.text-hide2,.continue-button,.cb-1,.cb-2,.ss,.s-button,.c-button,.solar-button,.centauri-button,.me-button,.ve-button,.ea-button,.ma-button,.ju-button,.sa-button,.ur-button,.ne-button,.pb-button,.pc-button,.pd-button,.back-button,.diap-1,.diap-2,.diap-3,.yes,.yes-1,.no,.no-1,.end-1,.end-me,.end-pc,.end-pd,.play-again,.dias-1,.dias-2,.dias-3,.dias-4,.dias-5,.dias-6,.dias-7,.dias-8").hide();


$(".continue-button").click(function() {
    $(".menu-bg").css("background-image", "url(https://www.wallpaperflare.com/static/911/173/237/space-solar-system-sun-universe-wallpaper.jpg)");
    $(".text-hide1,.text-hide2,.continue-button").hide();
    $(".ss,.s-button,.c-button").show();
});


$(".cb-1").click(function() {
    $(".menu-bg").css("background-image", "url(https://www.wearethemighty.com/uploads/legacy/assets.rbl.ms/20629038/origin.jpg)");
    $(".diap-2,.cb-1").hide();
    $(".play-again,.end-pc").show();
});

$(".cb-2").click(function() {
    $(".menu-bg").css("background-image", "url(https://i.pinimg.com/originals/e1/99/b3/e199b3e99dfd8d1f81ca6290ed544afb.jpg)");
    $(".diap-3,.cb-2").hide();
    $(".play-again,.end-pd").show();
});

$(".play-button").click(function() {
    $(".menu-bg").css("background-image", "url(https://i.pinimg.com/564x/a2/c7/79/a2c7795291b7c9ca699404eba2caa2d5.jpg)");
    $(".menu-text, .play-button,.decline-button,.quit-button").hide();
    $(".text-hide1,.continue-button").show();
});


$(".decline-button").click(function() {
    $(".menu-bg").css("background-image", "url(https://i.pinimg.com/564x/a2/c7/79/a2c7795291b7c9ca699404eba2caa2d5.jpg)");
    $(".menu-text, .play-button,.decline-button,.quit-button ").hide();
    $(".text-hide2,.continue-button").show();
});


$(".quit-button").click(function() {
    $(".menu-bg").css("background-image", "url(https://c.tenor.com/lk5YUP4Co1QAAAAC/static-glitch.gif)");
    $(".menu-text, .play-button,.decline-button,.quit-button ").hide();
    $(".img-hide").show();
});

$(".play-again").click(function() {
    $(".menu-bg").css("background-image", "url(https://www.wallpapertip.com/wmimgs/171-1712901_landscape-4k-wallpaper-for-laptop.jpg)");
    $(".menu-text, .play-button,.decline-button,.quit-button").show();
    $(".img-hide,.play-again,.end-1,.end-me,.back-button,.end-pc,.end-pd").hide();
});

$(".s-button").click(function() {
    $(".menu-bg").css("background-image", "url(https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3NvbGFyLXN5c3RlbS1qdXBpdGVyLW9yYml0LTIuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoiMTIwMCJ9fX0=)");
    $(".s-button,.c-button,.ss ").hide();
    $(".me-button,.ve-button,.ea-button,.ma-button,.ju-button,.sa-button,.ur-button,.ne-button,.back-button").show();

});
$(".c-button").click(function() {
    $(".menu-bg").css("background-image", "url(https://cdn.cnn.com/cnnnext/dam/assets/200115113333-exoplanets-proxima-centauri.jpg)");
    $(".s-button,.c-button,.ss").hide();
    $(".pb-button,.pc-button,.pd-button,.back-button").show();

});
$(".back-button").click(function() {
    $(".s-button,.c-button,.ss").show();
    $(".pb-button,.pc-button,.pd-button,.back-button,.me-button,.ve-button,.ea-button,.ma-button,.ju-button,.sa-button,.ur-button,.ne-button ").hide();
    $(".menu-bg").css("background-image", "url(https://www.wallpaperflare.com/static/911/173/237/space-solar-system-sun-universe-wallpaper.jpg)");
});


$(".img-hide").click(function() {
    $(".menu-bg").css("background-image", "url(https://www.wallpapertip.com/wmimgs/171-1712901_landscape-4k-wallpaper-for-laptop.jpg)");
    $(".menu-text, .play-button,.decline-button,.quit-button").show();
    $(".img-hide").hide();
});

$(".pb-button").click(function() {
    $(".diap-1,.yes,.no").show();
    $(".pb-button,.pc-button,.pd-button,.back-button").hide();
    $(".menu-bg").css("background-image", "url(https://skyandtelescope.org/wp-content/uploads/proxima_b_illo_600px-736x490-c-default.jpg)");
});
$(".no").click(function() {
    $(".s-button,.c-button,.ss").show();
    $(".end-1,.yes,.no,.diap-1 ").hide();
    $(".menu-bg").css("background-image", "url(https://www.wallpaperflare.com/static/911/173/237/space-solar-system-sun-universe-wallpaper.jpg)");
});

$(".no-1").click(function() {
    $(".menu-bg").css("background-image", "url(https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3NvbGFyLXN5c3RlbS1qdXBpdGVyLW9yYml0LTIuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoiMTIwMCJ9fX0=)");
    $(".me-button,.ve-button,.ea-button,.ma-button,.ju-button,.sa-button,.ur-button,.ne-button,.back-button").show();
    $(".yes-1,.no-1,.dias-1").hide();

});
$(".yes").click(function() {
    $(".end-1,.play-again").show();
    $(".yes,.diap-1,.no").hide();
    $(".menu-bg").css("background-image", "url(https://static1.gensler.com/uploads/hero_element/15969/thumb_desktop/thumbs/CraftingNewEraofHumanConnection_HERO_1024px_1591371459_1024x576.jpg)");
});


$(".yes-1").click(function() {
    $(".end-me,.play-again").show();
    $(".yes-1,.no-1,.dias-1").hide();
    $(".menu-bg").css("background-image", "url(https://wallpaperaccess.com/full/906815.jpg)");
});


$(".me-button").click(function() {
    $(".dias-1,.yes-1,.no-1").show();
    $(".me-button,.ve-button,.ea-button,.ma-button,.ju-button,.sa-button,.ur-button,.ne-button,.back-button ").hide();
    $(".menu-bg").css("background-image", "url(https://wl-brightside.cf.tsp.li/resize/728x/jpg/8b7/d2f/643079518983b64d44260274b2.jpg)");
});
$(".ve-button").click(function() {
    $(".end-1,.play-again").show();
    $(".me-button,.ve-button,.ea-button,.ma-button,.ju-button,.sa-button,.ur-button,.ne-button ").hide();
    $(".menu-bg").css("background-image", "url(https://static1.gensler.com/uploads/hero_element/15969/thumb_desktop/thumbs/CraftingNewEraofHumanConnection_HERO_1024px_1591371459_1024x576.jpg)");
});
$(".ea-button").click(function() {
    $(".end-1,.play-again").show();
    $(".me-button,.ve-button,.ea-button,.ma-button,.ju-button,.sa-button,.ur-button,.ne-button ").hide();
    $(".menu-bg").css("background-image", "url(https://static1.gensler.com/uploads/hero_element/15969/thumb_desktop/thumbs/CraftingNewEraofHumanConnection_HERO_1024px_1591371459_1024x576.jpg)");
});
$(".ma-button").click(function() {
    $(".end-1,.play-again").show();
    $(".me-button,.ve-button,.ea-button,.ma-button,.ju-button,.sa-button,.ur-button,.ne-button ").hide();
    $(".menu-bg").css("background-image", "url(https://static1.gensler.com/uploads/hero_element/15969/thumb_desktop/thumbs/CraftingNewEraofHumanConnection_HERO_1024px_1591371459_1024x576.jpg)");
});
$(".ju-button").click(function() {
    $(".end-1,.play-again").show();
    $(".me-button,.ve-button,.ea-button,.ma-button,.ju-button,.sa-button,.ur-button,.ne-button ").hide();
    $(".menu-bg").css("background-image", "url(https://static1.gensler.com/uploads/hero_element/15969/thumb_desktop/thumbs/CraftingNewEraofHumanConnection_HERO_1024px_1591371459_1024x576.jpg)");
});
$(".sa-button").click(function() {
    $(".end-1,.play-again").show();
    $(".me-button,.ve-button,.ea-button,.ma-button,.ju-button,.sa-button,.ur-button,.ne-button ").hide();
    $(".menu-bg").css("background-image", "url(https://static1.gensler.com/uploads/hero_element/15969/thumb_desktop/thumbs/CraftingNewEraofHumanConnection_HERO_1024px_1591371459_1024x576.jpg)");
});
$(".ne-button").click(function() {
    $(".end-1,.play-again").show();
    $(".me-button,.ve-button,.ea-button,.ma-button,.ju-button,.sa-button,.ur-button,.ne-button ").hide();
    $(".menu-bg").css("background-image", "url(https://static1.gensler.com/uploads/hero_element/15969/thumb_desktop/thumbs/CraftingNewEraofHumanConnection_HERO_1024px_1591371459_1024x576.jpg)");
});
$(".ur-button").click(function() {
    $(".end-1,.play-again").show();
    $(".me-button,.ve-button,.ea-button,.ma-button,.ju-button,.sa-button,.ur-button,.ne-button ").hide();
    $(".menu-bg").css("background-image", "url(https://static1.gensler.com/uploads/hero_element/15969/thumb_desktop/thumbs/CraftingNewEraofHumanConnection_HERO_1024px_1591371459_1024x576.jpg)");
});
$(".pc-button").click(function() {
    $(".diap-2,.cb-1").show();
    $(".pb-button,.pc-button,.pd-button,.back-button").hide();
    $(".menu-bg").css("background-image", "url(https://live.staticflickr.com/65535/49778863251_bc1c45c704_b.jpg)");
});
$(".pd-button").click(function() {
    $(".diap-3,.cb-2").show();
    $(".pb-button,.pc-button,.pd-button,.back-button").hide();
    $(".menu-bg").css("background-image", "url(https://cdn.eso.org/images/publicationjpg/eso2202a.jpg)");
});