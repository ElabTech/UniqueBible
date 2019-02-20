function textName(name) {
    document.title = "_bibleinfo:::"+name;
}

function commentaryName(name) {
    document.title = "_commentaryinfo:::"+name;
}

function bookName(name) {
    var fullname = getFullBookName(name);
    document.title = "_info:::"+fullname;
}

function getFullBookName(abbreviation) {
    var fullBookNameObject = {
        bGen: "Genesis",
        bExod: "Exodus",
        bLev: "Leviticus",
        bNum: "Numbers",
        bDeut: "Deuteronomy",
        bJosh: "Joshua",
        bJudg: "Judges",
        bRuth: "Ruth",
        b1Sam: "1 Samuel",
        b2Sam: "2 Samuel",
        b1Kgs: "1 Kings",
        b2Kgs: "2 Kings",
        b1Chr: "1 Chronicles",
        b2Chr: "2 Chronicles",
        bEzra: "Ezra",
        bNeh: "Nehemiah",
        bEsth: "Esther",
        bJob: "Job",
        bPs: "Psalms",
        bProv: "Proverbs",
        bEccl: "Ecclesiastes",
        bSong: "Song of Songs",
        bIsa: "Isaiah",
        bJer: "Jeremiah",
        bLam: "Lamentations",
        bEzek: "Ezekiel",
        bDan: "Daniel",
        bHos: "Hosea",
        bJoel: "Joel",
        bAmos: "Amos",
        bObad: "Obadiah",
        bJonah: "Jonah",
        bMic: "Micah",
        bNah: "Nahum",
        bHab: "Habakkuk",
        bZeph: "Zephaniah",
        bHag: "Haggai",
        bZech: "Zechariah",
        bMal: "Malachi",
        bMatt: "Matthew",
        bMark: "Mark",
        bLuke: "Luke",
        bJohn: "John",
        bActs: "Acts",
        bRom: "Romans",
        b1Cor: "1 Corinthians",
        b2Cor: "2 Corinthians",
        bGal: "Galatians",
        bEph: "Ephesians",
        bPhil: "Philippians",
        bCol: "Colossians",
        b1Thess: "1 Thessalonians",
        b2Thess: "2 Thessalonians",
        b1Tim: "1 Timothy",
        b2Tim: "2 Timothy",
        bTitus: "Titus",
        bPhlm: "Philemon",
        bHeb: "Hebrews",
        bJas: "James",
        b1Pet: "1 Peter",
        b2Pet: "2 Peter",
        b1John: "1 John",
        b2John: "2 John",
        b3John: "3 John",
        bJude: "Jude",
        bRev: "Revelation",
        bBar: "Baruch",
        bAddDan: "Additions to Daniel",
        bPrAzar: "Prayer of Azariah",
        bBel: "Bel and the Dragon",
        bSgThree: "Song of the Three Young Men",
        bSus: "Susanna",
        b1Esd: "1 Esdras",
        b2Esd: "2 Esdras",
        bAddEsth: "Additions to Esther",
        bEpJer: "Epistle of Jeremiah",
        bJdt: "Judith",
        b1Macc: "1 Maccabees",
        b2Macc: "2 Maccabees",
        b3Macc: "3 Maccabees",
        b4Macc: "4 Maccabees",
        bPrMan: "Prayer of Manasseh",
        bPs151: "Psalm 151",
        bSir: "Sirach",
        bTob: "Tobit",
        bWis: "Wisdom of Solomon",
        bPssSol: "Psalms of Solomon",
        bOdes: "Odes",
        bEpLao: "Epistle to the Laodiceans"
    };
    return fullBookNameObject["b"+abbreviation];
}

function bcvToVerseRefence(b,c,v) {
    var SBLabb = ["", "Gen", "Exod", "Lev", "Num", "Deut", "Josh", "Judg", "Ruth", "1Sam", "2Sam", "1Kgs", "2Kgs", "1Chr", "2Chr", "Ezra", "Neh", "Esth", "Job", "Ps", "Prov", "Eccl", "Song", "Isa", "Jer", "Lam", "Ezek", "Dan", "Hos", "Joel", "Amos", "Obad", "Jonah", "Mic", "Nah", "Hab", "Zeph", "Hag", "Zech", "Mal", "Matt", "Mark", "Luke", "John", "Acts", "Rom", "1Cor", "2Cor", "Gal", "Eph", "Phil", "Col", "1Thess", "2Thess", "1Tim", "2Tim", "Titus", "Phlm", "Heb", "Jas", "1Pet", "2Pet", "1John", "2John", "3John", "Jude", "Rev"];
    var abb = SBLabb[b];
    return abb+" "+c+":"+v;
}

function mbbcvToVerseRefence(b,c,v) {
    SBLabb = {
        mb10: "Gen",
        mb20: "Exod",
        mb30: "Lev",
        mb40: "Num",
        mb50: "Deut",
        mb60: "Josh",
        mb61: "Josh",
        mb70: "Judg",
        mb71: "Judg",
        mb80: "Ruth",
        mb90: "1Sam",
        mb100: "2Sam",
        mb110: "1Kgs",
        mb120: "2Kgs",
        mb130: "1Chr",
        mb140: "2Chr",
        mb150: "Ezra",
        mb160: "Neh",
        mb190: "Esth",
        mb220: "Job",
        mb230: "Ps",
        mb240: "Prov",
        mb250: "Eccl",
        mb260: "Song",
        mb290: "Isa",
        mb300: "Jer",
        mb310: "Lam",
        mb330: "Ezek",
        mb340: "Dan",
        mb350: "Hos",
        mb360: "Joel",
        mb370: "Amos",
        mb380: "Obad",
        mb390: "Jonah",
        mb400: "Mic",
        mb410: "Nah",
        mb420: "Hab",
        mb430: "Zeph",
        mb440: "Hag",
        mb450: "Zech",
        mb460: "Mal",
        mb470: "Matt",
        mb480: "Mark",
        mb490: "Luke",
        mb500: "John",
        mb510: "Acts",
        mb520: "Rom",
        mb530: "1Cor",
        mb540: "2Cor",
        mb550: "Gal",
        mb560: "Eph",
        mb570: "Phil",
        mb580: "Col",
        mb590: "1Thess",
        mb600: "2Thess",
        mb610: "1Tim",
        mb620: "2Tim",
        mb630: "Titus",
        mb640: "Phlm",
        mb650: "Heb",
        mb660: "Jas",
        mb670: "1Pet",
        mb680: "2Pet",
        mb690: "1John",
        mb700: "2John",
        mb710: "3John",
        mb720: "Jude",
        mb730: "Rev",
        mb165: "1Esd",
        mb468: "2Esd",
        mb170: "Tob",
        mb171: "Tob",
        mb180: "Jdt",
        mb270: "Wis",
        mb280: "Sir",
        mb305: "PrAzar",
        mb315: "EpJer",
        mb320: "Bar",
        mb325: "Sus",
        mb326: "Sus",
        mb345: "Bel",
        mb346: "Bel",
        mb462: "1Macc",
        mb464: "2Macc",
        mb466: "3Macc",
        mb467: "4Macc",
        mb790: "PrMan",
        mb469: "PrMan",
        mb191: "AddEsth",
        mb231: "Ps151",
        mb232: "PssSol",
        mb235: "PssSol",
        mb800: "Odes",
        mb245: "Odes",
        mb341: "AddDan"
    };
    var abb = SBLabb["mb"+String(b)];
    return abb+" "+c+":"+v;
}

function tbcv(text,b,c,v) {
    var verseReference = bcvToVerseRefence(b,c,v);
    document.title = "BIBLE:::"+text+":::"+verseReference;
}

function bcv(b,c,v) {
    var verseReference = bcvToVerseRefence(b,c,v);
    document.title = "BIBLE:::"+activeText+":::"+verseReference;
}

function ctbcv(text,b,c,v) {
    var verseReference = bcvToVerseRefence(b,c,v);
    document.title = "COMMENTARY:::"+text+":::"+verseReference;
}

function cbcv(b,c,v) {
    var verseReference = bcvToVerseRefence(b,c,v);
    document.title = "COMMENTARY:::"+verseReference;
}

function cr(b,c,v) {
    var verseReference = mbbcvToVerseRefence(b,c,v);
    document.title = "BIBLE:::"+activeText+":::"+verseReference;
}

function hl1(id, cl, sn) {
    if (cl != '') {
        w3.addStyle('.c'+cl,'background-color','PAPAYAWHIP');
    }
    if (sn != '') {
        w3.addStyle('.G'+sn,'background-color','#E7EDFF');
    }
    if (id != '') {
        var focalElement = document.getElementById('w'+id);
        if (focalElement != null) {
            document.getElementById('w'+id).style.background='#C9CFFF';
        }
    }
    if (id != '') {
        document.title = "_instantWord:::"+activeB+":::"+id;
    }
}

function hl0(id, cl, sn) {
    if (cl != '') {
        w3.addStyle('.c'+cl,'background-color','');
    }
    if (sn != '') {
        w3.addStyle('.G'+sn,'background-color','');
    }
    if (id != '') {
        var focalElement = document.getElementById('w'+id);
        if (focalElement != null) {
            document.getElementById('w'+id).style.background='';
        }
    }
}

function w(book, wordID) {
    document.title = "WORD:::"+book+":::"+wordID;
}

function iw(book, wordID) {
    if (book != '' && wordID != '') {
        document.title = "_instantWord:::"+book+":::"+wordID;
    }
}

function qV(v) {
    document.title = "_instantVerse:::"+activeText+":::"+activeB+"."+activeC+"."+v;
}

function mV(v) {
    document.title = "_menu:::"+activeText+"."+activeB+"."+activeC+"."+v;
}

function luV(v) {
    var verseReference = bcvToVerseRefence(activeB,activeC,v);
    document.title = "BIBLE:::"+activeText+":::"+verseReference;
}

function luW(v,wid,cl,lex,morph,bdb) {
    document.title = "WORD:::"+activeB+":::"+wid;
}

function checkCompare() {
    versionList.forEach(addCompare);
    if (compareList.length == 0) {
        alert("No version is selected for comparison.");
    } else {
        var compareTexts = compareList.join("_");
        var verseReference = bcvToVerseRefence(activeB,activeC,activeV);
        document.title = "COMPARE:::"+activeText+"_"+compareTexts+":::"+verseReference;
    }
}

function addCompare(value) {
    var checkBox = document.getElementById("compare"+value);
    if (checkBox.checked == true){
        compareList.push(value);
    }
}

function checkParallel() {
    versionList.forEach(addParallel);
    if (parallelList.length == 0) {
        alert("No version is selected for parallel reading.");
    } else {
        var parallelTexts = parallelList.join("_");
        var verseReference = bcvToVerseRefence(activeB,activeC,activeV);
        document.title = "PARALLEL:::"+activeText+"_"+parallelTexts+":::"+verseReference;
    }
}

function addParallel(value) {
    var checkBox = document.getElementById("parallel"+value);
    if (checkBox.checked == true){
        parallelList.push(value);
    }
}

function searchLexicalEntry(lexicalEntry) {
    document.title = "LEMMA:::"+lexicalEntry;
}

function searchCode(lexicalEntry, morphologyCode) {
    document.title = "MORPHOLOGYCODE:::"+lexicalEntry+","+morphologyCode;
}

function searchMorphologyCode(lexicalEntry, morphologyCode) {
    document.title = "MORPHOLOGYCODE:::"+lexicalEntry+","+morphologyCode;
}

function searchMorphologyItem(lexicalEntry, morphologyItem) {
    document.title = "MORPHOLOGY:::LexicalEntry LIKE '%"+lexicalEntry+",%' AND Morphology LIKE '%"+morphologyItem+"%'";
}

function lexicon(module, entry) {
    document.title = "LEXICON:::"+module+":::"+entry;
}

function lex(entry) {
    document.title = "LEXICON:::"+entry;
}

function bdbid(entry) {
    document.title = "LEXICON:::BDB:::"+entry;
}

function lgntdf(entry) {
    document.title = "LEXICON:::LGNTDF:::"+entry;
}

function gk(entry) {
    document.title = "LEXICON:::gk"+entry;
}

function ln(entry) {
    document.title = "LEXICON:::ln"+entry;
}

function encyclopedia(module, entry) {
    document.title = "ENCYCLOPEDIA:::"+module+":::"+entry;
}

function cl(entry) {
	if (typeof activeB !== 'undefined' || activeB !== null) {
    	var bcv = activeB+'.'+activeC+'.'+activeV;
    	clause(bcv, entry);
	}
}

function clause(bcv, entry) {
    document.title = "CLAUSE:::"+bcv+":::"+entry;
}

function bibleDict(entry) {
    document.title = "DICTIONARY:::"+entry;
}

function exlbt(entry) {
    document.title = "TOPIC:::"+entry;
}

function searchBibleBook(text, book, searchString) {
    document.title = "ADVANCEDSEARCH:::"+text+":::Book = "+book+" AND Scripture LIKE '%"+searchString+"%'";
}

function iSearchBibleBook(text, book, searchString) {
    document.title = "ADVANCEDISEARCH:::"+text+":::Book = "+book+" AND Scripture LIKE '%"+searchString+"%'";
}

function exlbl(entry) {
    document.title = "EXLB:::exlbl:::"+entry;
}

function exlbp(entry) {
    document.title = "EXLB:::exlbp:::"+entry;
}

function exlbt(entry) {
    document.title = "EXLB:::exlbt:::"+entry;
}

function openImage(module, entry) {
    document.title = "_image:::"+module+":::"+entry;
    document.title = "UniqueBible.app";
}

function searchResource(tool) {
    if (tool != "") {
        document.title = "_command:::SEARCHTOOL:::"+tool+":::";
    }
}

function searchDict(module) {
    searchResource(module);
}

function searchDictionary(module) {
    searchResource(module);
}

function searchEncyc(module) {
    searchResource(module);
}

function searchEncyclopedia(module) {
    searchResource(module);
}

function searchItem(module, entry) {
    document.title = "SEARCHTOOL:::"+module+":::"+entry;
}

function searchEntry(module, entry) {
    document.title = "SEARCHTOOL:::"+module+":::"+entry;
}

function rmac(entry) {
    searchItem("mRMAC", entry);
}

function etcbcmorph(entry) {
    searchItem("mETCBC", entry);
}

function lxxmorph(entry) {
    searchItem("mLXX", entry);
}

function listBookTopic(module) {
    document.title = "_book:::"+module;
}

function openHistoryRecord(recordNo) {
    document.title = "_historyrecord:::"+recordNo;
}

function openExternalRecord(recordNo) {
    document.title = "_openfile:::"+recordNo;
}

function editExternalRecord(recordNo) {
    document.title = "_editfile:::"+recordNo;
}

function website(link) {
    document.title = "_website:::"+link;
}

function searchThirdDictionary(module, entry) {
    document.title = "SEARCHTHIRDDICTIONARY:::"+module+":::"+entry;
}

function openThirdDictionary(module, entry) {
    document.title = "THIRDDICTIONARY:::"+module+":::"+entry;
}

function uba(file) {
    document.title = "_uba:::"+file;
}

function bn(b, c, v, n) {
    document.title = "_biblenote:::"+b+"."+c+"."+v+"."+n;
}