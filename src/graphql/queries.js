/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCoupon = /* GraphQL */ `
  query GetCoupon($id: ID!) {
    getCoupon(id: $id) {
      id
      code
      discount
      maxDiscount
      customCoupon
      userID
      vendorID
      createdAt
      updatedAt
    }
  }
`;
export const listCoupons = /* GraphQL */ `
  query ListCoupons(
    $filter: ModelCouponFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCoupons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        code
        discount
        maxDiscount
        customCoupon
        userID
        vendorID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getHistory = /* GraphQL */ `
  query GetHistory($id: ID!) {
    getHistory(id: $id) {
      id
      message
      Employee
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listHistories = /* GraphQL */ `
  query ListHistories(
    $filter: ModelHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHistories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        message
        Employee
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getEmployee = /* GraphQL */ `
  query GetEmployee($id: ID!) {
    getEmployee(id: $id) {
      id
      name
      designation
      profilePicture
      power
      History {
        items {
          id
          message
          Employee
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listEmployees = /* GraphQL */ `
  query ListEmployees(
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        designation
        profilePicture
        power
        History {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getBalance = /* GraphQL */ `
  query GetBalance($id: ID!) {
    getBalance(id: $id) {
      id
      balance
      withdrawAmount
      Vendor {
        id
        firstName
        lastName
        nidFrontSide
        nidBackSide
        nidNumber
        presentLocation
        service
        phoneNumber
        email
        uploadYourPhoto
        status
        Orders {
          nextToken
        }
        PaymentRequest {
          nextToken
        }
        balanceID
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      balanceVendorId
      owner
    }
  }
`;
export const listBalances = /* GraphQL */ `
  query ListBalances(
    $filter: ModelBalanceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBalances(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        balance
        withdrawAmount
        Vendor {
          id
          firstName
          lastName
          nidFrontSide
          nidBackSide
          nidNumber
          presentLocation
          service
          phoneNumber
          email
          uploadYourPhoto
          status
          balanceID
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        balanceVendorId
        owner
      }
      nextToken
    }
  }
`;
export const getPaymentRequest = /* GraphQL */ `
  query GetPaymentRequest($id: ID!) {
    getPaymentRequest(id: $id) {
      id
      balanceAmount
      phoneNumber
      method
      bankName
      bankAcNo
      acHolderName
      acBranch
      type
      status
      vendorID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listPaymentRequests = /* GraphQL */ `
  query ListPaymentRequests(
    $filter: ModelPaymentRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPaymentRequests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        balanceAmount
        phoneNumber
        method
        bankName
        bankAcNo
        acHolderName
        acBranch
        type
        status
        vendorID
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getError = /* GraphQL */ `
  query GetError($id: ID!) {
    getError(id: $id) {
      id
      errorDetails
      errorTime
      status
      vendorID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listErrors = /* GraphQL */ `
  query ListErrors(
    $filter: ModelErrorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listErrors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        errorDetails
        errorTime
        status
        vendorID
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getPlan = /* GraphQL */ `
  query GetPlan($id: ID!) {
    getPlan(id: $id) {
      id
      brief
      name
      companyName
      phoneNumber
      email
      eventTitle
      eventLocation
      eventDate
      totalBudget
      fileLink
      status
      description
      userID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listPlans = /* GraphQL */ `
  query ListPlans(
    $filter: ModelPlanFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlans(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        brief
        name
        companyName
        phoneNumber
        email
        eventTitle
        eventLocation
        eventDate
        totalBudget
        fileLink
        status
        description
        userID
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getOrders = /* GraphQL */ `
  query GetOrders($id: ID!) {
    getOrders(id: $id) {
      id
      address
      name
      phoneNumberUser
      phoneNumberVendor
      Link
      package
      totalPayment
      city
      start
      end
      total
      discount
      initialPayment
      duePayment
      status
      bookedDay
      title
      vendorID
      userID
      packageName
      reviewID
      notes
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrdersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        address
        name
        phoneNumberUser
        phoneNumberVendor
        Link
        package
        totalPayment
        city
        start
        end
        total
        discount
        initialPayment
        duePayment
        status
        bookedDay
        title
        vendorID
        userID
        packageName
        reviewID
        notes
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getVendor = /* GraphQL */ `
  query GetVendor($id: ID!) {
    getVendor(id: $id) {
      id
      firstName
      lastName
      nidFrontSide
      nidBackSide
      nidNumber
      presentLocation
      service
      phoneNumber
      email
      uploadYourPhoto
      status
      Orders {
        items {
          id
          address
          name
          phoneNumberUser
          phoneNumberVendor
          Link
          package
          totalPayment
          city
          start
          end
          total
          discount
          initialPayment
          duePayment
          status
          bookedDay
          title
          vendorID
          userID
          packageName
          reviewID
          notes
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      PaymentRequest {
        items {
          id
          balanceAmount
          phoneNumber
          method
          bankName
          bankAcNo
          acHolderName
          acBranch
          type
          status
          vendorID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      balanceID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listVendors = /* GraphQL */ `
  query ListVendors(
    $filter: ModelVendorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVendors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        nidFrontSide
        nidBackSide
        nidNumber
        presentLocation
        service
        phoneNumber
        email
        uploadYourPhoto
        status
        Orders {
          nextToken
        }
        PaymentRequest {
          nextToken
        }
        balanceID
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      firstName
      lastName
      address
      phoneNumber
      email
      nidNumber
      profilePicture
      status
      Orders {
        items {
          id
          address
          name
          phoneNumberUser
          phoneNumberVendor
          Link
          package
          totalPayment
          city
          start
          end
          total
          discount
          initialPayment
          duePayment
          status
          bookedDay
          title
          vendorID
          userID
          packageName
          reviewID
          notes
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      Plan {
        items {
          id
          brief
          name
          companyName
          phoneNumber
          email
          eventTitle
          eventLocation
          eventDate
          totalBudget
          fileLink
          status
          description
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      Reviews {
        items {
          id
          description
          valueForMoney
          service
          behaviour
          average
          userPicture
          userName
          photographyID
          cinematographyID
          userID
          rentalID
          brandpromoterID
          decorationID
          printingpressID
          giftitemsID
          mehediartistID
          makeupartistID
          djmusicianID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        address
        phoneNumber
        email
        nidNumber
        profilePicture
        status
        Orders {
          nextToken
        }
        Plan {
          nextToken
        }
        Reviews {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getReview = /* GraphQL */ `
  query GetReview($id: ID!) {
    getReview(id: $id) {
      id
      description
      valueForMoney
      service
      behaviour
      average
      userPicture
      userName
      photographyID
      cinematographyID
      userID
      rentalID
      brandpromoterID
      decorationID
      printingpressID
      giftitemsID
      mehediartistID
      makeupartistID
      djmusicianID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listReviews = /* GraphQL */ `
  query ListReviews(
    $filter: ModelReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        description
        valueForMoney
        service
        behaviour
        average
        userPicture
        userName
        photographyID
        cinematographyID
        userID
        rentalID
        brandpromoterID
        decorationID
        printingpressID
        giftitemsID
        mehediartistID
        makeupartistID
        djmusicianID
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getCinematography = /* GraphQL */ `
  query GetCinematography($id: ID!) {
    getCinematography(id: $id) {
      id
      spealiziedInFIlter
      serviceloactionFIlter
      specializedIn
      title
      deviceName
      yearsOfExperience
      serviceLocation
      presentLocation
      portfolioLink
      email
      portfolioImage
      detailsAboutYou
      uploadYourPhoto
      rating
      isConfirmed
      Reviews {
        items {
          id
          description
          valueForMoney
          service
          behaviour
          average
          userPicture
          userName
          photographyID
          cinematographyID
          userID
          rentalID
          brandpromoterID
          decorationID
          printingpressID
          giftitemsID
          mehediartistID
          makeupartistID
          djmusicianID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      phoneNumber
      packages
      status
      eventsCompleted
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listCinematographies = /* GraphQL */ `
  query ListCinematographies(
    $filter: ModelCinematographyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCinematographies(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        spealiziedInFIlter
        serviceloactionFIlter
        specializedIn
        title
        deviceName
        yearsOfExperience
        serviceLocation
        presentLocation
        portfolioLink
        email
        portfolioImage
        detailsAboutYou
        uploadYourPhoto
        rating
        isConfirmed
        Reviews {
          nextToken
        }
        phoneNumber
        packages
        status
        eventsCompleted
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getPhotography = /* GraphQL */ `
  query GetPhotography($id: ID!) {
    getPhotography(id: $id) {
      id
      specializedIn
      spealiziedInFIlter
      serviceloactionFIlter
      presentLocation
      title
      deviceName
      yearsOfExperience
      serviceLocation
      portfolioLink
      portfolioImage
      uploadYourPhoto
      detailsAboutYou
      rating
      isConfirmed
      Reviews {
        items {
          id
          description
          valueForMoney
          service
          behaviour
          average
          userPicture
          userName
          photographyID
          cinematographyID
          userID
          rentalID
          brandpromoterID
          decorationID
          printingpressID
          giftitemsID
          mehediartistID
          makeupartistID
          djmusicianID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      phoneNumber
      packages
      status
      email
      eventsCompleted
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listPhotographies = /* GraphQL */ `
  query ListPhotographies(
    $filter: ModelPhotographyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPhotographies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        specializedIn
        spealiziedInFIlter
        serviceloactionFIlter
        presentLocation
        title
        deviceName
        yearsOfExperience
        serviceLocation
        portfolioLink
        portfolioImage
        uploadYourPhoto
        detailsAboutYou
        rating
        isConfirmed
        Reviews {
          nextToken
        }
        phoneNumber
        packages
        status
        email
        eventsCompleted
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getDJMusician = /* GraphQL */ `
  query GetDJMusician($id: ID!) {
    getDJMusician(id: $id) {
      id
      specializedIn
      title
      spealiziedInFIlter
      serviceloactionFIlter
      presentLocation
      yearsOfExperience
      serviceLocation
      portfolioLink
      portfolioImage
      uploadYourPhoto
      detailsAboutYou
      rating
      isConfirmed
      phoneNumber
      teamMember
      packages
      Reviews {
        items {
          id
          description
          valueForMoney
          service
          behaviour
          average
          userPicture
          userName
          photographyID
          cinematographyID
          userID
          rentalID
          brandpromoterID
          decorationID
          printingpressID
          giftitemsID
          mehediartistID
          makeupartistID
          djmusicianID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      status
      email
      eventsCompleted
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listDJMusicians = /* GraphQL */ `
  query ListDJMusicians(
    $filter: ModelDJMusicianFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDJMusicians(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        specializedIn
        title
        spealiziedInFIlter
        serviceloactionFIlter
        presentLocation
        yearsOfExperience
        serviceLocation
        portfolioLink
        portfolioImage
        uploadYourPhoto
        detailsAboutYou
        rating
        isConfirmed
        phoneNumber
        teamMember
        packages
        Reviews {
          nextToken
        }
        status
        email
        eventsCompleted
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getMakeupArtist = /* GraphQL */ `
  query GetMakeupArtist($id: ID!) {
    getMakeupArtist(id: $id) {
      id
      title
      yearsOfExperience
      spealiziedInFIlter
      serviceloactionFIlter
      serviceLocation
      portfolioLink
      portfolioImage
      presentLocation
      uploadYourPhoto
      detailsAboutYou
      rating
      isConfirmed
      phoneNumber
      teamMember
      packages
      Reviews {
        items {
          id
          description
          valueForMoney
          service
          behaviour
          average
          userPicture
          userName
          photographyID
          cinematographyID
          userID
          rentalID
          brandpromoterID
          decorationID
          printingpressID
          giftitemsID
          mehediartistID
          makeupartistID
          djmusicianID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      status
      email
      eventsCompleted
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listMakeupArtists = /* GraphQL */ `
  query ListMakeupArtists(
    $filter: ModelMakeupArtistFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMakeupArtists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        yearsOfExperience
        spealiziedInFIlter
        serviceloactionFIlter
        serviceLocation
        portfolioLink
        portfolioImage
        presentLocation
        uploadYourPhoto
        detailsAboutYou
        rating
        isConfirmed
        phoneNumber
        teamMember
        packages
        Reviews {
          nextToken
        }
        status
        email
        eventsCompleted
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getMehediArtist = /* GraphQL */ `
  query GetMehediArtist($id: ID!) {
    getMehediArtist(id: $id) {
      id
      title
      yearsOfExperience
      spealiziedInFIlter
      serviceloactionFIlter
      serviceLocation
      presentLocation
      packages
      portfolioLink
      portfolioImage
      uploadYourPhoto
      detailsAboutYou
      rating
      isConfirmed
      phoneNumber
      teamMember
      Reviews {
        items {
          id
          description
          valueForMoney
          service
          behaviour
          average
          userPicture
          userName
          photographyID
          cinematographyID
          userID
          rentalID
          brandpromoterID
          decorationID
          printingpressID
          giftitemsID
          mehediartistID
          makeupartistID
          djmusicianID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      status
      email
      eventsCompleted
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listMehediArtists = /* GraphQL */ `
  query ListMehediArtists(
    $filter: ModelMehediArtistFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMehediArtists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        yearsOfExperience
        spealiziedInFIlter
        serviceloactionFIlter
        serviceLocation
        presentLocation
        packages
        portfolioLink
        portfolioImage
        uploadYourPhoto
        detailsAboutYou
        rating
        isConfirmed
        phoneNumber
        teamMember
        Reviews {
          nextToken
        }
        status
        email
        eventsCompleted
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
