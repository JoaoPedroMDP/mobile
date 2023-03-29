FROM ubuntu:jammy

RUN wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

CMD ["/bin/bash -c which sleep"]