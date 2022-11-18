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
-- Name: migrations; Type: TABLE; Schema: public; Owner: tpl522_13
--

CREATE TABLE public.migrations (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    run_on timestamp without time zone NOT NULL
);


ALTER TABLE public.migrations OWNER TO tpl522_13;

--
-- Name: migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl522_13
--

CREATE SEQUENCE public.migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.migrations_id_seq OWNER TO tpl522_13;

--
-- Name: migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tpl522_13
--

ALTER SEQUENCE public.migrations_id_seq OWNED BY public.migrations.id;


--
-- Name: resources; Type: TABLE; Schema: public; Owner: tpl522_13
--

CREATE TABLE public.resources (
    id integer NOT NULL,
    name text,
    weblink text
);


ALTER TABLE public.resources OWNER TO tpl522_13;

--
-- Name: resources_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl522_13
--

ALTER TABLE public.resources ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.resources_id_seq
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
-- Name: migrations id; Type: DEFAULT; Schema: public; Owner: tpl522_13
--

ALTER TABLE ONLY public.migrations ALTER COLUMN id SET DEFAULT nextval('public.migrations_id_seq'::regclass);


--
-- Data for Name: favorites; Type: TABLE DATA; Schema: public; Owner: tpl522_13
--

COPY public.favorites (id, skin_id, user_id) FROM stdin;
\.


--
-- Data for Name: migrations; Type: TABLE DATA; Schema: public; Owner: tpl522_13
--

COPY public.migrations (id, name, run_on) FROM stdin;
\.


--
-- Data for Name: resources; Type: TABLE DATA; Schema: public; Owner: tpl522_13
--

COPY public.resources (id, name, weblink) FROM stdin;
1	Atlas of Dermatological Conditions in Populations of African Ancestry 	https://link.springer.com/book/10.1007/978-3-030-72617-1
2	Mind the Gap: a handbook of clinical signs on black and brown skin. 	https://www.blackandbrownskin.co.uk/mindthegap
3	Dark Skin Dermatology Color Atlas: Clinical Dermatology	https://www.amazon.com/Dark-Skin-Dermatology-Color-Atlas/dp/1477653899
4	VisualDx: Essential Dermatology in Pigmented Skin (VisualDx: The Modern Library of Visual Medicine)	https://www.amazon.com/VisualDx-Essential-Dermatology-Pigmented-Medicine-ebook/dp/B006VY6PY4
5	Colour Atlas of Tropical Dermatology and Venerology	https://www.amazon.com/Colour-Atlas-Tropical-Dermatology-Venerology/dp/3642762026
6	Taylor and Kelly's Dermatology for Skin of Color 	https://www.amazon.com/Taylor-Kellys-Dermatology-Skin-Color/dp/0071805524
\.


--
-- Data for Name: skin_condition; Type: TABLE DATA; Schema: public; Owner: tpl522_13
--

COPY public.skin_condition (id, photo, condition_name, symptoms) FROM stdin;
1	https://images.squarespace-cdn.com/content/v1/5ef2664ee62f61085293e858/1611501949126-LJ1XI7A79TPXUA0SNTMJ/P1150191-447medical%2C+tinea+versicolor.jpg?format=2500w	Tinea Versicolor	Patches of skin discoloration, usually on the back, chest, neck and upper arms, which may appear lighter or darker than usual\nMild itching\nScaling
3	https://images.squarespace-cdn.com/content/v1/5ef2664ee62f61085293e858/1605373747699-U2MDPBO7S3AV97C1PKNT/P1110243-380medical%2C+papular+urticaria.jpg?format=750w	Urticaria/Hives	Hives are red, itchy welts that result from a skin reaction.
4	https://images.squarespace-cdn.com/content/v1/5ef2664ee62f61085293e858/1611500281810-7OCX7N3OIP1JPR9DS70N/P1320824-81+measles.jpg?format=750w	Measels	In darker skin, measles appears to look hyperpigmented rather than erythematous looking. These could easily be mistaken for petechiae.
5	data:image/jpeg;base64,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	Eczema	Eczema flare-ups tends to look darker brown, purple or ashen grey in color. 
6	https://www.nidirect.gov.uk/sites/default/files/styles/nigov_float_x1/public/images/A-Z_raynauds-3_22012020.jpg?itok=R7vBzFEX	Raynaud's Syndrome	Raynaud's may make your fingertips appear paler if you have dark skin. African Americans may not easily recognize it. The blue, pale fingers associated with cold-induced Raynaud's are often not as dramatic as in Caucasians. 
7	https://brownskinmatters.com/wp-content/uploads/2021/06/RINGWORM-black3.jpeg	Ringworm	On darker skin, the ringworm rash is often gray or brown. It often causes a round or ring-shaped rash with a raised border.
\.


--
-- Data for Name: user_accounts; Type: TABLE DATA; Schema: public; Owner: tpl522_13
--

COPY public.user_accounts (id, email, name, picture, sub) FROM stdin;
2	berlinelucien1@gmail.com	Berlin	https://lh3.googleusercontent.com/a/ALm5wu0KhyTDymvBXenbu_72noYtaqDIqFfAmufU7xq1=s96-c	google-oauth2|107800354830228326987
\.


--
-- Name: favorites_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl522_13
--

SELECT pg_catalog.setval('public.favorites_id_seq', 1, false);


--
-- Name: migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl522_13
--

SELECT pg_catalog.setval('public.migrations_id_seq', 1, false);


--
-- Name: resources_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl522_13
--

SELECT pg_catalog.setval('public.resources_id_seq', 6, true);


--
-- Name: skin_condition_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl522_13
--

SELECT pg_catalog.setval('public.skin_condition_id_seq', 7, true);


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
-- Name: migrations migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl522_13
--

ALTER TABLE ONLY public.migrations
    ADD CONSTRAINT migrations_pkey PRIMARY KEY (id);


--
-- Name: resources resources_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl522_13
--

ALTER TABLE ONLY public.resources
    ADD CONSTRAINT resources_pkey PRIMARY KEY (id);


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

