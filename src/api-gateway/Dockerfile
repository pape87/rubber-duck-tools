FROM devopsfaith/krakend as builder

ARG ENV=dev

COPY krakend.tmpl .
COPY config .

RUN FC_ENABLE=1 \
    FC_OUT=/tmp/krakend.json \
    FC_PARTIALS="/etc/krakend/partials" \
    FC_SETTINGS="/etc/krakend/settings/dev" \
    FC_TEMPLATES="/etc/krakend/templates" \
    krakend check -d -t -c krakend.tmpl

FROM devopsfaith/krakend
COPY --from=builder --chown=krakend /tmp/krakend.json .
