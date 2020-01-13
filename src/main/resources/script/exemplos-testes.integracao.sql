DROP TABLE IF EXISTS public.conta_bancaria;
DROP SEQUENCE IF EXISTS public.conta_id_seq;

CREATE SEQUENCE IF NOT EXISTS public.conta_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;

CREATE TABLE public.conta_bancaria (
    id bigint NOT NULL DEFAULT nextval('public.conta_id_seq'::regclass),
    nome character varying(200),
    saldo numeric (10, 2),
    data_ultima_operacao timestamp,
    tipo_conta character varying(30)
);
