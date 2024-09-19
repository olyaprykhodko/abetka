--
-- PostgreSQL database dump
--

-- Dumped from database version 16.4
-- Dumped by pg_dump version 16.4

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

--
-- Name: enum_Users_role; Type: TYPE; Schema: public; Owner: user
--

CREATE TYPE public."enum_Users_role" AS ENUM (
    'student',
    'teacher'
);


ALTER TYPE public."enum_Users_role" OWNER TO "user";

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Bookings; Type: TABLE; Schema: public; Owner: user
--

CREATE TABLE public."Bookings" (
    id integer NOT NULL,
    "studentId" integer NOT NULL,
    "teacherId" integer NOT NULL,
    "subjectId" integer NOT NULL,
    date timestamp with time zone NOT NULL,
    confirmed boolean DEFAULT false NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Bookings" OWNER TO "user";

--
-- Name: Bookings_id_seq; Type: SEQUENCE; Schema: public; Owner: user
--

CREATE SEQUENCE public."Bookings_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Bookings_id_seq" OWNER TO "user";

--
-- Name: Bookings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: user
--

ALTER SEQUENCE public."Bookings_id_seq" OWNED BY public."Bookings".id;


--
-- Name: Payments; Type: TABLE; Schema: public; Owner: user
--

CREATE TABLE public."Payments" (
    id integer NOT NULL,
    "bookingId" integer NOT NULL,
    amount double precision NOT NULL,
    status character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Payments" OWNER TO "user";

--
-- Name: Payments_id_seq; Type: SEQUENCE; Schema: public; Owner: user
--

CREATE SEQUENCE public."Payments_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Payments_id_seq" OWNER TO "user";

--
-- Name: Payments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: user
--

ALTER SEQUENCE public."Payments_id_seq" OWNED BY public."Payments".id;


--
-- Name: Reviews; Type: TABLE; Schema: public; Owner: user
--

CREATE TABLE public."Reviews" (
    id integer NOT NULL,
    "studentId" integer NOT NULL,
    "teacherId" integer NOT NULL,
    content text NOT NULL,
    rating integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Reviews" OWNER TO "user";

--
-- Name: Reviews_id_seq; Type: SEQUENCE; Schema: public; Owner: user
--

CREATE SEQUENCE public."Reviews_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Reviews_id_seq" OWNER TO "user";

--
-- Name: Reviews_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: user
--

ALTER SEQUENCE public."Reviews_id_seq" OWNED BY public."Reviews".id;


--
-- Name: Schedules; Type: TABLE; Schema: public; Owner: user
--

CREATE TABLE public."Schedules" (
    id integer NOT NULL,
    "teacherId" integer NOT NULL,
    "availableDate" timestamp with time zone NOT NULL,
    "timeSlot" character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Schedules" OWNER TO "user";

--
-- Name: Schedules_id_seq; Type: SEQUENCE; Schema: public; Owner: user
--

CREATE SEQUENCE public."Schedules_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Schedules_id_seq" OWNER TO "user";

--
-- Name: Schedules_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: user
--

ALTER SEQUENCE public."Schedules_id_seq" OWNED BY public."Schedules".id;


--
-- Name: Subjects; Type: TABLE; Schema: public; Owner: user
--

CREATE TABLE public."Subjects" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    description character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Subjects" OWNER TO "user";

--
-- Name: Subjects_id_seq; Type: SEQUENCE; Schema: public; Owner: user
--

CREATE SEQUENCE public."Subjects_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Subjects_id_seq" OWNER TO "user";

--
-- Name: Subjects_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: user
--

ALTER SEQUENCE public."Subjects_id_seq" OWNED BY public."Subjects".id;


--
-- Name: Teachers; Type: TABLE; Schema: public; Owner: user
--

CREATE TABLE public."Teachers" (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    name character varying(255) NOT NULL,
    bio character varying(255),
    "experienceYears" character varying(255),
    password character varying(255) NOT NULL,
    role character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Teachers" OWNER TO "user";

--
-- Name: Teachers_id_seq; Type: SEQUENCE; Schema: public; Owner: user
--

CREATE SEQUENCE public."Teachers_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Teachers_id_seq" OWNER TO "user";

--
-- Name: Teachers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: user
--

ALTER SEQUENCE public."Teachers_id_seq" OWNED BY public."Teachers".id;


--
-- Name: Users; Type: TABLE; Schema: public; Owner: user
--

CREATE TABLE public."Users" (
    id integer NOT NULL,
    name character varying(255),
    username character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    role public."enum_Users_role" NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Users" OWNER TO "user";

--
-- Name: Users_id_seq; Type: SEQUENCE; Schema: public; Owner: user
--

CREATE SEQUENCE public."Users_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Users_id_seq" OWNER TO "user";

--
-- Name: Users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: user
--

ALTER SEQUENCE public."Users_id_seq" OWNED BY public."Users".id;


--
-- Name: Bookings id; Type: DEFAULT; Schema: public; Owner: user
--

ALTER TABLE ONLY public."Bookings" ALTER COLUMN id SET DEFAULT nextval('public."Bookings_id_seq"'::regclass);


--
-- Name: Payments id; Type: DEFAULT; Schema: public; Owner: user
--

ALTER TABLE ONLY public."Payments" ALTER COLUMN id SET DEFAULT nextval('public."Payments_id_seq"'::regclass);


--
-- Name: Reviews id; Type: DEFAULT; Schema: public; Owner: user
--

ALTER TABLE ONLY public."Reviews" ALTER COLUMN id SET DEFAULT nextval('public."Reviews_id_seq"'::regclass);


--
-- Name: Schedules id; Type: DEFAULT; Schema: public; Owner: user
--

ALTER TABLE ONLY public."Schedules" ALTER COLUMN id SET DEFAULT nextval('public."Schedules_id_seq"'::regclass);


--
-- Name: Subjects id; Type: DEFAULT; Schema: public; Owner: user
--

ALTER TABLE ONLY public."Subjects" ALTER COLUMN id SET DEFAULT nextval('public."Subjects_id_seq"'::regclass);


--
-- Name: Teachers id; Type: DEFAULT; Schema: public; Owner: user
--

ALTER TABLE ONLY public."Teachers" ALTER COLUMN id SET DEFAULT nextval('public."Teachers_id_seq"'::regclass);


--
-- Name: Users id; Type: DEFAULT; Schema: public; Owner: user
--

ALTER TABLE ONLY public."Users" ALTER COLUMN id SET DEFAULT nextval('public."Users_id_seq"'::regclass);


--
-- Data for Name: Bookings; Type: TABLE DATA; Schema: public; Owner: user
--

COPY public."Bookings" (id, "studentId", "teacherId", "subjectId", date, confirmed, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: Payments; Type: TABLE DATA; Schema: public; Owner: user
--

COPY public."Payments" (id, "bookingId", amount, status, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: Reviews; Type: TABLE DATA; Schema: public; Owner: user
--

COPY public."Reviews" (id, "studentId", "teacherId", content, rating, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: Schedules; Type: TABLE DATA; Schema: public; Owner: user
--

COPY public."Schedules" (id, "teacherId", "availableDate", "timeSlot", "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: Subjects; Type: TABLE DATA; Schema: public; Owner: user
--

COPY public."Subjects" (id, name, description, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: Teachers; Type: TABLE DATA; Schema: public; Owner: user
--

COPY public."Teachers" (id, "userId", name, bio, "experienceYears", password, role, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: Users; Type: TABLE DATA; Schema: public; Owner: user
--

COPY public."Users" (id, name, username, email, password, role, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Name: Bookings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: user
--

SELECT pg_catalog.setval('public."Bookings_id_seq"', 1, false);


--
-- Name: Payments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: user
--

SELECT pg_catalog.setval('public."Payments_id_seq"', 1, false);


--
-- Name: Reviews_id_seq; Type: SEQUENCE SET; Schema: public; Owner: user
--

SELECT pg_catalog.setval('public."Reviews_id_seq"', 1, false);


--
-- Name: Schedules_id_seq; Type: SEQUENCE SET; Schema: public; Owner: user
--

SELECT pg_catalog.setval('public."Schedules_id_seq"', 1, false);


--
-- Name: Subjects_id_seq; Type: SEQUENCE SET; Schema: public; Owner: user
--

SELECT pg_catalog.setval('public."Subjects_id_seq"', 1, false);


--
-- Name: Teachers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: user
--

SELECT pg_catalog.setval('public."Teachers_id_seq"', 1, false);


--
-- Name: Users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: user
--

SELECT pg_catalog.setval('public."Users_id_seq"', 1, false);


--
-- Name: Bookings Bookings_pkey; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public."Bookings"
    ADD CONSTRAINT "Bookings_pkey" PRIMARY KEY (id);


--
-- Name: Payments Payments_pkey; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public."Payments"
    ADD CONSTRAINT "Payments_pkey" PRIMARY KEY (id);


--
-- Name: Reviews Reviews_pkey; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public."Reviews"
    ADD CONSTRAINT "Reviews_pkey" PRIMARY KEY (id);


--
-- Name: Schedules Schedules_pkey; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public."Schedules"
    ADD CONSTRAINT "Schedules_pkey" PRIMARY KEY (id);


--
-- Name: Subjects Subjects_pkey; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public."Subjects"
    ADD CONSTRAINT "Subjects_pkey" PRIMARY KEY (id);


--
-- Name: Teachers Teachers_pkey; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public."Teachers"
    ADD CONSTRAINT "Teachers_pkey" PRIMARY KEY (id);


--
-- Name: Users Users_email_key; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key" UNIQUE (email);


--
-- Name: Users Users_pkey; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

