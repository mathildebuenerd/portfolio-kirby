/**
 * Created by mathi on 25/02/2018.
 */


// createSliders();

function createSliders() {

    let controlPanel = document.createElement('section');
    controlPanel.setAttribute('id', 'control-panel');
    document.body.appendChild(controlPanel);

    // we store here the properties we want to control
    // the key is the kind of property, the value is the range
    // "property":[minValue, maxValue, defaultValue]
    let listOfSliders = {
        "fontSize":{
            "propertyName":"Taille du texte",
            "minValue":10,
            "maxValue":25,
            "defaultValue":14
        },
         "fontColor":{
             "propertyName":"Couleur du texte",
             "minValue":0,
             "maxValue":150,
             "defaultValue":50
         },
        "lineLength":{
            "propertyName":"Longueur de ligne",
            "minValue":200,
            "maxValue":900,
            "defaultValue":600
        }
    };

    let sliderLength = 100; // en changeant cette valeur ça ne change pas la longueur du slider, qui est inscrite dans le fichier css, j'ai juste créé la variable au cas où on en ai besoin après
    let numberOfSliders = Object.keys(listOfSliders).length;


    console.log(Object.keys(listOfSliders)[0]);

    for (let i=0; i<numberOfSliders; i++) {
        // We create a block that will include the property's name and the slider itself
        let blockSlider = document.createElement('div');
        blockSlider.setAttribute('class', 'blockSlider');
        blockSlider.setAttribute('id', Object.keys(listOfSliders)[i]); // to access the object's keys

        let slider = document.createElement('div');
        slider.setAttribute('class', 'slider');

        let propertyName = Object.values(listOfSliders)[i]['propertyName'];

        console.log(Object.values(listOfSliders)[i]);
        console.log("property " + propertyName);

        let propertyNameSpan = document.createElement('span');
        propertyNameSpan.setAttribute('class', 'propertyName');
        propertyNameSpan.textContent = propertyName;

        blockSlider.appendChild(propertyNameSpan);
        blockSlider.appendChild(slider);
        document.querySelector('#control-panel').appendChild(blockSlider);
    }

    // let promesse = setupSliders();
    //
    // //    Setup jquery UI
    // function setupSliders() {
    //     $( function() {
    //         $( ".slider" ).slider();
    //     } );
    // }
    //
    // promesse.then(maPromesse).catch( () => {
    //     console.log('erreur eeeee');
    // });
    //
    // function maPromesse() {
    //     console.log('success');
    //     console.log(document.querySelectorAll('.ui-slider-handle'));
    // }
    //
    // function failure() {
    //     console.log('failure');
    // }





    for (let i=0; i<numberOfSliders; i++) {

        let slider = document.querySelectorAll('.slider');

        let minValue = Object.values(listOfSliders)[i]['minValue'];
        let maxValue = Object.values(listOfSliders)[i]['maxValue'];
        let defaultValue = Object.values(listOfSliders)[i]['defaultValue'];

        let handlePosition = (defaultValue - minValue) * 100 / maxValue - minValue;



        // document.querySelectorAll('.ui-slider-handle')[i].style.left = handlePosition + "%";

    }


}




/*******

 Setup jquery UI

 *******/



