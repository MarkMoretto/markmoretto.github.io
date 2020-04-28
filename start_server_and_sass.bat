@ECHO off


SET "sass_cmd=sass --watch _sass:assets\css"
SET "bundle_cmd=bundle exec jekyll serve --watch"

::START /min %ComSpec% /c start_sass.bat && START /min %ComSpec% /c %bundle_cmd%

IF [%JUSTTERMINATE%] == [OKAY] (
    SET JUSTTERMINATE=
    START /min %ComSpec% /c "%sass_cmd%" && START /min %ComSpec% /c %bundle_cmd%
) ELSE (
    SET JUSTTERMINATE=OKAY
    CALL %0 %* <NUL
)