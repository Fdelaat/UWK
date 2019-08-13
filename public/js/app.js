(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/app"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/ModifyUsersComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/ModifyUsersComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      users: [],
      orderBy: 'asc',
      // used in v-model with select element
      modifyUser: {
        id: null,
        role: null
      },
      // used to track errors in submission
      modifyError: {
        user: false,
        role: false
      },
      // used to display success message
      modifySuccess: false,
      // available roles
      roles: ['admin', 'user'],
      // used to track status of requests for modification of User
      requestSent: false,
      retrieved: false
    };
  },
  props: {
    usersProp: null
  },
  methods: {
    ModifyUser: function ModifyUser() {
      var _this = this;

      this.modifyError.user = false;
      this.modifyError.role = false;
      this.requestSent = true;
      axios.post('/admin/update', {
        user: this.modifyUser.id,
        role: this.modifyUser.role
      }).then(function (response) {
        for (var i = 0; i < _this.users.length; i++) {
          // updating user's role in the users array
          _this.users[i].id === _this.modifyUser.id ? _this.users[i].role = _this.modifyUser.role : '';
        }

        _this.modifySuccess = true;
        Event.$emit('alertApplied');
        _this.retrieved = true;
        _this.modifyUser.id = 'null';
        _this.modifyUser.role = 'null';
      })["catch"](function (error) {
        // FormRequest returns appropriate validation response
        if (error.response.data.errors.user) {
          _this.modifyError.user = true;
        }

        if (error.response.data.errors.role) {
          _this.modifyError.role = true;
        }

        _this.retrieved = true;
      });
      this.requestSent = false;
      this.retrieved = false;
    },
    destroy: function destroy(index, name) {
      var _this2 = this;

      this.users.splice(index, 1);
      var url = '/admin/users/' + name;
      axios["delete"](url).then(function (response) {})["catch"](function (e) {
        _this2.errors.push(e);
      });
    },
    order: function order() {
      this.users.reverse();
      this.orderBy = this.orderBy === 'asc' ? 'desc' : 'asc';
    }
  },
  mounted: function mounted() {
    this.users = JSON.parse(this.usersProp);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/contact/company.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/contact/company.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      companies: [],
      errors: [],
      alertMessage: {},
      alertType: {},
      countries: ['Nederland', 'Belgie', 'Duitsland'],
      searchInput: '',
      pagination: {
        per_page: 8,
        // required
        current_page: 1,
        // required
        last_page: 0 // required

      },
      paginationOptions: {
        offset: 2,
        previousText: 'Vorige',
        nextText: 'Volgende',
        alwaysShowPrevNext: true
      },
      createForm: {},
      editForm: new Form({
        id: '',
        name: '',
        streetName: '',
        streetNumber: '',
        streetPostalCode: '',
        city: '',
        postalBox: '',
        postalBoxCode: '',
        PostalBoxCity: '',
        country: '',
        defaultEmail: '',
        projectEmail: ''
      })
    };
  },
  created: function created() {
    this.getCompanies();
  },
  mounted: function mounted() {
    var _this = this;

    this.prepareComponent();
    Echo["private"]('contactcompany').listen('.CompanySaved', function (data) {
      _this.saveCompanyChannelEvent(data);
    }).listen('.CompanyUpdated', function (data) {
      _this.updateCompanyChannelEvent(data);
    }).listen('.CompanyDestroyed', function (data) {
      _this.deleteCompanyChannelEvent(data);
    });
    Event.$on('contactCompany-search', function (data) {
      _this.companies = data;
    });
    Event.$on('contactCompany-searchInput', function (data) {
      _this.searchInput = data;
      _this.pagination.current_page = "1";
    });
    Event.$on('contactCompany-searchReset', function (data) {
      _this.searchInput = '';
      _this.pagination.current_page = "1";

      _this.getCompanies();
    });
  },
  beforeDestroy: function beforeDestroy() {
    Echo.leave('contactcompany');
  },
  methods: {
    prepareComponent: function prepareComponent() {
      $('#modal-edit-company').on('shown.bs.modal', function () {
        $('#name').focus();
      });
    },
    getCompanies: function getCompanies() {
      var _this2 = this;

      axios.get('/api/v1/bedrijven', {
        params: {
          paginate: this.pagination.per_page,
          page: this.pagination.current_page
        }
      }).then(function (response) {
        _this2.companies = response.data.data;
        _this2.pagination = response.data.meta.pagination;
      })["catch"](function (e) {
        _this2.errors.push(e);
      });
    },
    search: function search() {
      var _this3 = this;

      axios.get('/api/v1/bedrijven/search', {
        params: {
          q: this.searchInput,
          paginate: this.pagination.per_page,
          page: this.pagination.current_page
        }
      }).then(function (response) {
        _this3.companies = response.data.data;
        _this3.pagination = response.data.meta.pagination;
      })["catch"](function (e) {
        _this3.errors.push(e);
      });
    },
    destroy: function destroy(company) {
      var _this4 = this;

      var url = '/api/v1/bedrijven/' + company.id;
      axios["delete"](url).then(function (response) {
        _this4.alertMessage = response.data.message;
        _this4.alertType = response.data.type;
        Event.$emit('alertApplied');

        _this4.getCompanies();
      })["catch"](function (e) {
        _this4.errors.push(e);
      });
    },
    saveCompanyChannelEvent: function saveCompanyChannelEvent(company) {
      var searchIdx = _.findIndex(this.companies, {
        id: company.contactCompany[0].id
      });

      if (searchIdx === -1) {
        var searchId = _.findIndex(this.companies) < this.pagination.per_page - 1;

        if (searchId === true) {
          this.getCompanies();
        }
      }
    },
    updateCompanyChannelEvent: function updateCompanyChannelEvent(company) {
      var searchIdx = _.findIndex(this.companies, {
        id: company.contactCompany[0].id
      });

      if (searchIdx === -1) {} else {
        var searchId = _.findIndex(this.companies, function (o) {
          return o.id === company.contactCompany[0].id;
        });

        this.companies.splice(searchId, 1, company.contactCompany[0]);
      }
    },
    deleteCompanyChannelEvent: function deleteCompanyChannelEvent(company) {
      var searchIdx = _.findIndex(this.companies, {
        id: company.contactCompany[0].id
      });

      if (searchIdx === -1) {} else {
        this.getCompanies();
      }
    },
    edit: function edit(company) {
      for (var field in company) {
        this.editForm[field] = company[field];
      }

      $('#modal-edit-company').modal('show');
    },
    persons: function persons(company) {},
    create: function create() {
      this.createForm = true;
      $('#modal-edit-company').modal('show');
    },
    closeEditForm: function closeEditForm() {
      $('#modal-edit-company').modal('hide');
      this.editForm.reset();
      this.createForm = false;
    },
    onSubmitEdit: function onSubmitEdit() {
      var _this5 = this;

      if (this.createForm == true) {
        this.editForm.post('/api/v1/bedrijven').then(function (response) {
          _this5.closeEditForm();

          _this5.alertMessage = response.message;
          _this5.alertType = response.type;
          Event.$emit('alertApplied');

          _this5.getCompanies();
        })["catch"](function (e) {
          _this5.errors.push(e);
        });
      } else {
        var url = '/api/v1/bedrijven/' + this.editForm.id;
        this.editForm.patch(url).then(function (response) {
          _this5.closeEditForm();

          _this5.alertMessage = response.message;
          _this5.alertType = response.type;
          Event.$emit('alertApplied');

          _this5.getCompanies();
        });
      }
    },
    emailLink: function emailLink(emailAdress) {
      return 'mailto:' + emailAdress;
    },
    moveOnEnter: function moveOnEnter() {}
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/contact/contactperson.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/contact/contactperson.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      contactpersons: [],
      errors: [],
      alertMessage: {},
      alertType: {},
      searchInput: '',
      pagination: {
        per_page: 10,
        // required
        current_page: 1,
        // required
        last_page: 0 // required

      },
      paginationOptions: {
        offset: 4,
        previousText: 'Vorige',
        nextText: 'Volgende',
        alwaysShowPrevNext: true
      },
      createForm: {},
      editForm: new Form({
        id: '',
        nameSlug: '',
        initials: '',
        firstName: '',
        middleName: '',
        lastName: '',
        phoneNumber: '',
        mobilePhoneNumber: '',
        email: ''
      })
    };
  },
  created: function created() {
    this.getContactpersons();
  },
  mounted: function mounted() {
    var _this = this;

    this.prepareComponent();
    Echo["private"]('contactperson').listen('.PersonSaved', function (data) {
      _this.savePersonChannelEvent(data);
    }).listen('.PersonUpdated', function (data) {
      _this.updatePersonChannelEvent(data);
    }).listen('.PersonDestroyed', function (data) {
      _this.deletePersonChannelEvent(data);
    });
    Event.$on('contactPerson-search', function (data) {
      _this.contactpersons = data;
    });
    Event.$on('contactPerson-searchInput', function (data) {
      _this.searchInput = data;
      _this.pagination.current_page = "1";
    });
    Event.$on('contactPerson-searchReset', function (data) {
      _this.searchInput = '';
      _this.pagination.current_page = "1";

      _this.getContactpersons();
    });
  },
  beforeDestroy: function beforeDestroy() {
    Echo.leave('contactperson');
  },
  methods: {
    /**
     * Prepare the component (Vue 2.x).
     */
    prepareComponent: function prepareComponent() {
      $('#modal-edit-person').on('shown.bs.modal', function () {
        $('#firstName').focus();
      });
    },

    /**
     * Get all of the data for contactperons.
     */
    getContactpersons: function getContactpersons() {
      var _this2 = this;

      axios.get('/api/v1/contactpersonen', {
        params: {
          paginate: this.pagination.per_page,
          page: this.pagination.current_page
        }
      }).then(function (response) {
        _this2.contactpersons = response.data.data;
        _this2.pagination = response.data.meta.pagination;
      })["catch"](function (e) {
        _this2.errors.push(e);
      });
    },
    search: function search() {
      var _this3 = this;

      var url = '/api/v1/contactpersonen/search';
      axios.get(url, {
        params: {
          q: this.searchInput,
          paginate: this.pagination.per_page,
          page: this.pagination.current_page
        }
      }).then(function (response) {
        _this3.contactpersons = response.data.data;
        _this3.pagination = response.data.meta.pagination;
      })["catch"](function (e) {
        _this3.errors.push(e);
      });
    },
    destroy: function destroy(contactperson) {
      var _this4 = this;

      var url = '/api/v1/contactpersonen/' + contactperson.id;
      axios["delete"](url).then(function (response) {
        Event.$emit('alertApplied');
        _this4.alertMessage = response.data.message;
        _this4.alertType = response.data.type;

        _this4.getContactpersons();
      })["catch"](function (e) {
        _this4.errors.push(e);
      });
    },
    savePersonChannelEvent: function savePersonChannelEvent(contactperson) {
      var searchIdx = _.findIndex(this.contactpersons, {
        id: contactperson.contactPerson[0].id
      });

      if (searchIdx == -1) {
        var searchId = _.findLastIndex(this.contactpersons) < this.pagination.per_page - 1;

        if (searchId == true) {
          this.getContactpersons();
        }
      }
    },
    updatePersonChannelEvent: function updatePersonChannelEvent(contactperson) {
      var searchIdx = _.findIndex(this.contactpersons, {
        id: contactperson.contactPerson[0].id
      });

      if (searchIdx == -1) {} else {
        var searchId = _.findIndex(this.contactpersons, function (o) {
          return o.id == contactperson.contactPerson[0].id;
        });

        this.contactpersons.splice(searchId, 1, contactperson.contactPerson[0]);
      }
    },
    deletePersonChannelEvent: function deletePersonChannelEvent(contactperson) {
      var searchIdx = _.findIndex(this.contactpersons, {
        id: contactperson.contactPerson[0].id
      });

      if (searchIdx == -1) {} else {
        this.getContactpersons();
      }
    },
    edit: function edit(contactperson) {
      for (var field in contactperson) {
        this.editForm[field] = contactperson[field];
      }

      $('#modal-edit-person').modal('show');
    },
    create: function create() {
      this.createForm = true;
      $('#modal-edit-person').modal('show');
    },
    closeEditForm: function closeEditForm() {
      $('#modal-edit-person').modal('hide');
      this.editForm.reset();
      this.createForm = false;
    },
    onSubmitEdit: function onSubmitEdit() {
      var _this5 = this;

      if (this.createForm == true) {
        this.editForm.post('/api/v1/contactpersonen').then(function (response) {
          _this5.closeEditForm();

          _this5.alertMessage = response.message;
          _this5.alertType = response.type;
          Event.$emit('alertApplied');

          _this5.getContactpersons();
        })["catch"](function (e) {
          _this5.errors.push(e);
        });
      } else {
        var url = '/api/v1/contactpersonen/' + this.editForm.id;
        this.editForm.patch(url).then(function (response) {
          _this5.closeEditForm();

          _this5.alertMessage = response.message;
          _this5.alertType = response.type;
          Event.$emit('alertApplied');

          _this5.getContactpersons();
        })["catch"](function (e) {
          _this5.errors.push(e);
        });
      }
    },
    emailLink: function emailLink(emailAdress) {
      return 'mailto:' + emailAdress;
    },
    moveOnEnter: function moveOnEnter() {}
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/contact/productgroups.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/contact/productgroups.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      productgroups: [],
      errors: [],
      alertMessage: {},
      alertType: {},
      searchInput: '',
      pagination: {
        per_page: 10,
        // required
        current_page: 1,
        // required
        last_page: 0 // required

      },
      paginationOptions: {
        offset: 4,
        previousText: 'Vorige',
        nextText: 'Volgende',
        alwaysShowPrevNext: true
      },
      createForm: {},
      editForm: new Form({
        id: '',
        slug: '',
        name: '',
        description: ''
      })
    };
  },
  created: function created() {
    this.getContactProductgroups();
  },
  mounted: function mounted() {
    var _this = this;

    this.prepareComponent();
    Echo["private"]('productgroup').listen('.ProductGroupSaved', function (data) {
      _this.saveProductGroupChannelEvent(data);
    }).listen('.ProductGroupUpdated', function (data) {
      _this.updateProductGroupChannelEvent(data);
    }).listen('.ProductGroupDestroyed', function (data) {
      _this.deleteProductGroupChannelEvent(data);
    });
    Event.$on('contactProductgroups-search', function (data) {
      _this.productgroups = data;
    });
    Event.$on('contactProductgroups-searchInput', function (data) {
      _this.searchInput = data;
      _this.pagination.current_page = "1";
    });
    Event.$on('contactProductgroups-searchReset', function (data) {
      _this.searchInput = '';
      _this.pagination.current_page = "1";

      _this.getContactProductgroups();
    });
  },
  methods: {
    prepareComponent: function prepareComponent() {
      $('#modal-edit-productgroup').on('shown.bs.modal', function () {
        $('#name-edit').focus();
      });
    },
    getContactProductgroups: function getContactProductgroups() {
      var _this2 = this;

      axios.get('/api/v1/productgroepen', {
        params: {
          paginate: this.pagination.per_page,
          page: this.pagination.current_page
        }
      }).then(function (response) {
        _this2.productgroups = response.data.data;
        _this2.pagination = response.data.meta.pagination;
      })["catch"](function (e) {
        _this2.errors.push(e);
      });
    },
    search: function search() {
      var _this3 = this;

      axios.get('/api/v1/productgroepen/search', {
        params: {
          q: this.searchInput,
          paginate: this.pagination.per_page,
          page: this.pagination.current_page
        }
      }).then(function (response) {
        _this3.productgroups = response.data.data;
        _this3.pagination = response.data.meta.pagination;
      })["catch"](function (e) {
        _this3.errors.push(e);
      });
    },
    destroy: function destroy(productgroup) {
      var _this4 = this;

      var url = '/api/v1/productgroepen/' + productgroup.id;
      axios["delete"](url).then(function (response) {
        Event.$emit('alertApplied');
        _this4.alertMessage = response.data.message;
        _this4.alertType = response.data.type;

        _this4.getContactProductgroups();
      })["catch"](function (e) {
        _this4.errors.push(e);
      });
    },
    saveProductGroupChannelEvent: function saveProductGroupChannelEvent(productgroups) {
      var searchIdx = _.findIndex(this.productgroups, {
        id: productgroups.productGroup[0].id
      });

      if (searchIdx == -1) {
        var searchId = _.findLastIndex(this.productgroups) < this.pagination.per_page - 1;

        if (searchId == true) {
          this.getContactProductgroups();
        }
      }
    },
    updateProductGroupChannelEvent: function updateProductGroupChannelEvent(productgroups) {
      var searchIdx = _.findIndex(this.productgroups, {
        id: productgroups.productGroup[0].id
      });

      if (searchIdx == -1) {} else {
        var searchId = _.findIndex(this.productgroups, function (o) {
          return o.id == productgroups.productGroup[0].id;
        });

        this.productgroups.splice(searchId, 1, productgroups.productGroup[0]);
      }
    },
    deleteProductGroupChannelEvent: function deleteProductGroupChannelEvent(productgroups) {
      var searchIdx = _.findIndex(this.productgroups, {
        id: productgroups.productGroup[0].id
      });

      if (searchIdx == -1) {} else {
        this.getContactProductgroups();
      }
    },
    edit: function edit(productgroup) {
      for (var field in productgroup) {
        this.editForm[field] = productgroup[field];
      }

      $('#modal-edit-productgroup').modal('show');
    },
    create: function create() {
      this.createForm = true;
      $('#modal-edit-productgroup').modal('show');
    },
    closeEditForm: function closeEditForm() {
      $('#modal-edit-productgroup').modal('hide');
      this.editForm.reset();
      this.createForm = false;
    },
    onSubmitEdit: function onSubmitEdit() {
      var _this5 = this;

      if (this.createForm == true) {
        this.editForm.post('/api/v1/productgroepen').then(function (response) {
          _this5.closeEditForm();

          _this5.alertMessage = response.message;
          _this5.alertType = response.type;
          Event.$emit('alertApplied');

          _this5.getContactProductgroups();
        })["catch"](function (e) {
          _this5.errors.push(e);
        });
      } else {
        var url = '/api/v1/productgroepen/' + this.editForm.id;
        this.editForm.patch(url).then(function (response) {
          _this5.closeEditForm();

          _this5.alertMessage = response.message;
          _this5.alertType = response.type;
          Event.$emit('alertApplied');

          _this5.getContactProductgroups();
        })["catch"](function (e) {
          _this5.errors.push(e);
        });
      }
    },
    moveOnEnter: function moveOnEnter() {}
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/helpers/Alert.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/helpers/Alert.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    message: {},
    type: {
      "default": 'info'
    },
    timeout: {
      "default": 4000
    },
    important: {
      type: Boolean,
      "default": false
    },
    id: {
      "default": ''
    }
  },
  data: function data() {
    return {
      body: {},
      showAlert: false
    };
  },
  created: function created() {
    var _this = this;

    Event.$on('alertApplied', function () {
      return _this.showAlert = true;
    });
  },
  updated: function updated() {
    var _this2 = this;

    this.body = this.message;

    if (!this.important) {
      setTimeout(function () {
        return _this2.showAlert = false;
      }, this.timeout);
    }
  },
  computed: {
    alertClasses: function alertClasses() {
      var type = this.type;
      return {
        'alert': true,
        'alert-info': type == 'info',
        'alert-success': type == 'success',
        'alert-warning': type == 'warning',
        'alert-danger': type == 'danger'
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/helpers/Search.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/helpers/Search.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    callback: {
      type: Function,
      required: true
    },
    placeholder: {
      type: String,
      "default": ""
    },
    nameEvent: {
      type: String,
      "default": ""
    }
  },
  data: function data() {
    return {
      searchData: null,
      title: {},
      eventName: {},
      results: [],
      errors: []
    };
  },
  created: function created() {
    this.title = this.placeholder;
    this.eventName = this.nameEvent;
  },
  watch: {
    searchData: function searchData(after) {
      if (this.searchData !== "") {
        Event.$emit(this.eventName + 'Input', this.searchData);
        this.callback();
        Event.$emit(this.eventName, this.results);
      } else {
        Event.$emit(this.eventName + 'Reset', this.searchData);
      }
    }
  },
  methods: {
    escape: function escape() {
      this.searchData = "";
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/helpers/vue-bootstrap-pagination.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/helpers/vue-bootstrap-pagination.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    pagination: {
      type: Object,
      required: true
    },
    callback: {
      type: Function,
      required: true
    },
    options: {
      type: Object
    },
    size: {
      type: String
    }
  },
  computed: {
    array: function array() {
      if (this.pagination.last_page <= 0) {
        return [];
      }

      var from = this.pagination.current_page - this.config.offset;

      if (from < 1) {
        from = 1;
      }

      var to = from + this.config.offset * 2;

      if (to >= this.pagination.last_page) {
        to = this.pagination.last_page;
      }

      var arr = [];

      while (from <= to) {
        arr.push(from);
        from++;
      }

      return arr;
    },
    config: function config() {
      return Object.assign({
        offset: 3,
        ariaPrevious: 'Previous',
        ariaNext: 'Next',
        previousText: '«',
        nextText: '»',
        alwaysShowPrevNext: false
      }, this.options);
    },
    sizeClass: function sizeClass() {
      if (this.size === 'large') {
        return 'pagination-lg';
      } else if (this.size === 'small') {
        return 'pagination-sm';
      } else {
        return '';
      }
    }
  },
  watch: {
    'pagination.per_page': function paginationPer_page(newVal, oldVal) {
      if (+newVal !== +oldVal) {
        this.callback();
      }
    }
  },
  methods: {
    showPrevious: function showPrevious() {
      return this.config.alwaysShowPrevNext || this.pagination.current_page > 1;
    },
    showNext: function showNext() {
      return this.config.alwaysShowPrevNext || this.pagination.current_page < this.pagination.last_page;
    },
    changePage: function changePage(page) {
      if (this.pagination.current_page === page) {
        return;
      }

      this.$set(this.pagination, 'current_page', page); //this.updateUrl();

      this.callback();
    },
    updateUrl: function updateUrl() {
      history.pushState(null, null, '?page=' + this.pagination.current_page);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/main.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/main.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passport/AuthorizedClients.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/passport/AuthorizedClients.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  /*
   * The component's data.
   */
  data: function data() {
    return {
      tokens: []
    };
  },

  /**
   * Prepare the component (Vue 1.x).
   */
  ready: function ready() {
    this.prepareComponent();
  },

  /**
   * Prepare the component (Vue 2.x).
   */
  mounted: function mounted() {
    this.prepareComponent();
  },
  methods: {
    /**
     * Prepare the component (Vue 2.x).
     */
    prepareComponent: function prepareComponent() {
      this.getTokens();
    },

    /**
     * Get all of the authorized tokens for the user.
     */
    getTokens: function getTokens() {
      var _this = this;

      axios.get('/oauth/tokens').then(function (response) {
        _this.tokens = response.data;
      });
    },

    /**
     * Revoke the given token.
     */
    revoke: function revoke(token) {
      var _this2 = this;

      axios["delete"]('/oauth/tokens/' + token.id).then(function (response) {
        _this2.getTokens();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passport/Clients.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/passport/Clients.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  /*
   * The component's data.
   */
  data: function data() {
    return {
      clients: [],
      createForm: {
        errors: [],
        name: '',
        redirect: ''
      },
      editForm: {
        errors: [],
        name: '',
        redirect: ''
      }
    };
  },

  /**
   * Prepare the component (Vue 1.x).
   */
  ready: function ready() {
    this.prepareComponent();
  },

  /**
   * Prepare the component (Vue 2.x).
   */
  mounted: function mounted() {
    this.prepareComponent();
  },
  methods: {
    /**
     * Prepare the component.
     */
    prepareComponent: function prepareComponent() {
      this.getClients();
      $('#modal-create-client').on('shown.bs.modal', function () {
        $('#create-client-name').focus();
      });
      $('#modal-edit-client').on('shown.bs.modal', function () {
        $('#edit-client-name').focus();
      });
    },

    /**
     * Get all of the OAuth clients for the user.
     */
    getClients: function getClients() {
      var _this = this;

      axios.get('/oauth/clients').then(function (response) {
        _this.clients = response.data;
      });
    },

    /**
     * Show the form for creating new clients.
     */
    showCreateClientForm: function showCreateClientForm() {
      $('#modal-create-client').modal('show');
    },

    /**
     * Create a new OAuth client for the user.
     */
    store: function store() {
      this.persistClient('post', '/oauth/clients', this.createForm, '#modal-create-client');
    },

    /**
     * Edit the given client.
     */
    edit: function edit(client) {
      this.editForm.id = client.id;
      this.editForm.name = client.name;
      this.editForm.redirect = client.redirect;
      $('#modal-edit-client').modal('show');
    },

    /**
     * Update the client being edited.
     */
    update: function update() {
      this.persistClient('put', '/oauth/clients/' + this.editForm.id, this.editForm, '#modal-edit-client');
    },

    /**
     * Persist the client to storage using the given form.
     */
    persistClient: function persistClient(method, uri, form, modal) {
      var _this2 = this;

      form.errors = [];
      axios[method](uri, form).then(function (response) {
        _this2.getClients();

        form.name = '';
        form.redirect = '';
        form.errors = [];
        $(modal).modal('hide');
      })["catch"](function (error) {
        if (_typeof(error.response.data) === 'object') {
          form.errors = _.flatten(_.toArray(error.response.data.errors));
        } else {
          form.errors = ['Something went wrong. Please try again.'];
        }
      });
    },

    /**
     * Destroy the given client.
     */
    destroy: function destroy(client) {
      var _this3 = this;

      axios["delete"]('/oauth/clients/' + client.id).then(function (response) {
        _this3.getClients();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passport/PersonalAccessTokens.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/passport/PersonalAccessTokens.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  /*
   * The component's data.
   */
  data: function data() {
    return {
      accessToken: null,
      tokens: [],
      scopes: [],
      form: {
        name: '',
        scopes: [],
        errors: []
      }
    };
  },

  /**
   * Prepare the component (Vue 1.x).
   */
  ready: function ready() {
    this.prepareComponent();
  },

  /**
   * Prepare the component (Vue 2.x).
   */
  mounted: function mounted() {
    this.prepareComponent();
  },
  methods: {
    /**
     * Prepare the component.
     */
    prepareComponent: function prepareComponent() {
      this.getTokens();
      this.getScopes();
      $('#modal-create-token').on('shown.bs.modal', function () {
        $('#create-token-name').focus();
      });
    },

    /**
     * Get all of the personal access tokens for the user.
     */
    getTokens: function getTokens() {
      var _this = this;

      axios.get('/oauth/personal-access-tokens').then(function (response) {
        _this.tokens = response.data;
      });
    },

    /**
     * Get all of the available scopes.
     */
    getScopes: function getScopes() {
      var _this2 = this;

      axios.get('/oauth/scopes').then(function (response) {
        _this2.scopes = response.data;
      });
    },

    /**
     * Show the form for creating new tokens.
     */
    showCreateTokenForm: function showCreateTokenForm() {
      $('#modal-create-token').modal('show');
    },

    /**
     * Create a new personal access token.
     */
    store: function store() {
      var _this3 = this;

      this.accessToken = null;
      this.form.errors = [];
      axios.post('/oauth/personal-access-tokens', this.form).then(function (response) {
        _this3.form.name = '';
        _this3.form.scopes = [];
        _this3.form.errors = [];

        _this3.tokens.push(response.data.token);

        _this3.showAccessToken(response.data.accessToken);
      })["catch"](function (error) {
        if (_typeof(error.response.data) === 'object') {
          _this3.form.errors = _.flatten(_.toArray(error.response.data.errors));
        } else {
          _this3.form.errors = ['Something went wrong. Please try again.'];
        }
      });
    },

    /**
     * Toggle the given scope in the list of assigned scopes.
     */
    toggleScope: function toggleScope(scope) {
      if (this.scopeIsAssigned(scope)) {
        this.form.scopes = _.reject(this.form.scopes, function (s) {
          return s == scope;
        });
      } else {
        this.form.scopes.push(scope);
      }
    },

    /**
     * Determine if the given scope has been assigned to the token.
     */
    scopeIsAssigned: function scopeIsAssigned(scope) {
      return _.indexOf(this.form.scopes, scope) >= 0;
    },

    /**
     * Show the given access token to the user.
     */
    showAccessToken: function showAccessToken(accessToken) {
      $('#modal-create-token').modal('hide');
      this.accessToken = accessToken;
      $('#modal-access-token').modal('show');
    },

    /**
     * Revoke the given token.
     */
    revoke: function revoke(token) {
      var _this4 = this;

      axios["delete"]('/oauth/personal-access-tokens/' + token.id).then(function (response) {
        _this4.getTokens();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/project.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/project.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      projects: [],
      usersInProjecten: [],
      errors: [],
      alertMessage: {},
      alertType: {},
      pagination: {},
      paginationOptions: {
        offset: 2,
        previousText: 'Vorige',
        nextText: 'Volgende',
        alwaysShowPrevNext: true
      },
      createForm: {},
      editForm: new Form({
        projectId: '',
        projectNaam: '',
        projectNummer: '',
        vestiging: '',
        projectLocatie: '',
        projectPlaats: '',
        klant: '',
        adviseur: '',
        architect: '',
        omschrijving: ''
      })
    };
  },
  created: function created() {
    this.getProject();
  },
  mounted: function mounted() {
    var _this = this;

    this.prepareComponent();
    Echo.join('projecten').here(function (users) {
      _this.usersInProjecten = users;
    }).joining(function (user) {
      _this.usersInProjecten.push(user);
    }).leaving(function (user) {
      _this.usersInProjecten = _this.usersInProjecten.filter(function (u) {
        return u != user;
      });
    }).listen('openProject', function (e) {});
  },
  beforeDestroy: function beforeDestroy() {
    Echo.leave('projecten');
  },
  methods: {
    prepareComponent: function prepareComponent() {
      $('#modal-edit-projecten').on('shown.bs.modal', function () {
        $('#projectNaam').focus();
      });
    },
    getProject: function getProject() {
      var _this2 = this;

      axios.get('/api/v1/projecten', {
        params: {
          paginate: this.pagination.per_page,
          page: this.pagination.current_page
        }
      }).then(function (response) {
        _this2.projects = response.data.data;
        _this2.pagination = response.data.meta.pagination;
      })["catch"](function (e) {
        _this2.errors.push(e);
      });
    },
    destroy: function destroy(company) {
      var _this3 = this;

      var url = '/api/v1/projecten/' + project.projectId;
      axios["delete"](url).then(function (response) {
        _this3.alertMessage = response.data.message;
        _this3.alertType = response.data.type;
        Event.$emit('alertApplied');

        _this3.getProject();
      })["catch"](function (e) {
        _this3.errors.push(e);
      });
    },
    edit: function edit(project) {
      for (var field in project) {
        this.editForm[field] = project[field];
      }

      $('#modal-edit-projecten').modal('show');
    },
    create: function create() {
      this.createForm = true;
      $('#modal-edit-projecten').modal('show');
    },
    closeEditForm: function closeEditForm() {
      $('#modal-edit-projecten').modal('hide');
      this.editForm.reset();
      this.createForm = false;
    },
    onSubmitEdit: function onSubmitEdit() {
      var _this4 = this;

      if (this.createForm == true) {
        this.editForm.post('/api/v1/projecten').then(function (response) {
          _this4.closeEditForm();

          _this4.alertMessage = response.message;
          _this4.alertType = response.type;
          Event.$emit('alertApplied');

          _this4.getProject();
        })["catch"](function (e) {
          _this4.errors.push(e);
        });
      } else {
        var url = '/api/v1/projecten/' + this.editForm.projectId;
        this.editForm.patch(url).then(function (response) {
          _this4.closeEditForm();

          _this4.alertMessage = response.message;
          _this4.alertType = response.type;
          Event.$emit('alertApplied');

          _this4.getProject();
        })["catch"](function (e) {
          _this4.errors.push(e);
        });
      }
    },
    moveOnEnter: function moveOnEnter() {}
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/helpers/Alert.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/helpers/Alert.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.alert {\n    position: fixed;\n    right: 30px;\n    bottom: 30px;\n    min-width: 10%;\n    text-align: center;\n    z-index: 99;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passport/AuthorizedClients.vue?vue&type=style&index=0&id=397d14ca&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/passport/AuthorizedClients.vue?vue&type=style&index=0&id=397d14ca&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.action-link[data-v-397d14ca] {\n    cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passport/Clients.vue?vue&type=style&index=0&id=1552a5b6&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/passport/Clients.vue?vue&type=style&index=0&id=1552a5b6&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.action-link[data-v-1552a5b6] {\n    cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passport/PersonalAccessTokens.vue?vue&type=style&index=0&id=49962cc0&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/passport/PersonalAccessTokens.vue?vue&type=style&index=0&id=49962cc0&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.action-link[data-v-49962cc0] {\n    cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/helpers/Alert.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/helpers/Alert.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Alert.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/helpers/Alert.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passport/AuthorizedClients.vue?vue&type=style&index=0&id=397d14ca&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/passport/AuthorizedClients.vue?vue&type=style&index=0&id=397d14ca&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AuthorizedClients.vue?vue&type=style&index=0&id=397d14ca&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passport/AuthorizedClients.vue?vue&type=style&index=0&id=397d14ca&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passport/Clients.vue?vue&type=style&index=0&id=1552a5b6&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/passport/Clients.vue?vue&type=style&index=0&id=1552a5b6&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Clients.vue?vue&type=style&index=0&id=1552a5b6&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passport/Clients.vue?vue&type=style&index=0&id=1552a5b6&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passport/PersonalAccessTokens.vue?vue&type=style&index=0&id=49962cc0&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/passport/PersonalAccessTokens.vue?vue&type=style&index=0&id=49962cc0&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./PersonalAccessTokens.vue?vue&type=style&index=0&id=49962cc0&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passport/PersonalAccessTokens.vue?vue&type=style&index=0&id=49962cc0&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/ModifyUsersComponent.vue?vue&type=template&id=1aaf251a&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/ModifyUsersComponent.vue?vue&type=template&id=1aaf251a& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("uwk-alert", {
        attrs: {
          type: "success",
          timeout: "3000",
          id: "productgroup",
          message: "De gebruikers rol is aangepast!"
        }
      }),
      _vm._v(" "),
      _vm.users.length
        ? _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-8" }, [
              _c("div", { staticClass: "card mb-3" }, [
                _vm._m(0),
                _vm._v(" "),
                _c("div", { staticClass: "card-body" }, [
                  _c("div", { staticClass: "align-content-center mb-3" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-outline-info",
                        on: { click: _vm.order }
                      },
                      [
                        _c("span", {
                          class:
                            "fa fa-sort-amount-asc" +
                            (_vm.orderBy === "desc"
                              ? ""
                              : "fa fa-sort-amount-desc")
                        }),
                        _vm._v(
                          " " +
                            _vm._s(
                              _vm.orderBy === "asc" ? "Nieuwste" : "Oudste"
                            )
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _vm._m(1)
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "table-responsive mt-2" }, [
                    _c("table", { staticClass: "table" }, [
                      _vm._m(2),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        _vm._l(_vm.users, function(user, index) {
                          return _c("tr", { key: index }, [
                            _c("td", [_vm._v(_vm._s(user.id))]),
                            _c("td", [_vm._v(_vm._s(user.name))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(user.email))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(user.role))]),
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "a",
                                {
                                  staticClass: "btn btn-outline-danger btn-xs",
                                  attrs: { href: "#" },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.destroy(index, user.name)
                                    }
                                  }
                                },
                                [
                                  _c("span", {
                                    staticClass: "fa fa-trash",
                                    attrs: { "aria-hidden": "true" }
                                  }),
                                  _vm._v(" Delete")
                                ]
                              )
                            ])
                          ])
                        }),
                        0
                      )
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-4" }, [
              _c("div", { staticClass: "card card-default" }, [
                _vm._m(3),
                _vm._v(" "),
                _c("div", { staticClass: "card-body" }, [
                  _c("div", { staticClass: "form-group row col-md-12" }, [
                    _c(
                      "label",
                      { staticClass: "control-label", attrs: { for: "user" } },
                      [_vm._v("Selecteer de gebruiker om te wijzigen")]
                    ),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.modifyUser.id,
                            expression: "modifyUser.id"
                          }
                        ],
                        staticClass: "custom-select",
                        class: { "is-invalid": _vm.modifyError.user },
                        attrs: { id: "user", required: "" },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.modifyUser,
                              "id",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c(
                          "option",
                          { attrs: { value: "" }, domProps: { value: null } },
                          [_vm._v("Selecteer een Gebruiker")]
                        ),
                        _vm._v(" "),
                        _vm._l(_vm.users, function(user) {
                          return _c(
                            "option",
                            {
                              key: user.id,
                              attrs: { value: "" },
                              domProps: { value: user.id }
                            },
                            [
                              _vm._v(
                                _vm._s(user.id) +
                                  " - " +
                                  _vm._s(user.name) +
                                  " - " +
                                  _vm._s(user.role)
                              )
                            ]
                          )
                        })
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _vm.modifyError.user
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v("Ongeldige Gebruiker")
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row col-md-12" }, [
                    _c(
                      "label",
                      { staticClass: "col-form-label", attrs: { for: "role" } },
                      [_vm._v("Selecteer Nieuwe Rol")]
                    ),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.modifyUser.role,
                            expression: "modifyUser.role"
                          }
                        ],
                        staticClass: "custom-select",
                        class: { "is-invalid": _vm.modifyError.role },
                        attrs: { name: "role", id: "role" },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.modifyUser,
                              "role",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c(
                          "option",
                          { attrs: { value: "" }, domProps: { value: null } },
                          [_vm._v("Selecteer een Rol")]
                        ),
                        _vm._v(" "),
                        _vm._l(_vm.roles, function(role) {
                          return _c(
                            "option",
                            {
                              key: role.id,
                              attrs: { value: "" },
                              domProps: { value: role }
                            },
                            [_vm._v(_vm._s(role))]
                          )
                        })
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _vm.modifyError.role
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v("Ongeldige Rol")
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-12" }, [
                    _c(
                      "button",
                      {
                        staticClass:
                          "btn btn-outline-primary btn-top-mar pull-right",
                        attrs: { disabled: _vm.requestSent && !_vm.retrieved },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.ModifyUser($event)
                          }
                        }
                      },
                      [_vm._v("Wijzig Rol")]
                    )
                  ])
                ])
              ])
            ])
          ])
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h5", { staticClass: "font-weight-bold py-1 my-0" }, [
        _vm._v("Verwijder gebruikers")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "btn btn-outline-success float-right mr-2",
        attrs: { href: "/admin/users/export" }
      },
      [_c("i", { staticClass: "far fa-file-excel" }), _vm._v(" Excel")]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("User")]),
        _vm._v(" "),
        _c("th", [_vm._v("Email")]),
        _vm._v(" "),
        _c("th", [_vm._v("Role")]),
        _vm._v(" "),
        _c("th")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h5", { staticClass: "font-weight-bold py-1 my-0" }, [
        _vm._v("Wijzig rol gebruiker")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/contact/company.vue?vue&type=template&id=68db69da&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/contact/company.vue?vue&type=template&id=68db69da& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container-fluid" }, [
    _c("div", { staticClass: "row justify-content-center" }, [
      _c(
        "div",
        { staticClass: "col-md-12 col-lg-10" },
        [
          _c("uwk-alert", {
            attrs: {
              type: _vm.alertType,
              timeout: "3000",
              id: "company",
              message: _vm.alertMessage
            }
          }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "card" },
            [
              _c("div", { staticClass: "card-header mb-1" }, [
                _c("div", { staticClass: "row justify-content-around" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "col-xs-6 col-sm-6 col-md-4 col-md-offset-1 col-lg-4 col-lg-offset-1"
                    },
                    [
                      _c("uwk-search", {
                        attrs: {
                          callback: _vm.search,
                          placeholder: "Zoek bedrijf..",
                          nameEvent: "contactCompany-search"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-xs-3 col-sm-3 col-md-3 col-lg-2" },
                    [
                      _c(
                        "button",
                        {
                          staticClass:
                            "btn btn-outline-primary btn-sm float-md-right float-sm-left",
                          attrs: { role: "button" },
                          on: { click: _vm.create }
                        },
                        [
                          _c("i", {
                            staticClass: "fa fa-university",
                            staticStyle: { width: "22px" },
                            attrs: { "aria-hidden": "true" }
                          }),
                          _vm._m(1)
                        ]
                      )
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "card-body", attrs: { id: "company-card" } },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "card-group d-flex flex-sm-row flex-column justify-content-center"
                    },
                    _vm._l(_vm.companies, function(company) {
                      return _c("div", { key: company.id }, [
                        _c(
                          "div",
                          { staticClass: "card mb-3 ml-2 mr-2 flex-fill" },
                          [
                            _c("div", { staticClass: "card-header mb-1" }, [
                              _c("h6", [_vm._v(_vm._s(company.name))])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "card-body mt-0" }, [
                              _c("div", { staticClass: "row mb-1" }, [
                                _c("i", { staticClass: "fa fa-home fa-fw" }),
                                _vm._v(" "),
                                _c("span", { staticClass: "ml-4" }, [
                                  _vm._v(
                                    _vm._s(company.streetName) +
                                      " " +
                                      _vm._s(company.streetNumber)
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "row mb-1" }, [
                                _c("span", { staticClass: "ml-5" }, [
                                  _vm._v(
                                    _vm._s(company.streetPostalCode) +
                                      "  " +
                                      _vm._s(company.city)
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "row mb-1" }, [
                                _vm._m(2, true),
                                _vm._v(
                                  "\r\n                                    " +
                                    _vm._s(company.country) +
                                    "\r\n                                "
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "row mb-1" }, [
                                _vm._m(3, true),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  {
                                    attrs: {
                                      href: _vm.emailLink(company.defaultEmail)
                                    }
                                  },
                                  [_vm._v(_vm._s(company.defaultEmail))]
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "row mb-1" }, [
                                _vm._m(4, true),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  {
                                    attrs: {
                                      href: _vm.emailLink(company.projectEmail)
                                    }
                                  },
                                  [_vm._v(_vm._s(company.projectEmail))]
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "card-footer" }, [
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-outline-primary btn-sm mr-1",
                                  attrs: { role: "button" },
                                  on: {
                                    click: function($event) {
                                      return _vm.persons(company)
                                    }
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "fa fa-user",
                                    staticStyle: { width: "20px" },
                                    attrs: { "aria-hidden": "true" }
                                  }),
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "d-none d-sm-inline-block d-md-inline-block d-lg-inline-block d-xl-inline-block"
                                    },
                                    [_vm._v("Contact-personen")]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("span", { staticClass: "float-right" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn btn-outline-warning btn-sm ml-2 mr-1",
                                    on: {
                                      click: function($event) {
                                        return _vm.edit(company)
                                      }
                                    }
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fa fa-edit",
                                      staticStyle: { width: "22px" },
                                      attrs: { "aria-hidden": "true" }
                                    }),
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "d-none d-sm-inline-block d-md-inline-block d-lg-inline-block d-xl-inline-block"
                                      },
                                      [_vm._v("Edit")]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn btn-outline-danger btn-sm ml-1",
                                    attrs: { role: "button" },
                                    on: {
                                      click: function($event) {
                                        return _vm.destroy(company)
                                      }
                                    }
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fa fa-trash",
                                      staticStyle: { width: "22px" },
                                      attrs: { "aria-hidden": "true" }
                                    }),
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "d-none d-sm-inline-block d-md-inline-block d-lg-inline-block d-xl-inline-block"
                                      },
                                      [_vm._v("Delete")]
                                    )
                                  ]
                                )
                              ])
                            ])
                          ]
                        )
                      ])
                    }),
                    0
                  )
                ]
              ),
              _vm._v(" "),
              _vm.searchInput !== ""
                ? _c("uwk-pagination", {
                    ref: "contact-company",
                    attrs: {
                      pagination: _vm.pagination,
                      callback: _vm.search,
                      options: _vm.paginationOptions,
                      size: ""
                    }
                  })
                : _c("uwk-pagination", {
                    ref: "contact-company",
                    attrs: {
                      pagination: _vm.pagination,
                      callback: _vm.getCompanies,
                      options: _vm.paginationOptions,
                      size: ""
                    }
                  })
            ],
            1
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: { id: "modal-edit-company", tabindex: "-1", role: "dialog" }
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c(
                "div",
                { staticClass: "modal-header" },
                [
                  _vm.createForm == true
                    ? [
                        _c("h4", { staticClass: "modal-title" }, [
                          _vm._v(
                            "\r\n                            Creeër een nieuw bedrijf !!\r\n                        "
                          )
                        ])
                      ]
                    : [
                        _c("h4", { staticClass: "modal-title" }, [
                          _vm._v(
                            "\r\n                            Bewerk Bedrijf: " +
                              _vm._s(_vm.editForm.name) +
                              " !\r\n                        "
                          )
                        ])
                      ],
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "close",
                      attrs: { type: "button ", "aria-hidden": "true" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.closeEditForm($event)
                        }
                      }
                    },
                    [_vm._v("×")]
                  )
                ],
                2
              ),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c(
                  "form",
                  {
                    attrs: {
                      method: "post",
                      action: "/api/v1/bedrijven",
                      role: "form"
                    },
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.onSubmitEdit($event)
                      },
                      keydown: [
                        function($event) {
                          return _vm.editForm.errors.clear($event.target.name)
                        },
                        function($event) {
                          if (
                            !$event.type.indexOf("key") &&
                            _vm._k(
                              $event.keyCode,
                              "enter",
                              13,
                              $event.key,
                              "Enter"
                            )
                          ) {
                            return null
                          }
                          $event.preventDefault()
                          return _vm.moveOnEnter($event)
                        }
                      ]
                    }
                  },
                  [
                    _vm.createForm == true
                      ? void 0
                      : [
                          _c("input", {
                            attrs: {
                              type: "hidden",
                              name: "_method",
                              value: "patch"
                            }
                          })
                        ],
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row" }, [
                      _c(
                        "label",
                        {
                          staticClass: "col-md-4 col-form-label",
                          attrs: { for: "name" }
                        },
                        [_vm._v("Naam")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-8" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.trim",
                              value: _vm.editForm.name,
                              expression: "editForm.name",
                              modifiers: { trim: true }
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.editForm.errors.has("name")
                          },
                          attrs: { type: "text", id: "name", name: "name" },
                          domProps: { value: _vm.editForm.name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.editForm,
                                "name",
                                $event.target.value.trim()
                              )
                            },
                            blur: function($event) {
                              return _vm.$forceUpdate()
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.editForm.errors.has("name")
                          ? _c("div", {
                              staticClass: "invalid-feedback",
                              domProps: {
                                textContent: _vm._s(
                                  _vm.editForm.errors.get("name")
                                )
                              }
                            })
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row" }, [
                      _c(
                        "label",
                        {
                          staticClass: "col-md-4 col-form-label",
                          attrs: { for: "streetName" }
                        },
                        [_vm._v("Straatnaam")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-8" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.trim",
                              value: _vm.editForm.streetName,
                              expression: "editForm.streetName",
                              modifiers: { trim: true }
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.editForm.errors.has("streetName")
                          },
                          attrs: {
                            type: "text",
                            id: "streetName",
                            name: "streetName"
                          },
                          domProps: { value: _vm.editForm.streetName },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.editForm,
                                "streetName",
                                $event.target.value.trim()
                              )
                            },
                            blur: function($event) {
                              return _vm.$forceUpdate()
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.editForm.errors.has("streetName")
                          ? _c("div", {
                              staticClass: "invalid-feedback",
                              domProps: {
                                textContent: _vm._s(
                                  _vm.editForm.errors.get("streetName")
                                )
                              }
                            })
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row" }, [
                      _c(
                        "label",
                        {
                          staticClass: "col-md-4 col-form-label",
                          attrs: { for: "streetNumber" }
                        },
                        [_vm._v("Huisnummer")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-8" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.trim",
                              value: _vm.editForm.streetNumber,
                              expression: "editForm.streetNumber",
                              modifiers: { trim: true }
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.editForm.errors.has(
                              "streetNumber"
                            )
                          },
                          attrs: {
                            type: "text",
                            id: "streetNumber",
                            name: "streetNumber"
                          },
                          domProps: { value: _vm.editForm.streetNumber },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.editForm,
                                "streetNumber",
                                $event.target.value.trim()
                              )
                            },
                            blur: function($event) {
                              return _vm.$forceUpdate()
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.editForm.errors.has("streetNumber")
                          ? _c("div", {
                              staticClass: "invalid-feedback",
                              domProps: {
                                textContent: _vm._s(
                                  _vm.editForm.errors.get("streetNumber")
                                )
                              }
                            })
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row" }, [
                      _c(
                        "label",
                        {
                          staticClass: "col-md-4 col-form-label",
                          attrs: { for: "streetPostalCode" }
                        },
                        [_vm._v("Postcode")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-8" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.trim",
                              value: _vm.editForm.streetPostalCode,
                              expression: "editForm.streetPostalCode",
                              modifiers: { trim: true }
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.editForm.errors.has(
                              "streetPostalCode"
                            )
                          },
                          attrs: {
                            type: "text",
                            id: "streetPostalCode",
                            name: "streetPostalCode"
                          },
                          domProps: { value: _vm.editForm.streetPostalCode },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.editForm,
                                "streetPostalCode",
                                $event.target.value.trim()
                              )
                            },
                            blur: function($event) {
                              return _vm.$forceUpdate()
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.editForm.errors.has("streetPostalCode")
                          ? _c("div", {
                              staticClass: "invalid-feedback",
                              domProps: {
                                textContent: _vm._s(
                                  _vm.editForm.errors.get("streetPostalCode")
                                )
                              }
                            })
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row" }, [
                      _c(
                        "label",
                        {
                          staticClass: "col-md-4 col-form-label",
                          attrs: { for: "city" }
                        },
                        [_vm._v("Plaats")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-8" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.trim",
                              value: _vm.editForm.city,
                              expression: "editForm.city",
                              modifiers: { trim: true }
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.editForm.errors.has("city")
                          },
                          attrs: { type: "text", id: "city", name: "city" },
                          domProps: { value: _vm.editForm.city },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.editForm,
                                "city",
                                $event.target.value.trim()
                              )
                            },
                            blur: function($event) {
                              return _vm.$forceUpdate()
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.editForm.errors.has("city")
                          ? _c("div", {
                              staticClass: "invalid-feedback",
                              domProps: {
                                textContent: _vm._s(
                                  _vm.editForm.errors.get("city")
                                )
                              }
                            })
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row" }, [
                      _c(
                        "label",
                        {
                          staticClass: "col-md-4 col-form-label",
                          attrs: { for: "postalBox" }
                        },
                        [_vm._v("Postbus")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-8" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.trim",
                              value: _vm.editForm.postalBox,
                              expression: "editForm.postalBox",
                              modifiers: { trim: true }
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.editForm.errors.has("postalBox")
                          },
                          attrs: {
                            type: "text",
                            id: "postalBox",
                            name: "postalBox"
                          },
                          domProps: { value: _vm.editForm.postalBox },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.editForm,
                                "postalBox",
                                $event.target.value.trim()
                              )
                            },
                            blur: function($event) {
                              return _vm.$forceUpdate()
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.editForm.errors.has("postalBox")
                          ? _c("div", {
                              staticClass: "invalid-feedback",
                              domProps: {
                                textContent: _vm._s(
                                  _vm.editForm.errors.get("postalBox")
                                )
                              }
                            })
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row" }, [
                      _c(
                        "label",
                        {
                          staticClass: "col-md-4 col-form-label",
                          attrs: { for: "postalBoxCode" }
                        },
                        [_vm._v("Postcode(postbus)")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-8" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.trim",
                              value: _vm.editForm.postalBoxCode,
                              expression: "editForm.postalBoxCode",
                              modifiers: { trim: true }
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.editForm.errors.has(
                              "postalBoxCode"
                            )
                          },
                          attrs: {
                            type: "text",
                            id: "postalBoxCode",
                            name: "postalBoxCode"
                          },
                          domProps: { value: _vm.editForm.postalBoxCode },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.editForm,
                                "postalBoxCode",
                                $event.target.value.trim()
                              )
                            },
                            blur: function($event) {
                              return _vm.$forceUpdate()
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.editForm.errors.has("postalBoxCode")
                          ? _c("div", {
                              staticClass: "invalid-feedback",
                              domProps: {
                                textContent: _vm._s(
                                  _vm.editForm.errors.get("postalBoxCode")
                                )
                              }
                            })
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row" }, [
                      _c(
                        "label",
                        {
                          staticClass: "col-md-4 col-form-label",
                          attrs: { for: "PostalBoxCity" }
                        },
                        [_vm._v("Plaats(postbus)")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-8" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.trim",
                              value: _vm.editForm.PostalBoxCity,
                              expression: "editForm.PostalBoxCity",
                              modifiers: { trim: true }
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.editForm.errors.has(
                              "PostalBoxCity"
                            )
                          },
                          attrs: {
                            type: "text",
                            id: "PostalBoxCity",
                            name: "postalBoxCity"
                          },
                          domProps: { value: _vm.editForm.PostalBoxCity },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.editForm,
                                "PostalBoxCity",
                                $event.target.value.trim()
                              )
                            },
                            blur: function($event) {
                              return _vm.$forceUpdate()
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.editForm.errors.has("PostalBoxCity")
                          ? _c("div", {
                              staticClass: "invalid-feedback",
                              domProps: {
                                textContent: _vm._s(
                                  _vm.editForm.errors.get("PostalBoxCity")
                                )
                              }
                            })
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row" }, [
                      _c(
                        "label",
                        {
                          staticClass: "col-md-4 col-form-label",
                          attrs: { for: "country" }
                        },
                        [_vm._v("Land")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-8" }, [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model.trim",
                                value: _vm.editForm.country,
                                expression: "editForm.country",
                                modifiers: { trim: true }
                              }
                            ],
                            staticClass: "custom-select",
                            class: {
                              "is-invalid": _vm.editForm.errors.has("country")
                            },
                            attrs: { id: "country" },
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.editForm,
                                  "country",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c(
                              "option",
                              {
                                attrs: { value: "" },
                                domProps: { value: null }
                              },
                              [_vm._v("Selecteer een land")]
                            ),
                            _vm._v(" "),
                            _vm._l(_vm.countries, function(country) {
                              return _c(
                                "option",
                                {
                                  key: country.id,
                                  attrs: { value: "" },
                                  domProps: { value: country }
                                },
                                [_vm._v(_vm._s(country))]
                              )
                            })
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _vm.editForm.errors.has("country")
                          ? _c("div", {
                              staticClass: "invalid-feedback",
                              domProps: {
                                textContent: _vm._s(
                                  _vm.editForm.errors.get("country")
                                )
                              }
                            })
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row" }, [
                      _c(
                        "label",
                        {
                          staticClass: "col-md-4 col-form-label",
                          attrs: { for: "defaultEmail" }
                        },
                        [_vm._v("Algemene Email")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-8" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.trim",
                              value: _vm.editForm.defaultEmail,
                              expression: "editForm.defaultEmail",
                              modifiers: { trim: true }
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.editForm.errors.has(
                              "defaultEmail"
                            )
                          },
                          attrs: {
                            type: "text",
                            id: "defaultEmail",
                            name: "defaultEmail"
                          },
                          domProps: { value: _vm.editForm.defaultEmail },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.editForm,
                                "defaultEmail",
                                $event.target.value.trim()
                              )
                            },
                            blur: function($event) {
                              return _vm.$forceUpdate()
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.editForm.errors.has("defaultEmail")
                          ? _c("div", {
                              staticClass: "invalid-feedback",
                              domProps: {
                                textContent: _vm._s(
                                  _vm.editForm.errors.get("defaultEmail")
                                )
                              }
                            })
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row" }, [
                      _c(
                        "label",
                        {
                          staticClass: "col-md-4 col-form-label",
                          attrs: { for: "projectEmail" }
                        },
                        [_vm._v("Project Email")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-8" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.trim",
                              value: _vm.editForm.projectEmail,
                              expression: "editForm.projectEmail",
                              modifiers: { trim: true }
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.editForm.errors.has(
                              "projectEmail"
                            )
                          },
                          attrs: {
                            type: "text",
                            id: "projectEmail",
                            name: "projectEmail"
                          },
                          domProps: { value: _vm.editForm.projectEmail },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.editForm,
                                "projectEmail",
                                $event.target.value.trim()
                              )
                            },
                            blur: function($event) {
                              return _vm.$forceUpdate()
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.editForm.errors.has("projectEmail")
                          ? _c("div", {
                              staticClass: "invalid-feedback",
                              domProps: {
                                textContent: _vm._s(
                                  _vm.editForm.errors.get("projectEmail")
                                )
                              }
                            })
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "modal-footer" },
                      [
                        _vm.createForm === true
                          ? [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-secondary",
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.closeEditForm($event)
                                    }
                                  }
                                },
                                [_vm._v("Sluit")]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-primary",
                                  attrs: { disabled: _vm.editForm.errors.any() }
                                },
                                [_vm._v("Creëer")]
                              )
                            ]
                          : [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-secondary",
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.closeEditForm($event)
                                    }
                                  }
                                },
                                [_vm._v("Sluit")]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-warning",
                                  attrs: { disabled: _vm.editForm.errors.any() }
                                },
                                [_vm._v("Wijzig")]
                              )
                            ]
                      ],
                      2
                    )
                  ],
                  2
                )
              ])
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-xs-3 col-sm-3 col-md-3 col-lg-2 float-left" },
      [
        _c("h5", { staticClass: "font-weight-bold py-1 my-0" }, [
          _vm._v("Bedrijven")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "hidden" }, [
      _c(
        "span",
        {
          staticClass:
            "d-none d-sm-inline-block d-md-inline-block d-lg-inline-block d-xl-inline-block"
        },
        [_vm._v("Nieuw")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "mr-4" }, [
      _c("i", { staticClass: "fa fa-globe fa-fw" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "mr-2" }, [
      _c("i", { staticClass: "fa fa-envelope fa-fw" }),
      _vm._v(" A ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "mr-2" }, [
      _c("i", { staticClass: "fa fa-envelope fa-fw" }),
      _vm._v(" P ")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/contact/contactperson.vue?vue&type=template&id=24b8b8ea&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/contact/contactperson.vue?vue&type=template&id=24b8b8ea& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container-fluid" }, [
    _c("div", { staticClass: "row justify-content-center" }, [
      _c(
        "div",
        { staticClass: "col-md-12 col-lg-10" },
        [
          _c("uwk-alert", {
            attrs: {
              type: _vm.alertType,
              timeout: "3000",
              id: "contactPerson",
              message: _vm.alertMessage
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "card card-default" }, [
            _c("div", { staticClass: "card-header" }, [
              _c(
                "div",
                {
                  staticClass: "row justify-content-around align-content-center"
                },
                [
                  _vm._m(0),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "col-xs-6 col-sm-6 col-md-4 col-md-offset-1 col-lg-4 col-lg-offset-1"
                    },
                    [
                      _c("uwk-search", {
                        attrs: {
                          callback: _vm.search,
                          placeholder: "Zoek contactpersonen..",
                          nameEvent: "contactPerson-search"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-xs-3 col-sm-3 col-md-3 col-lg-2" },
                    [
                      _c(
                        "button",
                        {
                          staticClass:
                            "btn btn-outline-primary btn-sm float-md-right float-sm-left",
                          attrs: { id: "NewContactPerson" },
                          on: { click: _vm.create }
                        },
                        [
                          _c("i", {
                            staticClass: "far fa-address-card",
                            staticStyle: { width: "22px" },
                            attrs: { "aria-hidden": "true" }
                          }),
                          _c(
                            "span",
                            {
                              staticClass:
                                "d-none d-md-inline-block d-lg-inline-block d-xl-inline-block"
                            },
                            [_vm._v("Nieuw")]
                          )
                        ]
                      )
                    ]
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c("div", { staticClass: "table-responsive-lg" }, [
                  _c("table", { staticClass: "table table-hover" }, [
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.contactpersons, function(contactperson) {
                        return _c("tr", { key: contactperson.id }, [
                          _c(
                            "td",
                            {
                              staticStyle: { "vertical-align": "middle" },
                              attrs: { scope: "row" }
                            },
                            [
                              _vm._v(
                                "\r\n                                " +
                                  _vm._s(contactperson.firstName) +
                                  " " +
                                  _vm._s(contactperson.middleName) +
                                  " " +
                                  _vm._s(contactperson.lastName) +
                                  "\r\n                            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            { staticStyle: { "vertical-align": "middle" } },
                            [
                              _vm._v(
                                "\r\n                                " +
                                  _vm._s(contactperson.phoneNumber) +
                                  "\r\n                            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            { staticStyle: { "vertical-align": "middle" } },
                            [
                              _vm._v(
                                "\r\n                                " +
                                  _vm._s(contactperson.mobilePhoneNumber) +
                                  "\r\n                            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            { staticStyle: { "vertical-align": "middle" } },
                            [
                              _c(
                                "a",
                                {
                                  attrs: {
                                    href: _vm.emailLink(contactperson.email)
                                  }
                                },
                                [_vm._v(_vm._s(contactperson.email))]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            { staticStyle: { "vertical-align": "middle" } },
                            [
                              _vm._v(
                                "\r\n                                Werkt bij ...\r\n                            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("td", [
                            _c("span", { staticClass: "float-right" }, [
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-outline-primary btn-sm mb-1 mr-2",
                                  attrs: { role: "button" },
                                  on: {
                                    click: function($event) {
                                      return _vm.edit(contactperson)
                                    }
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "fa fa-edit",
                                    staticStyle: { width: "20px" },
                                    attrs: { "aria-hidden": "true" }
                                  }),
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "d-none d-lg-inline-block d-xl-inline-block"
                                    },
                                    [_vm._v("Edit")]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-outline-danger btn-sm mb-1",
                                  attrs: { role: "button" },
                                  on: {
                                    click: function($event) {
                                      return _vm.destroy(contactperson)
                                    }
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "fa fa-trash",
                                    staticStyle: { width: "20px" },
                                    attrs: { "aria-hidden": "true" }
                                  }),
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "d-none d-lg-inline-block d-xl-inline-block"
                                    },
                                    [_vm._v("Delete")]
                                  )
                                ]
                              )
                            ])
                          ])
                        ])
                      }),
                      0
                    )
                  ])
                ]),
                _vm._v(" "),
                _vm.searchInput !== ""
                  ? _c("uwk-pagination", {
                      ref: "contact-person",
                      attrs: {
                        pagination: _vm.pagination,
                        callback: _vm.search,
                        options: _vm.paginationOptions,
                        size: ""
                      }
                    })
                  : _vm._e(),
                _vm._v(" "),
                _vm.searchInput === ""
                  ? _c("uwk-pagination", {
                      ref: "contact-person",
                      attrs: {
                        pagination: _vm.pagination,
                        callback: _vm.getContactpersons,
                        options: _vm.paginationOptions,
                        size: ""
                      }
                    })
                  : _vm._e()
              ],
              1
            )
          ])
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: { id: "modal-edit-person", tabindex: "-1", role: "dialog" }
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c(
                "div",
                { staticClass: "modal-header" },
                [
                  _vm.createForm === true
                    ? [
                        _c("h4", { staticClass: "modal-title" }, [
                          _vm._v(
                            "\r\n                        Creeër een nieuw Contactpersoon !!\r\n                    "
                          )
                        ])
                      ]
                    : [
                        _c("h4", { staticClass: "modal-title" }, [
                          _vm._v(
                            "\r\n                        Bewerk Contactpersoon: " +
                              _vm._s(_vm.editForm.firstName) +
                              " " +
                              _vm._s(_vm.editForm.middleName) +
                              " " +
                              _vm._s(_vm.editForm.lastName) +
                              " !\r\n                    "
                          )
                        ])
                      ],
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "close",
                      attrs: { type: "button ", "aria-hidden": "true" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.closeEditForm($event)
                        }
                      }
                    },
                    [_vm._v("×")]
                  )
                ],
                2
              ),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c(
                  "form",
                  {
                    attrs: {
                      method: "post",
                      action: "/api/v1/contactpersonen",
                      role: "form"
                    },
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.onSubmitEdit($event)
                      },
                      keydown: [
                        function($event) {
                          return _vm.editForm.errors.clear($event.target.name)
                        },
                        function($event) {
                          if (
                            !$event.type.indexOf("key") &&
                            _vm._k(
                              $event.keyCode,
                              "enter",
                              13,
                              $event.key,
                              "Enter"
                            )
                          ) {
                            return null
                          }
                          $event.preventDefault()
                          return _vm.moveOnEnter($event)
                        }
                      ]
                    }
                  },
                  [
                    _vm.createForm == true
                      ? void 0
                      : [
                          _c("input", {
                            attrs: {
                              type: "hidden",
                              name: "_method",
                              value: "patch"
                            }
                          })
                        ],
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row" }, [
                      _c(
                        "label",
                        {
                          staticClass: "col-md-4 col-form-label",
                          attrs: { for: "nameSlug" }
                        },
                        [_vm._v("volledige_naam")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-8" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.trim",
                              value: _vm.editForm.nameSlug,
                              expression: "editForm.nameSlug",
                              modifiers: { trim: true }
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.editForm.errors.has("nameSlug")
                          },
                          attrs: {
                            type: "text",
                            id: "nameSlug",
                            name: "nameSlug",
                            disabled: ""
                          },
                          domProps: { value: _vm.editForm.nameSlug },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.editForm,
                                "nameSlug",
                                $event.target.value.trim()
                              )
                            },
                            blur: function($event) {
                              return _vm.$forceUpdate()
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.editForm.errors.has("nameSlug")
                          ? _c("div", {
                              staticClass: "invalid-feedback",
                              domProps: {
                                textContent: _vm._s(
                                  _vm.editForm.errors.get("nameSlug")
                                )
                              }
                            })
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row" }, [
                      _c(
                        "label",
                        {
                          staticClass: "col-md-4 col-form-label",
                          attrs: { for: "initials" }
                        },
                        [_vm._v("Initialen")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-8" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.trim",
                              value: _vm.editForm.initials,
                              expression: "editForm.initials",
                              modifiers: { trim: true }
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.editForm.errors.has("initials")
                          },
                          attrs: {
                            type: "text",
                            id: "initials",
                            name: "initials"
                          },
                          domProps: { value: _vm.editForm.initials },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.editForm,
                                "initials",
                                $event.target.value.trim()
                              )
                            },
                            blur: function($event) {
                              return _vm.$forceUpdate()
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.editForm.errors.has("initials")
                          ? _c("div", {
                              staticClass: "invalid-feedback",
                              domProps: {
                                textContent: _vm._s(
                                  _vm.editForm.errors.get("initials")
                                )
                              }
                            })
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row" }, [
                      _c(
                        "label",
                        {
                          staticClass: "col-md-4 col-form-label",
                          attrs: { for: "firstName" }
                        },
                        [_vm._v("Voornaam")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-8" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.trim",
                              value: _vm.editForm.firstName,
                              expression: "editForm.firstName",
                              modifiers: { trim: true }
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.editForm.errors.has("firstName")
                          },
                          attrs: {
                            type: "text",
                            id: "firstName",
                            name: "firstName",
                            required: ""
                          },
                          domProps: { value: _vm.editForm.firstName },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.editForm,
                                "firstName",
                                $event.target.value.trim()
                              )
                            },
                            blur: function($event) {
                              return _vm.$forceUpdate()
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.editForm.errors.has("firstName")
                          ? _c("div", {
                              staticClass: "invalid-feedback",
                              domProps: {
                                textContent: _vm._s(
                                  _vm.editForm.errors.get("firstName")
                                )
                              }
                            })
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row" }, [
                      _c(
                        "label",
                        {
                          staticClass: "col-md-4 col-form-label",
                          attrs: { for: "middleName" }
                        },
                        [_vm._v("Tussenvoegsel")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-8" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.trim",
                              value: _vm.editForm.middleName,
                              expression: "editForm.middleName",
                              modifiers: { trim: true }
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.editForm.errors.has("middleName")
                          },
                          attrs: {
                            type: "text",
                            id: "middleName",
                            name: "middleName"
                          },
                          domProps: { value: _vm.editForm.middleName },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.editForm,
                                "middleName",
                                $event.target.value.trim()
                              )
                            },
                            blur: function($event) {
                              return _vm.$forceUpdate()
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.editForm.errors.has("middleName")
                          ? _c("div", {
                              staticClass: "invalid-feedback",
                              domProps: {
                                textContent: _vm._s(
                                  _vm.editForm.errors.get("middleName")
                                )
                              }
                            })
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row" }, [
                      _c(
                        "label",
                        {
                          staticClass: "col-md-4 col-form-label",
                          attrs: { for: "lastName" }
                        },
                        [_vm._v("Achternaam")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-8" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.trim",
                              value: _vm.editForm.lastName,
                              expression: "editForm.lastName",
                              modifiers: { trim: true }
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.editForm.errors.has("lastName")
                          },
                          attrs: {
                            type: "text",
                            id: "lastName",
                            name: "lastName",
                            required: ""
                          },
                          domProps: { value: _vm.editForm.lastName },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.editForm,
                                "lastName",
                                $event.target.value.trim()
                              )
                            },
                            blur: function($event) {
                              return _vm.$forceUpdate()
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.editForm.errors.has("lastName")
                          ? _c("div", {
                              staticClass: "invalid-feedback",
                              domProps: {
                                textContent: _vm._s(
                                  _vm.editForm.errors.get("lastName")
                                )
                              }
                            })
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row" }, [
                      _c(
                        "label",
                        {
                          staticClass: "col-md-4 col-form-label",
                          attrs: { for: "phoneNumber" }
                        },
                        [_vm._v("Telefoonnummer")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-8" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.trim",
                              value: _vm.editForm.phoneNumber,
                              expression: "editForm.phoneNumber",
                              modifiers: { trim: true }
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.editForm.errors.has("phoneNumber")
                          },
                          attrs: {
                            type: "text",
                            id: "phoneNumber",
                            name: "phoneNumber"
                          },
                          domProps: { value: _vm.editForm.phoneNumber },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.editForm,
                                "phoneNumber",
                                $event.target.value.trim()
                              )
                            },
                            blur: function($event) {
                              return _vm.$forceUpdate()
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.editForm.errors.has("phoneNumber")
                          ? _c("span", {
                              staticClass: "invalid-feedback",
                              domProps: {
                                textContent: _vm._s(
                                  _vm.editForm.errors.get("phoneNumber")
                                )
                              }
                            })
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row" }, [
                      _c(
                        "label",
                        {
                          staticClass: "col-md-4 col-form-label",
                          attrs: { for: "mobilePhoneNumber" }
                        },
                        [_vm._v("Mobiele telefoon")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-8" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.trim",
                              value: _vm.editForm.mobilePhoneNumber,
                              expression: "editForm.mobilePhoneNumber",
                              modifiers: { trim: true }
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.editForm.errors.has(
                              "mobilePhoneNumber"
                            )
                          },
                          attrs: {
                            type: "text",
                            id: "mobilePhoneNumber",
                            name: "mobilePhoneNumber"
                          },
                          domProps: { value: _vm.editForm.mobilePhoneNumber },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.editForm,
                                "mobilePhoneNumber",
                                $event.target.value.trim()
                              )
                            },
                            blur: function($event) {
                              return _vm.$forceUpdate()
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.editForm.errors.has("mobilePhoneNumber")
                          ? _c("div", {
                              staticClass: "invalid-feedback",
                              domProps: {
                                textContent: _vm._s(
                                  _vm.editForm.errors.get("mobilePhoneNumber")
                                )
                              }
                            })
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row" }, [
                      _c(
                        "label",
                        {
                          staticClass: "col-md-4 col-form-label",
                          attrs: { for: "email" }
                        },
                        [_vm._v("Email Adres")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-8" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.trim",
                              value: _vm.editForm.email,
                              expression: "editForm.email",
                              modifiers: { trim: true }
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.editForm.errors.has("email")
                          },
                          attrs: {
                            type: "text",
                            id: "email",
                            name: "email",
                            required: ""
                          },
                          domProps: { value: _vm.editForm.email },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.editForm,
                                "email",
                                $event.target.value.trim()
                              )
                            },
                            blur: function($event) {
                              return _vm.$forceUpdate()
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.editForm.errors.has("email")
                          ? _c("div", {
                              staticClass: "invalid-feedback",
                              domProps: {
                                textContent: _vm._s(
                                  _vm.editForm.errors.get("email")
                                )
                              }
                            })
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "modal-footer" },
                      [
                        _vm.createForm === true
                          ? [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-secondary",
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.closeEditForm($event)
                                    }
                                  }
                                },
                                [_vm._v("Sluit")]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-primary",
                                  attrs: { disabled: _vm.editForm.errors.any() }
                                },
                                [_vm._v("Creëer")]
                              )
                            ]
                          : [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-secondary",
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.closeEditForm($event)
                                    }
                                  }
                                },
                                [_vm._v("Sluit")]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-warning",
                                  attrs: { disabled: _vm.editForm.errors.any() }
                                },
                                [_vm._v("Wijzig")]
                              )
                            ]
                      ],
                      2
                    )
                  ],
                  2
                )
              ])
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-xs-3 col-sm-3 col-md-3 col-lg-2 float-left" },
      [
        _c("h5", { staticClass: "font-weight-bold py-1 my-0" }, [
          _vm._v("Contactpersonen")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Naam ↓")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Telefoon # ↓")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Mobiel # ↓")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Email ↓")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Status")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/contact/productgroups.vue?vue&type=template&id=a38486ce&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/contact/productgroups.vue?vue&type=template&id=a38486ce& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container-fluid" }, [
    _c(
      "div",
      { staticClass: "row justify-content-center" },
      [
        _c("uwk-alert", {
          attrs: {
            type: _vm.alertType,
            timeout: "3000",
            id: "productgroup",
            message: _vm.alertMessage
          }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-12 col-lg-10" }, [
          _c("div", { staticClass: "card card-default" }, [
            _c("div", { staticClass: "card-header" }, [
              _c("div", { staticClass: "row justify-content-around" }, [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "col-xs-6 col-sm-6 col-md-4 col-md-offset-1 col-lg-4 col-lg-offset-1"
                  },
                  [
                    _c("uwk-search", {
                      attrs: {
                        callback: _vm.search,
                        placeholder: "Zoek productgroep..",
                        nameEvent: "contactProductgroups-search"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-xs-3 col-sm-3 col-md-3 col-lg-2" },
                  [
                    _c(
                      "button",
                      {
                        staticClass:
                          "btn btn-outline-primary btn-sm float-md-right float-sm-left",
                        attrs: { id: "NewProductgroup" },
                        on: { click: _vm.create }
                      },
                      [
                        _c("i", {
                          staticClass: "fa fa-tags",
                          staticStyle: { width: "22px" },
                          attrs: { "aria-hidden": "true" }
                        }),
                        _c(
                          "span",
                          {
                            staticClass:
                              "d-none d-md-inline-block d-lg-inline-block d-xl-inline-block"
                          },
                          [_vm._v("Nieuw")]
                        )
                      ]
                    )
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c("div", { staticClass: "table-responsive-lg" }, [
                  _c("table", { staticClass: "table table-hover" }, [
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.productgroups, function(productgroup) {
                        return _c("tr", { key: productgroup.id }, [
                          _c(
                            "td",
                            {
                              staticStyle: { "vertical-align": "middle" },
                              attrs: { scope: "row" }
                            },
                            [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(productgroup.name) +
                                  "\n                            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            { staticStyle: { "vertical-align": "middle" } },
                            [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(productgroup.description) +
                                  "\n                            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("td", [
                            _c("span", { staticClass: "float-right" }, [
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-outline-primary btn-sm mb-1 mr-2",
                                  attrs: { role: "button" },
                                  on: {
                                    click: function($event) {
                                      return _vm.edit(productgroup)
                                    }
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "fa fa-edit",
                                    staticStyle: { width: "20px" },
                                    attrs: { "aria-hidden": "true" }
                                  }),
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "d-none d-lg-inline-block d-xl-inline-block"
                                    },
                                    [_vm._v("Edit")]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-outline-danger btn-sm mb-1",
                                  attrs: { role: "button" },
                                  on: {
                                    click: function($event) {
                                      return _vm.destroy(productgroup)
                                    }
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "fa fa-trash",
                                    staticStyle: { width: "20px" },
                                    attrs: { "aria-hidden": "true" }
                                  }),
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "d-none d-lg-inline-block d-xl-inline-block"
                                    },
                                    [_vm._v("Delete")]
                                  )
                                ]
                              )
                            ])
                          ])
                        ])
                      }),
                      0
                    )
                  ])
                ]),
                _vm._v(" "),
                _vm.searchInput !== ""
                  ? _c("uwk-pagination", {
                      ref: "contact-productgroups",
                      attrs: {
                        pagination: _vm.pagination,
                        callback: _vm.search,
                        options: _vm.paginationOptions,
                        size: ""
                      }
                    })
                  : _vm._e(),
                _vm._v(" "),
                _vm.searchInput === ""
                  ? _c("uwk-pagination", {
                      ref: "contact-productgroups",
                      attrs: {
                        pagination: _vm.pagination,
                        callback: _vm.getContactProductgroups,
                        options: _vm.paginationOptions,
                        size: ""
                      }
                    })
                  : _vm._e()
              ],
              1
            )
          ])
        ])
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: { id: "modal-edit-productgroup", tabindex: "-1", role: "dialog" }
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c(
                "div",
                { staticClass: "modal-header" },
                [
                  _vm.createForm == true
                    ? [
                        _c("h4", { staticClass: "modal-title" }, [
                          _vm._v(
                            "\n                            Creeër een nieuwe Productgroep !!\n                        "
                          )
                        ])
                      ]
                    : [
                        _c("h4", { staticClass: "modal-title" }, [
                          _vm._v(
                            "\n                            Bewerk Productgroep: " +
                              _vm._s(_vm.editForm.name) +
                              " !\n                        "
                          )
                        ])
                      ],
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "close",
                      attrs: { type: "button ", "aria-hidden": "true" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.closeEditForm($event)
                        }
                      }
                    },
                    [_vm._v("×")]
                  )
                ],
                2
              ),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c(
                  "form",
                  {
                    attrs: {
                      method: "post",
                      action: "/api/v1/productgroepen",
                      role: "form"
                    },
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.onSubmitEdit($event)
                      },
                      keydown: [
                        function($event) {
                          return _vm.editForm.errors.clear($event.target.name)
                        },
                        function($event) {
                          if (
                            !$event.type.indexOf("key") &&
                            _vm._k(
                              $event.keyCode,
                              "enter",
                              13,
                              $event.key,
                              "Enter"
                            )
                          ) {
                            return null
                          }
                          $event.preventDefault()
                          return _vm.moveOnEnter($event)
                        }
                      ]
                    }
                  },
                  [
                    _vm.createForm == true
                      ? void 0
                      : [
                          _c("input", {
                            attrs: {
                              type: "hidden",
                              name: "_method",
                              value: "patch"
                            }
                          })
                        ],
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row" }, [
                      _c(
                        "label",
                        {
                          staticClass: "col-md-4 col-form-label",
                          attrs: { for: "name-edit" }
                        },
                        [_vm._v("Naam")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-8" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.trim",
                              value: _vm.editForm.name,
                              expression: "editForm.name",
                              modifiers: { trim: true }
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.editForm.errors.has("name")
                          },
                          attrs: {
                            type: "text",
                            id: "name-edit",
                            name: "name",
                            required: ""
                          },
                          domProps: { value: _vm.editForm.name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.editForm,
                                "name",
                                $event.target.value.trim()
                              )
                            },
                            blur: function($event) {
                              return _vm.$forceUpdate()
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.editForm.errors.has("name")
                          ? _c("div", {
                              staticClass: "invalid-feedback",
                              domProps: {
                                textContent: _vm._s(
                                  _vm.editForm.errors.get("name")
                                )
                              }
                            })
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row" }, [
                      _c(
                        "label",
                        {
                          staticClass: "col-md-4 col-form-label",
                          attrs: { for: "description-edit" }
                        },
                        [_vm._v("Omschrijving")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-8" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.trim",
                              value: _vm.editForm.description,
                              expression: "editForm.description",
                              modifiers: { trim: true }
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.editForm.errors.has("description")
                          },
                          attrs: {
                            type: "text",
                            id: "description-edit",
                            name: "description",
                            required: ""
                          },
                          domProps: { value: _vm.editForm.description },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.editForm,
                                "description",
                                $event.target.value.trim()
                              )
                            },
                            blur: function($event) {
                              return _vm.$forceUpdate()
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.editForm.errors.has("description")
                          ? _c("div", {
                              staticClass: "invalid-feedback",
                              domProps: {
                                textContent: _vm._s(
                                  _vm.editForm.errors.get("description")
                                )
                              }
                            })
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row invisible" }, [
                      _c(
                        "label",
                        {
                          staticClass: "col-md-4 col-form-label",
                          attrs: { for: "slug-edit" }
                        },
                        [_vm._v("Slug")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-8" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.trim",
                              value: _vm.editForm.slug,
                              expression: "editForm.slug",
                              modifiers: { trim: true }
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.editForm.errors.has("slug")
                          },
                          attrs: {
                            type: "text",
                            id: "slug-edit",
                            name: "slug",
                            disabled: ""
                          },
                          domProps: { value: _vm.editForm.slug },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.editForm,
                                "slug",
                                $event.target.value.trim()
                              )
                            },
                            blur: function($event) {
                              return _vm.$forceUpdate()
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.editForm.errors.has("slug")
                          ? _c("div", {
                              staticClass: "invalid-feedback",
                              domProps: {
                                textContent: _vm._s(
                                  _vm.editForm.errors.get("slug")
                                )
                              }
                            })
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "modal-footer" },
                      [
                        _vm.createForm == true
                          ? [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-secondary",
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.closeEditForm($event)
                                    }
                                  }
                                },
                                [_vm._v("Sluit")]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-primary",
                                  attrs: { disabled: _vm.editForm.errors.any() }
                                },
                                [_vm._v("Creëer")]
                              )
                            ]
                          : [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-secondary",
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.closeEditForm($event)
                                    }
                                  }
                                },
                                [_vm._v("Sluit")]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-warning",
                                  attrs: { disabled: _vm.editForm.errors.any() }
                                },
                                [_vm._v("Wijzig")]
                              )
                            ]
                      ],
                      2
                    )
                  ],
                  2
                )
              ])
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-xs-3 col-sm-3 col-md-3 col-lg-2 float-left" },
      [
        _c("h5", { staticClass: "font-weight-bold py-1 my-0" }, [
          _vm._v("Productgroepen")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Naam")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Omschrijving")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/helpers/Alert.vue?vue&type=template&id=334b0012&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/helpers/Alert.vue?vue&type=template&id=334b0012& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.showAlert,
          expression: "showAlert"
        }
      ],
      class: _vm.alertClasses
    },
    [
      _c("strong", { domProps: { textContent: _vm._s(_vm.body) } }),
      _vm._v(" "),
      _c(
        "span",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.important,
              expression: "important"
            }
          ],
          staticClass: "alert__close float-right",
          on: {
            click: function($event) {
              _vm.showAlert = false
            }
          }
        },
        [
          _c("i", {
            staticClass: "fa fa-times-circle-o fa-2x",
            attrs: { "aria-hidden": "true" }
          })
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/helpers/Search.vue?vue&type=template&id=4ac9f29d&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/helpers/Search.vue?vue&type=template&id=4ac9f29d& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "form-group row col-xs-12 col-sm-12 col-md-12 col-lg-12" },
    [
      _c("div", { staticClass: "input-group input-group-sm" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.searchData,
              expression: "searchData"
            }
          ],
          staticClass: "form-control",
          attrs: {
            type: "text",
            "aria-label": "title",
            "aria-describedby": "button-search",
            placeholder: _vm.title
          },
          domProps: { value: _vm.searchData },
          on: {
            keydown: function($event) {
              if (
                !$event.type.indexOf("key") &&
                _vm._k(
                  $event.keyCode,
                  "escape",
                  undefined,
                  $event.key,
                  undefined
                )
              ) {
                return null
              }
              $event.preventDefault()
              return _vm.escape($event)
            },
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.searchData = $event.target.value
            }
          }
        }),
        _vm._v(" "),
        _vm._m(0)
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-append" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-primary btn-sm float-right",
          attrs: { id: "button-search", type: "button", disabled: "" }
        },
        [
          _c("i", {
            staticClass: "fas fa-search",
            staticStyle: { width: "20px" },
            attrs: { "aria-hidden": "true" }
          })
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/helpers/vue-bootstrap-pagination.vue?vue&type=template&id=cd137c56&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/helpers/vue-bootstrap-pagination.vue?vue&type=template&id=cd137c56& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.pagination.last_page > 1
      ? _c("nav", { attrs: { "aria-label": "Page navigation" } }, [
          _vm.pagination.last_page > 0
            ? _c(
                "ul",
                {
                  staticClass: "pagination justify-content-center",
                  class: _vm.sizeClass
                },
                [
                  _vm.showPrevious()
                    ? _c(
                        "li",
                        {
                          staticClass: "page-item",
                          class: { disabled: _vm.pagination.current_page <= 1 }
                        },
                        [
                          _vm.pagination.current_page <= 1
                            ? _c("span")
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.pagination.current_page > 1
                            ? _c(
                                "a",
                                {
                                  staticClass: "page-link",
                                  attrs: {
                                    href: "#",
                                    "aria-label": _vm.config.ariaPrevious
                                  },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.changePage(
                                        _vm.pagination.current_page - 1
                                      )
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "span",
                                    { attrs: { "aria-hidden": "true" } },
                                    [_vm._v(_vm._s(_vm.config.previousText))]
                                  )
                                ]
                              )
                            : _vm._e()
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm._l(_vm.array, function(num) {
                    return _c(
                      "li",
                      {
                        staticClass: "page-item",
                        class: { active: num === _vm.pagination.current_page }
                      },
                      [
                        _c(
                          "a",
                          {
                            staticClass: "page-link",
                            attrs: { href: "#" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.changePage(num)
                              }
                            }
                          },
                          [_vm._v(_vm._s(num))]
                        )
                      ]
                    )
                  }),
                  _vm._v(" "),
                  _vm.showNext()
                    ? _c(
                        "li",
                        {
                          staticClass: "page-item",
                          class: {
                            disabled:
                              _vm.pagination.current_page ===
                                _vm.pagination.last_page ||
                              _vm.pagination.last_page === 0
                          }
                        },
                        [
                          _vm.pagination.current_page ===
                            _vm.pagination.last_page ||
                          _vm.pagination.last_page === 0
                            ? _c("span")
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.pagination.current_page < _vm.pagination.last_page
                            ? _c(
                                "a",
                                {
                                  staticClass: "page-link",
                                  attrs: {
                                    href: "#",
                                    "aria-label": _vm.config.ariaNext
                                  },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.changePage(
                                        _vm.pagination.current_page + 1
                                      )
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "span",
                                    { attrs: { "aria-hidden": "true" } },
                                    [_vm._v(_vm._s(_vm.config.nextText))]
                                  )
                                ]
                              )
                            : _vm._e()
                        ]
                      )
                    : _vm._e()
                ],
                2
              )
            : _vm._e()
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/main.vue?vue&type=template&id=c176d7f8&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/main.vue?vue&type=template&id=c176d7f8& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card" }, [
      _c("div", { staticClass: "card-header" }, [
        _c("div", { staticClass: "row" }, [
          _c("h5", { staticClass: "font-weight-bold py-1 my-0" }, [
            _vm._v("Main Content")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _vm._v("\n        Content here\n    ")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passport/AuthorizedClients.vue?vue&type=template&id=397d14ca&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/passport/AuthorizedClients.vue?vue&type=template&id=397d14ca&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.tokens.length > 0
      ? _c("div", [
          _c("div", { staticClass: "card card-default mb-2" }, [
            _c("div", { staticClass: "card-header" }, [
              _vm._v("Authorized Applications")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("table", { staticClass: "table table-borderless mb-0" }, [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.tokens, function(token) {
                    return _c("tr", [
                      _c(
                        "td",
                        { staticStyle: { "vertical-align": "middle" } },
                        [
                          _vm._v(
                            "\n                                " +
                              _vm._s(token.client.name) +
                              "\n                            "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        { staticStyle: { "vertical-align": "middle" } },
                        [
                          token.scopes.length > 0
                            ? _c("span", [
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(token.scopes.join(", ")) +
                                    "\n                                "
                                )
                              ])
                            : _vm._e()
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        { staticStyle: { "vertical-align": "middle" } },
                        [
                          _c(
                            "a",
                            {
                              staticClass: "action-link text-danger",
                              on: {
                                click: function($event) {
                                  return _vm.revoke(token)
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                                    Revoke\n                                "
                              )
                            ]
                          )
                        ]
                      )
                    ])
                  }),
                  0
                )
              ])
            ])
          ])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Scopes")]),
        _vm._v(" "),
        _c("th")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passport/Clients.vue?vue&type=template&id=1552a5b6&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/passport/Clients.vue?vue&type=template&id=1552a5b6&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "card card-default mb-2" }, [
      _c("div", { staticClass: "card-header" }, [
        _c(
          "div",
          {
            staticStyle: {
              display: "flex",
              "justify-content": "space-between",
              "align-items": "center"
            }
          },
          [
            _c("span", [
              _vm._v("\n                    OAuth Clients\n                ")
            ]),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "action-link",
                attrs: { tabindex: "-1" },
                on: { click: _vm.showCreateClientForm }
              },
              [
                _vm._v(
                  "\n                    Create New Client\n                "
                )
              ]
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _vm.clients.length === 0
          ? _c("p", { staticClass: "mb-0" }, [
              _vm._v(
                "\n                You have not created any OAuth clients.\n            "
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.clients.length > 0
          ? _c("table", { staticClass: "table table-borderless mb-0" }, [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.clients, function(client) {
                  return _c("tr", [
                    _c("td", { staticStyle: { "vertical-align": "middle" } }, [
                      _vm._v(
                        "\n                            " +
                          _vm._s(client.id) +
                          "\n                        "
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", { staticStyle: { "vertical-align": "middle" } }, [
                      _vm._v(
                        "\n                            " +
                          _vm._s(client.name) +
                          "\n                        "
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", { staticStyle: { "vertical-align": "middle" } }, [
                      _c("code", [_vm._v(_vm._s(client.secret))])
                    ]),
                    _vm._v(" "),
                    _c("td", { staticStyle: { "vertical-align": "middle" } }, [
                      _c(
                        "a",
                        {
                          staticClass: "action-link",
                          attrs: { tabindex: "-1" },
                          on: {
                            click: function($event) {
                              return _vm.edit(client)
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                                Edit\n                            "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", { staticStyle: { "vertical-align": "middle" } }, [
                      _c(
                        "a",
                        {
                          staticClass: "action-link text-danger",
                          on: {
                            click: function($event) {
                              return _vm.destroy(client)
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                                Delete\n                            "
                          )
                        ]
                      )
                    ])
                  ])
                }),
                0
              )
            ])
          : _vm._e()
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: { id: "modal-create-client", tabindex: "-1", role: "dialog" }
      },
      [
        _c("div", { staticClass: "modal-dialog" }, [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(1),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _vm.createForm.errors.length > 0
                ? _c("div", { staticClass: "alert alert-danger" }, [
                    _vm._m(2),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c(
                      "ul",
                      _vm._l(_vm.createForm.errors, function(error) {
                        return _c("li", [
                          _vm._v(
                            "\n                                " +
                              _vm._s(error) +
                              "\n                            "
                          )
                        ])
                      }),
                      0
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("form", { attrs: { role: "form" } }, [
                _c("div", { staticClass: "form-group row" }, [
                  _c("label", { staticClass: "col-md-3 col-form-label" }, [
                    _vm._v("Name")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-9" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.createForm.name,
                          expression: "createForm.name"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { id: "create-client-name", type: "text" },
                      domProps: { value: _vm.createForm.name },
                      on: {
                        keyup: function($event) {
                          if (
                            !$event.type.indexOf("key") &&
                            _vm._k(
                              $event.keyCode,
                              "enter",
                              13,
                              $event.key,
                              "Enter"
                            )
                          ) {
                            return null
                          }
                          return _vm.store($event)
                        },
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.createForm, "name", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "form-text text-muted" }, [
                      _vm._v(
                        "\n                                    Something your users will recognize and trust.\n                                "
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c("label", { staticClass: "col-md-3 col-form-label" }, [
                    _vm._v("Redirect URL")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-9" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.createForm.redirect,
                          expression: "createForm.redirect"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", name: "redirect" },
                      domProps: { value: _vm.createForm.redirect },
                      on: {
                        keyup: function($event) {
                          if (
                            !$event.type.indexOf("key") &&
                            _vm._k(
                              $event.keyCode,
                              "enter",
                              13,
                              $event.key,
                              "Enter"
                            )
                          ) {
                            return null
                          }
                          return _vm.store($event)
                        },
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.createForm,
                            "redirect",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "form-text text-muted" }, [
                      _vm._v(
                        "\n                                    Your application's authorization callback URL.\n                                "
                      )
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-secondary",
                  attrs: { type: "button", "data-dismiss": "modal" }
                },
                [_vm._v("Close")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  attrs: { type: "button" },
                  on: { click: _vm.store }
                },
                [
                  _vm._v(
                    "\n                        Create\n                    "
                  )
                ]
              )
            ])
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: { id: "modal-edit-client", tabindex: "-1", role: "dialog" }
      },
      [
        _c("div", { staticClass: "modal-dialog" }, [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(3),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _vm.editForm.errors.length > 0
                ? _c("div", { staticClass: "alert alert-danger" }, [
                    _vm._m(4),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c(
                      "ul",
                      _vm._l(_vm.editForm.errors, function(error) {
                        return _c("li", [
                          _vm._v(
                            "\n                                " +
                              _vm._s(error) +
                              "\n                            "
                          )
                        ])
                      }),
                      0
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("form", { attrs: { role: "form" } }, [
                _c("div", { staticClass: "form-group row" }, [
                  _c("label", { staticClass: "col-md-3 col-form-label" }, [
                    _vm._v("Name")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-9" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.editForm.name,
                          expression: "editForm.name"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { id: "edit-client-name", type: "text" },
                      domProps: { value: _vm.editForm.name },
                      on: {
                        keyup: function($event) {
                          if (
                            !$event.type.indexOf("key") &&
                            _vm._k(
                              $event.keyCode,
                              "enter",
                              13,
                              $event.key,
                              "Enter"
                            )
                          ) {
                            return null
                          }
                          return _vm.update($event)
                        },
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.editForm, "name", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "form-text text-muted" }, [
                      _vm._v(
                        "\n                                    Something your users will recognize and trust.\n                                "
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c("label", { staticClass: "col-md-3 col-form-label" }, [
                    _vm._v("Redirect URL")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-9" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.editForm.redirect,
                          expression: "editForm.redirect"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", name: "redirect" },
                      domProps: { value: _vm.editForm.redirect },
                      on: {
                        keyup: function($event) {
                          if (
                            !$event.type.indexOf("key") &&
                            _vm._k(
                              $event.keyCode,
                              "enter",
                              13,
                              $event.key,
                              "Enter"
                            )
                          ) {
                            return null
                          }
                          return _vm.update($event)
                        },
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.editForm,
                            "redirect",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "form-text text-muted" }, [
                      _vm._v(
                        "\n                                    Your application's authorization callback URL.\n                                "
                      )
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-secondary",
                  attrs: { type: "button", "data-dismiss": "modal" }
                },
                [_vm._v("Close")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  attrs: { type: "button" },
                  on: { click: _vm.update }
                },
                [
                  _vm._v(
                    "\n                        Save Changes\n                    "
                  )
                ]
              )
            ])
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Client ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Secret")]),
        _vm._v(" "),
        _c("th"),
        _vm._v(" "),
        _c("th")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h4", { staticClass: "modal-title" }, [
        _vm._v("\n                        Create Client\n                    ")
      ]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-hidden": "true"
          }
        },
        [_vm._v("×")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "mb-0" }, [
      _c("strong", [_vm._v("Whoops!")]),
      _vm._v(" Something went wrong!")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h4", { staticClass: "modal-title" }, [
        _vm._v("\n                        Edit Client\n                    ")
      ]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-hidden": "true"
          }
        },
        [_vm._v("×")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "mb-0" }, [
      _c("strong", [_vm._v("Whoops!")]),
      _vm._v(" Something went wrong!")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passport/PersonalAccessTokens.vue?vue&type=template&id=49962cc0&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/passport/PersonalAccessTokens.vue?vue&type=template&id=49962cc0&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", [
      _c("div", { staticClass: "card card-default mb-2" }, [
        _c("div", { staticClass: "card-header" }, [
          _c(
            "div",
            {
              staticStyle: {
                display: "flex",
                "justify-content": "space-between",
                "align-items": "center"
              }
            },
            [
              _c("span", [
                _vm._v(
                  "\n                        Personal Access Tokens\n                    "
                )
              ]),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "action-link",
                  attrs: { tabindex: "-1" },
                  on: { click: _vm.showCreateTokenForm }
                },
                [
                  _vm._v(
                    "\n                        Create New Token\n                    "
                  )
                ]
              )
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _vm.tokens.length === 0
            ? _c("p", { staticClass: "mb-0" }, [
                _vm._v(
                  "\n                    You have not created any personal access tokens.\n                "
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.tokens.length > 0
            ? _c("table", { staticClass: "table table-borderless mb-0" }, [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.tokens, function(token) {
                    return _c("tr", [
                      _c(
                        "td",
                        { staticStyle: { "vertical-align": "middle" } },
                        [
                          _vm._v(
                            "\n                                " +
                              _vm._s(token.name) +
                              "\n                            "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        { staticStyle: { "vertical-align": "middle" } },
                        [
                          _c(
                            "a",
                            {
                              staticClass: "action-link text-danger",
                              on: {
                                click: function($event) {
                                  return _vm.revoke(token)
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                                    Delete\n                                "
                              )
                            ]
                          )
                        ]
                      )
                    ])
                  }),
                  0
                )
              ])
            : _vm._e()
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: { id: "modal-create-token", tabindex: "-1", role: "dialog" }
      },
      [
        _c("div", { staticClass: "modal-dialog" }, [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(1),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _vm.form.errors.length > 0
                ? _c("div", { staticClass: "alert alert-danger" }, [
                    _vm._m(2),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c(
                      "ul",
                      _vm._l(_vm.form.errors, function(error) {
                        return _c("li", [
                          _vm._v(
                            "\n                                " +
                              _vm._s(error) +
                              "\n                            "
                          )
                        ])
                      }),
                      0
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c(
                "form",
                {
                  attrs: { role: "form" },
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.store($event)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "form-group row" }, [
                    _c("label", { staticClass: "col-md-4 col-form-label" }, [
                      _vm._v("Name")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.name,
                            expression: "form.name"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          id: "create-token-name",
                          type: "text",
                          name: "name"
                        },
                        domProps: { value: _vm.form.name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "name", $event.target.value)
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _vm.scopes.length > 0
                    ? _c("div", { staticClass: "form-group row" }, [
                        _c(
                          "label",
                          { staticClass: "col-md-4 col-form-label" },
                          [_vm._v("Scopes")]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-md-6" },
                          _vm._l(_vm.scopes, function(scope) {
                            return _c("div", [
                              _c("div", { staticClass: "checkbox" }, [
                                _c("label", [
                                  _c("input", {
                                    attrs: { type: "checkbox" },
                                    domProps: {
                                      checked: _vm.scopeIsAssigned(scope.id)
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.toggleScope(scope.id)
                                      }
                                    }
                                  }),
                                  _vm._v(
                                    "\n\n                                                " +
                                      _vm._s(scope.id) +
                                      "\n                                        "
                                  )
                                ])
                              ])
                            ])
                          }),
                          0
                        )
                      ])
                    : _vm._e()
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-secondary",
                  attrs: { type: "button", "data-dismiss": "modal" }
                },
                [_vm._v("Close")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  attrs: { type: "button" },
                  on: { click: _vm.store }
                },
                [
                  _vm._v(
                    "\n                        Create\n                    "
                  )
                ]
              )
            ])
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: { id: "modal-access-token", tabindex: "-1", role: "dialog" }
      },
      [
        _c("div", { staticClass: "modal-dialog" }, [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(3),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _c("p", [
                _vm._v(
                  "\n                        Here is your new personal access token. This is the only time it will be shown so don't lose it!\n                        You may now use this token to make API requests.\n                    "
                )
              ]),
              _vm._v(" "),
              _c(
                "textarea",
                { staticClass: "form-control", attrs: { rows: "10" } },
                [_vm._v(_vm._s(_vm.accessToken))]
              )
            ]),
            _vm._v(" "),
            _vm._m(4)
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [_c("th", [_vm._v("Name")]), _vm._v(" "), _c("th")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h4", { staticClass: "modal-title" }, [
        _vm._v("\n                        Create Token\n                    ")
      ]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-hidden": "true"
          }
        },
        [_vm._v("×")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "mb-0" }, [
      _c("strong", [_vm._v("Whoops!")]),
      _vm._v(" Something went wrong!")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h4", { staticClass: "modal-title" }, [
        _vm._v(
          "\n                        Personal Access Token\n                    "
        )
      ]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-hidden": "true"
          }
        },
        [_vm._v("×")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-secondary",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_vm._v("Close")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/project.vue?vue&type=template&id=3c0e981e&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/project.vue?vue&type=template&id=3c0e981e& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container-fluid" }, [
    _c(
      "div",
      { staticClass: "row justify-content-center" },
      [
        _c("uwk-alert", {
          attrs: {
            type: _vm.alertType,
            timeout: "3000",
            id: "project",
            message: _vm.alertMessage
          }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-2" }, [
          _c("div", { staticClass: "card mb-2" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c("li", [_vm._v("Sub-menu Items")]),
                _vm._v(" "),
                _c("Strong", [_vm._v("User online :")]),
                _vm._v(" "),
                _vm._l(_vm.usersInProjecten, function(user) {
                  return _c("div", [
                    _vm._v(
                      "\n                        -" +
                        _vm._s(user.name) +
                        "\n                    "
                    )
                  ])
                })
              ],
              2
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-10" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-header" }, [
              _c("div", { staticClass: "row justify-content-around" }, [
                _vm._m(1),
                _vm._v(" "),
                _vm._m(2),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-xs-2 col-sm-2 col-md-2 col-lg-2" },
                  [
                    _c(
                      "button",
                      {
                        staticClass:
                          "btn btn-outline-primary btn-sm float-md-right float-sm-left",
                        attrs: {
                          id: "NewProject",
                          role: "button",
                          disabled: ""
                        },
                        on: { click: _vm.create }
                      },
                      [
                        _c("i", {
                          staticClass: "fas fa-tasks",
                          staticStyle: { width: "22px" },
                          attrs: { "aria-hidden": "true" }
                        }),
                        _c(
                          "span",
                          {
                            staticClass:
                              "d-none d-md-inline-block d-lg-inline-block d-xl-inline-block"
                          },
                          [_vm._v("Nieuw")]
                        )
                      ]
                    )
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "card-body" },
              _vm._l(_vm.projects, function(project) {
                return _c("div", { key: project.projectId }, [
                  _c("ul", { staticClass: "list-group" }, [
                    _c(
                      "div",
                      { staticClass: "col-12 col-sm-12 col-md-12 col-lg-12" },
                      [
                        _c("div", { staticClass: "card mb-4" }, [
                          _c(
                            "div",
                            { staticClass: "card-header" },
                            [
                              _c("Strong", [
                                _vm._v(_vm._s(project.projectNaam))
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "card-body" }, [
                            _c("b", [_vm._v("Adres :")]),
                            _vm._v(
                              "\n                                        " +
                                _vm._s(project.projectLocatie) +
                                " " +
                                _vm._s(project.projectPlaats) +
                                "\n                                        "
                            ),
                            _c("br"),
                            _vm._v(" "),
                            _vm._m(3, true),
                            _vm._v(
                              "\n                                        " +
                                _vm._s(project.vestiging) +
                                "\n                                        "
                            ),
                            _c("br"),
                            _vm._v(" "),
                            _vm._m(4, true),
                            _vm._v(
                              "\n                                        " +
                                _vm._s(project.adviseur) +
                                "\n                                        "
                            ),
                            _c("br"),
                            _vm._v(" "),
                            _vm._m(5, true),
                            _vm._v(
                              "\n                                        " +
                                _vm._s(project.architect) +
                                "\n                                        "
                            ),
                            _c("br"),
                            _vm._v(" "),
                            _vm._m(6, true),
                            _vm._v(" "),
                            _c("div", { staticClass: "well" }, [
                              _vm._v(
                                "\n                                            " +
                                  _vm._s(project.omschrijving) +
                                  "\n                                        "
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass:
                                  "btn btn-outline-warning btn-sm float-right",
                                on: {
                                  click: function($event) {
                                    return _vm.edit(project)
                                  }
                                }
                              },
                              [
                                _c("i", {
                                  staticClass: "fa fa-edit",
                                  attrs: { "aria-hidden": "true" }
                                }),
                                _c("span", { staticClass: "hidden-xs" }, [
                                  _vm._v(" Edit")
                                ])
                              ]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "card mb-4" }, [
                          _c(
                            "div",
                            {
                              staticClass: "card-header",
                              attrs: { id: "e-projects" }
                            },
                            [
                              _c("Strong", [
                                _vm._v(
                                  "E Documenten van: " +
                                    _vm._s(project.projectNaam)
                                )
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm._m(7, true)
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "card mb-2" }, [
                          _c(
                            "div",
                            {
                              staticClass: "card-header",
                              attrs: { id: "w-projects" }
                            },
                            [
                              _c("Strong", [
                                _vm._v(
                                  "W Documenten van: " +
                                    _vm._s(project.projectNaam)
                                )
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm._m(8, true)
                        ])
                      ]
                    )
                  ])
                ])
              }),
              0
            )
          ])
        ])
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: { id: "modal-edit-projecten", tabindex: "-1", role: "dialog" }
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c(
                "div",
                { staticClass: "modal-header" },
                [
                  _vm.createForm == true
                    ? [
                        _c("h4", { staticClass: "modal-title" }, [
                          _vm._v(
                            "\n                            Creeër een nieuw Project !!\n                        "
                          )
                        ])
                      ]
                    : [
                        _c("h4", { staticClass: "modal-title" }, [
                          _vm._v(
                            "\n                            Bewerk Project: " +
                              _vm._s(_vm.editForm.projectNaam) +
                              " !\n                        "
                          )
                        ])
                      ],
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "close",
                      attrs: { type: "button ", "aria-hidden": "true" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.closeEditForm($event)
                        }
                      }
                    },
                    [_vm._v("×")]
                  )
                ],
                2
              ),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c(
                  "form",
                  {
                    attrs: {
                      method: "post",
                      action: "/api/v1/projecten",
                      role: "form"
                    },
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.onSubmitEdit($event)
                      },
                      keydown: [
                        function($event) {
                          return _vm.editForm.errors.clear($event.target.name)
                        },
                        function($event) {
                          if (
                            !$event.type.indexOf("key") &&
                            _vm._k(
                              $event.keyCode,
                              "enter",
                              13,
                              $event.key,
                              "Enter"
                            )
                          ) {
                            return null
                          }
                          $event.preventDefault()
                          return _vm.moveOnEnter($event)
                        }
                      ]
                    }
                  },
                  [
                    _vm.createForm == true
                      ? void 0
                      : [
                          _c("input", {
                            attrs: {
                              type: "hidden",
                              name: "_method",
                              value: "patch"
                            }
                          })
                        ],
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row" }, [
                      _c(
                        "label",
                        {
                          staticClass: "col-md-4 col-form-label",
                          attrs: { for: "projectNaam" }
                        },
                        [_vm._v("Project Naam")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-8" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.trim",
                              value: _vm.editForm.projectNaam,
                              expression: "editForm.projectNaam",
                              modifiers: { trim: true }
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.editForm.errors.has("projectNaam")
                          },
                          attrs: {
                            type: "text",
                            id: "projectNaam",
                            name: "projectNaam"
                          },
                          domProps: { value: _vm.editForm.projectNaam },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.editForm,
                                "projectNaam",
                                $event.target.value.trim()
                              )
                            },
                            blur: function($event) {
                              return _vm.$forceUpdate()
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.editForm.errors.has("projectNaam")
                          ? _c("div", {
                              staticClass: "invalid-feedback",
                              domProps: {
                                textContent: _vm._s(
                                  _vm.editForm.errors.get("projectNaam")
                                )
                              }
                            })
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row" }, [
                      _c(
                        "label",
                        {
                          staticClass: "col-md-4 col-form-label",
                          attrs: { for: "projectNummer" }
                        },
                        [_vm._v("Project Nummer")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-8" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.trim",
                              value: _vm.editForm.projectNummer,
                              expression: "editForm.projectNummer",
                              modifiers: { trim: true }
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.editForm.errors.has(
                              "projectNummer"
                            )
                          },
                          attrs: {
                            type: "text",
                            id: "projectNummer",
                            name: "projectNummer",
                            disabled: "disabled"
                          },
                          domProps: { value: _vm.editForm.projectNummer },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.editForm,
                                "projectNummer",
                                $event.target.value.trim()
                              )
                            },
                            blur: function($event) {
                              return _vm.$forceUpdate()
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.editForm.errors.has("projectNummer")
                          ? _c("div", {
                              staticClass: "invalid-feedback",
                              domProps: {
                                textContent: _vm._s(
                                  _vm.editForm.errors.get("projectNummer")
                                )
                              }
                            })
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row" }, [
                      _c(
                        "label",
                        {
                          staticClass: "col-md-4 col-form-label",
                          attrs: { for: "vestiging" }
                        },
                        [_vm._v("Vestiging")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-8" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.trim",
                              value: _vm.editForm.vestiging,
                              expression: "editForm.vestiging",
                              modifiers: { trim: true }
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.editForm.errors.has("vestiging")
                          },
                          attrs: {
                            type: "text",
                            id: "vestiging",
                            name: "vestiging"
                          },
                          domProps: { value: _vm.editForm.vestiging },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.editForm,
                                "vestiging",
                                $event.target.value.trim()
                              )
                            },
                            blur: function($event) {
                              return _vm.$forceUpdate()
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.editForm.errors.has("vestiging")
                          ? _c("div", {
                              staticClass: "invalid-feedback",
                              domProps: {
                                textContent: _vm._s(
                                  _vm.editForm.errors.get("vestiging")
                                )
                              }
                            })
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row" }, [
                      _c(
                        "label",
                        {
                          staticClass: "col-md-4 col-form-label",
                          attrs: { for: "projectLocatie" }
                        },
                        [_vm._v("Project Locatie")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-8" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.trim",
                              value: _vm.editForm.projectLocatie,
                              expression: "editForm.projectLocatie",
                              modifiers: { trim: true }
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.editForm.errors.has(
                              "projectLocatie"
                            )
                          },
                          attrs: {
                            type: "text",
                            id: "projectLocatie",
                            name: "projectLocatie"
                          },
                          domProps: { value: _vm.editForm.projectLocatie },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.editForm,
                                "projectLocatie",
                                $event.target.value.trim()
                              )
                            },
                            blur: function($event) {
                              return _vm.$forceUpdate()
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.editForm.errors.has("projectLocatie")
                          ? _c("div", {
                              staticClass: "invalid-feedback",
                              domProps: {
                                textContent: _vm._s(
                                  _vm.editForm.errors.get("projectLocatie")
                                )
                              }
                            })
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row" }, [
                      _c(
                        "label",
                        {
                          staticClass: "col-md-4 col-form-label",
                          attrs: { for: "projectPlaats" }
                        },
                        [_vm._v("Project Plaats")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-8" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.trim",
                              value: _vm.editForm.projectPlaats,
                              expression: "editForm.projectPlaats",
                              modifiers: { trim: true }
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.editForm.errors.has(
                              "projectPlaats"
                            )
                          },
                          attrs: {
                            type: "text",
                            id: "projectPlaats",
                            name: "projectPlaats"
                          },
                          domProps: { value: _vm.editForm.projectPlaats },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.editForm,
                                "projectPlaats",
                                $event.target.value.trim()
                              )
                            },
                            blur: function($event) {
                              return _vm.$forceUpdate()
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.editForm.errors.has("projectPlaats")
                          ? _c("div", {
                              staticClass: "invalid-feedback",
                              domProps: {
                                textContent: _vm._s(
                                  _vm.editForm.errors.get("projectPlaats")
                                )
                              }
                            })
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row" }, [
                      _c(
                        "label",
                        {
                          staticClass: "col-md-4 col-form-label",
                          attrs: { for: "klant" }
                        },
                        [_vm._v("Klant")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-8" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.trim",
                              value: _vm.editForm.klant,
                              expression: "editForm.klant",
                              modifiers: { trim: true }
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.editForm.errors.has("klant")
                          },
                          attrs: { type: "text", id: "klant", name: "klant" },
                          domProps: { value: _vm.editForm.klant },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.editForm,
                                "klant",
                                $event.target.value.trim()
                              )
                            },
                            blur: function($event) {
                              return _vm.$forceUpdate()
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.editForm.errors.has("klant")
                          ? _c("div", {
                              staticClass: "invalid-feedback",
                              domProps: {
                                textContent: _vm._s(
                                  _vm.editForm.errors.get("klant")
                                )
                              }
                            })
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row" }, [
                      _c(
                        "label",
                        {
                          staticClass: "col-md-4 col-form-label",
                          attrs: { for: "adviseur" }
                        },
                        [_vm._v("Adviseur")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-8" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.trim",
                              value: _vm.editForm.adviseur,
                              expression: "editForm.adviseur",
                              modifiers: { trim: true }
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.editForm.errors.has("adviseur")
                          },
                          attrs: {
                            type: "text",
                            id: "adviseur",
                            name: "adviseur"
                          },
                          domProps: { value: _vm.editForm.adviseur },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.editForm,
                                "adviseur",
                                $event.target.value.trim()
                              )
                            },
                            blur: function($event) {
                              return _vm.$forceUpdate()
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.editForm.errors.has("adviseur")
                          ? _c("div", {
                              staticClass: "invalid-feedback",
                              domProps: {
                                textContent: _vm._s(
                                  _vm.editForm.errors.get("adviseur")
                                )
                              }
                            })
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row" }, [
                      _c(
                        "label",
                        {
                          staticClass: "col-md-4 col-form-label",
                          attrs: { for: "architect" }
                        },
                        [_vm._v("Architect")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-8" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.trim",
                              value: _vm.editForm.architect,
                              expression: "editForm.architect",
                              modifiers: { trim: true }
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.editForm.errors.has("architect")
                          },
                          attrs: {
                            type: "text",
                            id: "architect",
                            name: "architect"
                          },
                          domProps: { value: _vm.editForm.architect },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.editForm,
                                "architect",
                                $event.target.value.trim()
                              )
                            },
                            blur: function($event) {
                              return _vm.$forceUpdate()
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.editForm.errors.has("architect")
                          ? _c("div", {
                              staticClass: "invalid-feedback",
                              domProps: {
                                textContent: _vm._s(
                                  _vm.editForm.errors.get("architect")
                                )
                              }
                            })
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row" }, [
                      _c(
                        "label",
                        {
                          staticClass: "col-md-4 col-form-label",
                          attrs: { for: "omschrijving" }
                        },
                        [_vm._v("Omschrijving")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-8" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.trim",
                              value: _vm.editForm.omschrijving,
                              expression: "editForm.omschrijving",
                              modifiers: { trim: true }
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.editForm.errors.has(
                              "omschrijving"
                            )
                          },
                          attrs: {
                            type: "textfield",
                            id: "omschrijving",
                            name: "omschrijving"
                          },
                          domProps: { value: _vm.editForm.omschrijving },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.editForm,
                                "omschrijving",
                                $event.target.value.trim()
                              )
                            },
                            blur: function($event) {
                              return _vm.$forceUpdate()
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.editForm.errors.has("omschrijving")
                          ? _c("div", {
                              staticClass: "invalid-feedback",
                              domProps: {
                                textContent: _vm._s(
                                  _vm.editForm.errors.get("omschrijving")
                                )
                              }
                            })
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "modal-footer" },
                      [
                        _vm.createForm == true
                          ? [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-secondary",
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.closeEditForm($event)
                                    }
                                  }
                                },
                                [_vm._v("Sluit")]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-primary",
                                  attrs: { disabled: _vm.editForm.errors.any() }
                                },
                                [_vm._v("Creëer")]
                              )
                            ]
                          : [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-secondary",
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.closeEditForm($event)
                                    }
                                  }
                                },
                                [_vm._v("Sluit")]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-warning",
                                  attrs: { disabled: _vm.editForm.errors.any() }
                                },
                                [_vm._v("Wijzig")]
                              )
                            ]
                      ],
                      2
                    )
                  ],
                  2
                )
              ])
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h5", { staticClass: "font-weight-bold py-1 my-0" }, [
        _vm._v("Sub-menu")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-xs-2 col-sm-2 col-md-2 col-lg-2 float-left" },
      [
        _c("h5", { staticClass: "font-weight-bold py-1 my-0" }, [
          _vm._v("Projecten")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "col-xs-8 col-xs-offset-0 col-sm-6 col-sm-offset-1 col-md-6 col-md-offset-1 col-lg-6 col-lg-offset-1"
      },
      [
        _c(
          "div",
          { staticClass: "form-group col-xs-12 col-sm-12 col-md-12 col-lg-12" },
          [
            _c("div", { staticClass: "input-group input-group-sm" }, [
              _c("input", {
                staticClass: "form-control",
                attrs: { type: "text", placeholder: "Filter op project..." }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "input-group-btn" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary btn-sm float-right",
                    attrs: { type: "button", disabled: "disabled" }
                  },
                  [_vm._v("Filter!")]
                )
              ])
            ])
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("b", [_c("span", {}), _vm._v(" Werkmaatschappij :")])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("b", [_c("span", {}), _vm._v(" Adviseur :")])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("b", [_c("span", {}), _vm._v(" Architect :")])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("b", [_c("span", {}), _vm._v(" Beschrijving :")])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-body" }, [
      _c(
        "a",
        {
          staticClass: "btn btn-primary btn-sm mb-1 disabled",
          attrs: { href: "#", role: "button" }
        },
        [
          _vm._v("F3 "),
          _c("i", {
            staticClass: "fa fa-edit",
            attrs: { "aria-hidden": "true" }
          })
        ]
      ),
      _vm._v(
        "\n                                         \n                                        "
      ),
      _c(
        "a",
        {
          staticClass: "btn btn-primary btn-sm mb-1 disabled",
          attrs: { href: "#", role: "button" }
        },
        [
          _vm._v("F4 "),
          _c("i", {
            staticClass: "fa fa-edit",
            attrs: { "aria-hidden": "true" }
          })
        ]
      ),
      _vm._v(
        "\n                                         \n                                        "
      ),
      _c(
        "a",
        {
          staticClass: "btn btn-warning btn-sm mb-1 disabled",
          attrs: { href: "#", role: "button" }
        },
        [
          _vm._v("F5 "),
          _c("i", {
            staticClass: "fa fa-edit",
            attrs: { "aria-hidden": "true" }
          })
        ]
      ),
      _vm._v(
        "\n                                         \n                                        "
      ),
      _c(
        "a",
        {
          staticClass: "btn btn-warning btn-sm mb-1 disabled",
          attrs: { href: "#", role: "button" }
        },
        [
          _vm._v("F12 "),
          _c("i", {
            staticClass: "fa fa-edit",
            attrs: { "aria-hidden": "true" }
          })
        ]
      ),
      _vm._v(
        "\n                                         \n                                        "
      ),
      _c(
        "a",
        {
          staticClass: "btn btn-warning btn-sm mb-1 disabled",
          attrs: { href: "#", role: "button" }
        },
        [
          _vm._v("F16 Intern "),
          _c("i", {
            staticClass: "fa fa-edit",
            attrs: { "aria-hidden": "true" }
          })
        ]
      ),
      _vm._v(
        "\n                                         \n                                        "
      ),
      _c(
        "a",
        {
          staticClass: "btn btn-warning btn-sm mb-1 disabled",
          attrs: { href: "#", role: "button" }
        },
        [
          _vm._v("F16 Extern "),
          _c("i", {
            staticClass: "fa fa-edit",
            attrs: { "aria-hidden": "true" }
          })
        ]
      ),
      _vm._v(
        "\n                                         \n                                        "
      ),
      _c(
        "a",
        {
          staticClass: "btn btn-warning btn-sm mb-1 disabled",
          attrs: { href: "#", role: "button" }
        },
        [
          _vm._v("F22 "),
          _c("i", {
            staticClass: "fa fa-edit",
            attrs: { "aria-hidden": "true" }
          })
        ]
      ),
      _vm._v(
        "\n                                         \n                                        "
      ),
      _c(
        "a",
        {
          staticClass: "btn btn-warning btn-sm mb-1 disabled",
          attrs: { href: "#", role: "button" }
        },
        [
          _vm._v("F45 "),
          _c("i", {
            staticClass: "fa fa-edit",
            attrs: { "aria-hidden": "true" }
          })
        ]
      ),
      _vm._v(
        "\n                                         \n                                        "
      ),
      _c(
        "a",
        {
          staticClass: "btn btn-warning btn-sm mb-1 disabled",
          attrs: { href: "#", role: "button" }
        },
        [
          _vm._v("Vragenlijst "),
          _c("i", {
            staticClass: "fa fa-edit",
            attrs: { "aria-hidden": "true" }
          })
        ]
      ),
      _vm._v(
        "\n                                         \n                                    "
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-body" }, [
      _c(
        "a",
        {
          staticClass: "btn btn-primary btn-sm mb-1 disabled",
          attrs: { href: "#", role: "button" }
        },
        [
          _vm._v("F3 "),
          _c("i", {
            staticClass: "fa fa-edit",
            attrs: { "aria-hidden": "true" }
          })
        ]
      ),
      _vm._v(
        "\n                                         \n                                        "
      ),
      _c(
        "a",
        {
          staticClass: "btn btn-warning btn-sm mb-1 disabled",
          attrs: { href: "#", role: "button" }
        },
        [
          _vm._v("F4 "),
          _c("i", {
            staticClass: "fa fa-edit",
            attrs: { "aria-hidden": "true" }
          })
        ]
      ),
      _vm._v(
        "\n                                         \n                                        "
      ),
      _c(
        "a",
        {
          staticClass: "btn btn-warning btn-sm mb-1 disabled",
          attrs: { href: "#", role: "button" }
        },
        [
          _vm._v("F5 "),
          _c("i", {
            staticClass: "fa fa-edit",
            attrs: { "aria-hidden": "true" }
          })
        ]
      ),
      _vm._v(
        "\n                                         \n                                        "
      ),
      _c(
        "a",
        {
          staticClass: "btn btn-warning btn-sm mb-1 disabled",
          attrs: { href: "#", role: "button" }
        },
        [
          _vm._v("F12 "),
          _c("i", {
            staticClass: "fa fa-edit",
            attrs: { "aria-hidden": "true" }
          })
        ]
      ),
      _vm._v(
        "\n                                         \n                                        "
      ),
      _c(
        "a",
        {
          staticClass: "btn btn-warning btn-sm mb-1 disabled",
          attrs: { href: "#", role: "button" }
        },
        [
          _vm._v("F16 Intern "),
          _c("i", {
            staticClass: "fa fa-edit",
            attrs: { "aria-hidden": "true" }
          })
        ]
      ),
      _vm._v(
        "\n                                         \n                                        "
      ),
      _c(
        "a",
        {
          staticClass: "btn btn-warning btn-sm mb-1 disabled",
          attrs: { href: "#", role: "button" }
        },
        [
          _vm._v("F16 Extern "),
          _c("i", {
            staticClass: "fa fa-edit",
            attrs: { "aria-hidden": "true" }
          })
        ]
      ),
      _vm._v(
        "\n                                         \n                                        "
      ),
      _c(
        "a",
        {
          staticClass: "btn btn-warning btn-sm mb-1 disabled",
          attrs: { href: "#", role: "button" }
        },
        [
          _vm._v("F22 "),
          _c("i", {
            staticClass: "fa fa-edit",
            attrs: { "aria-hidden": "true" }
          })
        ]
      ),
      _vm._v(
        "\n                                         \n                                        "
      ),
      _c(
        "a",
        {
          staticClass: "btn btn-warning btn-sm mb-1 disabled",
          attrs: { href: "#", role: "button" }
        },
        [
          _vm._v("F45 "),
          _c("i", {
            staticClass: "fa fa-edit",
            attrs: { "aria-hidden": "true" }
          })
        ]
      ),
      _vm._v(
        "\n                                         \n                                        "
      ),
      _c(
        "a",
        {
          staticClass: "btn btn-warning btn-sm mb-1 disabled",
          attrs: { href: "#", role: "button" }
        },
        [
          _vm._v("Vragenlijst "),
          _c("i", {
            staticClass: "fa fa-edit",
            attrs: { "aria-hidden": "true" }
          })
        ]
      ),
      _vm._v(
        "\n                                         \n                                    "
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");

window.Vue = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
window.Event = new Vue(); //import InstantSearch from 'vue-instantsearch';
//Vue.use(InstantSearch);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */
// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('uwk-alert', __webpack_require__(/*! ./components/helpers/Alert.vue */ "./resources/js/components/helpers/Alert.vue")["default"]);
Vue.component('uwk-search', __webpack_require__(/*! ./components/helpers/Search.vue */ "./resources/js/components/helpers/Search.vue")["default"]);
Vue.component('uwk-pagination', __webpack_require__(/*! ./components/helpers/vue-bootstrap-pagination.vue */ "./resources/js/components/helpers/vue-bootstrap-pagination.vue")["default"]);
Vue.component('uwk-work-projects', __webpack_require__(/*! ./components/project.vue */ "./resources/js/components/project.vue")["default"]);
Vue.component('uwk-main-page', __webpack_require__(/*! ./components/main.vue */ "./resources/js/components/main.vue")["default"]);
Vue.component('uwk-contact-company', __webpack_require__(/*! ./components/contact/company.vue */ "./resources/js/components/contact/company.vue")["default"]);
Vue.component('uwk-contact-person', __webpack_require__(/*! ./components/contact/contactperson.vue */ "./resources/js/components/contact/contactperson.vue")["default"]);
Vue.component('uwk-product-group', __webpack_require__(/*! ./components/contact/productgroups.vue */ "./resources/js/components/contact/productgroups.vue")["default"]);
Vue.component('uwk-users', __webpack_require__(/*! ./components/admin/ModifyUsersComponent.vue */ "./resources/js/components/admin/ModifyUsersComponent.vue")["default"]);
Vue.component('passport-clients', __webpack_require__(/*! ./components/passport/Clients.vue */ "./resources/js/components/passport/Clients.vue")["default"]);
Vue.component('passport-authorized-clients', __webpack_require__(/*! ./components/passport/AuthorizedClients.vue */ "./resources/js/components/passport/AuthorizedClients.vue")["default"]);
Vue.component('passport-personal-access-tokens', __webpack_require__(/*! ./components/passport/PersonalAccessTokens.vue */ "./resources/js/components/passport/PersonalAccessTokens.vue")["default"]);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

var app = new Vue({
  el: '#app'
});

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/Form.js */ "./resources/js/core/Form.js");
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-polyfill */ "./node_modules/babel-polyfill/lib/index.js");
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var laravel_echo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! laravel-echo */ "./node_modules/laravel-echo/dist/echo.js");
window._ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
  window.Popper = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")["default"];
  window.$ = window.jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

  __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
} catch (e) {}
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */


window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

var token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
  window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
  console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}


window.Form = _core_Form_js__WEBPACK_IMPORTED_MODULE_0__["default"];

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */


window.Pusher = __webpack_require__(/*! pusher-js */ "./node_modules/pusher-js/dist/web/pusher.js");
Pusher.logToConsole = false;
window.Echo = new laravel_echo__WEBPACK_IMPORTED_MODULE_2__["default"]({
  broadcaster: 'pusher',
  key: "244ccaf0ee655aae8e0b",
  cluster: "eu",
  encrypted: true
});

/***/ }),

/***/ "./resources/js/components/admin/ModifyUsersComponent.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/admin/ModifyUsersComponent.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ModifyUsersComponent_vue_vue_type_template_id_1aaf251a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModifyUsersComponent.vue?vue&type=template&id=1aaf251a& */ "./resources/js/components/admin/ModifyUsersComponent.vue?vue&type=template&id=1aaf251a&");
/* harmony import */ var _ModifyUsersComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModifyUsersComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/ModifyUsersComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ModifyUsersComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ModifyUsersComponent_vue_vue_type_template_id_1aaf251a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ModifyUsersComponent_vue_vue_type_template_id_1aaf251a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/ModifyUsersComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/ModifyUsersComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/admin/ModifyUsersComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModifyUsersComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ModifyUsersComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/ModifyUsersComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModifyUsersComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/ModifyUsersComponent.vue?vue&type=template&id=1aaf251a&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/admin/ModifyUsersComponent.vue?vue&type=template&id=1aaf251a& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModifyUsersComponent_vue_vue_type_template_id_1aaf251a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ModifyUsersComponent.vue?vue&type=template&id=1aaf251a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/ModifyUsersComponent.vue?vue&type=template&id=1aaf251a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModifyUsersComponent_vue_vue_type_template_id_1aaf251a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModifyUsersComponent_vue_vue_type_template_id_1aaf251a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/contact/company.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/contact/company.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _company_vue_vue_type_template_id_68db69da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./company.vue?vue&type=template&id=68db69da& */ "./resources/js/components/contact/company.vue?vue&type=template&id=68db69da&");
/* harmony import */ var _company_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./company.vue?vue&type=script&lang=js& */ "./resources/js/components/contact/company.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _company_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _company_vue_vue_type_template_id_68db69da___WEBPACK_IMPORTED_MODULE_0__["render"],
  _company_vue_vue_type_template_id_68db69da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/contact/company.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/contact/company.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/contact/company.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_company_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./company.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/contact/company.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_company_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/contact/company.vue?vue&type=template&id=68db69da&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/contact/company.vue?vue&type=template&id=68db69da& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_company_vue_vue_type_template_id_68db69da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./company.vue?vue&type=template&id=68db69da& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/contact/company.vue?vue&type=template&id=68db69da&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_company_vue_vue_type_template_id_68db69da___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_company_vue_vue_type_template_id_68db69da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/contact/contactperson.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/contact/contactperson.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contactperson_vue_vue_type_template_id_24b8b8ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contactperson.vue?vue&type=template&id=24b8b8ea& */ "./resources/js/components/contact/contactperson.vue?vue&type=template&id=24b8b8ea&");
/* harmony import */ var _contactperson_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactperson.vue?vue&type=script&lang=js& */ "./resources/js/components/contact/contactperson.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _contactperson_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _contactperson_vue_vue_type_template_id_24b8b8ea___WEBPACK_IMPORTED_MODULE_0__["render"],
  _contactperson_vue_vue_type_template_id_24b8b8ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/contact/contactperson.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/contact/contactperson.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/contact/contactperson.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contactperson_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./contactperson.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/contact/contactperson.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contactperson_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/contact/contactperson.vue?vue&type=template&id=24b8b8ea&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/contact/contactperson.vue?vue&type=template&id=24b8b8ea& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_contactperson_vue_vue_type_template_id_24b8b8ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./contactperson.vue?vue&type=template&id=24b8b8ea& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/contact/contactperson.vue?vue&type=template&id=24b8b8ea&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_contactperson_vue_vue_type_template_id_24b8b8ea___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_contactperson_vue_vue_type_template_id_24b8b8ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/contact/productgroups.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/contact/productgroups.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _productgroups_vue_vue_type_template_id_a38486ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productgroups.vue?vue&type=template&id=a38486ce& */ "./resources/js/components/contact/productgroups.vue?vue&type=template&id=a38486ce&");
/* harmony import */ var _productgroups_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productgroups.vue?vue&type=script&lang=js& */ "./resources/js/components/contact/productgroups.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _productgroups_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _productgroups_vue_vue_type_template_id_a38486ce___WEBPACK_IMPORTED_MODULE_0__["render"],
  _productgroups_vue_vue_type_template_id_a38486ce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/contact/productgroups.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/contact/productgroups.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/contact/productgroups.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_productgroups_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./productgroups.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/contact/productgroups.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_productgroups_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/contact/productgroups.vue?vue&type=template&id=a38486ce&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/contact/productgroups.vue?vue&type=template&id=a38486ce& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_productgroups_vue_vue_type_template_id_a38486ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./productgroups.vue?vue&type=template&id=a38486ce& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/contact/productgroups.vue?vue&type=template&id=a38486ce&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_productgroups_vue_vue_type_template_id_a38486ce___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_productgroups_vue_vue_type_template_id_a38486ce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/helpers/Alert.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/helpers/Alert.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Alert_vue_vue_type_template_id_334b0012___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Alert.vue?vue&type=template&id=334b0012& */ "./resources/js/components/helpers/Alert.vue?vue&type=template&id=334b0012&");
/* harmony import */ var _Alert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Alert.vue?vue&type=script&lang=js& */ "./resources/js/components/helpers/Alert.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Alert_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Alert.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/helpers/Alert.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Alert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Alert_vue_vue_type_template_id_334b0012___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Alert_vue_vue_type_template_id_334b0012___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/helpers/Alert.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/helpers/Alert.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/helpers/Alert.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Alert.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/helpers/Alert.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/helpers/Alert.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/helpers/Alert.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Alert.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/helpers/Alert.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/helpers/Alert.vue?vue&type=template&id=334b0012&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/helpers/Alert.vue?vue&type=template&id=334b0012& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_template_id_334b0012___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Alert.vue?vue&type=template&id=334b0012& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/helpers/Alert.vue?vue&type=template&id=334b0012&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_template_id_334b0012___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_template_id_334b0012___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/helpers/Search.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/helpers/Search.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Search_vue_vue_type_template_id_4ac9f29d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Search.vue?vue&type=template&id=4ac9f29d& */ "./resources/js/components/helpers/Search.vue?vue&type=template&id=4ac9f29d&");
/* harmony import */ var _Search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Search.vue?vue&type=script&lang=js& */ "./resources/js/components/helpers/Search.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Search_vue_vue_type_template_id_4ac9f29d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Search_vue_vue_type_template_id_4ac9f29d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/helpers/Search.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/helpers/Search.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/helpers/Search.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Search.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/helpers/Search.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/helpers/Search.vue?vue&type=template&id=4ac9f29d&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/helpers/Search.vue?vue&type=template&id=4ac9f29d& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_template_id_4ac9f29d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Search.vue?vue&type=template&id=4ac9f29d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/helpers/Search.vue?vue&type=template&id=4ac9f29d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_template_id_4ac9f29d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_template_id_4ac9f29d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/helpers/vue-bootstrap-pagination.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/helpers/vue-bootstrap-pagination.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_bootstrap_pagination_vue_vue_type_template_id_cd137c56___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vue-bootstrap-pagination.vue?vue&type=template&id=cd137c56& */ "./resources/js/components/helpers/vue-bootstrap-pagination.vue?vue&type=template&id=cd137c56&");
/* harmony import */ var _vue_bootstrap_pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vue-bootstrap-pagination.vue?vue&type=script&lang=js& */ "./resources/js/components/helpers/vue-bootstrap-pagination.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _vue_bootstrap_pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _vue_bootstrap_pagination_vue_vue_type_template_id_cd137c56___WEBPACK_IMPORTED_MODULE_0__["render"],
  _vue_bootstrap_pagination_vue_vue_type_template_id_cd137c56___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/helpers/vue-bootstrap-pagination.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/helpers/vue-bootstrap-pagination.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/helpers/vue-bootstrap-pagination.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_bootstrap_pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./vue-bootstrap-pagination.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/helpers/vue-bootstrap-pagination.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_bootstrap_pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/helpers/vue-bootstrap-pagination.vue?vue&type=template&id=cd137c56&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/helpers/vue-bootstrap-pagination.vue?vue&type=template&id=cd137c56& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_bootstrap_pagination_vue_vue_type_template_id_cd137c56___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./vue-bootstrap-pagination.vue?vue&type=template&id=cd137c56& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/helpers/vue-bootstrap-pagination.vue?vue&type=template&id=cd137c56&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_bootstrap_pagination_vue_vue_type_template_id_cd137c56___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_bootstrap_pagination_vue_vue_type_template_id_cd137c56___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/main.vue":
/*!******************************************!*\
  !*** ./resources/js/components/main.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_vue_vue_type_template_id_c176d7f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.vue?vue&type=template&id=c176d7f8& */ "./resources/js/components/main.vue?vue&type=template&id=c176d7f8&");
/* harmony import */ var _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.vue?vue&type=script&lang=js& */ "./resources/js/components/main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _main_vue_vue_type_template_id_c176d7f8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _main_vue_vue_type_template_id_c176d7f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/main.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/main.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/main.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/main.vue?vue&type=template&id=c176d7f8&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/main.vue?vue&type=template&id=c176d7f8& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_c176d7f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./main.vue?vue&type=template&id=c176d7f8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/main.vue?vue&type=template&id=c176d7f8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_c176d7f8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_c176d7f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/passport/AuthorizedClients.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/passport/AuthorizedClients.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AuthorizedClients_vue_vue_type_template_id_397d14ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthorizedClients.vue?vue&type=template&id=397d14ca&scoped=true& */ "./resources/js/components/passport/AuthorizedClients.vue?vue&type=template&id=397d14ca&scoped=true&");
/* harmony import */ var _AuthorizedClients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthorizedClients.vue?vue&type=script&lang=js& */ "./resources/js/components/passport/AuthorizedClients.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AuthorizedClients_vue_vue_type_style_index_0_id_397d14ca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AuthorizedClients.vue?vue&type=style&index=0&id=397d14ca&scoped=true&lang=css& */ "./resources/js/components/passport/AuthorizedClients.vue?vue&type=style&index=0&id=397d14ca&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AuthorizedClients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AuthorizedClients_vue_vue_type_template_id_397d14ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AuthorizedClients_vue_vue_type_template_id_397d14ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "397d14ca",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/passport/AuthorizedClients.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/passport/AuthorizedClients.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/passport/AuthorizedClients.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorizedClients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AuthorizedClients.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passport/AuthorizedClients.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorizedClients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/passport/AuthorizedClients.vue?vue&type=style&index=0&id=397d14ca&scoped=true&lang=css&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/passport/AuthorizedClients.vue?vue&type=style&index=0&id=397d14ca&scoped=true&lang=css& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorizedClients_vue_vue_type_style_index_0_id_397d14ca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AuthorizedClients.vue?vue&type=style&index=0&id=397d14ca&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passport/AuthorizedClients.vue?vue&type=style&index=0&id=397d14ca&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorizedClients_vue_vue_type_style_index_0_id_397d14ca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorizedClients_vue_vue_type_style_index_0_id_397d14ca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorizedClients_vue_vue_type_style_index_0_id_397d14ca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorizedClients_vue_vue_type_style_index_0_id_397d14ca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorizedClients_vue_vue_type_style_index_0_id_397d14ca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/passport/AuthorizedClients.vue?vue&type=template&id=397d14ca&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/passport/AuthorizedClients.vue?vue&type=template&id=397d14ca&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorizedClients_vue_vue_type_template_id_397d14ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AuthorizedClients.vue?vue&type=template&id=397d14ca&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passport/AuthorizedClients.vue?vue&type=template&id=397d14ca&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorizedClients_vue_vue_type_template_id_397d14ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorizedClients_vue_vue_type_template_id_397d14ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/passport/Clients.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/passport/Clients.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Clients_vue_vue_type_template_id_1552a5b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Clients.vue?vue&type=template&id=1552a5b6&scoped=true& */ "./resources/js/components/passport/Clients.vue?vue&type=template&id=1552a5b6&scoped=true&");
/* harmony import */ var _Clients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Clients.vue?vue&type=script&lang=js& */ "./resources/js/components/passport/Clients.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Clients_vue_vue_type_style_index_0_id_1552a5b6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Clients.vue?vue&type=style&index=0&id=1552a5b6&scoped=true&lang=css& */ "./resources/js/components/passport/Clients.vue?vue&type=style&index=0&id=1552a5b6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Clients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Clients_vue_vue_type_template_id_1552a5b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Clients_vue_vue_type_template_id_1552a5b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1552a5b6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/passport/Clients.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/passport/Clients.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/passport/Clients.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Clients.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passport/Clients.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/passport/Clients.vue?vue&type=style&index=0&id=1552a5b6&scoped=true&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/passport/Clients.vue?vue&type=style&index=0&id=1552a5b6&scoped=true&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_style_index_0_id_1552a5b6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Clients.vue?vue&type=style&index=0&id=1552a5b6&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passport/Clients.vue?vue&type=style&index=0&id=1552a5b6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_style_index_0_id_1552a5b6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_style_index_0_id_1552a5b6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_style_index_0_id_1552a5b6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_style_index_0_id_1552a5b6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_style_index_0_id_1552a5b6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/passport/Clients.vue?vue&type=template&id=1552a5b6&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/passport/Clients.vue?vue&type=template&id=1552a5b6&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_template_id_1552a5b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Clients.vue?vue&type=template&id=1552a5b6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passport/Clients.vue?vue&type=template&id=1552a5b6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_template_id_1552a5b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_template_id_1552a5b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/passport/PersonalAccessTokens.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/passport/PersonalAccessTokens.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PersonalAccessTokens_vue_vue_type_template_id_49962cc0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PersonalAccessTokens.vue?vue&type=template&id=49962cc0&scoped=true& */ "./resources/js/components/passport/PersonalAccessTokens.vue?vue&type=template&id=49962cc0&scoped=true&");
/* harmony import */ var _PersonalAccessTokens_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PersonalAccessTokens.vue?vue&type=script&lang=js& */ "./resources/js/components/passport/PersonalAccessTokens.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PersonalAccessTokens_vue_vue_type_style_index_0_id_49962cc0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PersonalAccessTokens.vue?vue&type=style&index=0&id=49962cc0&scoped=true&lang=css& */ "./resources/js/components/passport/PersonalAccessTokens.vue?vue&type=style&index=0&id=49962cc0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PersonalAccessTokens_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PersonalAccessTokens_vue_vue_type_template_id_49962cc0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PersonalAccessTokens_vue_vue_type_template_id_49962cc0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "49962cc0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/passport/PersonalAccessTokens.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/passport/PersonalAccessTokens.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/passport/PersonalAccessTokens.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalAccessTokens_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PersonalAccessTokens.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passport/PersonalAccessTokens.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalAccessTokens_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/passport/PersonalAccessTokens.vue?vue&type=style&index=0&id=49962cc0&scoped=true&lang=css&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/components/passport/PersonalAccessTokens.vue?vue&type=style&index=0&id=49962cc0&scoped=true&lang=css& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalAccessTokens_vue_vue_type_style_index_0_id_49962cc0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./PersonalAccessTokens.vue?vue&type=style&index=0&id=49962cc0&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passport/PersonalAccessTokens.vue?vue&type=style&index=0&id=49962cc0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalAccessTokens_vue_vue_type_style_index_0_id_49962cc0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalAccessTokens_vue_vue_type_style_index_0_id_49962cc0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalAccessTokens_vue_vue_type_style_index_0_id_49962cc0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalAccessTokens_vue_vue_type_style_index_0_id_49962cc0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalAccessTokens_vue_vue_type_style_index_0_id_49962cc0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/passport/PersonalAccessTokens.vue?vue&type=template&id=49962cc0&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/passport/PersonalAccessTokens.vue?vue&type=template&id=49962cc0&scoped=true& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalAccessTokens_vue_vue_type_template_id_49962cc0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PersonalAccessTokens.vue?vue&type=template&id=49962cc0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passport/PersonalAccessTokens.vue?vue&type=template&id=49962cc0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalAccessTokens_vue_vue_type_template_id_49962cc0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalAccessTokens_vue_vue_type_template_id_49962cc0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/project.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/project.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _project_vue_vue_type_template_id_3c0e981e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.vue?vue&type=template&id=3c0e981e& */ "./resources/js/components/project.vue?vue&type=template&id=3c0e981e&");
/* harmony import */ var _project_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.vue?vue&type=script&lang=js& */ "./resources/js/components/project.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _project_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _project_vue_vue_type_template_id_3c0e981e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _project_vue_vue_type_template_id_3c0e981e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/project.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/project.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/project.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_project_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./project.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/project.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_project_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/project.vue?vue&type=template&id=3c0e981e&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/project.vue?vue&type=template&id=3c0e981e& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_project_vue_vue_type_template_id_3c0e981e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./project.vue?vue&type=template&id=3c0e981e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/project.vue?vue&type=template&id=3c0e981e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_project_vue_vue_type_template_id_3c0e981e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_project_vue_vue_type_template_id_3c0e981e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/core/Errors.js":
/*!*************************************!*\
  !*** ./resources/js/core/Errors.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Errors =
/*#__PURE__*/
function () {
  /**
   * Create a new Errors instance.
   */
  function Errors() {
    _classCallCheck(this, Errors);

    this.errors = {};
  }
  /**
   * Determine if an errors exists for the given field.
   *
   * @param {string} field
   */


  _createClass(Errors, [{
    key: "has",
    value: function has(field) {
      return this.errors.hasOwnProperty(field);
    }
    /**
     * Determine if we have any errors.
     */

  }, {
    key: "any",
    value: function any() {
      return Object.keys(this.errors).length > 0;
    }
    /**
     * Retrieve the error message for a field.
     *
     * @param {string} field
     */

  }, {
    key: "get",
    value: function get(field) {
      if (this.errors[field]) {
        return this.errors[field][0];
      }
    }
    /**
     * Record the new errors.
     *
     * @param {object} errors
     */

  }, {
    key: "record",
    value: function record(errors) {
      this.errors = errors.errors;
    }
    /**
     * Clear one or all error fields.
     *
     * @param {string|null} field
     */

  }, {
    key: "clear",
    value: function clear(field) {
      if (field) {
        delete this.errors[field];
        return;
      }

      this.errors = {};
    }
  }]);

  return Errors;
}();

/* harmony default export */ __webpack_exports__["default"] = (Errors);

/***/ }),

/***/ "./resources/js/core/Form.js":
/*!***********************************!*\
  !*** ./resources/js/core/Form.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Errors */ "./resources/js/core/Errors.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Form =
/*#__PURE__*/
function () {
  /**
   * Create a new Form instance.
   *
   * @param {object} data
   */
  function Form(data) {
    _classCallCheck(this, Form);

    this.originalData = data;

    for (var field in data) {
      this[field] = data[field];
    }

    this.errors = new _Errors__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }
  /**
   * Fetch all relevant data for the form.
   */


  _createClass(Form, [{
    key: "data",
    value: function data() {
      var data = {};

      for (var property in this.originalData) {
        data[property] = this[property];
      }

      return data;
    }
    /**
     * Reset the form fields.
     */

  }, {
    key: "reset",
    value: function reset() {
      for (var field in this.originalData) {
        this[field] = '';
      }

      this.errors.clear();
    }
    /**
     * Send a POST request to the given URL.
     * .
     * @param {string} url
     */

  }, {
    key: "post",
    value: function post(url) {
      return this.submit('post', url);
    }
    /**
     * Send a PUT request to the given URL.
     * .
     * @param {string} url
     */

  }, {
    key: "put",
    value: function put(url) {
      return this.submit('put', url);
    }
    /**
     * Send a PATCH request to the given URL.
     * .
     * @param {string} url
     */

  }, {
    key: "patch",
    value: function patch(url) {
      return this.submit('patch', url);
    }
    /**
     * Send a DELETE request to the given URL.
     * .
     * @param {string} url
     */

  }, {
    key: "delete",
    value: function _delete(url) {
      return this.submit('delete', url);
    }
    /**
     * Submit the form.
     *
     * @param {string} requestType
     * @param {string} url
     */

  }, {
    key: "submit",
    value: function submit(requestType, url) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        axios[requestType](url, _this.data()).then(function (response) {
          _this.onSuccess(response.data);

          resolve(response.data);
        })["catch"](function (error) {
          _this.onFail(error.response.data);

          reject(error.response.data);
        });
      });
    }
    /**
     * Handle a successful form submission.
     *
     * @param {object} data
     */

  }, {
    key: "onSuccess",
    value: function onSuccess(data) {
      //alert(data.message); // temporary
      this.reset();
    }
    /**
     * Handle a failed form submission.
     *
     * @param {object} errors
     */

  }, {
    key: "onFail",
    value: function onFail(errors) {
      this.errors.record(errors);
    }
  }]);

  return Form;
}();

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\flaat\Code\UWK\resources\js\app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! C:\Users\flaat\Code\UWK\resources\sass\app.scss */"./resources/sass/app.scss");


/***/ })

},[[0,"/js/manifest","/js/vendor"]]]);