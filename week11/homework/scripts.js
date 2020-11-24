    let categoryChange = function(){
        let categoryValue = document.getElementById("category").value;
        let subcategory = document.getElementById("subcategory");
        subcategory.innerHTML="";
        let option0 = document.createElement("option");
        option0.value = "";
        option0.innerText = "Select One";
        subcategory.add(option0);
        
        if(categoryValue == "cat"){
            let option1 = document.createElement("option");
            option1.value = "OTB";
            option1.innerText = "Orange Tabby";
            subcategory.add(option1);

            let option2 = document.createElement("option");
            option2.value = "SIM";
            option2.innerText = "Siamese";
            subcategory.add(option2);
        }
        if(categoryValue == "dog"){
            let option1 = document.createElement("option");
            option1.value = "GDR";
            option1.innerText = "Golden Retriever";
            subcategory.add(option1);

            let option2 = document.createElement("option");
            option2.value = "PUG";
            option2.innerText = "Pug";
            subcategory.add(option2);
        }
        if(categoryValue == "bird"){
            let option1 = document.createElement("option");
            option1.value = "PRT";
            option1.innerText = "Parrot";
            subcategory.add(option1);

            let option2 = document.createElement("option");
            option2.value = "EGL";
            option2.innerText = "Eagle";
            subcategory.add(option2);
        }
    }
    let subcategoryChange = function(){
        let subcategory = document.getElementById("subcategory");
        let subcategoryValue = subcategory.value; 
        if(subcategoryValue == "OTB"){
            images = [
                "./images/cat4.png",
                "./images/cat5.png",
                "./images/cat6.png"
            ]
        }
        if(subcategoryValue == "SIM"){
            images = [
                "./images/cat7.png",
                "./images/cat8.png",
                "./images/cat9.png"
            ]
        }
        if(subcategoryValue == "GDR"){
            images = [
                "./images/dog4.png",
                "./images/dog5.png",
                "./images/dog6.png"
            ]
        }
        if(subcategoryValue == "PUG"){
            images = [
                "./images/dog7.png",
                "./images/dog8.png",
                "./images/dog9.png"
            ]
        }
        if(subcategoryValue == "PRT"){
            images = [
                "./images/bird4.png",
                "./images/bird5.png",
                "./images/bird6.png"
            ]
        }
        if(subcategoryValue == "EGL"){
            images = [
                "./images/bird7.png",
                "./images/bird8.png",
                "./images/bird9.png"
            ]
        }
        if(subcategoryValue == ""){
            images = [
                "./images/placeholder.png",
                "./images/placeholder.png",
                "./images/placeholder.png"
            ]
        }
        counter = 0; 
        imgChange();
    }    
    
    let category = document.getElementById("category");
    category.addEventListener("change", categoryChange)    
    
    let subcat = document.getElementById("subcategory");
    subcat.addEventListener("change", subcategoryChange)
    
    let carousel = document.getElementById("carousel");
    let carouselIMG = document.getElementById("carouselIMG");

    let images = [
        "./images/placeholder.png",
        "./images/placeholder.png",
        "./images/placeholder.png"
    ]
    let counter = 0;


    let imgChange = function(){
        counter++;
        if(counter === 3) {counter = 0}
        carouselIMG.src = images[counter];
    }

    window.addEventListener("load", function(){
        setInterval(imgChange, 3000);
    })