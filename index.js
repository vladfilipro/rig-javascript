'use strict';

var _path = require( 'path' );
var fs = require( 'fs' );

var getTasks = function ( dir ) {
    var taskDir = _path.resolve( dir );
    var tasks = {};
    if ( fs.lstatSync( taskDir ).isDirectory() ) {
        var content;
        fs.readdirSync( taskDir ).forEach( function ( file ) {
            try {
                content = require( taskDir + '/' + file );
            } catch ( e ) {
                console.error( 'Cannot load file ', taskDir + '/' + file );
                content = false;
            }
            tasks[ file ] = content;
        } );
    }
    return tasks;
};

module.exports = {
    tasks: getTasks( './tasks' ),
    template: _path.resolve( './template' )
};
