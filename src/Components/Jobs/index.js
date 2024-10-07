.jobs-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000000;
  background-size: cover;
  min-height: 90vh;
}

.jobs-content {
  display: flex;
  flex-direction: column;
  width: 92%;
  max-width: 1180px;
}
@media screen and (min-width: 768px) {
  .jobs-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 100px;
    width: 92%;
  }
}
.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  flex-grow: 1;
}
@media screen and (min-width: 768px) {
  .loader-container {
    width: 100%;
  }
}
.jobs-error-view-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
  padding-bottom: 64px;
  flex-grow: 1;
}
@media screen and (min-width: 768px) {
  .jobs-error-view-container {
    width: 70%;
    width: 100%;
    margin-top: 70px;
    padding-bottom: 0px;
  }
}
.jobs-failure-img {
  width: 250px;
  height: 200px;
}
@media screen and (min-width: 768px) {
  .jobs-failure-img {
    width: 400px;
    height: 350px;
  }
}
.jobs-failure-heading-text {
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 500;
  line-height: 1.3;
  text-align: center;
}
@media screen and (min-width: 768px) {
  .jobs-failure-heading-text {
    font-size: 30px;
  }
}
.jobs-failure-description {
  text-align: center;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 12px;
  width: 90%;
  max-width: 388px;
  margin-top: 0px;
}
@media screen and (min-width: 768px) {
  .jobs-failure-description {
    font-size: 16px;
  }
}
.jobs-failure-button {
  padding: 8px 32px;
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #4f46e5;
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
  font-family: 'Roboto';
}
.no-jobs-view {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 64px;
  margin-top: 48px;
}

@media screen and (min-width: 768px) {
  .no-jobs-view {
    margin-left: 30px;
    width: 100%;
    padding-bottom: 0;
    margin-top: 0px;
  }
}

.no-jobs-img {
  width: 250px;
  height: 180px;
}

@media screen and (min-width: 768px) {
  .no-jobs-img {
    width: 459px;
    height: 315px;
  }
}

.no-jobs-heading {
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 500;
  line-height: 1.3px;
  width: 90%;
  text-align: center;
}

@media screen and (min-width: 768px) {
  .no-jobs-heading {
    margin-top: 32px;
    font-size: 42px;
  }
}

.no-jobs-description {
  text-align: center;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 12px;
  width: 90%;
  max-width: 288px;
  line-height: 1.3;
}

@media screen and (min-width: 768px) {
  .no-jobs-description {
    margin-top: 12px;
    font-size: 14px;
    width: 60%;
    max-width: 466px;
  }
}

@media screen and (min-width: 768px) {
  .all-jobs-container {
    width: 100%;
  }
}
.jobs-list {
  padding-left: 0;
}
.search-input-jobs-list-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

@media screen and (min-width: 768px) {
  .search-input-jobs-list-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    margin-left: 40px;
    margin-top: 28px;
  }
}
.search-input-container-desktop {
  display: flex;
  align-self: flex-start;
  background-color: transparent;
  border-radius: 8px;
  border: 1px solid #7e858e;
  margin-bottom: 20px;
  margin-top: 20px;
}

.search-input-desktop {
  background-color: transparent;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  border: none;
  outline: none;
  flex-grow: 1;
  padding-left: 16px;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-right: 16px;
  width: 450px;
}
.search-button-container-desktop {
  background-color: #475569;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px 20px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  margin: 0px;
}

.search-icon-desktop {
  color: #ffffff;
  width: 15px;
  height: 15px;
}
@media screen and (max-width: 768px) {
  .search-input-container-desktop {
    display: none;
  }
}