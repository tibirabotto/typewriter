

  const hello_timeout = (wordArray) => {
    wordArray = wordArray;

    let index = 0;
    let time = 0;
    const word = () => {
        for (const char of wordArray) {
            if (index < wordArray.length) {
                console.log(`'${char}' => ${time} ms`) 
                index++;
                setTimeout(word, time)
                time += 50
            }           
        }
    }
    setTimeout(word, time)

}

hello_timeout("hello there from lighthouse labs");