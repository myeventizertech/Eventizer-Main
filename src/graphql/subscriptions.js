/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCoupon = /* GraphQL */ `
  subscription OnCreateCoupon {
    onCreateCoupon {
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
export const onUpdateCoupon = /* GraphQL */ `
  subscription OnUpdateCoupon {
    onUpdateCoupon {
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
export const onDeleteCoupon = /* GraphQL */ `
  subscription OnDeleteCoupon {
    onDeleteCoupon {
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
export const onCreateHistory = /* GraphQL */ `
  subscription OnCreateHistory {
    onCreateHistory {
      id
      message
      Employee
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateHistory = /* GraphQL */ `
  subscription OnUpdateHistory {
    onUpdateHistory {
      id
      message
      Employee
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteHistory = /* GraphQL */ `
  subscription OnDeleteHistory {
    onDeleteHistory {
      id
      message
      Employee
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateEmployee = /* GraphQL */ `
  subscription OnCreateEmployee($owner: String) {
    onCreateEmployee(owner: $owner) {
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
export const onUpdateEmployee = /* GraphQL */ `
  subscription OnUpdateEmployee($owner: String) {
    onUpdateEmployee(owner: $owner) {
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
export const onDeleteEmployee = /* GraphQL */ `
  subscription OnDeleteEmployee($owner: String) {
    onDeleteEmployee(owner: $owner) {
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
export const onCreateBalance = /* GraphQL */ `
  subscription OnCreateBalance($owner: String) {
    onCreateBalance(owner: $owner) {
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
export const onUpdateBalance = /* GraphQL */ `
  subscription OnUpdateBalance($owner: String) {
    onUpdateBalance(owner: $owner) {
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
export const onDeleteBalance = /* GraphQL */ `
  subscription OnDeleteBalance($owner: String) {
    onDeleteBalance(owner: $owner) {
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
export const onCreatePaymentRequest = /* GraphQL */ `
  subscription OnCreatePaymentRequest($owner: String) {
    onCreatePaymentRequest(owner: $owner) {
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
export const onUpdatePaymentRequest = /* GraphQL */ `
  subscription OnUpdatePaymentRequest($owner: String) {
    onUpdatePaymentRequest(owner: $owner) {
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
export const onDeletePaymentRequest = /* GraphQL */ `
  subscription OnDeletePaymentRequest($owner: String) {
    onDeletePaymentRequest(owner: $owner) {
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
export const onCreateError = /* GraphQL */ `
  subscription OnCreateError {
    onCreateError {
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
export const onUpdateError = /* GraphQL */ `
  subscription OnUpdateError {
    onUpdateError {
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
export const onDeleteError = /* GraphQL */ `
  subscription OnDeleteError {
    onDeleteError {
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
export const onCreatePlan = /* GraphQL */ `
  subscription OnCreatePlan($owner: String) {
    onCreatePlan(owner: $owner) {
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
export const onUpdatePlan = /* GraphQL */ `
  subscription OnUpdatePlan($owner: String) {
    onUpdatePlan(owner: $owner) {
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
export const onDeletePlan = /* GraphQL */ `
  subscription OnDeletePlan($owner: String) {
    onDeletePlan(owner: $owner) {
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
export const onCreateOrders = /* GraphQL */ `
  subscription OnCreateOrders($owner: String) {
    onCreateOrders(owner: $owner) {
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
export const onUpdateOrders = /* GraphQL */ `
  subscription OnUpdateOrders($owner: String) {
    onUpdateOrders(owner: $owner) {
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
export const onDeleteOrders = /* GraphQL */ `
  subscription OnDeleteOrders($owner: String) {
    onDeleteOrders(owner: $owner) {
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
export const onCreateVendor = /* GraphQL */ `
  subscription OnCreateVendor($owner: String) {
    onCreateVendor(owner: $owner) {
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
export const onUpdateVendor = /* GraphQL */ `
  subscription OnUpdateVendor($owner: String) {
    onUpdateVendor(owner: $owner) {
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
export const onDeleteVendor = /* GraphQL */ `
  subscription OnDeleteVendor($owner: String) {
    onDeleteVendor(owner: $owner) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
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
export const onCreateReview = /* GraphQL */ `
  subscription OnCreateReview($owner: String) {
    onCreateReview(owner: $owner) {
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
export const onUpdateReview = /* GraphQL */ `
  subscription OnUpdateReview($owner: String) {
    onUpdateReview(owner: $owner) {
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
export const onDeleteReview = /* GraphQL */ `
  subscription OnDeleteReview($owner: String) {
    onDeleteReview(owner: $owner) {
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
export const onCreateCinematography = /* GraphQL */ `
  subscription OnCreateCinematography($owner: String) {
    onCreateCinematography(owner: $owner) {
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
export const onUpdateCinematography = /* GraphQL */ `
  subscription OnUpdateCinematography($owner: String) {
    onUpdateCinematography(owner: $owner) {
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
export const onDeleteCinematography = /* GraphQL */ `
  subscription OnDeleteCinematography($owner: String) {
    onDeleteCinematography(owner: $owner) {
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
export const onCreatePhotography = /* GraphQL */ `
  subscription OnCreatePhotography($owner: String) {
    onCreatePhotography(owner: $owner) {
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
export const onUpdatePhotography = /* GraphQL */ `
  subscription OnUpdatePhotography($owner: String) {
    onUpdatePhotography(owner: $owner) {
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
export const onDeletePhotography = /* GraphQL */ `
  subscription OnDeletePhotography($owner: String) {
    onDeletePhotography(owner: $owner) {
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
export const onCreateDJMusician = /* GraphQL */ `
  subscription OnCreateDJMusician($owner: String) {
    onCreateDJMusician(owner: $owner) {
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
export const onUpdateDJMusician = /* GraphQL */ `
  subscription OnUpdateDJMusician($owner: String) {
    onUpdateDJMusician(owner: $owner) {
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
export const onDeleteDJMusician = /* GraphQL */ `
  subscription OnDeleteDJMusician($owner: String) {
    onDeleteDJMusician(owner: $owner) {
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
export const onCreateMakeupArtist = /* GraphQL */ `
  subscription OnCreateMakeupArtist($owner: String) {
    onCreateMakeupArtist(owner: $owner) {
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
export const onUpdateMakeupArtist = /* GraphQL */ `
  subscription OnUpdateMakeupArtist($owner: String) {
    onUpdateMakeupArtist(owner: $owner) {
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
export const onDeleteMakeupArtist = /* GraphQL */ `
  subscription OnDeleteMakeupArtist($owner: String) {
    onDeleteMakeupArtist(owner: $owner) {
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
export const onCreateMehediArtist = /* GraphQL */ `
  subscription OnCreateMehediArtist($owner: String) {
    onCreateMehediArtist(owner: $owner) {
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
export const onUpdateMehediArtist = /* GraphQL */ `
  subscription OnUpdateMehediArtist($owner: String) {
    onUpdateMehediArtist(owner: $owner) {
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
export const onDeleteMehediArtist = /* GraphQL */ `
  subscription OnDeleteMehediArtist($owner: String) {
    onDeleteMehediArtist(owner: $owner) {
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
