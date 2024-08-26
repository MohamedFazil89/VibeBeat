import SkyPhonk from "./assets/sky-phonk-soundtrack-145571.mp3";
import Drift from "./assets/drift-rush-house-phonk-164907.mp3";
import Espresso from "./assets/NowHes.mpeg"
import Beat from "./assets/Beat.mpeg"

// images
import Image from "./assets/a anime boy hap ac3ea8c9-ce9d-41d6-8c2c-6cd3c4205218.png";
import Image2 from "./assets/phonk-5000x3000-17900.jpg";
import Image3 from "./assets/Espresso.png";
import Alibi from "./assets/Alibi.jfif";

const SongList =[
    {
        id: 1,
        name: "Espresso",
        artist: "Sabrina Carpenter",
        path:Espresso,
        image: Image3,
    },
    {
        id: 2,
        name: "Alibi",
        artist: "Sevdaliza",
        path:Beat,
        image: Alibi,
    },
    {
        id: 3,
        name: "drift-rush-house-phonk",
        artist: "Artist 1",
        path: Drift,
        image: Image,
    },
    {
        id: 4,
        name: "sky-phonk-soundtrack",
        artist: "Artist 2",
        path: SkyPhonk,
        image: Image2,
    },
   
]


export default SongList;