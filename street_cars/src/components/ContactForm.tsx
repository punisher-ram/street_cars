import React from 'react';
import Image from 'next/image';
import styles from '../styles/ContactForm.module.css';

const ContactForm = () => {
  return (
    <section className={styles.formSection}>
      <div className={styles.formContainer}>
        <div className={styles.formContent}>
          <h2 className={styles.formTitle}>Contact us</h2>
          
          <form className={styles.form}>
            <div className={styles.formField}>
              <input type