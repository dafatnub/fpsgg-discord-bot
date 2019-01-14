/*
 * Argument Processor, VinforLab Team's Technology
 *
 * Copyright 2017-2019, VinforLab Team
 *
 * Licensed with MIT license:
 * https://opensource.org/licenses/MIT
 *
 *  Usage:
 *
 *  SplitArguments -->
 *      SplitArguments ('!cmd arg0 arg1 arg2', 1) // ---> output: ['cmd', 'arg0', 'arg1', 'arg2' ]
 *
 *  SplitQuoteArguments -->
 *       Same as SplitArguments, but will split arguments inside quote, example "arg1"
 *       use RemoveArgumentQuotes for remove the argument quotes.
 *
 *
 */
const Discord = require("discord.js");

var ArgumentProcessor = new function(){

    this.SplitArguments = (string, ignoreLength) => {
        var matchSpaceArgs = /\s+/g;
        var arguments = string.slice( ignoreLength).split(matchSpaceArgs);
        return arguments;
    }

    this.SplitQuoteArguments = ( string, ignoreLength ) => {
        var matchQuoteArgs = /\".*?\"/g;
        return string.slice(ignoreLength).match(matchQuoteArgs);
    }

    this.RemoveArgumentQuotes = string => {
        //new RegExp( '\"', 'g')
        console.log('Removing quotes at: ' + string.replace( /\"/g, '' ) );
        return string.replace( /\"/g, '' );
    }

}


module.exports.ArgumentProcessor = ArgumentProcessor;
