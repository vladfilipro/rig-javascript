/**
 * This task will copy the templates to the current project
 *
 * uses the following parameters:
 *     config.path {String}
 */

'use strict';

var gulp = require( 'gulp' );
var fs = require( 'fs' );
var copyDir = require( 'copy-dir' );
var TEMPLATE_DIR = __dirname + '/../template';

module.exports = function installRigTaskFunc( name, config ) {
    gulp.task( name, config.dependency, function() {

        return copyDir( TEMPLATE_DIR, config.path, function( _stat, _path ) {
            if ( _stat === 'file' ) {
                console.log( 'copying file ', _path );
            }
            return true;
        }, function() {
            console.log( 'Files copied.' );
            console.log( 'Renaming copied files.' );
            var pattern = new RegExp( '^_', 'gi' );
            fs.readdirSync( config.path ).forEach( function( file ) {
                try {
                    if ( pattern.test( file ) ) {
                        fs.renameSync( config.path + '/' + file, config.path + '/' + file.replace( pattern, '.' ) );
                        console.log( 'Renaming ' + file + ' to ' + file.replace( pattern, '.' ) );
                    }
                } catch ( e ) {
                    console.log( 'Error renaming file ', file, ' ; ', e );
                }
            } );
        } );

    } );
};
