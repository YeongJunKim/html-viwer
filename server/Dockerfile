FROM continuumio/miniconda3

ARG WORKSPACE=/root/workspace

COPY ./environment.yml /root
RUN conda env create -n html -f /root/environment.yml

SHELL ["conda", "run", "-n", "html", "/bin/bash", "-c"]

EXPOSE 80
WORKDIR $WORKSPACE

CMD ["bash", "entrypoint.sh"]
