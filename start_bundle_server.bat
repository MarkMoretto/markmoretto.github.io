@ECHO OFF

::https://www.ibm.com/support/knowledgecenter/SSMNED_5.0.0/com.ibm.apic.cmc.doc/task_apionprem_gernerate_self_signed_openSSL.html


::SET "bundle_cmd=bundle exec jekyll serve --watch --ssl-cert rootCA.pem --ssl-key rootCA.key"
SET "bundle_cmd=bundle exec jekyll serve --watch"

IF [%JUSTTERMINATE%] == [OKAY] (
    SET JUSTTERMINATE=
    %ComSpec% /c %bundle_cmd%
) ELSE (
    SET JUSTTERMINATE=OKAY
    CALL %0 %* <NUL
)
