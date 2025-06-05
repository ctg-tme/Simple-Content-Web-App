const Icons = {
    Shape: {
        "abstract": "https://qaemailmedia.s3.amazonaws.com/9362d52f-d475-42bd-8791-d7c98b2d64c5/Abstract_Shape_508214346064681.png",
        "tech-design": "https://qaemailmedia.s3.amazonaws.com/9362d52f-d475-42bd-8791-d7c98b2d64c5/Tech_Shape_508191569646146.png",
        "conceptual": "https://qaemailmedia.s3.amazonaws.com/9362d52f-d475-42bd-8791-d7c98b2d64c5/Concept_Shape_508155877960293.png",
        "fantasy": "https://qaemailmedia.s3.amazonaws.com/9362d52f-d475-42bd-8791-d7c98b2d64c5/Fantasy_Shape_508163934992462.png",
        "nebula-burst": "https://qaemailmedia.s3.amazonaws.com/9362d52f-d475-42bd-8791-d7c98b2d64c5/Nebula_Shape_508202686207091.png",
        "fracture-form": "https://qaemailmedia.s3.amazonaws.com/9362d52f-d475-42bd-8791-d7c98b2d64c5/Fracture_Shape_508174240031010.png"
    },
    Finish: {
        "matte-black": "https://qaemailmedia.s3.amazonaws.com/9362d52f-d475-42bd-8791-d7c98b2d64c5/Color_Black_505861309136583.png",
        "cherry-red": "https://qaemailmedia.s3.amazonaws.com/9362d52f-d475-42bd-8791-d7c98b2d64c5/Color_Cherry_505897141307255.png",
        "metallic-blue": "https://qaemailmedia.s3.amazonaws.com/9362d52f-d475-42bd-8791-d7c98b2d64c5/Color_Blue_508139721883788.png",
        "crystal-clear": "https://qaemailmedia.s3.amazonaws.com/9362d52f-d475-42bd-8791-d7c98b2d64c5/Color_White_505927552599976.png",
        "electric-pink": "https://qaemailmedia.s3.amazonaws.com/9362d52f-d475-42bd-8791-d7c98b2d64c5/Color_Pink_505917470785629.png"
    },
    Material: {
        "translucent-alloy": "https://qaemailmedia.s3.amazonaws.com/9362d52f-d475-42bd-8791-d7c98b2d64c5/Fret_TransAlloy_508266065829517.png",
        "neon-circuitglass": "https://qaemailmedia.s3.amazonaws.com/9362d52f-d475-42bd-8791-d7c98b2d64c5/Fret_circuit_508281855299048.png",
        "reactive-chromatic-resin": "https://qaemailmedia.s3.amazonaws.com/9362d52f-d475-42bd-8791-d7c98b2d64c5/Fret_Chromatic_508237357622376.png",
        "hollo-grid-matrix": "https://qaemailmedia.s3.amazonaws.com/9362d52f-d475-42bd-8791-d7c98b2d64c5/Fret_Matrix_508246003214453.png",
        "laser-etched-polyglass": "https://qaemailmedia.s3.amazonaws.com/9362d52f-d475-42bd-8791-d7c98b2d64c5/Fret_Polyglass_508257988117631.png"
    }
}

window.addEventListener('DOMContentLoaded', () => {
    // Function to update elements based on parameters
    function updateElements(params) {
        params.forEach((value, key) => {
            const targetElement = document.getElementById(key);
            if (!targetElement) return;

            if (!key.includes('pid-ico_')) {

                if (key === 'pid-footer') {
                    const val = value.trim().toLowerCase();
                    if (val === 'false') {
                        targetElement.style.display = 'none';
                    } else {
                        targetElement.style.display = ''; // Reset display if not false
                    }
                } else {
                    targetElement.innerHTML = value;
                }
            }
        });
    }

    function updateIcons() {
        // Get all elements with ID that includes 'pid-ico_'
        const elements = document.querySelectorAll('[id*="pid-ico_"]');

        elements.forEach((el) => {
            console.log(el.id)
            const [pid, type, path] = el.id.split('_');

            console.log(path)
            if (el.tagName.toLowerCase() === 'img') {
                switch (type) {
                    case 'sha':
                        el.src = Icons.Shape[path]
                        break;
                    case 'fin':
                        el.src = Icons.Finish[path]
                        break;
                    case 'mat':
                        el.src = Icons.Material[path]
                        break;

                }
            }
        });
    }

    // Parse and update from query parameters
    const urlParams = new URLSearchParams(window.location.search);
    updateElements(urlParams);

    setTimeout(updateIcons, 25)

});
