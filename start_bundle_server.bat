@ECHO OFF


SET "bundle_cmd=bundle exec jekyll serve --watch"


IF [%JUSTTERMINATE%] == [OKAY] (
    SET JUSTTERMINATE=
    %ComSpec% /c %bundle_cmd%
) ELSE (
    SET JUSTTERMINATE=OKAY
    CALL %0 %* <NUL
)
