/**
 * Created by mathi on 08/03/2018.
 */

transformTranslateWords();

// In the original markdown file there are words written in brackets like that : [word], they are translations of words in the text
// That function replaces the brackets with parenthesis and add a span around it in order to display it in a different color
function transformTranslateWords() {

    console.log('hello');

    let paragraphs = document.querySelectorAll('p');
    console.log(paragraphs);


    for (let i=0; i<paragraphs.length; i++) {

        let translatedWord = new RegExp(/\[<em>([\w ]+)<\/em>]/, 'gi'); // a translated word has the form '[<em>' + any number of letter, tiret or space + '</em>]'

        if (translatedWord.exec(paragraphs[i].innerHTML) !== null) {
            translatedWord = new RegExp(/\[<em>([\w ]+)<\/em>]/, 'gi'); // a translated word has the form '[<em>' + any number of letter, tiret or space + '</em>]'
            let word = translatedWord.exec(paragraphs[i].innerHTML);
            console.log(word[0]);

            // Ici il faut remplacer word[0] par <span class="translatedWord"> + word[0] + </span>
            // Probablement avec la fonction replace plutôt que exec, voir https://stackoverflow.com/questions/23833597/javascript-regex-exec-and-replace
            // Attention il y a un genre de bug avec exec, une fois qu'on a utilisé exec() il faut toujours réinitialiser la regex
            // Voir : https://stackoverflow.com/questions/4724701/regexp-exec-returns-null-sporadically
        }

    }


}