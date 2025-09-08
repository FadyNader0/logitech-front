import axios from "axios"

export default function UploadData(){
    try{
        axios({
            method: "POST",
            url: "https://api.baserow.io/api/database/rows/table/659209/batch/?user_field_names=true",
            headers: {
                Authorization: "Token uSWeMUnoCUioCuxC22jTA0skWOpVwQ26",
                "Content-Type": "application/json"
            },
            data: {
                "items": [
                      {
                        "productName": "MX Master 3S",
                        "description": "Premium performance wireless mouse with 8K DPI precision.",
                        "price": 99.99,
                        "sale": 12,
                        "stock": 150,
                        "active": true,
                        "categories": [1],
                        "image": "https://cdn.logitech.com/resource/image/mx-master-3s.jpg"
                    },
                    {
                        "productName": "MX Master 2S",
                        "description": "Ergonomic wireless mouse with multi-device control.",
                        "price": 79.99,
                        "sale": 0,
                        "stock": 80,
                        "active": true,
                        "categories": [1],
                        "image": "https://upload.wikimedia.org/wikipedia/commons/9/96/Logitech_MX_Master_2S.jpg"
                    },
                    {
                        "productName": "MX Anywhere 3S",
                        "description": "Compact high-performance mouse, ideal for travel.",
                        "price": 79.99,
                        "sale": 12,
                        "stock": 120,
                        "active": true,
                        "categories": [1],
                        "image": "https://upload.wikimedia.org/wikipedia/commons/3/30/Logitech_MX_Anywhere_3S.jpg"
                    },
                    {
                        "productName": "M720 Triathlon",
                        "description": "Multi-device wireless mouse that lasts up to 24 months.",
                        "price": 49.99,
                        "sale": 12,
                        "stock": 200,
                        "active": true,
                        "categories": [1],
                        "image": "https://upload.wikimedia.org/wikipedia/commons/1/13/Logitech_M720.jpg"
                    },
                    {
                        "productName": "M335 Wireless Mouse",
                        "description": "Compact RF wireless optical mouse.",
                        "price": 19.99,
                        "sale": 0,
                        "stock": 300,
                        "active": true,
                        "categories": [1],
                        "image": "https://upload.wikimedia.org/wikipedia/commons/7/7e/Logitech_M335.jpg"
                    },
                    {
                        "productName": "M337 Bluetooth Mouse",
                        "description": "Bluetooth mouse with long battery life.",
                        "price": 24.99,
                        "sale": 12,
                        "stock": 250,
                        "active": true,
                        "categories": [1],
                        "image": "https://upload.wikimedia.org/wikipedia/commons/2/21/Logitech_M337.jpg"
                    },
                    {
                        "productName": "M220 Silent",
                        "description": "Near-silent wireless mouse for quiet environments.",
                        "price": 29.99,
                        "sale": 12,
                        "stock": 180,
                        "active": true,
                        "categories": [1],
                        "image": "https://upload.wikimedia.org/wikipedia/commons/a/ab/Logitech_M220_Silent.jpg"
                    },
                    {
                        "productName": "M330 Silent Plus",
                        "description": "Silent optical mouse with extended battery life.",
                        "price": 34.99,
                        "sale": 12,
                        "stock": 170,
                        "active": true,
                        "categories": [1],
                        "image": "https://upload.wikimedia.org/wikipedia/commons/8/8f/Logitech_M330_Silent_Plus.jpg"
                    },
                    {
                        "productName": "Pebble Mouse 2 M350S",
                        "description": "Slim, lightweight, ambidextrous mouse.",
                        "price": 39.99,
                        "sale": 12,
                        "stock": 210,
                        "active": true,
                        "categories": [1],
                        "image": "https://example.com/images/pebble-mouse-2.jpg"
                    },
                    {
                        "productName": "Wireless Mouse M340",
                        "description": "Budget-friendly wireless mouse in many designs.",
                        "price": 19.99,
                        "sale": 12,
                        "stock": 220,
                        "active": true,
                        "categories": [1],
                        "image": "https://example.com/images/m340.jpg"
                    },
                    {
                        "productName": "MX Keys S",
                        "description": "Backlit smart-illumination keyboard for precision typing.",
                        "price": 99.99,
                        "sale": 0,
                        "stock": 130,
                        "active": true,
                        "categories": [2],
                        "image": "https://cdn.logitech.com/resource/image/mx-keys-s.jpg"
                    },
                    {
                        "productName": "MK250 Compact Bluetooth Keyboard",
                        "description": "Compact wireless keyboard plus mouse combo (keyboard only).",
                        "price": 29.99,
                        "sale": 12,
                        "stock": 240,
                        "active": true,
                        "categories": [2],
                        "image": "https://upload.wikimedia.org/wikipedia/commons/5/58/Logitech_MK250.jpg"
                    },
                    {
                        "productName": "Master Series MX Mechanical Keyboard",
                        "description": "Full-size mechanical keyboard with smart typing features.",
                        "price": 199.99,
                        "sale": 12,
                        "stock": 90,
                        "active": true,
                        "categories": [2],
                        "image": "https://example.com/images/mx-mechanical.jpg"
                    },
                    {
                        "productName": "Wave Keys for Mac",
                        "description": "Ergonomic wave-shaped keyboard for Mac systems.",
                        "price": 129.99,
                        "sale": 12,
                        "stock": 150,
                        "active": true,
                        "categories": [2],
                        "image": "https://example.com/images/wave-keys-mac.jpg"
                    },
                    {
                        "productName": "K120 Basic Keyboard",
                        "description": "Durable wired keyboard for everyday use.",
                        "price": 19.99,
                        "sale": 12,
                        "stock": 300,
                        "active": true,
                        "categories": [2],
                        "image": "https://upload.wikimedia.org/wikipedia/commons/a/a2/Logitech_K120.jpg"
                    },
                    {
                        "productName": "MK520 Wireless Combo (Keyboard)",
                        "description": "Affordable wireless keyboard from combo set.",
                        "price": 49.99,
                        "sale": 0,
                        "stock": 160,
                        "active": true,
                        "categories": [2],
                        "image": "https://upload.wikimedia.org/wikipedia/commons/f/f9/Logitech_MK520.jpg"
                    },
                    {
                        "productName": "MK845 Performance Combo Keyboard",
                        "description": "Part of Combo with advanced keyboard features.",
                        "price": 179.99,
                        "sale": 12,
                        "stock": 80,
                        "active": true,
                        "categories": [2],
                        "image": "https://example.com/images/mk845.jpg"
                    },
                    {
                        "productName": "Pop Icon Combo Keyboard",
                        "description": "Stylish compact keyboard in various colors.",
                        "price": 69.99,
                        "sale": 12,
                        "stock": 140,
                        "active": true,
                        "categories": [2],
                        "image": "https://example.com/images/pop-icon-keyboard.jpg"
                    },
                    {
                        "productName": "Casa Pop-Up Desk Keyboard",
                        "description": "Fold-away kit with keyboard plus accessories (keyboard).",
                        "price": 179.99,
                        "sale": 12,
                        "stock": 60,
                        "active": true,
                        "categories": [2],
                        "image": "https://example.com/images/casa-keyboard.jpg"
                    },
                    {
                        "productName": "G Pro X Superlight 2 Keyboard", 
                        "description": "High-performance gaming keyboard (G series).",
                        "price": 169.99,
                        "sale": 12,
                        "stock": 70,
                        "active": true,
                        "categories": [2],
                        "image": "https://example.com/images/g-pro-x-keyboard.jpg"
                    },
                    {
                        "productName": "Logitech Headset H390 USB",
                        "description": "Affordable USB wired headset for calls.",
                        "price": 29.99,
                        "sale": 12,
                        "stock": 220,
                        "active": true,
                        "categories": [3],
                        "image": "https://upload.wikimedia.org/wikipedia/commons/0/05/Logitech_H390.jpg"
                    },
                    {
                        "productName": "Headset H540 USB",
                        "description": "Midsize headset with noise-reducing mic.",
                        "price": 39.99,
                        "sale": 12,
                        "stock": 180,
                        "active": true,
                        "categories": [3],
                        "image": "https://example.com/images/h540.jpg"
                    },
                    {
                        "productName": "Zone Wireless Headset",
                        "description": "Wireless headset with long battery life.",
                        "price": 199.99,
                        "sale": 12,
                        "stock": 90,
                        "active": true,
                        "categories": [3],
                        "image": "https://example.com/images/zone-wireless.jpg"
                    },
                    {
                        "productName": "Zone Wired Headset",
                        "description": "USB headset for professional use.",
                        "price": 59.99,
                        "sale": 0,
                        "stock": 130,
                        "active": true,
                        "categories": [3],
                        "image": "https://example.com/images/zone-wired.jpg"
                    },
                    {
                        "productName": "G435 LIGHTSPEED Gaming Headset",
                        "description": "Lightweight wireless gaming headset.",
                        "price": 79.99,
                        "sale": 12,
                        "stock": 160,
                        "active": true,
                        "categories": [3],
                        "image": "https://example.com/images/g435.jpg"
                    },
                    {
                        "productName": "G PRO X Gaming Headset",
                        "description": "Pro-grade wired gaming headset with mic.",
                        "price": 129.99,
                        "sale": 12,
                        "stock": 120,
                        "active": true,
                        "categories": [3],
                        "image": "https://example.com/images/g-pro-x-headset.jpg"
                    },
                    {
                        "productName": "H111 Stereo Headset",
                        "description": "Basic wired headset with stereo sound.",
                        "price": 14.99,
                        "sale": 12,
                        "stock": 300,
                        "active": true,
                        "categories": [3],
                        "image": "https://upload.wikimedia.org/wikipedia/commons/4/42/Logitech_H111.jpg"
                    },
                    {
                        "productName": "HD Pro Webcam C920", 
                        "description": "1080p webcam with sharp image quality.",
                        "price": 79.99,
                        "sale": 12,
                        "stock": 200,
                        "active": true,
                        "categories": [4],
                        "image": "https://upload.wikimedia.org/wikipedia/commons/8/80/Logitech_C920.jpg"
                    },
                    {
                        "productName": "Webcam C922",
                        "description": "Streaming-optimized webcam with background removal.",
                        "price": 99.99,
                        "sale": 12,
                        "stock": 150,
                        "active": true,
                        "categories": [4],
                        "image": "https://example.com/images/c922.jpg"
                    },
                    {
                        "productName": "Webcam Brio 4K",
                        "description": "Premium 4K webcam with HDR.",
                        "price": 199.99,
                        "sale": 0,
                        "stock": 80,
                        "active": true,
                        "categories": [4],
                        "image": "https://upload.wikimedia.org/wikipedia/commons/e/e0/Logitech_Brio.jpg"
                    },
                    {
                        "productName": "Webcam C270",
                        "description": "Budget 720p webcam for everyday use.",
                        "price": 29.99,
                        "sale": 12,
                        "stock": 260,
                        "active": true,
                        "categories": [4],
                        "image": "https://upload.wikimedia.org/wikipedia/commons/5/59/Logitech_C270.jpg"
                    },
                    {
                        "productName": "ConferenceCam MeetUp",
                        "description": "All-in-one conference webcam for small rooms.",
                        "price": 699.99,
                        "sale": 12,
                        "stock": 50,
                        "active": true,
                        "categories": [4],
                        "image": "https://example.com/images/meetup.jpg"
                    },
                    {
                        "productName": "Spot Presence Camera",
                        "description": "Sensor camera for room presence detection.",
                        "price": 99.99,
                        "sale": 12,
                        "stock": 120,
                        "active": true,
                        "categories": [4],
                        "image": "https://example.com/images/spot.jpg"
                    },
                    {
                        "productName": "Webcam C615",
                        "description": "Rotatable 1080p webcam with fold-and-go design.",
                        "price": 69.99,
                        "sale": 12,
                        "stock": 140,
                        "active": true,
                        "categories": [4],
                        "image": "https://upload.wikimedia.org/wikipedia/commons/9/9f/Logitech_C615.jpg"
                    },
                    {
                        "productName": "Scribe Whiteboard Camera",
                        "description": "Whiteboard-sharing camera for conferencing.",
                        "price": 299.99,
                        "sale": 12,
                        "stock": 60,
                        "active": true,
                        "categories": [4],
                        "image": "https://example.com/images/scribe.jpg"
                    },
                    {
                        "productName": "Z207 Speakers",
                        "description": "Compact stereo speakers with Bluetooth and wired input.",
                        "price": 39.99,
                        "sale": 12,
                        "stock": 200,
                        "active": true,
                        "categories": [5],
                        "image": "https://upload.wikimedia.org/wikipedia/commons/0/0e/Logitech_Z207.jpg"
                    },
                    {
                        "productName": "Z313 Speaker System",
                        "description": "Budget 2.1 speaker system with subwoofer.",
                        "price": 49.99,
                        "sale": 12,
                        "stock": 180,
                        "active": true,
                        "categories": [5],
                        "image": "https://upload.wikimedia.org/wikipedia/commons/f/f5/Logitech_Z313.jpg"
                    },
                    {
                        "productName": "Z407 Speakers",
                        "description": "Under-desk speakers with long Bluetooth range.",
                        "price": 99.99,
                        "sale": 0,
                        "stock": 120,
                        "active": true,
                        "categories": [5],
                        "image": "https://upload.wikimedia.org/wikipedia/commons/1/14/Logitech_Z407.jpg"
                    },
                    {
                        "productName": "Z623 2.1 Speakers",
                        "description": "THX-certified speaker system with powerful bass.",
                        "price": 149.99,
                        "sale": 12,
                        "stock": 90,
                        "active": true,
                        "categories": [5],
                        "image": "https://upload.wikimedia.org/wikipedia/commons/8/8a/Logitech_Z623.jpg"
                    },
                    {
                        "productName": "Z207 2nd Gen",
                        "description": "Updated stereo speakers with improved design.",
                        "price": 44.99,
                        "sale": 12,
                        "stock": 160,
                        "active": true,
                        "categories": [5],
                        "image": "https://example.com/images/z207-2nd.jpg"
                    },
                    {
                        "productName": "S150 Portable Speakers",
                        "description": "Ultra-portable stereo speakers for on-the-go audio.",
                        "price": 19.99,
                        "sale": 0,
                        "stock": 250,
                        "active": true,
                        "categories": [5],
                        "image": "https://upload.wikimedia.org/wikipedia/commons/2/28/Logitech_S150.jpg"
                    },
                    {
                        "productName": "Z333 Multimedia Speakers",
                        "description": "Speakers with 100 W peak power and bass control.",
                        "price": 59.99,
                        "sale": 12,
                        "stock": 140,
                        "active": true,
                        "categories": [5],
                        "image": "https://upload.wikimedia.org/wikipedia/commons/5/52/Logitech_Z333.jpg"
                    }
                ]
            }
        })
    }catch(err){
        console.log("Error in upload" , err)
    }
}