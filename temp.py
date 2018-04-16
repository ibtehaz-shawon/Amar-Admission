def comma_semicolon_strip(meaning):
    """
    removes comma and semicolon from the meaning word
    :type meaning: str
    :return: list: list of meaning.
    """
    list = []
    word = ''
    counter = 0
    for everyChar in meaning:
        counter += 1
        if everyChar != ',' and everyChar != ';':
            word += everyChar
        else:
            list.append(word.strip())
            word = ''

        if counter == len(meaning):
            list.append(word.strip())
            word = ''
    return number_strip(list)


def number_strip(meaning):
    """
    strips numbers from the meaning array
    :param meaning: array
    :return: stripped list of meaning
    """
    integer_array = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    returnVal = []
    flag = False
    for everyWord in meaning:
        for everyChar in everyWord:
            if everyChar in integer_array:
                flag = True
                returnVal.append(everyWord[2:].capitalize().strip())

        if not flag:
            flag = False
            returnVal.append(everyWord.capitalize().strip())
    return returnVal


if __name__ == '__main__':
    try:
        import json
    except ImportError:
        raise ImportError("Couldn't import JSON! What's WRONG! (O_o)")
    jsonData = json.loads(open('WordData.json', 'r').read())
    if 'WordList' in jsonData:
        array = []
        for wordList in jsonData['WordList']:
            word = meaning = ''
            if 'Word' in wordList:
                word = wordList['Word']
            if 'Synonym' in wordList:
                meaning = []
                meaning = comma_semicolon_strip(wordList['Synonym'])
            newObject = {
                "Word": word.strip(),
                "Meaning": meaning,
                "fav": False,
            }
            array.append(newObject)
        newList = {"WordData": array}
        print(newList)

        file = open('testfile.json', 'w')
        file.write(str(newList))
        file.close()
    else:
        print("Nope (@_!)")
