--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Homebrew)
-- Dumped by pg_dump version 14.5 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: favorites; Type: TABLE; Schema: public; Owner: tpl522_13
--

CREATE TABLE public.favorites (
    id integer NOT NULL,
    skin_id integer,
    user_id integer
);


ALTER TABLE public.favorites OWNER TO tpl522_13;

--
-- Name: favorites_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl522_13
--

ALTER TABLE public.favorites ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.favorites_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: skin_condition; Type: TABLE; Schema: public; Owner: tpl522_13
--

CREATE TABLE public.skin_condition (
    id integer NOT NULL,
    photo text NOT NULL,
    condition_name text NOT NULL,
    symptoms text NOT NULL
);


ALTER TABLE public.skin_condition OWNER TO tpl522_13;

--
-- Name: skin_condition_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl522_13
--

ALTER TABLE public.skin_condition ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.skin_condition_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: user_accounts; Type: TABLE; Schema: public; Owner: tpl522_13
--

CREATE TABLE public.user_accounts (
    id integer NOT NULL,
    email text NOT NULL,
    name text NOT NULL,
    picture text NOT NULL,
    sub text NOT NULL
);


ALTER TABLE public.user_accounts OWNER TO tpl522_13;

--
-- Name: user_accounts_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl522_13
--

ALTER TABLE public.user_accounts ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.user_accounts_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Data for Name: favorites; Type: TABLE DATA; Schema: public; Owner: tpl522_13
--



--
-- Data for Name: skin_condition; Type: TABLE DATA; Schema: public; Owner: tpl522_13
--

INSERT INTO public.skin_condition (id, photo, condition_name, symptoms) OVERRIDING SYSTEM VALUE VALUES (1, 'https://images.squarespace-cdn.com/content/v1/5ef2664ee62f61085293e858/1611501949126-LJ1XI7A79TPXUA0SNTMJ/P1150191-447medical%2C+tinea+versicolor.jpg?format=2500w', 'Tinea Versicolor', 'Patches of skin discoloration, usually on the back, chest, neck and upper arms, which may appear lighter or darker than usual
Mild itching
Scaling');
INSERT INTO public.skin_condition (id, photo, condition_name, symptoms) OVERRIDING SYSTEM VALUE VALUES (3, 'https://images.squarespace-cdn.com/content/v1/5ef2664ee62f61085293e858/1605373747699-U2MDPBO7S3AV97C1PKNT/P1110243-380medical%2C+papular+urticaria.jpg?format=750w', 'Urticaria/Hives', 'Hives are red, itchy welts that result from a skin reaction.');
INSERT INTO public.skin_condition (id, photo, condition_name, symptoms) OVERRIDING SYSTEM VALUE VALUES (4, 'https://images.squarespace-cdn.com/content/v1/5ef2664ee62f61085293e858/1611500281810-7OCX7N3OIP1JPR9DS70N/P1320824-81+measles.jpg?format=750w', 'Measels', 'In darker skin, measles appears to look hyperpigmented rather than erythematous looking. These could easily be mistaken for petechiae.');


--
-- Data for Name: user_accounts; Type: TABLE DATA; Schema: public; Owner: tpl522_13
--

INSERT INTO public.user_accounts (id, email, name, picture, sub) OVERRIDING SYSTEM VALUE VALUES (2, 'berlinelucien1@gmail.com', 'Berlin', 'https://lh3.googleusercontent.com/a/ALm5wu0KhyTDymvBXenbu_72noYtaqDIqFfAmufU7xq1=s96-c', 'google-oauth2|107800354830228326987');


--
-- Name: favorites_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl522_13
--

SELECT pg_catalog.setval('public.favorites_id_seq', 1, false);


--
-- Name: skin_condition_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl522_13
--

SELECT pg_catalog.setval('public.skin_condition_id_seq', 4, true);


--
-- Name: user_accounts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl522_13
--

SELECT pg_catalog.setval('public.user_accounts_id_seq', 2, true);


--
-- Name: favorites favorites_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl522_13
--

ALTER TABLE ONLY public.favorites
    ADD CONSTRAINT favorites_pkey PRIMARY KEY (id);


--
-- Name: skin_condition skin_condition_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl522_13
--

ALTER TABLE ONLY public.skin_condition
    ADD CONSTRAINT skin_condition_pkey PRIMARY KEY (id);


--
-- Name: user_accounts user_accounts_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl522_13
--

ALTER TABLE ONLY public.user_accounts
    ADD CONSTRAINT user_accounts_pkey PRIMARY KEY (id);


--
-- Name: favorites favorites_skin_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: tpl522_13
--

ALTER TABLE ONLY public.favorites
    ADD CONSTRAINT favorites_skin_id_fkey FOREIGN KEY (skin_id) REFERENCES public.skin_condition(id);


--
-- Name: favorites favorites_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: tpl522_13
--

ALTER TABLE ONLY public.favorites
    ADD CONSTRAINT favorites_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.user_accounts(id);


--
-- PostgreSQL database dump complete
--

