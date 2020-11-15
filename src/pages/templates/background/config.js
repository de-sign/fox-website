let config = {
    "template": {
        "name": "background",
        "navbar": [null, "uk-navbar-left", "uk-navbar-right"], // Choice one
        "mode": [null, "uk-light", "uk-dark"], // Choice one
        "background":  [
            {
                "type": "class",
                "class": [null, "uk-background-default", "uk-background-muted", "uk-background-primary", "uk-background-secondary"] // Choice one
            },
            {
                "type": "image",
                "attributes": {
                    "data-src": "assets/images/**/*.*",
                    "data-srcset": [null, "assets/images/**/*.* 640w, assets/images/**/*.* 960w, assets/images/**/*.* 1200w, assets/images/**/*.* 1600w"],
                    "data-sizes": [null, "(min-width: 650px) 650px, 100vw"],
                    "class": [ // Choice options and concat on a string
                        [null, "uk-background-cover", "uk-background-contain"], // Choice one
                        [null, "uk-background-top-left", "uk-background-top-center", "uk-background-top-right", "uk-background-center-left", "uk-background-center-center", "uk-background-center-right", "uk-background-bottom-left", "uk-background-bottom-center", "uk-background-bottom-right"], // Choice one
                        [null, "uk-background-norepeat"], // Choice one
                        [null, "uk-background-fixed"], // Choice one
                        [null, "uk-background-image@s", "uk-background-image@m", "uk-background-image@l", "uk-background-image@xl"], // Choice one
                        [ // Possible filter effect
                            [null, "uk-background-blend-multiply", "uk-background-blend-screen", "uk-background-blend-overlay", "uk-background-blend-darken", "uk-background-blend-lighten", "uk-background-blend-color-dodge", "uk-background-blend-color-burn", "uk-background-blend-hard-light", "uk-background-blend-soft-light", "uk-background-blend-difference", "uk-background-blend-exclusion", "uk-background-blend-hue", "uk-background-blend-saturation", "uk-background-blend-color", "uk-background-blend-luminosity"], // Choice one
                            [null, "uk-background-muted", "uk-background-primary", "uk-background-secondary"] // Choice one
                        ]
                    ]
                }
            },
            {
                "type": "video",
                "attributes": { // All <video> attributes possible
                    "src": "assets/videos/**/*.*",
                    "autoplay": true,
                    "loop": true,
                    "muted": true,
                    "playsinline": true,
                    "poster": "assets/images/**/*.*"
                }
            }
        ]
    },

    "content": {
        "icon": [
            {
                "type": "uk-icon",
                "attributes": { // All <span> attributes possible
                    "uk-icon": "icon: uikit; ratio: 2;",
                    "class": null
                }
            },
            {
                "type": ["uk-img", "uk-svg"],
                "attributes": { // All <img/> attributes possible
                    "data-src": "assets/images/**/*.*",
                    "width": 0,
                    "height": 0,
                    "alt": "Website logo",
                    "class": null
                }
            }
        ],
        "title": "This is a <h1 class=\"uk-heading-medium\">title</h1>",
        "subtitle": "This is a <h2 class=\"uk-h4\">subtitle</h2>",
        "description": "This is a little text use for <p>description</p>",
        "footer": [
            {
                "type": "uk-button",
                "tag": "a",
                "content": "Get started",
                "attributes": { // All <a> attributes possible
                    "href": "**/*.html",
                    "class": "uk-button"
                }
            }
        ]
    }
};