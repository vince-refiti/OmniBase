| package |
package := Package name: 'OmniBase'.
package paxVersion: 1;
	basicComment: 'OmniBase 2.04
Copyright (C) 1998-2001 David Gorisek, ALL RIGHTS RESERVED
Copyright (C) 2001-2002 IT Consulting Gorisek d.o.o., ALL RIGHTS RESERVED

Check http://www.gorisek.com for the latest version of this package.

Release notes follow:


OmniBase 2.04 for Dolphin Smalltalk 5.0 release notes
-----------------------------------------------------

1. Installation

Install OmniBase into your image by loading package OmniBase.pac.
The package has been saved with Dolphin 5.0, if you need a package
for an earlier version please contact us by e-mail.

2. Documentation

An up-to-date OmniBase tutorial and API reference can be found on
the internet at the following URL:

http://www.gorisek.com

Dolphin Smalltalk distribution also includes a PersonnelFile package
which demonstrates one of possible strategies for making business
objects persistent and indexable using OmniBase. Note, that OmniBase
does not prescribe you a persistency model for business objects.
OmniBase only provides a way to persist Smalltalk objects in a multi-
user environment. As in Smalltalk itself, the implementation of the
object model is up to the application developer using OmniBase.


3. Support

If you find a bug please report it immediately by e-mail to
<david@gorisek.com> so that you can receive a new version in the
shortest possible time. Also suggestions on how to improve the
product are welcome.

Registered users of OmniBase are welcome to use the HelpDesk
application for submitting and tracking bug reports and feature
requests. HelpDesk is available at:

https://gorisek.com/HelpDesk/login.html

Send e-mail if you do not have a valid username or password.


4. Release change log

New in release 2.04

- fix for the ODBMemoryWriteStream which could in a very rare case
  write inconsistent serialization data

New in release 2.03

- changes in the VisualWorks version

New in release 2.02

- fixed ODBClassDescription>>createdFor: bug
- other changes in the VisualWorks version

New in release 2.01

- VisualWorks related fixes


5. Licence agreement

The OmniBase object database is provided as it is and with all
faults, known or unknown.

The source code and other information contained in the source
code package is COPYRIGHT (C) by David Gorisek (the author).
Portions of the source code can not be used without prior author''s
written permission.

OmniBase object database is licenced and sold under a
''per developer sit'' licence model.

You may install and use an unlimited number of copies of OmniBase 
object database on computers, including workstations, terminals 
or other digital electronic devices to design, develop, and test 
your software application(s), however, you must acquire and 
dedicate a license for each separate developer who is developing 
software using OmniBase. A license for the OmniBase object database 
may not be shared or used concurrently by different users. In no 
event shall the author be liable for any special, incidental, 
indirect, punitive or consequential damages whatsoever arising 
out of or in any way related to the use of or inability to use 
the OmniBase object database. By using the OmniBase object database
you accept this licence agreement and the fact that you are using 
the database at your own risk. The author reserves all rights not
expressly granted to you in this License agreement. The OmniBase 
object database is protected by copyright laws of the Republic of 
Slovenia and other intellectual property laws and treaties.

'.

package basicPackageVersion: '2.1.83'.


package classNames
	add: #ODB1CharacterString;
	add: #ODB8ByteFloat;
	add: #ODBAssociationChanged;
	add: #ODBBTreeDictionary;
	add: #ODBBTreeDictionaryAssociation;
	add: #ODBBTreeIdentityDictionary;
	add: #ODBBTreeIndexDictionary;
	add: #ODBBTreeIntegerIndexDictionary;
	add: #ODBBTreeIterator;
	add: #ODBBTreeMultiValueDictionary;
	add: #ODBBTreePage;
	add: #ODBByteStorageRequest;
	add: #ODBCannotLock;
	add: #ODBCannotLockKey;
	add: #ODBCannotLockObject;
	add: #ODBChange;
	add: #ODBChangesPackage;
	add: #ODBClassDescription;
	add: #ODBClassInfoFile;
	add: #ODBClassManager;
	add: #ODBClassManagerForSerialization;
	add: #ODBClient;
	add: #ODBClientFile;
	add: #ODBClientManager;
	add: #ODBClientTable;
	add: #ODBContainer;
	add: #ODBContainerInfoFile;
	add: #ODBCopyValue;
	add: #ODBDatabaseObject;
	add: #ODBDBBTreeDictionary;
	add: #ODBDBBTreeIdentityDictionary;
	add: #ODBDBBTreeIndexDictionary;
	add: #ODBDBBTreeIntegerIndexDictionary;
	add: #ODBDBBTreeMultiValueDictionary;
	add: #ODBDemandLoader;
	add: #ODBDeserializer;
	add: #ODBDeserializers;
	add: #ODBDictionaryChanged;
	add: #ODBDoubleByteCharacter;
	add: #ODBEmptyString;
	add: #ODBError;
	add: #ODBExistingObject;
	add: #ODBExpiredProxyObject;
	add: #ODBExternalBuffer;
	add: #ODBExternalReference;
	add: #ODBFile;
	add: #ODBFileStream;
	add: #ODBFloatAs100Integer;
	add: #ODBFloatAsInteger;
	add: #ODBForeignClient;
	add: #ODBGarbageCollector;
	add: #ODBGarbageCollectorFile;
	add: #ODBGarbageCollectorRequest;
	add: #ODBGcBTreeIterator;
	add: #ODBGcBTreePage;
	add: #ODBGlobalLockedTransaction;
	add: #ODBIdentityDictionary;
	add: #ODBIDTable;
	add: #ODBIntegerSet;
	add: #ODBKeyLock;
	add: #ODBLargeNegativeInteger;
	add: #ODBLargePositiveInteger;
	add: #ODBLocalClient;
	add: #ODBLocalTransaction;
	add: #ODBLock;
	add: #ODBLockingConflict;
	add: #ODBLockNotification;
	add: #ODBLongReadOnlyTransaction;
	add: #ODBMemoryReadStream;
	add: #ODBMemoryWriteStream;
	add: #ODBnCharacterString;
	add: #ODBNewObject;
	add: #ODBNewObjectNewClass;
	add: #ODBNewObjectVersion;
	add: #ODBObjectHolder;
	add: #ODBObjectID;
	add: #ODBObjectIDDictionary;
	add: #ODBObjectIdStack;
	add: #ODBObjectIndexFile;
	add: #ODBObjectLock;
	add: #ODBObjectManager;
	add: #ODBObjectStorage;
	add: #ODBOldHoldersFile;
	add: #ODBPersistentDictionary;
	add: #ODBReadOnlyTransaction;
	add: #ODBReference;
	add: #ODBReferenceManager;
	add: #ODBRootObjectDBHolder;
	add: #ODBRootObjectHolder;
	add: #ODBSerializedDBObject256References;
	add: #ODBSerializedDBObject65536References;
	add: #ODBSerializedDBObjectWithoutReferences;
	add: #ODBSerializedObject;
	add: #ODBSerializer;
	add: #ODBSizeChanged;
	add: #ODBSizeHolder;
	add: #ODBSortedDictionary;
	add: #ODBStream;
	add: #ODBStreamLockedNotification;
	add: #ODBTerminatedClient;
	add: #ODBTerminatedTransaction;
	add: #ODBTransaction;
	add: #ODBTransactionFile;
	add: #ODBTransactionManager;
	add: #ODBTransactionObject;
	add: #ODBUndefinedObject;
	add: #ODBUnexpectedNetworkError;
	add: #ODBValueHolder;
	add: #ODBVersionControlFile;
	add: #ODBVersionDescriptor;
	add: #ODBWeakValueIdentityDictionary;
	add: #OmniBase;
	add: #OmniBaseArchiver;
	add: #OmniBaseTester;
	yourself.

package methodNames
	add: #Array -> #odbBasicSerialize:;
	add: #Association -> #odbBasicSerialize:;
	add: #Behavior -> #odbGetRegDictionary;
	add: #BlockClosure -> #evaluateAndCommitIn:;
	add: #BlockClosure -> #evaluateIn:;
	add: #ByteArray -> #asBtreeKeyOfSize:;
	add: #ByteArray -> #odbAsInteger;
	add: #ByteArray -> #odbIsLessOrEqualTo:;
	add: #ByteArray -> #odbIsLessThan:;
	add: #ByteArray -> #odbLongAt:;
	add: #ByteArray -> #odbLongAt:put:;
	add: #ByteArray -> #odbShortAt:;
	add: #ByteArray -> #odbShortAt:put:;
	add: #Character -> #odbBasicSerialize:;
	add: #Character -> #odbSerialize:;
	add: #Class -> #odbSerialize:;
	add: #Class -> #odbTransientInstanceVariables;
	add: #Date -> #asBtreeKeyOfSize:;
	add: #Date -> #odbBasicSerialize:;
	add: #DeadObject -> #odbSerialize:;
	add: #Dictionary -> #odbBasicSerialize:;
	add: #False -> #odbBasicSerialize:;
	add: #False -> #odbObjectID;
	add: #False -> #odbSerialize:;
	add: #File -> #odbSerialize:;
	add: #Float -> #odbBasicSerialize:;
	add: #Float -> #odbSerialize:;
	add: #Fraction -> #odbBasicSerialize:;
	add: #Fraction -> #odbSerialize:;
	add: #IdentityDictionary -> #odbBasicSerialize:;
	add: #Integer -> #asBtreeKeyOfSize:;
	add: #Integer -> #odbBasicSerialize:;
	add: #Integer -> #odbSerialize:;
	add: #KernelLibrary -> #odbLockFile:offsetLow:offsetHigh:lengthLow:lengthHigh:;
	add: #KernelLibrary -> #odbSetEndOfFile:;
	add: #KernelLibrary -> #odbUnlockFile:offsetLow:offsetHigh:lengthLow:lengthHigh:;
	add: #LookupTable -> #odbBasicSerialize:;
	add: #Message -> #odbBasicSerialize:;
	add: #MessageSend -> #odbBasicSerialize:;
	add: #Metaclass -> #odbSerialize:;
	add: #Object -> #asBtreeKeyOfSize:;
	add: #Object -> #isIdenticalTo:;
	add: #Object -> #isODBReference;
	add: #Object -> #isODBTransactionObject;
	add: #Object -> #makePersistent;
	add: #Object -> #markDirty;
	add: #Object -> #odbAboutToCommitIn:;
	add: #Object -> #odbBasicSerialize:;
	add: #Object -> #odbDeserialize:;
	add: #Object -> #odbDeserialized:;
	add: #Object -> #odbGetOID;
	add: #Object -> #odbGetTransaction;
	add: #Object -> #odbLoadedIn:;
	add: #Object -> #odbMadePersistentIn:;
	add: #Object -> #odbObject;
	add: #Object -> #odbObjectID;
	add: #Object -> #odbResolve;
	add: #Object -> #odbSerialize:;
	add: #OrderedCollection -> #odbBasicSerialize:;
	add: #Process -> #odbSerialize:;
	add: #ProcessorScheduler -> #odbBasicSerialize:;
	add: #ProcessorScheduler -> #odbSerialize:;
	add: #ScaledDecimal -> #odbBasicSerialize:;
	add: #ScaledDecimal -> #odbSerialize:;
	add: #Semaphore -> #odbTerminateWaitingProcesses;
	add: #Set -> #odbBasicSerialize:;
	add: #String -> #asBtreeKeyOfSize:;
	add: #String -> #odbBasicSerialize:;
	add: #Symbol -> #odbBasicSerialize:;
	add: #Symbol -> #odbSerialize:;
	add: #SystemDictionary -> #odbBasicSerialize:;
	add: #SystemDictionary -> #odbSerialize:;
	add: #Time -> #odbBasicSerialize:;
	add: #TimeStamp -> #asBtreeKeyOfSize:;
	add: #True -> #odbBasicSerialize:;
	add: #True -> #odbObjectID;
	add: #True -> #odbSerialize:;
	add: #UndefinedObject -> #odbBasicSerialize:;
	add: #UndefinedObject -> #odbDeserialize:;
	add: #UndefinedObject -> #odbLoadVariables:classInfo:;
	add: #UndefinedObject -> #odbObjectID;
	add: #UndefinedObject -> #odbSerialize:;
	add: #Utf16String -> #odbBasicSerialize:;
	add: 'Array class' -> #odbDeserialize:;
	add: 'Association class' -> #odbDeserialize:;
	add: 'Character class' -> #odbDeserialize:;
	add: 'Class class' -> #odbDeserialize:;
	add: 'Date class' -> #odbDeserialize:;
	add: 'DeadObject class' -> #odbDeserialize:;
	add: 'Dictionary class' -> #odbDeserialize:;
	add: 'Float class' -> #odbDeserialize:;
	add: 'Fraction class' -> #odbDeserialize:;
	add: 'ListModel class' -> #odbTransientInstanceVariables;
	add: 'Message class' -> #odbDeserialize:;
	add: 'MessageSend class' -> #odbDeserialize:;
	add: 'Metaclass class' -> #odbDeserialize:;
	add: 'Model class' -> #odbTransientInstanceVariables;
	add: 'Object class' -> #newPersistent;
	add: 'Object class' -> #odbLoadVariables:classInfo:;
	add: 'OrderedCollection class' -> #odbDeserialize:;
	add: 'ScaledDecimal class' -> #odbDeserialize:;
	add: 'Set class' -> #odbDeserialize:;
	add: 'String class' -> #odbDeserialize:;
	add: 'Symbol class' -> #odbDeserialize:;
	add: 'Time class' -> #odbDeserialize:;
	add: 'Time class' -> #secondClockValue;
	add: 'UndefinedObject class' -> #odbDeserialize:;
	add: 'Utf16String class' -> #odbDeserialize:;
	yourself.

package binaryGlobalNames: (Set new
	yourself).

package globalAliases: (Set new
	yourself).

package setPrerequisites: #(
	'..\Dolphin\Core\Object Arts\Dolphin\Base\Dolphin'
	'..\Dolphin\Core\Object Arts\Dolphin\Base\Deprecated\Dolphin Base (Deprecated)'
	'..\Dolphin\Core\Object Arts\Dolphin\Base\Dolphin Legacy Date & Time'
	'..\Dolphin\Core\Object Arts\Dolphin\MVP\Models\List\Dolphin List Models'
	'..\Dolphin\Core\Object Arts\Dolphin\Base\Dolphin Message Box'
	'..\Dolphin\Core\Object Arts\Dolphin\MVP\Dialogs\Progress\Dolphin Progress Dialog').

package!

"Class Definitions"!

Object subclass: #ODBBTreeDictionaryAssociation
	instanceVariableNames: 'valueHolder key transaction'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Object subclass: #ODBByteStorageRequest
	instanceVariableNames: 'objectHolder byteArray'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Object subclass: #ODBChange
	instanceVariableNames: 'objectID transactionObject transaction'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Object subclass: #ODBChangesPackage
	instanceVariableNames: 'changes'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Object subclass: #ODBClassDescription
	instanceVariableNames: 'name bytes variable instSize instVarNames instVarIndexes class varOrder classID'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Object subclass: #ODBClassManager
	instanceVariableNames: 'classes names idTable infoFile mutex'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Object subclass: #ODBClassManagerForSerialization
	instanceVariableNames: 'classesToDescription idToClassDescription'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Object subclass: #ODBClient
	instanceVariableNames: 'id clientFile transactions clientManager transactionFiles'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Object subclass: #ODBClientManager
	instanceVariableNames: 'localClient environment idTable clients'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Object subclass: #ODBContainer
	instanceVariableNames: 'objectManager id name path indexFile dbFiles dataFileA dataFileB activeDataFile byteStorageQueue queueSize dbFilesMutex'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Object subclass: #ODBDatabaseObject
	instanceVariableNames: 'objectHolder'
	classVariableNames: 'ClassIDs'
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Object subclass: #ODBDemandLoader
	instanceVariableNames: 'objectID transaction proxyObject'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Object subclass: #ODBDeserializer
	instanceVariableNames: 'classArray classes classesCounter classManager counter objects stream referenceManager transaction'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: 'classArray'!
Object subclass: #ODBDeserializers
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Object subclass: #ODBExpiredProxyObject
	instanceVariableNames: 'oid'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Object subclass: #ODBExternalBuffer
	instanceVariableNames: 'contents'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Object subclass: #ODBFile
	instanceVariableNames: 'stream'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Object subclass: #ODBGarbageCollector
	instanceVariableNames: 'gcFile containers objectManager reorganizeDictionaries reorganizeIndexSets progressDialog progressValue'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Object subclass: #ODBIdentityDictionary
	instanceVariableNames: 'keys values elementCount sizeLimit emptySlotMarker'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Object subclass: #ODBLock
	instanceVariableNames: 'transaction lockIndex objectID lockID'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Object subclass: #ODBObjectID
	instanceVariableNames: 'containerID index'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Object subclass: #ODBObjectIDDictionary
	instanceVariableNames: 'dictionaries'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Object subclass: #ODBObjectManager
	instanceVariableNames: 'containers environment idTable infoFile'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Object subclass: #ODBReferenceManager
	instanceVariableNames: 'references'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Object subclass: #ODBSerializer
	instanceVariableNames: 'mainObject classCollection classes classesCounter classManager counter externalObjects objects stream referenceManager'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Object subclass: #ODBSortedDictionary
	instanceVariableNames: 'keys values elementCount currentIndex'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Object subclass: #ODBStream
	instanceVariableNames: 'position'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Object subclass: #ODBTransaction
	instanceVariableNames: 'client objects versionDescriptor dbConnection transactionFile objectIndex transactionManager locks cacheMutex'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Object subclass: #ODBTransactionManager
	instanceVariableNames: 'dbConnection versionControl oldHolders committingTransaction transactionReferences mutex serializingTransactionsMutex serializingTransactionsSemaphore'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Object subclass: #ODBTransactionObject
	instanceVariableNames: 'transaction lockObject holder dataBaseObject'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Object subclass: #ODBUndefinedObject
	instanceVariableNames: 'basicHash variables indexedVariables bytes classInfo basicSize'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Object subclass: #ODBVersionDescriptor
	instanceVariableNames: 'versionNumber readVersionNumber topVersionNumber committingTransactions myCommits'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Object subclass: #OmniBase
	instanceVariableNames: 'rootDir objectManager classManager clientManager transactionManager'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: 'sessions currentTransaction processToTransactionDict processToTransactionMutex'!
Object subclass: #OmniBaseArchiver
	instanceVariableNames: 'db newDb versionDescriptor oldHolders newVersionNumber progressDialog progressValue'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Object subclass: #OmniBaseTester
	instanceVariableNames: 'testDb testDir'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
LookupTable variableSubclass: #ODBPersistentDictionary
	instanceVariableNames: 'transaction'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Error subclass: #ODBError
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBError subclass: #ODBCannotLock
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBError subclass: #ODBLockingConflict
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBError subclass: #ODBUnexpectedNetworkError
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBLockingConflict subclass: #ODBCannotLockKey
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBLockingConflict subclass: #ODBCannotLockObject
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Notification subclass: #ODBLockNotification
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Notification subclass: #ODBStreamLockedNotification
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBByteStorageRequest subclass: #ODBGarbageCollectorRequest
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBChange subclass: #ODBAssociationChanged
	instanceVariableNames: 'key oldValue newValue'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBChange subclass: #ODBDictionaryChanged
	instanceVariableNames: 'dataBaseObject'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBChange subclass: #ODBNewObjectVersion
	instanceVariableNames: 'newVersion oldVersion'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBChange subclass: #ODBSizeChanged
	instanceVariableNames: 'deltaSize'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBClient subclass: #ODBForeignClient
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBClient subclass: #ODBLocalClient
	instanceVariableNames: 'hasGlobalLock freeTransactionFile'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBClient subclass: #ODBTerminatedClient
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBDatabaseObject subclass: #ODBDBBTreeIndexDictionary
	instanceVariableNames: 'iterator'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBDatabaseObject subclass: #ODBRootObjectDBHolder
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBDatabaseObject subclass: #ODBSerializedDBObjectWithoutReferences
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBDBBTreeIndexDictionary subclass: #ODBDBBTreeDictionary
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBDBBTreeIndexDictionary subclass: #ODBDBBTreeIntegerIndexDictionary
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBDBBTreeIndexDictionary subclass: #ODBDBBTreeMultiValueDictionary
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBDBBTreeDictionary subclass: #ODBDBBTreeIdentityDictionary
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBSerializedDBObjectWithoutReferences subclass: #ODBSerializedDBObject256References
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBSerializedDBObjectWithoutReferences subclass: #ODBSerializedDBObject65536References
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBDeserializers subclass: #ODB1CharacterString
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBDeserializers subclass: #ODB8ByteFloat
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBDeserializers subclass: #ODBCopyValue
	instanceVariableNames: 'value'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBDeserializers subclass: #ODBDoubleByteCharacter
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBDeserializers subclass: #ODBEmptyString
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBDeserializers subclass: #ODBExistingObject
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBDeserializers subclass: #ODBExternalReference
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBDeserializers subclass: #ODBFloatAs100Integer
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBDeserializers subclass: #ODBFloatAsInteger
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBDeserializers subclass: #ODBLargeNegativeInteger
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBDeserializers subclass: #ODBLargePositiveInteger
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBDeserializers subclass: #ODBnCharacterString
	instanceVariableNames: 'n'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBDeserializers subclass: #ODBNewObject
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBDeserializers subclass: #ODBNewObjectNewClass
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBExternalBuffer subclass: #ODBBTreePage
	instanceVariableNames: 'pagePosition keyLength valueLength iterator indexOnPage itemLength'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBExternalBuffer subclass: #ODBObjectHolder
	instanceVariableNames: 'container objectID oldVersion'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBExternalBuffer subclass: #ODBSizeHolder
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBExternalBuffer subclass: #ODBValueHolder
	instanceVariableNames: 'object removed objectSet'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBBTreePage subclass: #ODBGcBTreePage
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBFile subclass: #ODBBTreeIterator
	instanceVariableNames: 'keyLength valueLength rootPagePosition searchPath currentKey currentKeyExists nextKey searchPathHeight version mutex'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBFile subclass: #ODBClientFile
	instanceVariableNames: 'transactions'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBFile subclass: #ODBClientTable
	instanceVariableNames: 'table'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBFile subclass: #ODBGarbageCollectorFile
	instanceVariableNames: 'status'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBFile subclass: #ODBIDTable
	instanceVariableNames: 'lastID'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBFile subclass: #ODBIntegerSet
	instanceVariableNames: 'bitField currentPage changed'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBFile subclass: #ODBObjectIdStack
	instanceVariableNames: 'cache top filePos valueSize bottom'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBFile subclass: #ODBObjectIndexFile
	instanceVariableNames: 'valueLength pageSize start gcPosition gcBuffer gcCount var1'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBFile subclass: #ODBObjectStorage
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBFile subclass: #ODBOldHoldersFile
	instanceVariableNames: 'buffer bufPos filePos'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBFile subclass: #ODBTransactionFile
	instanceVariableNames: 'locks transactionID lockPositions recovery newLockPosition'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBFile subclass: #ODBVersionControlFile
	instanceVariableNames: 'lastReadTime versionDescriptor'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBBTreeIterator subclass: #ODBClassInfoFile
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBBTreeIterator subclass: #ODBContainerInfoFile
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBBTreeIterator subclass: #ODBGcBTreeIterator
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBIdentityDictionary subclass: #ODBWeakValueIdentityDictionary
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBLock subclass: #ODBKeyLock
	instanceVariableNames: 'key'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBLock subclass: #ODBObjectLock
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBStream subclass: #ODBFileStream
	instanceVariableNames: 'fileHandle pathName kernelLibrary mutex'
	classVariableNames: ''
	poolDictionaries: 'Win32Constants'
	classInstanceVariableNames: ''!
ODBStream subclass: #ODBMemoryReadStream
	instanceVariableNames: 'current'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBStream subclass: #ODBMemoryWriteStream
	instanceVariableNames: 'collections current readLimit lastSize'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBTransaction subclass: #ODBLocalTransaction
	instanceVariableNames: 'changesPackage inconsistent newObjects application'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBTransaction subclass: #ODBTerminatedTransaction
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBLocalTransaction subclass: #ODBGlobalLockedTransaction
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBLocalTransaction subclass: #ODBReadOnlyTransaction
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBReadOnlyTransaction subclass: #ODBLongReadOnlyTransaction
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBTransactionObject subclass: #ODBBTreeIndexDictionary
	instanceVariableNames: 'changed keySize currentKey'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBTransactionObject subclass: #ODBRootObjectHolder
	instanceVariableNames: 'changed'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBTransactionObject subclass: #ODBSerializedObject
	instanceVariableNames: 'changed'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBBTreeIndexDictionary subclass: #ODBBTreeDictionary
	instanceVariableNames: 'locks initialSize deltaSize'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBBTreeIndexDictionary subclass: #ODBBTreeIntegerIndexDictionary
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBBTreeIndexDictionary subclass: #ODBBTreeMultiValueDictionary
	instanceVariableNames: 'initialSize deltaSize newObjects'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ODBBTreeDictionary subclass: #ODBBTreeIdentityDictionary
	instanceVariableNames: 'newKeys'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ProtoObject subclass: #ODBReference
	instanceVariableNames: 'transactionObject demandLoader'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!

"Global Aliases"!


"Loose Methods"!

!Array methodsFor!

odbBasicSerialize: serializer

	serializer stream putByte: 35; putPositiveInteger: self size.
	1 to: self size do: [:i | (self at: i) odbSerialize: serializer ].! !
!Array categoriesFor: #odbBasicSerialize:!OmniBase!public! !

!Array class methodsFor!

odbDeserialize: deserializer 
	| array |
	array := self new: deserializer stream getPositiveInteger.
	deserializer register: array.
	1 to: array size do: [:i | array at: i put: deserializer odbNextObject].
	^array! !
!Array class categoriesFor: #odbDeserialize:!OmniBase!public! !

!Association methodsFor!

odbBasicSerialize: serializer

	serializer stream putByte: 31.
	key odbSerialize: serializer.
	value odbSerialize: serializer.! !
!Association categoriesFor: #odbBasicSerialize:!OmniBase!public! !

!Association class methodsFor!

odbDeserialize: deserializer 
	| result |
	deserializer register: (result := self new).
	^result
		key: deserializer odbNextObject;
		value: deserializer odbNextObject! !
!Association class categoriesFor: #odbDeserialize:!OmniBase!public! !

!Behavior methodsFor!

odbGetRegDictionary
	"Answer identity dictionary instance for serializing instances of the receiver class.
	This method can be used for optimization of large complex objects with many
	instances of a single class where some other way of indexing objects would be more appropriate.
	"

	^OmniBase newFastIdentityDictionary: 500! !
!Behavior categoriesFor: #odbGetRegDictionary!OmniBase!public! !

!BlockClosure methodsFor!

evaluateAndCommitIn: anOmniBaseTransaction 
	"Evaluate the receiver block while setting the current transaction 
	to anOmniBaseTransaction. If an error occurs during execution of
	this block the transaction will be rolled back. If there is no error the
	transaction will be committed. Answer the result of evaluating the block."

	| activeProcess previousTxn result |
	activeProcess := Processor activeProcess.
	previousTxn := OmniBase getCurrentAndSet: anOmniBaseTransaction for: activeProcess.
	
	[result := self ifCurtailed: [anOmniBaseTransaction abort].
	anOmniBaseTransaction commit] 
			ensure: 
				[previousTxn isNil 
					ifTrue: [OmniBase removeFor: activeProcess]
					ifFalse: [OmniBase setTransaction: previousTxn for: activeProcess]].
	^result!

evaluateIn: anOmniBaseTransaction 
	"Evaluate the receiver block while setting the current transaction 
	to anOmniBaseTransaction. If an error occurs during execution of
	this block the transaction will be rolled back. Answer the result of
	the block."

	| activeProcess previousTxn |
	activeProcess := Processor activeProcess.
	previousTxn := OmniBase getCurrentAndSet: anOmniBaseTransaction for: activeProcess.
	^[self ifCurtailed: [anOmniBaseTransaction abort]] ensure: 
			[previousTxn isNil 
				ifTrue: [OmniBase removeFor: activeProcess]
				ifFalse: [OmniBase setTransaction: previousTxn for: activeProcess]]! !
!BlockClosure categoriesFor: #evaluateAndCommitIn:!OmniBase!public! !
!BlockClosure categoriesFor: #evaluateIn:!OmniBase!public! !

!ByteArray methodsFor!

asBtreeKeyOfSize: keySize

	self size = keySize ifTrue: [^self].
	^self
		replaceBytesOf: (ByteArray new: keySize)
		from: 1 to: (self size min: keySize) startingAt: 1!

odbAsInteger
	| result each negative |
	result := 0.
	1 to: self size
		do: 
			[:i | 
			each := self at: i.
			i = 1 
				ifTrue: 
					[result := each bitAnd: 15.
					each > 31 ifTrue: [negative := true]]
				ifFalse: [result := result * 100 + (each bitAnd: 15) + ((each bitShift: -4) * 10)]].
	negative = true ifTrue: [^0 - result].
	^result!

odbIsLessOrEqualTo: aByteArray

    | i size |
    i := 1. size := self size.
    [(self at: i) = (aByteArray at: i) and: [i < size]] whileTrue: [i := i + 1].
    ^(self at: i) <= (aByteArray at: i)!

odbIsLessThan: aByteArray

    | i size |
    i := 1. size := self size.
    [(self at: i) = (aByteArray at: i) and: [i < size]] whileTrue: [i := i + 1].
    ^(self at: i) < (aByteArray at: i)!

odbLongAt: index 
	^self dwordAtOffset: index - 1!

odbLongAt: index put: longValue 
	self dwordAtOffset: index - 1 put: longValue!

odbShortAt: index 
	^self wordAtOffset: index - 1!

odbShortAt: index put: longValue 
	self wordAtOffset: index - 1 put: longValue! !
!ByteArray categoriesFor: #asBtreeKeyOfSize:!OmniBase!public! !
!ByteArray categoriesFor: #odbAsInteger!accessing!primitives!private! !
!ByteArray categoriesFor: #odbIsLessOrEqualTo:!OmniBase!public! !
!ByteArray categoriesFor: #odbIsLessThan:!OmniBase!public! !
!ByteArray categoriesFor: #odbLongAt:!public! !
!ByteArray categoriesFor: #odbLongAt:put:!public! !
!ByteArray categoriesFor: #odbShortAt:!public! !
!ByteArray categoriesFor: #odbShortAt:put:!public! !

!Character methodsFor!

odbBasicSerialize: serializer
	codePoint < 256
		ifTrue: 
			[serializer stream
				putByte: 13;
				putChar: self.
			^self].
	serializer stream
		putByte: 29;
		putWord: codePoint!

odbSerialize: serializer
	self codePoint < 256
		ifTrue: 
			[serializer stream
				putByte: 13;
				putChar: self.
			^self].
	serializer stream
		putByte: 29;
		putWord: self codePoint! !
!Character categoriesFor: #odbBasicSerialize:!public! !
!Character categoriesFor: #odbSerialize:!OmniBase!public! !

!Character class methodsFor!

odbDeserialize: deserializer

	^deserializer stream getChar! !
!Character class categoriesFor: #odbDeserialize:!OmniBase!public! !

!Class methodsFor!

odbSerialize: serializer

	serializer stream putByte: 26; putString: name!

odbTransientInstanceVariables
		"This method tells OmniBase which instance variables should not be stored into the database."

	^OrderedCollection new! !
!Class categoriesFor: #odbSerialize:!OmniBase!public! !
!Class categoriesFor: #odbTransientInstanceVariables!OmniBase!public! !

!Class class methodsFor!

odbDeserialize: deserializer

	^Smalltalk at: deserializer stream getString asSymbol ifAbsent: []! !
!Class class categoriesFor: #odbDeserialize:!OmniBase!public! !

!Date methodsFor!

asBtreeKeyOfSize: keySize 
	keySize < 3 
		ifTrue: [OmniBase signalError: 'Key size has to be at least 3 bytes to accomodate a date'].
	^days asBtreeKeyOfSize: keySize!

odbBasicSerialize: serializer

	serializer stream putByte: 32; putInteger: days! !
!Date categoriesFor: #asBtreeKeyOfSize:!OmniBase!public! !
!Date categoriesFor: #odbBasicSerialize:!OmniBase!public! !

!Date class methodsFor!

odbDeserialize: deserializer

	^deserializer register: (self new setDays: deserializer stream getInteger)! !
!Date class categoriesFor: #odbDeserialize:!OmniBase!public! !

!DeadObject methodsFor!

odbSerialize: serializer

	serializer stream putByte: 10! !
!DeadObject categoriesFor: #odbSerialize:!OmniBase!public! !

!DeadObject class methodsFor!

odbDeserialize: deserializer

	^self current! !
!DeadObject class categoriesFor: #odbDeserialize:!OmniBase!public! !

!Dictionary methodsFor!

odbBasicSerialize: serializer 
	self class == Dictionary ifFalse: [^super odbBasicSerialize: serializer].
	(serializer stream)
		putByte: 37;
		putPositiveInteger: self size.
	self keysAndValuesDo: 
			[:key :value | 
			key odbSerialize: serializer.
			value odbSerialize: serializer]! !
!Dictionary categoriesFor: #odbBasicSerialize:!OmniBase!public! !

!Dictionary class methodsFor!

odbDeserialize: deserializer 
	| size dict key |
	size := deserializer stream getPositiveInteger.
	dict := self new: size.
	deserializer register: dict.
	size timesRepeat: 
			[key := deserializer odbNextObject.
			dict at: key put: deserializer odbNextObject].
	^dict! !
!Dictionary class categoriesFor: #odbDeserialize:!OmniBase!public! !

!False methodsFor!

odbBasicSerialize: serializer

	serializer stream putByte: 16!

odbObjectID

  ^ODBObjectID containerID: 0 index: 3!

odbSerialize: serializer

	serializer stream putByte: 16! !
!False categoriesFor: #odbBasicSerialize:!OmniBase!public! !
!False categoriesFor: #odbObjectID!OmniBase!public! !
!False categoriesFor: #odbSerialize:!OmniBase!public! !

!File methodsFor!

odbSerialize: serializer

	serializer cantSave: self! !
!File categoriesFor: #odbSerialize:!OmniBase!public! !

!Float methodsFor!

odbBasicSerialize: serializer

	| x int |
	self = 0.0 ifTrue: [ ^serializer stream putByte: 41 ].
	self = 1.0 ifTrue: [ ^serializer stream putByte: 42 ].
	x := self * 100.0.
	(int := x asInteger) asFloat = x
		ifTrue: [
			int \\ 100 = 0 ifTrue: [ ^serializer stream putByte: 43; putInteger: int // 100 ].
			^serializer stream putByte: 44; putInteger: int.
		].
	self basicSize = 8 ifTrue: [
		^serializer stream
			putByte: 45;
			putBytesFrom: (ExternalAddress fromInteger: self yourAddress) len: 8.
	].
	serializer stream
		putByte: 40;
		putPositiveInteger: self basicSize;
		putBytesFrom: (ExternalAddress fromInteger: self yourAddress) len: self basicSize.!

odbSerialize: serializer 
	| x int |
	self = 0.0 ifTrue: [^serializer stream putByte: 41].
	self = 1.0 ifTrue: [^serializer stream putByte: 42].
	x := self * 100.0.
	(int := x asInteger) asFloat = x 
		ifTrue: 
			[int \\ 100 = 0 
				ifTrue: 
					[^(serializer stream)
						putByte: 43;
						putInteger: int // 100].
			^(serializer stream)
				putByte: 44;
				putInteger: int].
	self basicSize = 8 
		ifTrue: 
			[^(serializer stream)
				putByte: 45;
				putBytesFrom: (ExternalAddress fromInteger: self yourAddress) len: 8].
	(serializer stream)
		putByte: 40;
		putPositiveInteger: self basicSize;
		putBytesFrom: (ExternalAddress fromInteger: self yourAddress) len: self basicSize! !
!Float categoriesFor: #odbBasicSerialize:!OmniBase!public! !
!Float categoriesFor: #odbSerialize:!OmniBase!public! !

!Float class methodsFor!

odbDeserialize: deserializer

	| float len |
	float := self basicNew: (len := deserializer stream getPositiveInteger).
	deserializer stream getBytesFor: (ExternalAddress fromInteger: float yourAddress) len: len.
	^float! !
!Float class categoriesFor: #odbDeserialize:!OmniBase!public! !

!Fraction methodsFor!

odbBasicSerialize: serializer 
	(serializer stream)
		putByte: 39;
		putInteger: numerator;
		putInteger: denominator!

odbSerialize: serializer 
	(serializer stream)
		putByte: 39;
		putInteger: numerator;
		putInteger: denominator! !
!Fraction categoriesFor: #odbBasicSerialize:!OmniBase!public! !
!Fraction categoriesFor: #odbSerialize:!OmniBase!public! !

!Fraction class methodsFor!

odbDeserialize: deserializer

	^self numerator: deserializer stream getInteger
		denominator: deserializer stream getInteger

	! !
!Fraction class categoriesFor: #odbDeserialize:!OmniBase!public! !

!IdentityDictionary methodsFor!

odbBasicSerialize: serializer

	self class == IdentityDictionary ifFalse: [ ^super odbBasicSerialize: serializer ].
	serializer
		stream putByte: 38;
		putPositiveInteger: self size.
	self keysAndValuesDo: [:key :value |
		key odbSerialize: serializer.
		value odbSerialize: serializer.
	].
! !
!IdentityDictionary categoriesFor: #odbBasicSerialize:!OmniBase!public! !

!Integer methodsFor!

asBtreeKeyOfSize: keySize 
	"Answer BCD encoded byte array for indexing integers in B-tree."

	| bytes b i n |
	bytes := ByteArray new: keySize.
	n := self abs.
	i := keySize.
	[i = 1] whileFalse: 
			[b := n \\ 10.
			n := n // 10.
			b := n \\ 10 * 16 bitOr: b.
			n := n // 10.
			bytes at: i put: b.
			i := i - 1].
	b := n \\ 10.
	self < 0 ifTrue: [b := b bitOr: 32].
	bytes at: 1 put: b.
	n < 10 
		ifFalse: 
			[self error: 'B-tree dictionary key size is too short to convert receiver into byte array'].
	^bytes!

odbBasicSerialize: serializer

	self < 0 ifTrue: [
		self > -4 ifTrue: [ ^serializer stream putByte: self + 70 ].
		^serializer stream putByte: 12; putPositiveInteger: 0 - self.
	].
	self < 17 ifTrue: [ ^serializer stream putByte: self + 50 ].
	serializer stream putByte: 11; putPositiveInteger: self!

odbSerialize: serializer

	self < 0 ifTrue: [
		self > -4 ifTrue: [ ^serializer stream putByte: self + 70 ].
		^serializer stream putByte: 12; putPositiveInteger: 0 - self.
	].
	self < 17 ifTrue: [ ^serializer stream putByte: self + 50 ].
	serializer stream putByte: 11; putPositiveInteger: self! !
!Integer categoriesFor: #asBtreeKeyOfSize:!arithmetic!public! !
!Integer categoriesFor: #odbBasicSerialize:!OmniBase!public! !
!Integer categoriesFor: #odbSerialize:!OmniBase!public! !

!KernelLibrary methodsFor!

odbLockFile: fileHandle
    offsetLow: loPos offsetHigh: hiPos
    lengthLow: loLength lengthHigh: hiLength

	<stdcall: bool LockFile handle dword dword dword dword>
	^self invalidCall!

odbSetEndOfFile: fileHandle

	<stdcall: bool SetEndOfFile handle>
	^self invalidCall
!

odbUnlockFile: fileHandle
    offsetLow: loPos offsetHigh: hiPos
    lengthLow: loLength lengthHigh: hiLength

	<stdcall: bool UnlockFile handle dword dword dword dword>
	^self invalidCall! !
!KernelLibrary categoriesFor: #odbLockFile:offsetLow:offsetHigh:lengthLow:lengthHigh:!OmniBase!public! !
!KernelLibrary categoriesFor: #odbSetEndOfFile:!OmniBase!public! !
!KernelLibrary categoriesFor: #odbUnlockFile:offsetLow:offsetHigh:lengthLow:lengthHigh:!OmniBase!public! !

!ListModel class methodsFor!

odbTransientInstanceVariables
		"This method tells OmniBase which instance variables should not be stored into the database."

	^super odbTransientInstanceVariables
		add: 'events';
		yourself! !
!ListModel class categoriesFor: #odbTransientInstanceVariables!OmniBase!public! !

!LookupTable methodsFor!

odbBasicSerialize: serializer 
	self class == LookupTable ifFalse: [^super odbBasicSerialize: serializer].
	(serializer stream)
		putByte: 28;
		putPositiveInteger: self size.
	self keysAndValuesDo: 
			[:key :value | 
			key odbSerialize: serializer.
			value odbSerialize: serializer]! !
!LookupTable categoriesFor: #odbBasicSerialize:!OmniBase!public! !

!Message methodsFor!

odbBasicSerialize: serializer 
	self class == Message ifFalse: [^super odbBasicSerialize: serializer].
	serializer stream putByte: 17.
	selector odbSerialize: serializer.
	args odbSerialize: serializer! !
!Message categoriesFor: #odbBasicSerialize:!OmniBase!public! !

!Message class methodsFor!

odbDeserialize: deserializer 
	| result |
	deserializer register: (result := self new).
	^result
		setSelector: deserializer odbNextObject arguments: deserializer odbNextObject;
		yourself! !
!Message class categoriesFor: #odbDeserialize:!OmniBase!public! !

!MessageSend methodsFor!

odbBasicSerialize: serializer 
	self class == MessageSend ifFalse: [^super odbBasicSerialize: serializer].
	serializer stream putByte: 20.
	receiver odbSerialize: serializer.
	selector odbSerialize: serializer.
	args odbSerialize: serializer! !
!MessageSend categoriesFor: #odbBasicSerialize:!OmniBase!public! !

!MessageSend class methodsFor!

odbDeserialize: deserializer 
	| result |
	deserializer register: (result := self new).
	^result
		receiver: deserializer odbNextObject;
		setSelector: deserializer odbNextObject arguments: deserializer odbNextObject;
		yourself! !
!MessageSend class categoriesFor: #odbDeserialize:!OmniBase!public! !

!Metaclass methodsFor!

odbSerialize: serializer

	serializer stream putByte: 27;  putString: instanceClass name
! !
!Metaclass categoriesFor: #odbSerialize:!OmniBase!public! !

!Metaclass class methodsFor!

odbDeserialize: deserializer

	^(Smalltalk at: deserializer stream getString asSymbol ifAbsent: [^nil]) class! !
!Metaclass class categoriesFor: #odbDeserialize:!OmniBase!public! !

!Model class methodsFor!

odbTransientInstanceVariables
		"This method tells OmniBase which instance variables should not be stored into the database."

	^super odbTransientInstanceVariables
		add: 'events';
		yourself! !
!Model class categoriesFor: #odbTransientInstanceVariables!OmniBase!public! !

!Object methodsFor!

asBtreeKeyOfSize: keySize

	OmniBase signalError: 'Dont know how to convert this object to a B-tree dictionary bytes key'!

isIdenticalTo: anObject 
	"Answer true if anObject is identical to receiver. This is necessary since with database
	proxies the real object identity is lost because while the object is not yet loaded from the
	database it is represented by its proxy. Later when the real object is loaded this proxy still
	represents the identical object but the #== identity check will answer false because it is not
	aware of this. It is implemented in this way because the #== method is inlined and can not
	be overridden."

	anObject isODBReference ifTrue: [^anObject isIdenticalTo: self].
	^self == anObject!

isODBReference

        ^false!

isODBTransactionObject

        ^false!

makePersistent
	"Makes the object persistent in the current process's transaction."

	OmniBase currentTransaction makePersistent: self!

markDirty
	| t |
	(t := OmniBase currentTransactionOrNil) isNil 
		ifTrue: 
			[(t := self odbGetTransaction) isNil 
				ifTrue: 
					[OmniBase signalError: 'Can not mark object as dirty. Transaction context is unknown. ']].
	t markDirty: self!

odbAboutToCommitIn: anOmniBaseTransaction 
	"Sent before transaction writes changes to the database (right before commit).
	In this method you can use transaction the same way as usual.
	Do nothing by default."

	!

odbBasicSerialize: serializer 
	| stream classInfo instSize |
	classInfo := serializer registerClass: self class.
	stream := serializer stream.
	classInfo isVariable ifTrue: [stream putPositiveInteger: self basicSize].
	classInfo isBytes 
		ifTrue: [stream putBytesFrom: self len: self basicSize]
		ifFalse: 
			[classInfo instVarIndexes do: [:i | (self instVarAt: i) odbSerialize: serializer].
			instSize := self class instSize.
			instSize + 1 to: instSize + self basicSize
				do: [:i | (self instVarAt: i) odbSerialize: serializer]]!

odbDeserialize: deserializer

	^self!

odbDeserialized: deserializer

	^self!

odbGetOID
	"Answer persistent object's OID."

	| t oid |
	(oid := self odbObjectID) isNil ifFalse: [^oid].
	(t := OmniBase currentTransactionOrNil) isNil 
		ifFalse: [(oid := t getObjectIDOrNil: self) isNil ifFalse: [^oid]].
	(t := self odbGetTransaction) isNil ifFalse: [^t getObjectIDOrNil: self].
	^nil!

odbGetTransaction
	"Answer the transaction in which the object was loaded."

	"immediate objects can not be made persistent"

	| allReferences |
	self isImmediate ifTrue: [^nil].

	"first check all inst vars if any references a proxy from which we could get a reference to transaction"
	self class isBytes 
		ifFalse: 
			[1 to: self class instSize + self basicSize
				do: [:i | (self instVarAt: i) isODBReference ifTrue: [^(self instVarAt: i) odbTransaction]]].
	"check references to self and find the transaction in which object was loaded"
	allReferences := self allReferences.
	allReferences do: [:each | each isODBReference ifTrue: [^each odbTransaction]].
	^nil!

odbLoadedIn: anOmniBaseTransaction
		"This method is sent when the object is loaded from the database."
!

odbMadePersistentIn: anOmniBaseTransaction
		"This method is sent when the object is made persistent."!

odbObject
	"Answer real persistent object."

	^self!

odbObjectID
	^nil!

odbResolve
	"If this were a proxy object it would resolve itself and answer a real persistent object from the database.
	Since this is not a proxy answer yourself.
	Note: This method is here because in Dolphin 5.1 sending yourself is optimized which means that there is no message
	send involved and a proxy does not fetch an object from the database, instead it answers itself a proxy."

	^self!

odbSerialize: serializer 
	(serializer register: self) ifTrue: [^self].
	self odbBasicSerialize: serializer! !
!Object categoriesFor: #asBtreeKeyOfSize:!OmniBase!public! !
!Object categoriesFor: #isIdenticalTo:!OmniBase!public! !
!Object categoriesFor: #isODBReference!OmniBase!public! !
!Object categoriesFor: #isODBTransactionObject!OmniBase!public! !
!Object categoriesFor: #makePersistent!OmniBase!public! !
!Object categoriesFor: #markDirty!OmniBase!public! !
!Object categoriesFor: #odbAboutToCommitIn:!public! !
!Object categoriesFor: #odbBasicSerialize:!OmniBase!public! !
!Object categoriesFor: #odbDeserialize:!OmniBase!public! !
!Object categoriesFor: #odbDeserialized:!OmniBase!public! !
!Object categoriesFor: #odbGetOID!OmniBase!public! !
!Object categoriesFor: #odbGetTransaction!OmniBase!public! !
!Object categoriesFor: #odbLoadedIn:!OmniBase!public! !
!Object categoriesFor: #odbMadePersistentIn:!OmniBase!public! !
!Object categoriesFor: #odbObject!OmniBase!public! !
!Object categoriesFor: #odbObjectID!OmniBase!public! !
!Object categoriesFor: #odbResolve!OmniBase!public! !
!Object categoriesFor: #odbSerialize:!OmniBase!public! !

!Object class methodsFor!

newPersistent

	^self new makePersistent!

odbLoadVariables: deserializer classInfo: classInfo 
	| stream order iSize object basicSize varArray |
	stream := deserializer stream.
	classInfo isVariable 
		ifTrue: [object := self basicNew: (basicSize := stream getPositiveInteger)]
		ifFalse: 
			[basicSize := 0.
			object := self basicNew].
	deserializer register: object.
	classInfo isBytes 
		ifTrue: 
			[stream getBytesFor: object len: basicSize.
			^object].
	varArray := Array new: (iSize := classInfo realInstSize) + 1.
	order := classInfo variableOrder.
	1 to: classInfo instSize
		do: [:i | varArray at: (order at: i) put: deserializer odbNextObject].
	1 to: iSize do: [:i | object instVarAt: i put: (varArray at: i)].
	iSize + 1 to: iSize + basicSize
		do: [:i | object instVarAt: i put: deserializer odbNextObject].
	^object odbDeserialized: deserializer! !
!Object class categoriesFor: #newPersistent!constants!OmniBase!public! !
!Object class categoriesFor: #odbLoadVariables:classInfo:!OmniBase!public! !

!OrderedCollection methodsFor!

odbBasicSerialize: serializer

	serializer stream
		putByte: 81;
		putPositiveInteger: lastIndex - firstIndex + 1.
	firstIndex to: lastIndex do: [:i | (self basicAt: i) odbSerialize: serializer ].! !
!OrderedCollection categoriesFor: #odbBasicSerialize:!OmniBase!public! !

!OrderedCollection class methodsFor!

odbDeserialize: deserializer 
	| result size |
	size := deserializer stream getPositiveInteger.
	deserializer register: (result := self ofSize: size).
	1 to: size do: [:i | result basicAt: i put: deserializer odbNextObject].
	^result! !
!OrderedCollection class categoriesFor: #odbDeserialize:!OmniBase!public! !

!Process methodsFor!

odbSerialize: serializer

	serializer cantSave: self! !
!Process categoriesFor: #odbSerialize:!OmniBase!public! !

!ProcessorScheduler methodsFor!

odbBasicSerialize: serializer

	serializer stream putByte: 22!

odbSerialize: serializer

	serializer stream putByte: 22! !
!ProcessorScheduler categoriesFor: #odbBasicSerialize:!OmniBase!public! !
!ProcessorScheduler categoriesFor: #odbSerialize:!OmniBase!public! !

!ScaledDecimal methodsFor!

odbBasicSerialize: serializer 
	(serializer stream)
		putByte: 47;
		putInteger: self numerator;
		putInteger: self denominator;
		putInteger: scale!

odbSerialize: serializer 
	(serializer stream)
		putByte: 47;
		putInteger: self numerator;
		putInteger: self denominator;
		putInteger: scale! !
!ScaledDecimal categoriesFor: #odbBasicSerialize:!OmniBase!public! !
!ScaledDecimal categoriesFor: #odbSerialize:!OmniBase!public! !

!ScaledDecimal class methodsFor!

odbDeserialize: deserializer 
	| stream |
	stream := deserializer stream.
	^self 
		numerator: stream getInteger
		denominator: stream getInteger
		scale: stream getInteger! !
!ScaledDecimal class categoriesFor: #odbDeserialize:!OmniBase!public! !

!Semaphore methodsFor!

odbTerminateWaitingProcesses
	^self terminateProcess! !
!Semaphore categoriesFor: #odbTerminateWaitingProcesses!process synchronisation!public! !

!Set methodsFor!

odbBasicSerialize: serializer 
	self class == Set ifFalse: [^super odbBasicSerialize: serializer].
	(serializer stream)
		putByte: 30;
		putPositiveInteger: self size.
	self do: [:each | each odbSerialize: serializer]! !
!Set categoriesFor: #odbBasicSerialize:!OmniBase!public! !

!Set class methodsFor!

odbDeserialize: deserializer 
	| size set |
	size := deserializer stream getPositiveInteger.
	set := self new: size.
	deserializer register: set.
	size timesRepeat: [set add: deserializer odbNextObject].
	^set! !
!Set class categoriesFor: #odbDeserialize:!OmniBase!public! !

!String methodsFor!

asBtreeKeyOfSize: keySize 
	^self 
		replaceBytesOf: (ByteArray new: keySize)
		from: 1
		to: (self size min: keySize)
		startingAt: 1!

odbBasicSerialize: serializer

	self size < 10 ifTrue: [
		^serializer stream
			putByte: 70 + self size;
			putBytesFrom: self len: self size.
	].
	serializer stream
		putByte: 34;
		putPositiveInteger: self size;
		putBytesFrom: self len: self size! !
!String categoriesFor: #asBtreeKeyOfSize:!converting!public! !
!String categoriesFor: #odbBasicSerialize:!OmniBase!public! !

!String class methodsFor!

odbDeserialize: deserializer

	| str len |
	str := self new: (len := deserializer stream getPositiveInteger).
	deserializer stream getBytesFor: str len: len.
	^deserializer register: str! !
!String class categoriesFor: #odbDeserialize:!OmniBase!public! !

!Symbol methodsFor!

odbBasicSerialize: serializer

	serializer stream
		putByte: 18;
		putPositiveInteger: self size;
		putBytesFrom: self len: self size!

odbSerialize: serializer

	serializer stream
		putByte: 18;
		putPositiveInteger: self size;
		putBytesFrom: self len: self size! !
!Symbol categoriesFor: #odbBasicSerialize:!OmniBase!public! !
!Symbol categoriesFor: #odbSerialize:!OmniBase!public! !

!Symbol class methodsFor!

odbDeserialize: deserializer

	| str len |
	str := String new: (len := deserializer stream getPositiveInteger).
	deserializer stream getBytesFor: str len: len.
	^str asSymbol! !
!Symbol class categoriesFor: #odbDeserialize:!OmniBase!public! !

!SystemDictionary methodsFor!

odbBasicSerialize: serializer

	serializer stream putByte: 19!

odbSerialize: serializer

	serializer stream putByte: 19! !
!SystemDictionary categoriesFor: #odbBasicSerialize:!OmniBase!public! !
!SystemDictionary categoriesFor: #odbSerialize:!OmniBase!public! !

!Time methodsFor!

odbBasicSerialize: serializer
	serializer stream
		putByte: 33;
		putPositiveInteger: (self asMilliseconds // 1000)! !
!Time categoriesFor: #odbBasicSerialize:!OmniBase!public! !

!Time class methodsFor!

odbDeserialize: deserializer
	^deserializer register: (self basicNew seconds: deserializer stream getPositiveInteger)!

secondClockValue
	"Answer the current value of the system millisecond clock"

	^self millisecondClockValue // 1000! !
!Time class categoriesFor: #odbDeserialize:!OmniBase!public! !
!Time class categoriesFor: #secondClockValue!OmniBase!public! !

!TimeStamp methodsFor!

asBtreeKeyOfSize: keySize 
	keySize < 8 
		ifTrue: 
			[OmniBase signalError: 'Key size has to be at least 8 bytes to accomodate a timestamp'].
	^self asSeconds asBtreeKeyOfSize: keySize! !
!TimeStamp categoriesFor: #asBtreeKeyOfSize:!printing!public! !

!True methodsFor!

odbBasicSerialize: serializer

	serializer stream putByte: 15!

odbObjectID

  ^ODBObjectID containerID: 0 index: 2!

odbSerialize: serializer

	serializer stream putByte: 15! !
!True categoriesFor: #odbBasicSerialize:!OmniBase!public! !
!True categoriesFor: #odbObjectID!OmniBase!public! !
!True categoriesFor: #odbSerialize:!OmniBase!public! !

!UndefinedObject methodsFor!

odbBasicSerialize: serializer

	serializer stream putByte: 14!

odbDeserialize: deserializer

	deserializer loadError!

odbLoadVariables: deserializer classInfo: classInfo

	^ODBUndefinedObject new odbLoadVariables: deserializer classInfo: classInfo!

odbObjectID

  ^ODBObjectID containerID: 0 index: 1!

odbSerialize: serializer

	serializer stream putByte: 14! !
!UndefinedObject categoriesFor: #odbBasicSerialize:!OmniBase!public! !
!UndefinedObject categoriesFor: #odbDeserialize:!OmniBase!public! !
!UndefinedObject categoriesFor: #odbLoadVariables:classInfo:!public! !
!UndefinedObject categoriesFor: #odbObjectID!OmniBase!public! !
!UndefinedObject categoriesFor: #odbSerialize:!OmniBase!public! !

!UndefinedObject class methodsFor!

odbDeserialize: deserializer

	^nil! !
!UndefinedObject class categoriesFor: #odbDeserialize:!OmniBase!public! !

!Utf16String methodsFor!

odbBasicSerialize: serializer 
	| len stream |
	len := self size.
	(stream := serializer stream)
		putByte: 36;
		putPositiveInteger: len.
	1 to: len do: [:i | stream putWord: (self at: i) asInteger]! !
!Utf16String categoriesFor: #odbBasicSerialize:!OmniBase!public! !

!Utf16String class methodsFor!

odbDeserialize: deserializer 
	| str len stream |
	str := self new: (len := (stream := deserializer stream) getPositiveInteger).
	1 to: len do: [:i | str at: i put: (Character value: stream getWord)].
	^deserializer register: str! !
!Utf16String class categoriesFor: #odbDeserialize:!OmniBase!public! !

"End of package definition"!

"Source Globals"!

"Classes"!

ODBBTreeDictionaryAssociation guid: (GUID fromString: '{8162edcc-0fb8-11d4-b091-000000000000}')!
ODBBTreeDictionaryAssociation comment: ''!
!ODBBTreeDictionaryAssociation categoriesForClass!No category! !
!ODBBTreeDictionaryAssociation methodsFor!

< aBTreeDictionaryAssociation 
	^key odbIsLessThan: aBTreeDictionaryAssociation key!

key
	^key!

keyAsInteger
		"Convert from BCD encoded byte array into integer."

	| value |
	value := 0.
	1 to: key size do: [:i | value := (value * 100) + ((key at: i) & 15) + (((key at: i) bitShift: -4) * 10) ].
	^value!

setKey: aKey value: aValue 
	key := aKey.
	valueHolder := aValue!

setTransaction: aTransaction key: aKey value: aValue 
	transaction := aTransaction.
	key := aKey.
	valueHolder := aValue!

value
	^valueHolder getObjectIn: transaction!

valueHolder
	"Private - Answer BTree valueHolder."

	^valueHolder!

valueObjectID
	^valueHolder objectID!

valueOrObjectID
	| obj |
	(obj := valueHolder object) isNil ifFalse: [^obj].
	^valueHolder objectID! !
!ODBBTreeDictionaryAssociation categoriesFor: #<!public! !
!ODBBTreeDictionaryAssociation categoriesFor: #key!public! !
!ODBBTreeDictionaryAssociation categoriesFor: #keyAsInteger!accessing!public! !
!ODBBTreeDictionaryAssociation categoriesFor: #setKey:value:!private! !
!ODBBTreeDictionaryAssociation categoriesFor: #setTransaction:key:value:!private! !
!ODBBTreeDictionaryAssociation categoriesFor: #value!public! !
!ODBBTreeDictionaryAssociation categoriesFor: #valueHolder!private! !
!ODBBTreeDictionaryAssociation categoriesFor: #valueObjectID!public! !
!ODBBTreeDictionaryAssociation categoriesFor: #valueOrObjectID!public! !

ODBByteStorageRequest guid: (GUID fromString: '{8162edcd-0fb8-11d4-b091-000000000000}')!
ODBByteStorageRequest comment: ''!
!ODBByteStorageRequest categoriesForClass!No category! !
!ODBByteStorageRequest methodsFor!

bytes
	^byteArray!

bytesStored
	!

objectHolder
	^objectHolder!

objectHolder: anObjectHolder bytes: aByteArray 
	objectHolder := anObjectHolder.
	byteArray := aByteArray!

objectPosition: anInteger 
	objectHolder objectPosition: anInteger! !
!ODBByteStorageRequest categoriesFor: #bytes!public! !
!ODBByteStorageRequest categoriesFor: #bytesStored!public! !
!ODBByteStorageRequest categoriesFor: #objectHolder!public! !
!ODBByteStorageRequest categoriesFor: #objectHolder:bytes:!public! !
!ODBByteStorageRequest categoriesFor: #objectPosition:!public! !

ODBChange guid: (GUID fromString: '{8162edce-0fb8-11d4-b091-000000000000}')!
ODBChange comment: ''!
!ODBChange categoriesForClass!No category! !
!ODBChange methodsFor!

commit
        "Commit changes."!

committed!

initialize
	!

loadFromStream: aStream 
	"Load receiver from aStream.  Implemented by subclasses."

	!

objectID
	^objectID!

rollback
	!

setObjectID: anObjectID transactionObject: aTransactionObject 
	objectID := anObjectID.
	transactionObject := aTransactionObject!

storeOnStream: aStream 
	"Store receiver on aStream. 
        Implemented by subclasses."

	!

transaction: aTransaction 
	transaction := aTransaction!

transactionObject
	^transactionObject isNil 
		ifFalse: [transactionObject]
		ifTrue: [transactionObject := transaction transactionObjectAt: objectID]!

transactionObject: aTransactionObject 
	transactionObject := aTransactionObject! !
!ODBChange categoriesFor: #commit!public! !
!ODBChange categoriesFor: #committed!public! !
!ODBChange categoriesFor: #initialize!private! !
!ODBChange categoriesFor: #loadFromStream:!public! !
!ODBChange categoriesFor: #objectID!accessing!public! !
!ODBChange categoriesFor: #rollback!public! !
!ODBChange categoriesFor: #setObjectID:transactionObject:!public! !
!ODBChange categoriesFor: #storeOnStream:!public! !
!ODBChange categoriesFor: #transaction:!accessing!public! !
!ODBChange categoriesFor: #transactionObject!accessing!public! !
!ODBChange categoriesFor: #transactionObject:!accessing!public! !

!ODBChange class methodsFor!

changeClassID
	"Answer unique class ID used for storing changes into 
	transaction file or <nil> if change does not need to be stored."

	^nil!

new
	^super new initialize! !
!ODBChange class categoriesFor: #changeClassID!public! !
!ODBChange class categoriesFor: #new!public! !

ODBChangesPackage guid: (GUID fromString: '{8162edcf-0fb8-11d4-b091-000000000000}')!
ODBChangesPackage comment: ''!
!ODBChangesPackage categoriesForClass!No category! !
!ODBChangesPackage methodsFor!

add: aChange 
	changes add: aChange!

changes
	^changes!

collectChangeClassIDsFrom: rootClass to: aDictionary 
	"Private - Collect all change classIDs and store them to aDictionary."

	rootClass changeClassID notNil 
		ifTrue: [aDictionary at: rootClass changeClassID put: rootClass].
	rootClass subclasses do: [:each | self collectChangeClassIDsFrom: each to: aDictionary]!

commit
	changes do: [:each | each commit]!

committed
	"Changes have just been committed."

	changes do: [:each | each committed]!

initialize
	changes := (SortedCollection new: 300) sortBlock: self!

loadFromStream: aStream 
	"Load receiver from aStream."

	"collect change class IDs"

	| memoryStream classID classes change |
	classes := IdentityDictionary new.
	self collectChangeClassIDsFrom: ODBChange to: classes.
	"load changes"
	changes := OrderedCollection new.
	memoryStream := ODBMemoryReadStream new readFrom: aStream.
	[(classID := memoryStream getByte) > 0] whileTrue: 
			[change := (classes at: classID
						ifAbsent: [OmniBase signalError: 'Transaction rollback: Unknown change classID']) new 
						loadFromStream: memoryStream.
			changes add: change]!

rollback
	"Rollback change objects."

	changes do: [:each | each rollback]!

storeOnStream: aStream 
	"Store receiver on aStream."

	| memoryStream classID |
	memoryStream := ODBMemoryWriteStream new.
	changes do: 
			[:each | 
			(classID := each class changeClassID) isNil 
				ifFalse: 
					[memoryStream putByte: classID.
					each storeOnStream: memoryStream]].
	memoryStream
		putByte: 0;
		writeOn: aStream!

transaction: aTransaction 
	changes do: [:each | each transaction: aTransaction]!

value: change1 value: change2 
	"Private - Answer <true> if change1 is to be committed before change2.
	Disk access optimization so that files are updated sequentialy."

	| oid1 oid2 cid1 cid2 |
	(oid1 := change1 objectID) isNil ifTrue: [^true].
	(oid2 := change2 objectID) isNil ifTrue: [^false].
	(cid1 := oid1 containerID) == (cid2 := oid2 containerID) 
		ifTrue: [^oid1 index < oid2 index].
	^cid1 < cid2! !
!ODBChangesPackage categoriesFor: #add:!public! !
!ODBChangesPackage categoriesFor: #changes!public! !
!ODBChangesPackage categoriesFor: #collectChangeClassIDsFrom:to:!private! !
!ODBChangesPackage categoriesFor: #commit!public! !
!ODBChangesPackage categoriesFor: #committed!public! !
!ODBChangesPackage categoriesFor: #initialize!private! !
!ODBChangesPackage categoriesFor: #loadFromStream:!public! !
!ODBChangesPackage categoriesFor: #rollback!public! !
!ODBChangesPackage categoriesFor: #storeOnStream:!public! !
!ODBChangesPackage categoriesFor: #transaction:!public! !
!ODBChangesPackage categoriesFor: #value:value:!private! !

!ODBChangesPackage class methodsFor!

new

    ^super new initialize! !
!ODBChangesPackage class categoriesFor: #new!public! !

ODBClassDescription guid: (GUID fromString: '{8162edd0-0fb8-11d4-b091-000000000000}')!
ODBClassDescription comment: ''!
!ODBClassDescription categoriesForClass!No category! !
!ODBClassDescription methodsFor!

allPersistentInstanceVariablesFor: aClass 
	^(aClass allInstVarNames 
		reject: [:each | aClass odbTransientInstanceVariables includes: each]) asArray!

classID
	^classID!

classID: anInteger 
	classID := anInteger!

classNameSymbol
	^name asSymbol!

createdFor: aClass 
	^name = aClass name asString and: 
			[variable = aClass isVariable and: 
					[bytes = aClass isBytes 
						and: [instVarNames = (self allPersistentInstanceVariablesFor: aClass)]]]!

createFor: aClass 
	class := aClass.
	name := aClass name asString.
	instVarNames := self allPersistentInstanceVariablesFor: aClass.
	instSize := instVarNames size.
	bytes := aClass isBytes.
	variable := aClass isVariable.
	self updateVariableOrder!

instSize
	^instSize!

instVarIndexes
	^instVarIndexes!

instVarNames
	^instVarNames!

isBytes
	^bytes!

isVariable
	^variable!

loadFromStream: aStream 
	name := aStream getString.
	bytes := aStream getBoolean.
	variable := aStream getBoolean.
	instSize := aStream getPositiveInteger.
	instVarNames := Array new: instSize.
	1 to: instSize do: [:i | instVarNames at: i put: aStream getString].
	self updateVariableOrder!

name
	^name!

realClass
	^class!

realInstSize
	^class instSize!

saveOnStream: aStream 
	aStream
		putString: name;
		putBoolean: bytes;
		putBoolean: variable;
		putPositiveInteger: instSize.
	instVarNames do: [:n | aStream putString: n]!

updateVariableOrder
	| realNames |
	class := Smalltalk at: name asSymbol ifAbsent: [].
	varOrder := Array new: instVarNames size.
	class isNil 
		ifTrue: [varOrder atAllPut: 1]
		ifFalse: 
			[realNames := class allInstVarNames.
			1 to: varOrder size
				do: 
					[:i | 
					(varOrder at: i put: (realNames indexOf: (instVarNames at: i))) = 0 
						ifTrue: [varOrder at: i put: realNames size + 1]].
			instVarIndexes := Array new: instVarNames size.
			1 to: instVarNames size
				do: [:i | instVarIndexes at: i put: (class allInstVarNames indexOf: (instVarNames at: i))]]!

variableOrder
	^varOrder! !
!ODBClassDescription categoriesFor: #allPersistentInstanceVariablesFor:!private! !
!ODBClassDescription categoriesFor: #classID!public! !
!ODBClassDescription categoriesFor: #classID:!public! !
!ODBClassDescription categoriesFor: #classNameSymbol!public! !
!ODBClassDescription categoriesFor: #createdFor:!public! !
!ODBClassDescription categoriesFor: #createFor:!public! !
!ODBClassDescription categoriesFor: #instSize!public! !
!ODBClassDescription categoriesFor: #instVarIndexes!public! !
!ODBClassDescription categoriesFor: #instVarNames!public! !
!ODBClassDescription categoriesFor: #isBytes!public! !
!ODBClassDescription categoriesFor: #isVariable!public! !
!ODBClassDescription categoriesFor: #loadFromStream:!public! !
!ODBClassDescription categoriesFor: #name!public! !
!ODBClassDescription categoriesFor: #realClass!public! !
!ODBClassDescription categoriesFor: #realInstSize!public! !
!ODBClassDescription categoriesFor: #saveOnStream:!public! !
!ODBClassDescription categoriesFor: #updateVariableOrder!private! !
!ODBClassDescription categoriesFor: #variableOrder!public! !

ODBClassManager guid: (GUID fromString: '{8162edd1-0fb8-11d4-b091-000000000000}')!
ODBClassManager comment: ''!
!ODBClassManager categoriesForClass!No category! !
!ODBClassManager methodsFor!

addClassDescription: aClassDescription withId: classId 
	"Private - Add aClassDescription under a given ID."

	| pos stream unlocked previousVersionPos lastPos classDesc |
	aClassDescription isNil 
		ifTrue: 
			[[idTable getLastID < classId] whileTrue: [idTable add: 0].
			^self].
	unlocked := false.
	stream := infoFile stream.
	idTable waitForAddingLock.
	
	[pos := infoFile at: aClassDescription name
				ifAbsent: 
					[pos := stream setToEnd.
					[idTable getLastID < classId] whileTrue: [idTable add: 0].
					idTable at: classId put: pos.
					aClassDescription classID: classId.
					stream putLong: 0.	"info of previous class version"
					aClassDescription saveOnStream: stream.	"class definition"
					stream putLong: aClassDescription classID.	"class ID"
					infoFile
						at: aClassDescription name put: pos;
						flush.
					unlocked := idTable unlockAdding.
					^self].
	
	[lastPos := pos.
	stream position: pos.
	previousVersionPos := stream getLong.
	classDesc := ODBSerializer classDescriptionFrom: stream.
	classDesc classID: stream getLong.
	previousVersionPos = 0] 
			whileFalse: [pos := previousVersionPos].
	pos := stream setToEnd.
	stream putLong: 0.
	aClassDescription saveOnStream: stream.
	stream
		putLong: classId;
		position: lastPos;
		putLong: pos;
		flush.
	[idTable getLastID < classId] whileTrue: [idTable add: 0].
	idTable at: classId put: pos.
	idTable unlockAdding] 
			ifCurtailed: [unlocked ifFalse: [idTable unlockAdding]]!

addClassInfo: aClassInfo 
	"Private - Add class info to names dictionary."

	| id |
	id := aClassInfo classID.
	id > classes size 
		ifTrue: 
			[id - classes size timesRepeat: [classes add: nil].
			classes at: id put: aClassInfo.
			self addToDict: aClassInfo]
		ifFalse: 
			[(classes at: id) isNil 
				ifTrue: 
					[classes at: id put: aClassInfo.
					self addToDict: aClassInfo]]!

addToDict: aClassInfo 
	"Private - Add class info to names dictionary."

	| coll classNameSymbol |
	classNameSymbol := aClassInfo classNameSymbol.
	(coll := names at: classNameSymbol) isNil ifTrue: [^names at: classNameSymbol put: aClassInfo].
	coll class == OrderedCollection ifTrue: [^coll add: aClassInfo].
	names at: classNameSymbol put: (OrderedCollection with: coll with: aClassInfo)!

classDescriptionAt: anInteger 
	"Answers class at class id anInteger."

	| pos classInfo stream |
	mutex critical: 
			[classes size < anInteger 
				ifFalse: [(classInfo := classes at: anInteger) isNil ifFalse: [^classInfo]].
			(pos := idTable at: anInteger) isNil 
				ifTrue: [OmniBase signalError: 'Unknown class ID in serialized persistent object'].
			stream := infoFile stream.
			stream position: pos + 4.
			classInfo := ODBSerializer classDescriptionFrom: stream.
			classInfo classID: anInteger.
			self addClassInfo: classInfo].
	^classInfo!

close
	idTable isNil ifFalse: [idTable close].
	infoFile isNil ifFalse: [infoFile close]!

createOn: anOmniBase 
	mutex := Semaphore forMutualExclusion.
	
	[infoFile := ODBClassInfoFile createOn: anOmniBase dirName , self infoFileName.
	idTable := ODBIDTable createOn: anOmniBase dirName , self idFileName] 
			ifCurtailed: [self close]!

find: aClass 
	"Private - Answer class description for aClass or <nil> if none.
	Uses #createdFor: to check if class description corresponds to aClass."

	| coll |
	(coll := names at: aClass name asSymbol) isNil ifTrue: [^nil].
	coll class == OrderedCollection ifFalse: [^(coll createdFor: aClass) ifTrue: [coll]].
	coll reverseDo: [:classInfo | (classInfo createdFor: aClass) ifTrue: [^classInfo]].
	^nil!

idFileName
	^ODBFileStream pathSeparatorString , 'omnibase.odt'!

infoFileName
	^ODBFileStream pathSeparatorString , 'omnibase.odl'!

initialize
	classes := OrderedCollection new.
	names := OmniBase newFastIdentityDictionary: 500!

lastClassId
	^idTable getLastID!

loadInfoChainFrom: anInteger 
	"Private - Load class info chain from pos. Answer end of list."

	| info pos lastPos stream |
	pos := anInteger.
	stream := infoFile stream.
	[pos == 0] whileFalse: 
			[stream position: pos.
			lastPos := pos.
			pos := stream getLong.
			info := ODBSerializer classDescriptionFrom: stream.
			info classID: stream getLong.
			self addClassInfo: info].
	^lastPos!

openOn: anOmniBase 
	"Open receiver. Signal an error if failed."

	mutex := Semaphore forMutualExclusion.
	
	[idTable := ODBIDTable openOn: anOmniBase dirName , self idFileName.
	infoFile := ODBClassInfoFile openOn: anOmniBase dirName , self infoFileName] 
			ifCurtailed: [self close]!

register: aClass 
	"Answer an instance of ODBClassDescription for aClass.
	ODBClassDescription holds meta information about objects in the database."

	| info pos |
	mutex critical: 
			[(info := self find: aClass) isNil ifFalse: [^info].
			pos := infoFile at: aClass name ifAbsent: [^self registerNewClass: aClass].
			pos := self loadInfoChainFrom: pos.
			(info := self find: aClass) isNil ifFalse: [^info].
			^self registerNewClassVersion: aClass from: pos]!

registerNewClass: aClass 
	"Private - Register new class and answer its classInfo."

	| info pos stream unlocked |
	unlocked := false.
	info := ODBSerializer classDescriptionFor: aClass.
	idTable waitForAddingLock.
	
	[pos := infoFile at: aClass name
				ifAbsent: 
					[stream := infoFile stream.
					pos := stream setToEnd.
					info classID: (idTable add: pos).
					stream putLong: 0.	"info of previous class version"
					info saveOnStream: stream.	"class definition"
					stream putLong: info classID.	"class ID"
					infoFile
						at: info name put: pos;
						flush.
					unlocked := idTable unlockAdding.
					self addClassInfo: info.
					^info].
	idTable unlockAdding] 
			ifCurtailed: [unlocked ifFalse: [idTable unlockAdding]].
	pos := self loadInfoChainFrom: pos.
	(info := self find: aClass) isNil ifFalse: [^info].
	^self registerNewClassVersion: aClass from: pos!

registerNewClassVersion: aClass from: anInteger 
	"Private - Register new class version and answer its classInfo."

	| info pos lastPos stream unlocked |
	unlocked := false.
	idTable waitForAddingLock.
	
	[stream := infoFile stream.
	pos := anInteger.
	[true] whileTrue: 
			[lastPos := pos.
			stream position: pos.
			pos := stream getLong.
			pos == 0 
				ifTrue: 
					[info := ODBSerializer classDescriptionFor: aClass.
					pos := stream setToEnd.
					info classID: (idTable add: pos).
					stream putLong: 0.
					info saveOnStream: stream.
					stream
						putLong: info classID;
						position: lastPos;
						putLong: pos;
						flush.
					unlocked := idTable unlockAdding.
					self addClassInfo: info.
					^info].
			info := ODBSerializer classDescriptionFrom: stream.
			info classID: stream getLong.
			self addClassInfo: info.
			(info := self find: aClass) isNil 
				ifFalse: 
					[unlocked := idTable unlockAdding.
					^info]]] 
			ifCurtailed: [unlocked ifFalse: [idTable unlockAdding]]! !
!ODBClassManager categoriesFor: #addClassDescription:withId:!private! !
!ODBClassManager categoriesFor: #addClassInfo:!private! !
!ODBClassManager categoriesFor: #addToDict:!private! !
!ODBClassManager categoriesFor: #classDescriptionAt:!public! !
!ODBClassManager categoriesFor: #close!public! !
!ODBClassManager categoriesFor: #createOn:!public! !
!ODBClassManager categoriesFor: #find:!private! !
!ODBClassManager categoriesFor: #idFileName!private! !
!ODBClassManager categoriesFor: #infoFileName!private! !
!ODBClassManager categoriesFor: #initialize!private! !
!ODBClassManager categoriesFor: #lastClassId!private! !
!ODBClassManager categoriesFor: #loadInfoChainFrom:!private! !
!ODBClassManager categoriesFor: #openOn:!public! !
!ODBClassManager categoriesFor: #register:!public! !
!ODBClassManager categoriesFor: #registerNewClass:!private! !
!ODBClassManager categoriesFor: #registerNewClassVersion:from:!private! !

!ODBClassManager class methodsFor!

new
	^super new initialize! !
!ODBClassManager class categoriesFor: #new!public! !

ODBClassManagerForSerialization guid: (GUID fromString: '{9666921e-41f2-47f4-ac93-76c551ceb2a3}')!
ODBClassManagerForSerialization comment: ''!
!ODBClassManagerForSerialization categoriesForClass!No category! !
!ODBClassManagerForSerialization methodsFor!

classDescriptionAt: anInteger 
	(anInteger < 1 or: [anInteger > idToClassDescription size]) 
		ifTrue: [self error: '[Deserializer] Class description not found'].
	^idToClassDescription at: anInteger!

initializeForSerialization
	idToClassDescription := OrderedCollection new.
	classesToDescription := IdentityDictionary new!

loadFromStream: stream 
	| n classDescription |
	n := stream getPositiveInteger.
	n > 10000 ifTrue: [self error: '[Deserializer] Number of classes is too big'].
	idToClassDescription := Array new: n.
	1 to: n
		do: 
			[:i | 
			classDescription := ODBSerializer classDescriptionFrom: stream.
			classDescription classID: i.
			idToClassDescription at: i put: classDescription]!

register: aClass 
	| classDescription |
	^classesToDescription at: aClass
		ifAbsentPut: 
			[classDescription := ODBSerializer classDescriptionFor: aClass.
			idToClassDescription add: classDescription.
			classDescription classID: idToClassDescription size.
			classDescription]!

saveOnStream: stream 
	stream putPositiveInteger: idToClassDescription size.
	idToClassDescription do: [:each | each saveOnStream: stream]! !
!ODBClassManagerForSerialization categoriesFor: #classDescriptionAt:!public! !
!ODBClassManagerForSerialization categoriesFor: #initializeForSerialization!private! !
!ODBClassManagerForSerialization categoriesFor: #loadFromStream:!private! !
!ODBClassManagerForSerialization categoriesFor: #register:!public! !
!ODBClassManagerForSerialization categoriesFor: #saveOnStream:!private! !

ODBClient guid: (GUID fromString: '{8162edd2-0fb8-11d4-b091-000000000000}')!
ODBClient comment: ''!
!ODBClient categoriesForClass!No category! !
!ODBClient methodsFor!

clientID
        "Answer client ID."

    ^id!

description
	"Answer client description string."

	^clientFile clientDescription!

initialize

    transactions := OrderedCollection new.
    transactionFiles := OrderedCollection new!

isForeign

    ^false!

isTerminated

    ^false!

remove
	"Remove client from database."

	| cf |
	clientFile isNil 
		ifFalse: 
			[clientManager removePending: id.
			self transactions copy do: [:t | t abort].
			cf := clientFile.
			clientFile := nil.
			cf remove ifTrue: [clientManager removed: id]]!

transactionAdd: aTransaction
        "Private - Add aTransaction to client."

    transactions add: aTransaction.
    aTransaction setClient: self environment: clientManager environment!

transactionRemove: aTransaction
        "Private - Remove aTransaction."

    | trnFile trID |
    (trnFile := aTransaction transactionFile) == nil
        ifFalse: [
            trID := trnFile transactionID.
            trnFile remove
                ifTrue: [
                    transactionFiles remove: trID ifAbsent: [].
                    clientFile transactionIDs: transactionFiles.
                    transactionFiles isEmpty
                        ifTrue: [ clientManager removeLocksFor: id ]
                ]
        ].
    transactions remove: aTransaction ifAbsent: []!

transactions
        "Answer collection of R/W transactions started by client."

    ^transactions asArray!

trnFileName: fileID 
	"Private - Answer transaction file name."

	^clientManager dirName , ODBFileStream pathSeparatorString , fileID printString , '.trn'! !
!ODBClient categoriesFor: #clientID!public! !
!ODBClient categoriesFor: #description!public! !
!ODBClient categoriesFor: #initialize!private! !
!ODBClient categoriesFor: #isForeign!public! !
!ODBClient categoriesFor: #isTerminated!public! !
!ODBClient categoriesFor: #remove!public! !
!ODBClient categoriesFor: #transactionAdd:!private! !
!ODBClient categoriesFor: #transactionRemove:!private! !
!ODBClient categoriesFor: #transactions!public! !
!ODBClient categoriesFor: #trnFileName:!private! !

!ODBClient class methodsFor!

new

    ^super new initialize! !
!ODBClient class categoriesFor: #new!public! !

ODBClientManager guid: (GUID fromString: '{8162edd3-0fb8-11d4-b091-000000000000}')!
ODBClientManager comment: ''!
!ODBClientManager categoriesForClass!No category! !
!ODBClientManager methodsFor!

addOpenedClient: aClient 
	"Private - Add opened client to array of clients."

	(clients at: aClient clientID) isNil 
		ifFalse: [OmniBase signalError: 'Client already exists'].
	clients at: aClient clientID put: aClient!

clientAt: clientID 
	"Answer client object for clientID or <nil> if none."

	| client |
	client := clients at: clientID.
	client isNil 
		ifTrue: 
			[client := ODBTerminatedClient new openOn: self clientID: clientID.
			client isNil 
				ifTrue: 
					[client := ODBForeignClient new openOn: self clientID: clientID.
					client isNil 
						ifTrue: 
							[(ODBFileStream exists: (self clientFileName: clientID)) 
								ifFalse: 
									[self
										removePending: clientID;
										removed: clientID]]]].
	^client!

clientFileName: clientID 
	"Private - Answer client file name for clientID."

	^self dirName , ODBFileStream pathSeparatorString , clientID printString , '.usr'!

clients
	"Answer collection of all clients currently connected to database."

	| client coll |
	coll := OrderedCollection new.
	idTable 
		onClientIDsDo: [:clientID | (client := self clientAt: clientID) == nil ifFalse: [coll add: client]].
	^coll!

close

    clients isNil
        ifFalse: [
            clients do: [:each | each == nil ifFalse: [ each remove ]].
            clients := nil ].
    idTable isNil
        ifFalse: [
            idTable close.
            idTable := nil ]!

closeForeignClients
	"Close cached foreign clients."

	clients do: [:each | (each notNil and: [each isForeign]) ifTrue: [each remove]]!

createOn: anEnvironment
        "Create new user manager."

    environment := anEnvironment.
    [   idTable := ODBClientTable createOn: self idFileName.
        self opened
    ] ifCurtailed: [ self close ]!

dirName
	"Private - Answer directory where user files are placed."

	^environment dirName , ODBFileStream pathSeparatorString , 'Users'!

environment

    ^environment!

globalUnlock
                "Private - Remove global lock."

        idTable globalUnlock!

idFileName
	"Private - Answer name of file where client statuses are stored."

	^environment dirName , ODBFileStream pathSeparatorString , 'omnibase.usr'!

localClient
        "Answer local client."

    localClient == nil
        ifFalse: [ ^localClient ]
        ifTrue: [ ^localClient := self newClient ]!

newClient
	"Answer new local client."

	| newClient |
	idTable 
		onNewClientIDDo: [:newID | newClient := ODBLocalClient new createOn: self clientID: newID].
	newClient isNil ifTrue: [OmniBase signalError: 'Maximum number of clients reached'].
	^newClient!

opened
	"Private - Receiver has just been opened."

	clients := Array new: ODBClientTable maxClients.
	"ensure that directory exists in case the database was unzipped
	(WinZIP does not zip and later create empty directories)."
	(ODBFileStream directoryExists: self dirName) 
		ifFalse: [ODBFileStream directoryCreate: self dirName]!

openOn: anOmniBase

	environment := anOmniBase.
	[	idTable := ODBClientTable openOn: self idFileName.
		self opened
	] ifCurtailed: [ self close ]!

removed: clientID
                "Private - Client has been completely removed."

        idTable removeClientID: clientID!

removeDisconnectedClients
	"Remove all disconnected clients."

	self clients do: 
			[:client | 
			(client isTerminated or: [idTable isBeingRemoved: client clientID]) 
				ifTrue: [client remove]]!

removeForeignActiveClient: clientID
                "Private - Foreign active client has been closed."

        clients at: clientID put: nil!

removeLocksFor: clientID
                "Private - Client has no RW transactions anymore."

        ^idTable activateClientID: clientID!

removePending: clientID
                "Private - Client is about to be removed."

        (localClient notNil and: [localClient clientID == clientID]) ifTrue: [localClient := nil].
        clients at: clientID put: nil.
        idTable removingClientID: clientID!

requestLocksFor: clientID
                "Private - Client wants to set locks. Answer <true> if OK."

        ^idTable requestLockForClientID: clientID!

setGlobalLockFor: clientID
                "Private - Client wants to set global lock. Answer <true> if OK."

        ^idTable setGlobalLockFor: clientID
! !
!ODBClientManager categoriesFor: #addOpenedClient:!private! !
!ODBClientManager categoriesFor: #clientAt:!public! !
!ODBClientManager categoriesFor: #clientFileName:!private! !
!ODBClientManager categoriesFor: #clients!public! !
!ODBClientManager categoriesFor: #close!public! !
!ODBClientManager categoriesFor: #closeForeignClients!public! !
!ODBClientManager categoriesFor: #createOn:!public! !
!ODBClientManager categoriesFor: #dirName!private! !
!ODBClientManager categoriesFor: #environment!public! !
!ODBClientManager categoriesFor: #globalUnlock!private! !
!ODBClientManager categoriesFor: #idFileName!private! !
!ODBClientManager categoriesFor: #localClient!public! !
!ODBClientManager categoriesFor: #newClient!public! !
!ODBClientManager categoriesFor: #opened!private! !
!ODBClientManager categoriesFor: #openOn:!public! !
!ODBClientManager categoriesFor: #removed:!private! !
!ODBClientManager categoriesFor: #removeDisconnectedClients!public! !
!ODBClientManager categoriesFor: #removeForeignActiveClient:!private! !
!ODBClientManager categoriesFor: #removeLocksFor:!private! !
!ODBClientManager categoriesFor: #removePending:!private! !
!ODBClientManager categoriesFor: #requestLocksFor:!private! !
!ODBClientManager categoriesFor: #setGlobalLockFor:!private! !

ODBContainer guid: (GUID fromString: '{8162edd4-0fb8-11d4-b091-000000000000}')!
ODBContainer comment: ''!
!ODBContainer categoriesForClass!No category! !
!ODBContainer methodsFor!

addByteStorageRequest: anODBByteStorageRequest 
	byteStorageQueue add: anODBByteStorageRequest.
	queueSize := queueSize + anODBByteStorageRequest bytes size.
	queueSize > 65536 ifTrue: [self flushBytes]!

at: index 
	| bytes |
	(bytes := indexFile at: index) isNil ifTrue: [^nil].
	^(ODBObjectHolder createOn: bytes) setContainer: self
		objectID: (ODBObjectID containerID: id index: index)!

bytesAllocated
	| size1 size2 |
	size1 := 0.
	size2 := 0.
	dataFileA isNil ifFalse: [size1 := dataFileA size].
	dataFileB isNil ifFalse: [size2 := dataFileB size].
	^size1 + size2!

close
	dbFiles do: 
			[:each | 
			each isNil 
				ifFalse: 
					[each
						close;
						beUnfinalizable]].
	indexFile isNil ifFalse: [indexFile close].
	dataFileA isNil ifFalse: [dataFileA close].
	dataFileB isNil ifFalse: [dataFileB close]!

closeObjectFile: anInteger 
	"Remove database object file number anInteger from 
        dictionary of opened files and close it."

	| file |
	dbFilesMutex critical: 
			[file := dbFiles at: anInteger ifAbsent: [^self].
			dbFiles removeKey: anInteger.
			file
				close;
				beUnfinalizable]!

convertToLocalObjectSpaceNumber: objectSpaceNumber 
	^indexFile swappedObjectSpaces ifTrue: [1 - objectSpaceNumber] ifFalse: [objectSpaceNumber]!

createNewObjectSpace
	"Create new object space for garbage collection."

	dataFileA isNil 
		ifTrue: [dataFileA := ODBObjectStorage createOn: self dataFileNameA]
		ifFalse: 
			[dataFileB isNil ifTrue: [dataFileB := ODBObjectStorage createOn: self dataFileNameB]]!

createOn: aString 
	"Create new container on containerPath."

	path := aString.
	
	[indexFile := ODBObjectIndexFile createOn: self indexFileName.
	self localDefaultObjectSpace == 0 
		ifTrue: 
			[dataFileA := ODBObjectStorage createOn: self dataFileNameA.
			activeDataFile := dataFileA]
		ifFalse: 
			[dataFileB := ODBObjectStorage createOn: self dataFileNameB.
			activeDataFile := dataFileB]] 
			ifCurtailed: [self close]!

dataFileNameA
	^path , ODBFileStream pathSeparatorString , 'objects.a'!

dataFileNameB
	^path , ODBFileStream pathSeparatorString , 'objects.b'!

dataFileSize
	^activeDataFile stream size!

dirName
	"Private - Needed by database objects that are creating their own files."

	^path!

fileNameFromIndex: anInteger 
	"Private - Answer object file name from index."

	^path , ODBFileStream pathSeparatorString , anInteger printString , '.btr'!

flushBytes
	"Store byte array queue to dataFile and update object holders in queue."

	| pos bufPos stream buf size bytes objectPosition |
	queueSize == 0 ifTrue: [^self].
	self lockDataFile.
	stream := activeDataFile stream.
	pos := stream setToEnd.
	buf := ByteArray new: queueSize.
	bufPos := 0.
	byteStorageQueue do: 
			[:each | 
			bytes := each bytes.
			size := bytes size.
			buf 
				replaceFrom: bufPos + 1
				to: bufPos + size
				with: bytes
				startingAt: 1.
			objectPosition := pos + bufPos bitShift: 1.
			activeDataFile == dataFileA 
				ifTrue: [each objectPosition: objectPosition]
				ifFalse: [each objectPosition: (objectPosition bitOr: 1)].
			bufPos := bufPos + size].
	stream
		atPosition: pos
			putBytesFrom: buf
			len: queueSize;
		flush.
	activeDataFile unlockAdding.
	byteStorageQueue do: [:each | each bytesStored].
	byteStorageQueue := OrderedCollection new.
	queueSize := 0!

id
	^id!

id: anInteger 
	id := anInteger!

indexFile
	^indexFile!

indexFileName
	^path , ODBFileStream pathSeparatorString , 'objects.idx'!

initHolders: holders 
	indexFile addHolders: holders!

initialize
	dbFiles := ODBWeakValueIdentityDictionary new.
	dbFilesMutex := Semaphore forMutualExclusion.
	byteStorageQueue := OrderedCollection new.
	queueSize := 0!

loadBytesAt: anInteger length: length 
	| byteArray stream bytesRead |
	(anInteger bitAnd: 1) == 0 
		ifTrue: 
			[dataFileA isNil ifTrue: [dataFileA := ODBObjectStorage openOn: self dataFileNameA].
			stream := dataFileA stream]
		ifFalse: 
			[dataFileB isNil ifTrue: [dataFileB := ODBObjectStorage openOn: self dataFileNameB].
			stream := dataFileB stream].
	byteArray := ByteArray new: length.
	bytesRead := stream 
				atPosition: (anInteger bitShift: -1)
				getBytesFor: byteArray
				len: length.
	bytesRead == length ifTrue: [^byteArray].
	^OmniBase signalError: 'Can not read object'!

localDefaultObjectSpace
	^self convertToLocalObjectSpaceNumber: objectManager defaultObjectSpace!

lockDataFile
	| currentSpace defaultSpace |
	activeDataFile waitForAddingLockWhileWaitingDo: 
			[currentSpace := activeDataFile == dataFileA ifTrue: [0] ifFalse: [1].
			defaultSpace := self localDefaultObjectSpace.
			currentSpace == defaultSpace 
				ifFalse: 
					[defaultSpace == 0 
						ifTrue: 
							[dataFileA isNil ifTrue: [dataFileA := ODBObjectStorage openOn: self dataFileNameA].
							activeDataFile := dataFileA]
						ifFalse: 
							[dataFileB isNil ifTrue: [dataFileB := ODBObjectStorage openOn: self dataFileNameB].
							activeDataFile := dataFileB].
					^self lockDataFile]]!

lockObjectSpace: anInteger 
	(self convertToLocalObjectSpaceNumber: anInteger) = 0 
		ifTrue: [dataFileA waitForAddingLock]
		ifFalse: [dataFileB waitForAddingLock]!

name
	^name!

name: aString 
	name := aString!

newObjectHolder
	^ODBObjectHolder new setContainer: self objectID: (ODBObjectID containerID: id index: 0)!

numberOfObjects
	"Answer number of objects in container."

	^indexFile getLastIndex!

objectHoldersDo: aBlock 
	| objectHolder |
	indexFile indexesAndValuesDo: 
			[:index :value | 
			objectHolder := (ODBObjectHolder createOn: value) setContainer: self
						objectID: (ODBObjectID containerID: id index: index).
			aBlock value: objectHolder]!

objectManager
	^objectManager!

objectManager: anODBObjectManager 
	objectManager := anODBObjectManager!

onNewObjectFileDo: aBlock 
	| file newIndex |
	dbFilesMutex critical: 
			[newIndex := indexFile newObjectFileID.
			file := aBlock value: newIndex value: (self fileNameFromIndex: newIndex).
			file notNil 
				ifTrue: 
					[dbFiles at: newIndex put: file.
					file beFinalizable]].
	^file!

openObjectFile: index ifAbsentPut: aBlock 
	| file |
	dbFilesMutex critical: 
			[((file := dbFiles at: index) isNil or: [file stream isNil]) 
				ifTrue: 
					[file := aBlock value: (self fileNameFromIndex: index).
					file beFinalizable.
					dbFiles at: index put: file]].
	^file!

openOn: aString 
	path := aString.
	
	[indexFile := ODBObjectIndexFile openOn: self indexFileName.
	[dataFileA := ODBObjectStorage openOn: self dataFileNameA] on: Error do: [:ex | ].
	[dataFileB := ODBObjectStorage openOn: self dataFileNameB] on: Error do: [:ex | ].
	self localDefaultObjectSpace = 0 
		ifTrue: [(activeDataFile := dataFileA) isNil ifTrue: [activeDataFile := dataFileB]]
		ifFalse: [(activeDataFile := dataFileB) isNil ifTrue: [activeDataFile := dataFileA]].
	activeDataFile isNil 
		ifTrue: [OmniBase signalError: 'Object storage file ' , self dataFileNameA , ' can not be opened']] 
			ifCurtailed: [self close]!

removeHolderAt: index 
	indexFile removeIndex: index!

removeObjectFile: anInteger 
	| file |
	dbFilesMutex critical: 
			[file := dbFiles at: anInteger ifAbsent: [^self].
			dbFiles removeKey: anInteger.
			file
				close;
				beUnfinalizable.
			ODBFileStream remove: (self fileNameFromIndex: anInteger)]!

removeObjectSpace: anInteger 
	(self convertToLocalObjectSpaceNumber: anInteger) = 0 
		ifTrue: 
			[dataFileA isNil 
				ifFalse: 
					[activeDataFile == dataFileA ifTrue: [activeDataFile := dataFileB].
					dataFileA
						unlockAdding;
						removeAll;
						remove.
					dataFileA := nil]]
		ifFalse: 
			[dataFileB isNil 
				ifFalse: 
					[activeDataFile == dataFileB ifTrue: [activeDataFile := dataFileA].
					dataFileB
						unlockAdding;
						removeAll;
						remove.
					dataFileB := nil]]!

setNewObjectSpace: newSpace 
	| currentSpace newLocalSpace |
	newLocalSpace := self convertToLocalObjectSpaceNumber: newSpace.
	currentSpace := activeDataFile == dataFileA ifTrue: [0] ifFalse: [1].
	currentSpace = newLocalSpace ifTrue: [^self].
	newLocalSpace = 0 
		ifTrue: 
			[dataFileA isNil ifTrue: [dataFileA := ODBObjectStorage openOn: self dataFileNameA].
			activeDataFile := dataFileA]
		ifFalse: 
			[dataFileB isNil ifTrue: [dataFileB := ODBObjectStorage openOn: self dataFileNameB].
			activeDataFile := dataFileB]!

swapObjectSpaces
	indexFile swappedObjectSpaces: indexFile swappedObjectSpaces not! !
!ODBContainer categoriesFor: #addByteStorageRequest:!public! !
!ODBContainer categoriesFor: #at:!public! !
!ODBContainer categoriesFor: #bytesAllocated!byte storage management!public! !
!ODBContainer categoriesFor: #close!creating!public! !
!ODBContainer categoriesFor: #closeObjectFile:!public! !
!ODBContainer categoriesFor: #convertToLocalObjectSpaceNumber:!byte storage management!private! !
!ODBContainer categoriesFor: #createNewObjectSpace!public! !
!ODBContainer categoriesFor: #createOn:!creating!public! !
!ODBContainer categoriesFor: #dataFileNameA!private! !
!ODBContainer categoriesFor: #dataFileNameB!private! !
!ODBContainer categoriesFor: #dataFileSize!public! !
!ODBContainer categoriesFor: #dirName!private! !
!ODBContainer categoriesFor: #fileNameFromIndex:!private! !
!ODBContainer categoriesFor: #flushBytes!public! !
!ODBContainer categoriesFor: #id!accessing!public! !
!ODBContainer categoriesFor: #id:!private! !
!ODBContainer categoriesFor: #indexFile!private! !
!ODBContainer categoriesFor: #indexFileName!private! !
!ODBContainer categoriesFor: #initHolders:!public! !
!ODBContainer categoriesFor: #initialize!private! !
!ODBContainer categoriesFor: #loadBytesAt:length:!public! !
!ODBContainer categoriesFor: #localDefaultObjectSpace!byte storage management!private! !
!ODBContainer categoriesFor: #lockDataFile!byte storage management!private! !
!ODBContainer categoriesFor: #lockObjectSpace:!byte storage management!public! !
!ODBContainer categoriesFor: #name!accessing!public! !
!ODBContainer categoriesFor: #name:!private! !
!ODBContainer categoriesFor: #newObjectHolder!public! !
!ODBContainer categoriesFor: #numberOfObjects!public! !
!ODBContainer categoriesFor: #objectHoldersDo:!public! !
!ODBContainer categoriesFor: #objectManager!accessing!public! !
!ODBContainer categoriesFor: #objectManager:!private! !
!ODBContainer categoriesFor: #onNewObjectFileDo:!public! !
!ODBContainer categoriesFor: #openObjectFile:ifAbsentPut:!public! !
!ODBContainer categoriesFor: #openOn:!creating!public! !
!ODBContainer categoriesFor: #removeHolderAt:!public! !
!ODBContainer categoriesFor: #removeObjectFile:!public! !
!ODBContainer categoriesFor: #removeObjectSpace:!byte storage management!public! !
!ODBContainer categoriesFor: #setNewObjectSpace:!byte storage management!public! !
!ODBContainer categoriesFor: #swapObjectSpaces!byte storage management!public! !

!ODBContainer class methodsFor!

new

    ^super new initialize! !
!ODBContainer class categoriesFor: #new!public! !

ODBDatabaseObject guid: (GUID fromString: '{8162edd5-0fb8-11d4-b091-000000000000}')!
ODBDatabaseObject comment: '"Evaluate ODDatabaseObject>>initialize to initialize the ClassIDs array. "'!
!ODBDatabaseObject categoriesForClass!No category! !
!ODBDatabaseObject methodsFor!

close
	"Implemented by subclasses."

	!

garbageCollectOn: anODBGarbageCollector 
	self close!

makeTransactionObject: aTransaction 
	"Make transaction object from receiver. "

	self subclassResponsibility!

objectHolder
	^objectHolder!

openOn: anObjectHolder 
	objectHolder := anObjectHolder!

referencesDo: aBlock!

remove! !
!ODBDatabaseObject categoriesFor: #close!public! !
!ODBDatabaseObject categoriesFor: #garbageCollectOn:!public! !
!ODBDatabaseObject categoriesFor: #makeTransactionObject:!public! !
!ODBDatabaseObject categoriesFor: #objectHolder!public! !
!ODBDatabaseObject categoriesFor: #openOn:!public! !
!ODBDatabaseObject categoriesFor: #referencesDo:!public!public/unclassified! !
!ODBDatabaseObject categoriesFor: #remove!public! !

!ODBDatabaseObject class methodsFor!

addClassIDsTo: aDictionary 
	"Private - Add classID of each subclass of receiver 
        to aDictionary. Answer class ID maximum."

	| maxID |
	maxID := 0.
	self subclasses do: 
			[:each | 
			aDictionary at: each classID put: each.
			maxID := (each classID max: maxID) max: (each addClassIDsTo: aDictionary)].
	^maxID!

hasBytes
	"Answer <true> if the object stores its contents as bytes."

	^false!

hasExternalFiles
	"Answer <true> if the object stores its contents into external files."

	^false!

initialize
	"Private - Initialize ClassIDs array used to convert classID to appropriate class."

	| dict maxID |
	dict := IdentityDictionary new.
	maxID := self addClassIDsTo: dict.
	ClassIDs := Array new: maxID.
	dict keysAndValuesDo: [:key :value | ClassIDs at: key put: value]!

persistentClassAt: anInteger 
	"Answer persistent class for a given class ID."

	^ClassIDs at: anInteger! !
!ODBDatabaseObject class categoriesFor: #addClassIDsTo:!private! !
!ODBDatabaseObject class categoriesFor: #hasBytes!accessing!public! !
!ODBDatabaseObject class categoriesFor: #hasExternalFiles!accessing!public! !
!ODBDatabaseObject class categoriesFor: #initialize!private! !
!ODBDatabaseObject class categoriesFor: #persistentClassAt:!accessing!public! !

ODBDemandLoader guid: (GUID fromString: '{8162edd6-0fb8-11d4-b091-000000000000}')!
ODBDemandLoader comment: ''!
!ODBDemandLoader categoriesForClass!No category! !
!ODBDemandLoader methodsFor!

getObject
	^proxyObject odbSetTransactionObject: (transaction transactionObjectAt: objectID)!

odbObjectID
	^objectID!

odbSerialize: serializer 
	(serializer register: objectID) ifFalse: [^serializer saveExternalReference: objectID]!

perform: selector withArguments: arguments 
	^self getObject perform: selector withArguments: arguments!

printOn: aStream 
	objectID printOn: aStream.
	^proxyObject!

setTransaction: aTransaction objectID: anObjectID proxyObject: anODBReference 
	transaction := aTransaction.
	objectID := anObjectID.
	proxyObject := anODBReference!

transaction
	^transaction! !
!ODBDemandLoader categoriesFor: #getObject!public! !
!ODBDemandLoader categoriesFor: #odbObjectID!public! !
!ODBDemandLoader categoriesFor: #odbSerialize:!public! !
!ODBDemandLoader categoriesFor: #perform:withArguments:!public! !
!ODBDemandLoader categoriesFor: #printOn:!public! !
!ODBDemandLoader categoriesFor: #setTransaction:objectID:proxyObject:!public! !
!ODBDemandLoader categoriesFor: #transaction!public! !

ODBDeserializer guid: (GUID fromString: '{8162edd7-0fb8-11d4-b091-000000000000}')!
ODBDeserializer comment: ''!
!ODBDeserializer categoriesForClass!No category! !
!ODBDeserializer methodsFor!

deserializeFrom: aStream referenceManager: aReferenceManager classManager: aClassManager 
	stream := aStream.
	referenceManager := aReferenceManager.
	classManager := aClassManager.
	classArray := self class classArray.
	objects := Array new: stream getLong.
	classes := OrderedCollection new: 30.
	counter := 0.
	classesCounter := 0.
	^self odbNextObject!

deserializeFrom: aStream referenceManager: aReferenceManager transaction: aTransaction 
	stream := aStream.
	referenceManager := aReferenceManager.
	classManager := aTransaction environment classManager.
	transaction := aTransaction.
	classArray := self class classArray.
	objects := Array new: stream getLong.
	classes := OrderedCollection new: 30.
	counter := 0.
	classesCounter := 0.
	^self odbNextObject!

existingObject
	^objects at: stream getPositiveInteger!

loadError
	| id |
	stream position: stream position - 1.
	id := stream getByte.
	OmniBase 
		signalError: 'OmniBase deserializer: Unknown serialization id (' , id printString , ')'!

loadReference
	^self register: (referenceManager referenceAt: stream getPositiveInteger)!

newObjectNewClass
	| classInfo |
	classInfo := classManager classDescriptionAt: stream getPositiveInteger.
	classesCounter := classesCounter + 1.
	classes add: classInfo.
	^classInfo realClass odbLoadVariables: self classInfo: classInfo!

newObjectOldClass
	| classInfo |
	^(classInfo := classes at: stream getPositiveInteger) realClass odbLoadVariables: self
		classInfo: classInfo!

odbNextObject
	^(classArray at: stream getByteOr14forUndefinedObject) odbDeserialize: self!

register: anObject 
	^objects at: (counter := counter + 1) put: anObject!

stream
	^stream!

transaction
	^transaction! !
!ODBDeserializer categoriesFor: #deserializeFrom:referenceManager:classManager:!public! !
!ODBDeserializer categoriesFor: #deserializeFrom:referenceManager:transaction:!public! !
!ODBDeserializer categoriesFor: #existingObject!private! !
!ODBDeserializer categoriesFor: #loadError!private! !
!ODBDeserializer categoriesFor: #loadReference!private! !
!ODBDeserializer categoriesFor: #newObjectNewClass!private! !
!ODBDeserializer categoriesFor: #newObjectOldClass!private! !
!ODBDeserializer categoriesFor: #odbNextObject!private! !
!ODBDeserializer categoriesFor: #register:!private! !
!ODBDeserializer categoriesFor: #stream!public! !
!ODBDeserializer categoriesFor: #transaction!private! !

!ODBDeserializer class methodsFor!

classArray
	classArray isNil ifTrue: [self init].
	^classArray!

deserializeFromBytes: aByteArray 
	| memoryStream classManager |
	memoryStream := ODBMemoryReadStream new createOn: aByteArray.
	memoryStream getPositiveInteger = 0 ifFalse: [self error: 'External references not defined'].
	classManager := ODBClassManagerForSerialization new.
	classManager loadFromStream: memoryStream.
	^self new 
		deserializeFrom: memoryStream
		referenceManager: nil
		classManager: classManager!

deserializeFromBytes: aByteArray externalReferencesLoaderBlock: aBlock 
	| memoryStream referenceManager classManager |
	memoryStream := ODBMemoryReadStream new createOn: aByteArray.
	referenceManager := ODBReferenceManager new.
	referenceManager loadFromStream: memoryStream externalReferencesLoaderBlock: aBlock.
	classManager := ODBClassManagerForSerialization new.
	classManager loadFromStream: memoryStream.
	^self new 
		deserializeFrom: memoryStream
		referenceManager: referenceManager
		classManager: classManager!

init
	classArray := Array new: 255.
	classArray
		at: 2 put: ODBNewObjectNewClass;
		at: 3 put: ODBNewObject;
		at: 4 put: ODBExistingObject;
		at: 5 put: ODBExternalReference;
		at: 6 put: ODBClassManagerForSerialization;
		at: 15 put: true;
		at: 16 put: false;
		at: 17 put: Message;
		at: 20 put: MessageSend;
		at: 19 put: Smalltalk;
		at: 22 put: Processor;
		at: 11 put: ODBLargePositiveInteger;
		at: 12 put: ODBLargeNegativeInteger;
		at: 13 put: Character;
		at: 29 put: ODBDoubleByteCharacter;
		at: 14 put: UndefinedObject;
		at: 10 put: DeadObject;
		at: 18 put: Symbol;
		at: 26 put: Class;
		at: 27 put: Metaclass;
		at: 28 put: LookupTable;
		at: 30 put: Set;
		at: 31 put: Association;
		at: 32 put: Date;
		at: 33 put: Time;
		at: 34 put: String;
		at: 35 put: Array;
		at: 36 put: UnicodeString;
		at: 37 put: Dictionary;
		at: 38 put: IdentityDictionary;
		at: 39 put: Fraction;
		at: 40 put: Float;
		at: 41 put: (ODBCopyValue value: 0.0);
		at: 42 put: (ODBCopyValue value: 1.0);
		at: 43 put: ODBFloatAsInteger;
		at: 44 put: ODBFloatAs100Integer;
		at: 45 put: ODB8ByteFloat;
		"tu je bil problem, ker je na VW 46 uporabljen za 4 byte float - scaled decimal se je tako moral migrirati na 47 za interoperability med dialekti"
		at: 46 put: ScaledDecimal;
		at: 47 put: ScaledDecimal;
		at: 50 put: 0;
		at: 51 put: 1;
		at: 52 put: 2;
		at: 53 put: 3;
		at: 54 put: 4;
		at: 55 put: 5;
		at: 56 put: 6;
		at: 57 put: 7;
		at: 58 put: 8;
		at: 59 put: 9;
		at: 60 put: 10;
		at: 61 put: 11;
		at: 62 put: 12;
		at: 63 put: 13;
		at: 64 put: 14;
		at: 65 put: 15;
		at: 66 put: 16;
		at: 67 put: -3;
		at: 68 put: -2;
		at: 69 put: -1;
		at: 70 put: ODBEmptyString;
		at: 71 put: ODB1CharacterString;
		at: 72 put: (ODBnCharacterString length: 2);
		at: 73 put: (ODBnCharacterString length: 3);
		at: 74 put: (ODBnCharacterString length: 4);
		at: 75 put: (ODBnCharacterString length: 5);
		at: 76 put: (ODBnCharacterString length: 6);
		at: 77 put: (ODBnCharacterString length: 7);
		at: 78 put: (ODBnCharacterString length: 8);
		at: 79 put: (ODBnCharacterString length: 9);
		at: 80 put: ByteArray;
		at: 81 put: OrderedCollection;
		at: 82 put: ODBIdentityDictionary;
		at: 83 put: ODBPersistentDictionary;
		at: 84 put: ODBTransaction;
		yourself
	"at: 85 put: OrPersistentObject"!

registerDeserializer: anObject withId: anInteger 
	self classArray at: anInteger put: anObject! !
!ODBDeserializer class categoriesFor: #classArray!private! !
!ODBDeserializer class categoriesFor: #deserializeFromBytes:!public! !
!ODBDeserializer class categoriesFor: #deserializeFromBytes:externalReferencesLoaderBlock:!public! !
!ODBDeserializer class categoriesFor: #init!private! !
!ODBDeserializer class categoriesFor: #registerDeserializer:withId:!public! !

ODBDeserializers guid: (GUID fromString: '{8162edd8-0fb8-11d4-b091-000000000000}')!
ODBDeserializers comment: ''!
!ODBDeserializers categoriesForClass!No category! !
ODBExpiredProxyObject guid: (GUID fromString: '{330e7373-8ac4-4bf6-b5ad-9c46c8271b6d}')!
ODBExpiredProxyObject comment: ''!
!ODBExpiredProxyObject categoriesForClass!Kernel-Objects! !
!ODBExpiredProxyObject methodsFor!

odbBasicSerialize: serializer 
	OmniBase 
		signalError: 'This object can not be serialized. The transaction in which this proxy was loaded is already aborted.'!

odbSerialize: serializer 
	OmniBase 
		signalError: 'This object can not be serialized. The transaction in which this proxy was loaded is already aborted.'!

oid: anODBObjectID 
	oid := anODBObjectID!

printOn: aStream 
	aStream nextPutAll: 'Expired OmniBase proxy object of OID='.
	oid printOn: aStream!

value
	^self! !
!ODBExpiredProxyObject categoriesFor: #odbBasicSerialize:!private! !
!ODBExpiredProxyObject categoriesFor: #odbSerialize:!private! !
!ODBExpiredProxyObject categoriesFor: #oid:!public! !
!ODBExpiredProxyObject categoriesFor: #printOn:!public! !
!ODBExpiredProxyObject categoriesFor: #value!private! !

!ODBExpiredProxyObject class methodsFor!

on: oid 
	^self new oid: oid! !
!ODBExpiredProxyObject class categoriesFor: #on:!public! !

ODBExternalBuffer guid: (GUID fromString: '{8162edcb-0fb8-11d4-b091-000000000000}')!
ODBExternalBuffer comment: ''!
!ODBExternalBuffer categoriesForClass!No category! !
!ODBExternalBuffer methodsFor!

bytesAtOffset: offset count: count

	^contents copyFrom: offset + 1 to: offset + count!

bytesAtOffset: offset put: bytes

	^contents
		replaceFrom: offset + 1
		to: offset + bytes size
		with: bytes
		startingAt: 1.!

contents

	^contents!

contents: aByteArray

	contents := aByteArray!

loadFromStream: aStream 
	aStream getBytesFor: contents!

loadFromStream: aStream at: position 
	aStream atPosition: position getBytesFor: contents!

storeOnStream: aStream

	aStream putBytesFrom: contents!

storeOnStream: aStream at: position 
	aStream atPosition: position putBytesFrom: contents!

uLongAtOffset: offset

	^contents dwordAtOffset: offset!

uLongAtOffset: offset put: longValue

	^contents dwordAtOffset: offset put: longValue!

uShortAtOffset: offset

	^contents wordAtOffset: offset!

uShortAtOffset: offset put: longValue

	^contents wordAtOffset: offset put: longValue! !
!ODBExternalBuffer categoriesFor: #bytesAtOffset:count:!public! !
!ODBExternalBuffer categoriesFor: #bytesAtOffset:put:!public! !
!ODBExternalBuffer categoriesFor: #contents!public! !
!ODBExternalBuffer categoriesFor: #contents:!public! !
!ODBExternalBuffer categoriesFor: #loadFromStream:!public! !
!ODBExternalBuffer categoriesFor: #loadFromStream:at:!public! !
!ODBExternalBuffer categoriesFor: #storeOnStream:!public! !
!ODBExternalBuffer categoriesFor: #storeOnStream:at:!public! !
!ODBExternalBuffer categoriesFor: #uLongAtOffset:!public! !
!ODBExternalBuffer categoriesFor: #uLongAtOffset:put:!public! !
!ODBExternalBuffer categoriesFor: #uShortAtOffset:!public! !
!ODBExternalBuffer categoriesFor: #uShortAtOffset:put:!public! !

!ODBExternalBuffer class methodsFor!

createOn: aByteArray 
	^self basicNew contents: aByteArray!

new
	^self new: self sizeInBytes!

new: size 
	^self basicNew contents: (ByteArray new: size)! !
!ODBExternalBuffer class categoriesFor: #createOn:!instance creation!public! !
!ODBExternalBuffer class categoriesFor: #new!instance creation!public! !
!ODBExternalBuffer class categoriesFor: #new:!instance creation!OmniBase!public! !

ODBFile guid: (GUID fromString: '{8162edda-0fb8-11d4-b091-000000000000}')!
ODBFile comment: ''!
!ODBFile categoriesForClass!No category! !
!ODBFile methodsFor!

close
	"Close stream associated with receiver."

	stream isNil 
		ifFalse: 
			[stream close.
			stream := nil]!

compareHeader
	"Private - Compare bytes in file with file header. Answer <nil>, 
	if the file does not have the appropriate description string."

	| header |
	header := self header.
	
	[(stream compare: (header copyFrom: 2 to: header size) at: 1) 
		ifFalse: [OmniBase signalError: 'File has bad header'].
	self opened] 
			ifCurtailed: [self close]!

created
	"Private - Implemented by subclasses."

	stream flush!

createOn: aString 
	stream := ODBFileStream createOn: aString.
	^self writeHeader!

descriptionString
	^'OmniBase File
OmniBase 1.0, David Gorisek (c) 1998

'!

finalize
	self close!

flush
	"Flush stream."

	stream flush!

header
	"Private - Answer receiver's header."

	| header desc |
	header := String new: self headerLength.
	desc := self descriptionString.
	header 
		replaceFrom: 1
		to: desc size
		with: desc
		startingAt: 1.
	^header!

headerLength
	"Private - Answer receiver's header length."

	^128!

initialize!

opened
	"Private - Implemented by subclasses."

	!

openExclusivelyOn: aString 
	stream := ODBFileStream openExclusivelyOn: aString.
	^self compareHeader!

openOn: aString 
	stream := ODBFileStream openOn: aString.
	^self compareHeader!

openReadOnlyOn: aString 
	stream := ODBFileStream openReadOnlyOn: aString.
	^self compareHeader!

remove
	"Close and remove file coressponding to receiver. 
        Answer <true> if successfull."

	| answer |
	answer := stream remove.
	stream := nil.
	^answer!

size
	^stream size!

stream
	^stream!

timeOutLength
	"Private - Answer number of seconds to wait for lock."

	^7!

unlockAdding
	"Unlock file for writing at the end of file."

	^stream unlockAt: 0 length: 1!

unlockAt: pos length: length 
	"Unlock file at pos."

	^stream unlockAt: pos length: length!

waitForAddingLock
	"Lock file for writing at the end of the file."

	^self 
		waitForLockAt: 0
		length: 1
		whileWaitingDo: [(Delay forMilliseconds: 250) wait]!

waitForAddingLockWhileWaitingDo: aBlock 
	"Lock file for writing at the end of the file."

	^self 
		waitForLockAt: 0
		length: 1
		whileWaitingDo: aBlock!

waitForLockAt: pos length: length 
	"Wait for lock at given position."

	^self 
		waitForLockAt: pos
		length: length
		whileWaitingDo: [(Delay forMilliseconds: 250) wait]!

waitForLockAt: pos length: length whileWaitingDo: aBlock 
	"Wait for lock at given position. 
        Evaluate aBlock in each iteration."

	| startTime currentTime |
	(stream lockAt: pos length: length) 
		ifFalse: 
			[startTime := Time secondClockValue.
			[stream lockAt: pos length: length] whileFalse: 
					[aBlock value.
					currentTime := Time secondClockValue.
					currentTime < startTime ifTrue: [currentTime := currentTime + 86400].
					currentTime - startTime < self timeOutLength 
						ifFalse: 
							[OmniBase signalFileLockWaitNotification 
								ifTrue: [startTime := currentTime]
								ifFalse: [OmniBase signalCannotSetFileLockError]]]]!

writeHeader
	"Private - Write file header to file and send #created to self."

	stream putBytesFrom: self header.
	^self created! !
!ODBFile categoriesFor: #close!public! !
!ODBFile categoriesFor: #compareHeader!public! !
!ODBFile categoriesFor: #created!public! !
!ODBFile categoriesFor: #createOn:!public! !
!ODBFile categoriesFor: #descriptionString!public! !
!ODBFile categoriesFor: #finalize!public! !
!ODBFile categoriesFor: #flush!public! !
!ODBFile categoriesFor: #header!public! !
!ODBFile categoriesFor: #headerLength!public! !
!ODBFile categoriesFor: #initialize!initialization!public! !
!ODBFile categoriesFor: #opened!public! !
!ODBFile categoriesFor: #openExclusivelyOn:!public! !
!ODBFile categoriesFor: #openOn:!public! !
!ODBFile categoriesFor: #openReadOnlyOn:!public! !
!ODBFile categoriesFor: #remove!public! !
!ODBFile categoriesFor: #size!public! !
!ODBFile categoriesFor: #stream!public! !
!ODBFile categoriesFor: #timeOutLength!public! !
!ODBFile categoriesFor: #unlockAdding!public! !
!ODBFile categoriesFor: #unlockAt:length:!public! !
!ODBFile categoriesFor: #waitForAddingLock!public! !
!ODBFile categoriesFor: #waitForAddingLockWhileWaitingDo:!public! !
!ODBFile categoriesFor: #waitForLockAt:length:!public! !
!ODBFile categoriesFor: #waitForLockAt:length:whileWaitingDo:!public! !
!ODBFile categoriesFor: #writeHeader!public! !

!ODBFile class methodsFor!

createOn: aString 
	^self new createOn: aString!

new
	^super new initialize!

openOn: aString 
	^self new openOn: aString! !
!ODBFile class categoriesFor: #createOn:!public! !
!ODBFile class categoriesFor: #new!public! !
!ODBFile class categoriesFor: #openOn:!public! !

ODBGarbageCollector guid: (GUID fromString: '{8162eddb-0fb8-11d4-b091-000000000000}')!
ODBGarbageCollector comment: ''!
!ODBGarbageCollector categoriesForClass!No category! !
!ODBGarbageCollector methodsFor!

basicCompactContainerNamed: aString 
	| container |
	
	[container := objectManager containerNamed: aString
				ifAbsent: [OmniBase signalError: 'Container named ' , aString , ' does not exist'].
	(self checkDiskSpace: (Array with: container)) ifFalse: [^false].
	container
		createNewObjectSpace;
		swapObjectSpaces.
	self compactObjectSpaceForContainer: container reachableObjectsSet: nil] 
			ensure: 
				[self close.
				objectManager reopen.
				objectManager environment globalUnlock]!

basicRun
	
	[self progressNotification: 'Starting garbage collection' value: 0.
	self lockObjectManager.	"doesn't realy lock it, see method #lockObjectManager"
	containers := objectManager containers.
	(self checkDiskSpace: containers) ifFalse: [^false].
	self
		createNewObjectSpaces;
		selectNewObjectSpace;
		swapObjectSpaces;
		walkObjects;
		copyObjects;
		complete] 
			ensure: 
				[self close.
				objectManager reopen.
				objectManager environment globalUnlock]!

checkDiskSpace: containersColl 
	"Private - Check for avaiable disk space and set total number of objects in wait dialog."

	| maxContainerSize n gcSpace |
	maxContainerSize := 0.
	gcSpace := 0.
	containersColl do: 
			[:container | 
			n := container numberOfObjects.
			gcSpace := n // 8 + gcSpace.
			maxContainerSize := container bytesAllocated max: maxContainerSize].
	maxContainerSize + gcSpace < objectManager environment freeDiskSpace ifTrue: [^true].
	^progressDialog isNil 
		ifTrue: [OmniBase logWarning: '[OmniBase GC] Warning disk space low']
		ifFalse: [OmniBase confirmationMessage: 'Disk space low.
Are you sure you want to continue ?']!

close
	gcFile notNil ifTrue: [gcFile close]!

compactContainerNamed: aString silentMode: silenceBool 
	gcFile isNil 
		ifFalse: 
			[OmniBase 
				signalError: 'Previous garbage collection did not complete. Please re-start full garbage collection.'].
	(objectManager environment globalLock and: [objectManager reopenExclusively]) 
		ifFalse: 
			[objectManager environment globalUnlock.
			self close.
			silenceBool = true 
				ifFalse: [OmniBase warningMessage: 'Database is still being accessed by other users !!'].
			^false].
	silenceBool = true 
		ifTrue: [self basicCompactContainerNamed: aString]
		ifFalse: 
			[progressDialog := ProgressDialog operation: 
							[:valueHolder | 
							progressValue := valueHolder.
							[self basicCompactContainerNamed: aString] ifCurtailed: [progressDialog view close]].
			progressDialog
				caption: 'Compacting container ' , aString;
				showModal].
	^true!

compactObjectSpaceForContainer: container reachableObjectsSet: set 
	"Private - Copy compact container objects space and remove objects which are not included in the set. If set is nil, then just compact the object space."

	| dbObject index count |
	count := 0.
	self progressNotification: 'Compacting container ' , container name value: 0.
	container objectHoldersDo: 
			[:holder | 
			count := count + 1.
			self progressNotification: nil value: count / container numberOfObjects.
			index := holder objectID index.
			dbObject := holder getObject.
			(set isNil or: [set includes: index]) 
				ifTrue: [dbObject garbageCollectOn: self]
				ifFalse: 
					[dbObject remove.
					container removeHolderAt: index]].
	container flushBytes!

complete
	"Private - Complete garbage collection."

	gcFile status = 6 ifFalse: [^self].
	objectManager environment transactionManager oldHolders truncate.
	objectManager unlock.
	gcFile remove.
	gcFile := nil!

copyObjects
	"Private - Copy objects from oldObject space to new object space."

	| set objectSpace |
	gcFile status = 5 ifFalse: [^self].
	objectSpace := objectManager defaultObjectSpace.
	containers do: 
			[:container | 
			[set := ODBIntegerSet openOn: (self oidSetFilenameFor: container)] on: Error do: [set := nil].
			set isNil 
				ifFalse: 
					[self compactObjectSpaceForContainer: container reachableObjectsSet: set.
					set remove.
					container removeObjectSpace: 1 - objectSpace]].
	gcFile status: 6!

createNewObjectSpaces
	"Private - Create new object space for each container."

	gcFile status = 1 ifFalse: [^self].
	containers do: [:each | each createNewObjectSpace].
	"new object spaces created"
	gcFile status: 2!

gcFileName
	^objectManager environment dirName , ODBFileStream pathSeparatorString , 'GC.log'!

lockObjectManager
	gcFile status = 0 ifFalse: [^self].
	"objectManager lock."	"don't lock it because db is allready opened exclusively"
	"object manager has been locked"
	gcFile status: 1!

oidSetFilenameFor: anODBContainer 
	^anODBContainer dirName , ODBFileStream pathSeparatorString , 'Marked.set'!

oidStackFileName
	^objectManager environment dirName , ODBFileStream pathSeparatorString , 'GC.oid'!

openOn: anOmniBase 
	"Open garbage collector on anOmnibase. If garbage collector file exists
	then previous garbage collection was interrupted.
	Answer <true> if previous GC was completed, <false> if it wasn't."

	objectManager := anOmniBase objectManager.
	(ODBFileStream exists: self gcFileName) 
		ifTrue: 
			[(gcFile := ODBGarbageCollectorFile openOn: self) isNil 
				ifFalse: 
					[gcFile status < 3 
						ifTrue: 
							[gcFile remove.
							gcFile := nil]]].
	^gcFile isNil!

progressNotification: aString value: aFraction 
	progressDialog isNil 
		ifFalse: 
			[aString isNil ifFalse: [progressDialog caption: aString].
			aFraction isNil ifFalse: [progressValue value: 100 * aFraction]]!

reorganizeDictionaries
	^reorganizeDictionaries == true!

reorganizeDictionaries: aBoolean 
	reorganizeDictionaries := aBoolean!

reorganizeIndexSets
	"Answer <true> if B-Tree index sets should be reorganized."

	^reorganizeIndexSets == true!

reorganizeIndexSets: aBoolean 
	reorganizeIndexSets := aBoolean!

run
	^self run: false!

run: silenceBool 
	(objectManager environment globalLock and: [objectManager reopenExclusively]) 
		ifFalse: 
			[objectManager environment globalUnlock.
			self close.
			silenceBool = true 
				ifFalse: [OmniBase warningMessage: 'Database is still being accessed by other users !!'].
			^false].
	silenceBool = true 
		ifTrue: [self basicRun]
		ifFalse: 
			[progressDialog := ProgressDialog operation: 
							[:valueHolder | 
							progressValue := valueHolder.
							[self basicRun] ifCurtailed: [progressDialog view close]].
			progressDialog
				caption: 'Starting garbage collection';
				showModal].
	^true!

runOn: anOmniBase 
	"Run garbage collection on anOmniBase."

	^self runOn: anOmniBase silentMode: false!

runOn: anOmniBase silentMode: silenceBool 
	"Run garbage collection on anOmniBase."

	objectManager := anOmniBase objectManager.
	[gcFile := ODBGarbageCollectorFile openOn: self gcFileName] on: Error
		do: 
			[:ex | 
			objectManager isLocked ifTrue: [OmniBase signalError: 'Object manager is locked !!'].
			gcFile := ODBGarbageCollectorFile createOn: self gcFileName].
	^self run: silenceBool!

selectNewObjectSpace
	"Private - Select new object space."

	gcFile status = 2 ifFalse: [^self].
	gcFile newObjectSpace: 1 - objectManager defaultObjectSpace.
	gcFile status: 3!

swapObjectSpaces
	"Private - Swap default object spaces."

	| newObjectSpace |
	gcFile status = 3 ifFalse: [^self].
	newObjectSpace := gcFile newObjectSpace.
	objectManager defaultObjectSpace == newObjectSpace 
		ifFalse: 
			[containers do: [:each | each lockObjectSpace: 1 - newObjectSpace].
			objectManager defaultObjectSpace: newObjectSpace].
	"object spaces have been swaped"
	gcFile status: 4!

walkObjects
	"Private - Object traversal."

	| toDo firstToDo oidSets set containerID totalObjects objectID holder dbObject count |
	gcFile status = 6 ifTrue: [^self].
	"create OID sets"
	oidSets := OrderedCollection new.
	
	[totalObjects := 0.
	containers do: 
			[:container | 
			set := ODBIntegerSet createOn: (self oidSetFilenameFor: container).
			[oidSets size < container id] whileTrue: [oidSets add: nil].
			oidSets at: container id put: set.
			totalObjects := totalObjects + container numberOfObjects].
	count := 0.
	self progressNotification: 'Traversing objects' value: 0.
	"first load all from rootObject"
	firstToDo := OrderedCollection new.
	"create OID stack"
	toDo := ODBObjectIdStack createOn: self oidStackFileName.
	"walk objects"
	(oidSets at: 1) add: 1.	"mark (1:1)"
	firstToDo add: (ODBObjectID containerID: 1 index: 1).
	[firstToDo size = 1] whileTrue: 
			[objectID := firstToDo removeLast.
			self progressNotification: nil value: (count := count + 1) / (totalObjects * 2).
			(holder := objectManager holderAt: objectID) isNil 
				ifFalse: 
					[dbObject := holder getObject.
					dbObject referencesDo: 
							[:oid | 
							containerID := oid containerID.
							(containerID == 0 or: [(oidSets at: containerID) includes: oid index]) 
								ifFalse: 
									[(oidSets at: containerID) add: oid index.
									firstToDo add: oid.
									self progressNotification: nil value: (count := count + 1) / (totalObjects * 2)]].
					dbObject close]
				ifTrue: [OmniBase signalError: 'Invalid object ID']].
	firstToDo do: 
			[:eachOID | 
			self progressNotification: nil value: (count := count + 1) / (totalObjects * 2).
			(holder := objectManager holderAt: eachOID) == nil 
				ifFalse: 
					[dbObject := holder getObject.
					dbObject referencesDo: 
							[:oid | 
							containerID := oid containerID.
							(containerID == 0 or: [(oidSets at: containerID) includes: oid index]) 
								ifFalse: 
									[(oidSets at: containerID) add: oid index.
									toDo add: oid.
									self progressNotification: nil value: (count := count + 1) / (totalObjects * 2)]].
					dbObject close]
				ifTrue: [OmniBase signalError: 'Invalid object ID']].
	[toDo isEmpty] whileFalse: 
			[objectID := toDo removeLast.
			self progressNotification: nil value: (count := count + 1) / (totalObjects * 2).
			(holder := objectManager holderAt: objectID) == nil 
				ifFalse: 
					[dbObject := holder getObject.
					dbObject referencesDo: 
							[:oid | 
							containerID := oid containerID.
							(containerID == 0 or: [(oidSets at: containerID) includes: oid index]) 
								ifFalse: 
									[(oidSets at: containerID) add: oid index.
									toDo add: oid.
									self progressNotification: nil value: (count := count + 1) / (totalObjects * 2)]].
					dbObject close]
				ifTrue: [OmniBase signalError: 'Invalid object ID']]] 
			ensure: 
				["remove OID stack"
				toDo isNil ifFalse: [toDo remove].
				"close OID sets"
				oidSets do: [:each | each notNil ifTrue: [each close]]].
	gcFile status: 5! !
!ODBGarbageCollector categoriesFor: #basicCompactContainerNamed:!private! !
!ODBGarbageCollector categoriesFor: #basicRun!private! !
!ODBGarbageCollector categoriesFor: #checkDiskSpace:!private! !
!ODBGarbageCollector categoriesFor: #close!public! !
!ODBGarbageCollector categoriesFor: #compactContainerNamed:silentMode:!public! !
!ODBGarbageCollector categoriesFor: #compactObjectSpaceForContainer:reachableObjectsSet:!private! !
!ODBGarbageCollector categoriesFor: #complete!private! !
!ODBGarbageCollector categoriesFor: #copyObjects!private! !
!ODBGarbageCollector categoriesFor: #createNewObjectSpaces!private! !
!ODBGarbageCollector categoriesFor: #gcFileName!private! !
!ODBGarbageCollector categoriesFor: #lockObjectManager!private! !
!ODBGarbageCollector categoriesFor: #oidSetFilenameFor:!private! !
!ODBGarbageCollector categoriesFor: #oidStackFileName!private! !
!ODBGarbageCollector categoriesFor: #openOn:!public! !
!ODBGarbageCollector categoriesFor: #progressNotification:value:!private! !
!ODBGarbageCollector categoriesFor: #reorganizeDictionaries!public! !
!ODBGarbageCollector categoriesFor: #reorganizeDictionaries:!public! !
!ODBGarbageCollector categoriesFor: #reorganizeIndexSets!public! !
!ODBGarbageCollector categoriesFor: #reorganizeIndexSets:!public! !
!ODBGarbageCollector categoriesFor: #run!public! !
!ODBGarbageCollector categoriesFor: #run:!public! !
!ODBGarbageCollector categoriesFor: #runOn:!public! !
!ODBGarbageCollector categoriesFor: #runOn:silentMode:!public! !
!ODBGarbageCollector categoriesFor: #selectNewObjectSpace!private! !
!ODBGarbageCollector categoriesFor: #swapObjectSpaces!private! !
!ODBGarbageCollector categoriesFor: #walkObjects!private! !

ODBIdentityDictionary guid: (GUID fromString: '{8162eddc-0fb8-11d4-b091-000000000000}')!
ODBIdentityDictionary comment: ''!
!ODBIdentityDictionary categoriesForClass!No category! !
!ODBIdentityDictionary methodsFor!

associationsDo: aBlock 
	"Evaluate aBlock for each value in dictionary."

	| key |
	1 to: keys size
		do: 
			[:i | 
			key := keys at: i.
			(key isNil or: [key == emptySlotMarker]) 
				ifFalse: [aBlock value: (Association key: key value: (values at: i))]]!

at: anObject 
	"Answer value at anObject, <nil> if absent."

	| index lastIndex key |
	lastIndex := keys size.
	index := anObject identityHash \\ lastIndex.
	[anObject == (key := keys at: (index := index + 1))] whileFalse: 
			[key isNil ifTrue: [^nil].
			index == lastIndex ifTrue: [index := 0]].
	^values at: index!

at: anObject ifAbsent: aBlock 
	| index lastIndex key |
	anObject isNil ifTrue: [^aBlock value].
	lastIndex := keys size.
	index := anObject identityHash \\ lastIndex.
	[anObject == (key := keys at: (index := index + 1))] whileFalse: 
			[key isNil ifTrue: [^aBlock value].
			index == lastIndex ifTrue: [index := 0]].
	^values at: index!

at: anObject ifAbsentPut: aBlock 
	^self at: anObject ifAbsent: [self at: anObject put: aBlock value]!

at: aKey ifAbsentPutValue: anObject 
	^self at: aKey ifAbsent: [self at: aKey put: anObject]!

at: aKey put: anObject 
	"Answer anObject. If aKey exists in the receiver,
	replace the corresponding value with anObject, else
	add the aKey/anObject pair to the receiver."

	| index lastIndex key |
	lastIndex := keys size.
	index := aKey identityHash \\ lastIndex.
	[aKey == (key := keys at: (index := index + 1))] whileFalse: 
			[key isNil 
				ifTrue: 
					[keys at: index put: aKey.
					values at: index put: anObject.
					(elementCount := elementCount + 1) < sizeLimit ifFalse: [self grow].
					^anObject].
			key == emptySlotMarker 
				ifTrue: 
					[keys at: index put: aKey.
					^values at: index put: anObject].
			index == lastIndex ifTrue: [index := 0]].
	^values at: index put: anObject!

do: aBlock 
	"Evaluate aBlock for each value in dictionary."

	| key |
	1 to: keys size
		do: 
			[:i | 
			key := keys at: i.
			(key isNil or: [key == emptySlotMarker]) ifFalse: [aBlock value: (values at: i)]]!

grow
	"Private - Grow the receiver to double size to accomodate more key/value pairs."

	| oldSize oldValues oldKeys key value |
	oldKeys := keys.
	oldSize := keys size.
	oldValues := values.
	self initialize: oldSize * 2.
	1 to: oldSize
		do: 
			[:index | 
			key := oldKeys at: index.
			(key isNil 
				or: [key == emptySlotMarker or: [(value := oldValues at: index) == emptySlotMarker]]) 
					ifFalse: [self at: key put: value]]!

includesKey: anObject 
	| index lastIndex key |
	lastIndex := keys size.
	index := anObject identityHash \\ lastIndex.
	[anObject == (key := keys at: (index := index + 1))] whileFalse: 
			[key isNil ifTrue: [^false].
			index == lastIndex ifTrue: [index := 0]].
	^true!

initialize: anInteger 
	elementCount := 0.
	keys := Array new: anInteger.
	values := Array new: anInteger.
	sizeLimit := (anInteger - 2) * 11 // 23.
	emptySlotMarker := DeadObject current!

isEmpty
	^self size == 0!

keysAndValuesDo: aBlock 
	"Evaluate aBlock for each value in dictionary."

	| key |
	1 to: keys size
		do: 
			[:i | 
			key := keys at: i.
			(key isNil or: [key == emptySlotMarker]) 
				ifFalse: [aBlock value: key value: (values at: i)]]!

removeKey: aKey 
	"Remove aKey from receiver. Do nothing if absent."

	| index lastIndex key |
	lastIndex := keys size.
	index := aKey identityHash \\ lastIndex.
	[aKey == (key := keys at: (index := index + 1))] whileFalse: 
			[key isNil ifTrue: [^self].
			index == lastIndex ifTrue: [index := 0]].
	keys at: index put: emptySlotMarker.
	^values at: index put: nil!

removeKey: aKey ifAbsent: aBlock 
	"Remove aKey from receiver. Evaluate aBlock if absent."

	| index lastIndex key |
	lastIndex := keys size.
	index := aKey identityHash \\ lastIndex.
	[aKey == (key := keys at: (index := index + 1))] whileFalse: 
			[key isNil ifTrue: [^aBlock value].
			index == lastIndex ifTrue: [index := 0]].
	keys at: index put: emptySlotMarker.
	^values at: index put: nil!

size
	"Answer number of elements in dictionary."

	| count key |
	count := 0.
	1 to: keys size
		do: 
			[:i | 
			key := keys at: i.
			(key isNil or: [key == emptySlotMarker]) ifFalse: [count := count + 1]].
	^count!

values
	| coll key |
	coll := OrderedCollection new: elementCount.
	1 to: values size
		do: 
			[:i | 
			key := keys at: i.
			(key isNil or: [key == emptySlotMarker]) ifFalse: [coll add: (values at: i)]].
	^coll! !
!ODBIdentityDictionary categoriesFor: #associationsDo:!public! !
!ODBIdentityDictionary categoriesFor: #at:!public! !
!ODBIdentityDictionary categoriesFor: #at:ifAbsent:!public! !
!ODBIdentityDictionary categoriesFor: #at:ifAbsentPut:!public! !
!ODBIdentityDictionary categoriesFor: #at:ifAbsentPutValue:!public! !
!ODBIdentityDictionary categoriesFor: #at:put:!public! !
!ODBIdentityDictionary categoriesFor: #do:!public! !
!ODBIdentityDictionary categoriesFor: #grow!private! !
!ODBIdentityDictionary categoriesFor: #includesKey:!public! !
!ODBIdentityDictionary categoriesFor: #initialize:!private! !
!ODBIdentityDictionary categoriesFor: #isEmpty!public! !
!ODBIdentityDictionary categoriesFor: #keysAndValuesDo:!public! !
!ODBIdentityDictionary categoriesFor: #removeKey:!public! !
!ODBIdentityDictionary categoriesFor: #removeKey:ifAbsent:!public! !
!ODBIdentityDictionary categoriesFor: #size!public! !
!ODBIdentityDictionary categoriesFor: #values!public! !

!ODBIdentityDictionary class methodsFor!

new
	^self new: 30!

new: anInteger 
	^super new initialize: anInteger * 2 + 1!

odbDeserialize: deserializer 
	| size dict key |
	size := deserializer stream getPositiveInteger.
	dict := self new: size.
	deserializer register: dict.
	size timesRepeat: 
			[key := deserializer odbNextObject.
			dict at: key put: deserializer odbNextObject].
	^dict! !
!ODBIdentityDictionary class categoriesFor: #new!instance creation!public! !
!ODBIdentityDictionary class categoriesFor: #new:!instance creation!public! !
!ODBIdentityDictionary class categoriesFor: #odbDeserialize:!public!serialization! !

ODBLock guid: (GUID fromString: '{8162eddd-0fb8-11d4-b091-000000000000}')!
ODBLock comment: ''!
!ODBLock categoriesForClass!No category! !
!ODBLock methodsFor!

lockID
	^lockID!

lockID: anInteger 
	lockID := anInteger!

lockIndex
	^lockIndex!

lockIndex: anInteger 
	lockIndex := anInteger!

objectID
	^objectID!

objectID: anObjectID 
	objectID := anObjectID!

transaction: aTransaction 
	transaction := aTransaction!

transactionObject
	"Private - Get transaction object corresponding to objectID."

	^transaction transactionObjectAt: objectID! !
!ODBLock categoriesFor: #lockID!accessing!public! !
!ODBLock categoriesFor: #lockID:!accessing!public! !
!ODBLock categoriesFor: #lockIndex!accessing!public! !
!ODBLock categoriesFor: #lockIndex:!accessing!public! !
!ODBLock categoriesFor: #objectID!accessing!public! !
!ODBLock categoriesFor: #objectID:!accessing!public! !
!ODBLock categoriesFor: #transaction:!accessing!public! !
!ODBLock categoriesFor: #transactionObject!private! !

!ODBLock class methodsFor!

lockClassID
	"Answer unique class ID used for storing locks 
        or <nil> if lock does not need to be stored."

	self subclassResponsibility! !
!ODBLock class categoriesFor: #lockClassID!public! !

ODBObjectID guid: (GUID fromString: '{8162edde-0fb8-11d4-b091-000000000000}')!
ODBObjectID comment: ''!
!ODBObjectID categoriesForClass!No category! !
!ODBObjectID methodsFor!

= anObjectID 
	^anObjectID index == index and: [anObjectID containerID == containerID]!

containerID
	^containerID!

containerID: byte index: ulong 
	containerID := byte.
	index := ulong!

contents
	"Answer ByteArray representing receiver."

	| bytes |
	bytes := ByteArray new: 4.
	bytes
		dwordAtOffset: 0 put: index;
		at: 4 put: containerID.
	^bytes!

contents: aByteArray 
	"Initialize receiver from aByteArray."

	containerID := aByteArray at: 4.
	index := ((aByteArray at: 3) bitShift: 16) + ((aByteArray at: 2) bitShift: 8) 
				+ (aByteArray at: 1)!

fromBytes: aByteArray at: pos 
	"Initialize receiver from aByteArray at pos."

	containerID := aByteArray at: pos + 3.
	index := ((aByteArray at: pos + 2) bitShift: 16) + ((aByteArray at: pos + 1) bitShift: 8) 
				+ (aByteArray at: pos)!

hash
	^index + (containerID bitShift: 17)!

index
	^index!

index: ulong 
	index := ulong!

loadFromStream: aStream 
	| bytes |
	bytes := ByteArray new: self class sizeInBytes.
	aStream getBytesFor: bytes.
	self fromBytes: bytes at: 1!

printOn: aStream 
	super printOn: aStream.
	aStream nextPut: $(.
	containerID printOn: aStream.
	aStream nextPut: $:.
	index printOn: aStream.
	aStream nextPut: $)!

putBytesTo: bytes at: pos 
	bytes
		dwordAtOffset: pos - 1 put: index;
		at: pos + 3 put: containerID!

storeOnStream: aStream 
	aStream putBytesFrom: self contents! !
!ODBObjectID categoriesFor: #=!public! !
!ODBObjectID categoriesFor: #containerID!accessing!public! !
!ODBObjectID categoriesFor: #containerID:index:!accessing!public! !
!ODBObjectID categoriesFor: #contents!accessing!public! !
!ODBObjectID categoriesFor: #contents:!accessing!public! !
!ODBObjectID categoriesFor: #fromBytes:at:!accessing!public! !
!ODBObjectID categoriesFor: #hash!public! !
!ODBObjectID categoriesFor: #index!accessing!public! !
!ODBObjectID categoriesFor: #index:!accessing!public! !
!ODBObjectID categoriesFor: #loadFromStream:!load/store!public! !
!ODBObjectID categoriesFor: #printOn:!accessing!public! !
!ODBObjectID categoriesFor: #putBytesTo:at:!accessing!public! !
!ODBObjectID categoriesFor: #storeOnStream:!load/store!public! !

!ODBObjectID class methodsFor!

containerID: containerID index: index 
	^super new containerID: containerID index: index!

new
	^super new containerID: 0 index: 0!

sizeInBytes
	"Answer OID size in bytes.
	Note: If you change ODBObjectID>>sizeInBytes, then 
        you have to update ODBValueHolder>>sizeInBytes too."

	^4! !
!ODBObjectID class categoriesFor: #containerID:index:!instance creation!public! !
!ODBObjectID class categoriesFor: #new!instance creation!public! !
!ODBObjectID class categoriesFor: #sizeInBytes!private! !

ODBObjectIDDictionary guid: (GUID fromString: '{8162eddf-0fb8-11d4-b091-000000000000}')!
ODBObjectIDDictionary comment: ''!
!ODBObjectIDDictionary categoriesForClass!No category! !
!ODBObjectIDDictionary methodsFor!

at: objectID 
	"Answer transaction object at objectID or <nil> if absent."

	| dict |
	(dict := dictionaries at: objectID containerID) isNil ifTrue: [^nil].
	^dict at: objectID index!

at: objectID ifAbsentPutValue: anObject 
	| dict |
	(dict := dictionaries at: objectID containerID) isNil 
		ifTrue: [dictionaries at: objectID containerID put: (dict := OmniBase newFastIdentityDictionary: 500)].
	^dict at: objectID index ifAbsentPutValue: anObject!

at: objectID put: anObject 
	| dict |
	(dict := dictionaries at: objectID containerID) isNil 
		ifTrue: [dictionaries at: objectID containerID put: (dict := OmniBase newFastIdentityDictionary: 500)].
	^dict at: objectID index put: anObject!

initialize
	dictionaries := Array new: 255!

removeKey: objectID 
	"Remove transaction object association with objectID. 
	Do nothing if objectID is absent."

	| dict |
	(dict := dictionaries at: objectID containerID) isNil 
		ifFalse: [dict removeKey: objectID index]! !
!ODBObjectIDDictionary categoriesFor: #at:!public! !
!ODBObjectIDDictionary categoriesFor: #at:ifAbsentPutValue:!public! !
!ODBObjectIDDictionary categoriesFor: #at:put:!public! !
!ODBObjectIDDictionary categoriesFor: #initialize!private! !
!ODBObjectIDDictionary categoriesFor: #removeKey:!public! !

!ODBObjectIDDictionary class methodsFor!

new
	^super new initialize! !
!ODBObjectIDDictionary class categoriesFor: #new!instance creation!public! !

ODBObjectManager guid: (GUID fromString: '{8162ede0-0fb8-11d4-b091-000000000000}')!
ODBObjectManager comment: ''!
!ODBObjectManager categoriesForClass!No category! !
!ODBObjectManager methodsFor!

close
	"Close object manager and all opened containers."

	| cnt |
	1 to: containers size
		do: 
			[:i | 
			(cnt := containers at: i) notNil 
				ifTrue: 
					[cnt close.
					containers at: i put: nil]].
	containers := OrderedCollection new.
	idTable isNil ifFalse: [idTable close].
	infoFile isNil ifFalse: [infoFile close]!

containerAt: containerID 
	"Answer container at containerID or default container if none."

	^self containerAt: containerID ifAbsent: [^self defaultContainer]!

containerAt: containerID ifAbsent: aBlock 
	"Answer container at containerID. Evaluate aBlock if absent."

	| cont pos |
	containerID < 1 ifTrue: [^aBlock value].
	containerID > containers size 
		ifFalse: [(cont := containers at: containerID) isNil ifFalse: [^cont]].
	pos := idTable at: containerID ifAbsent: [^aBlock value].
	pos == 0 ifTrue: [^aBlock value].
	^self initContainerAt: pos!

containerNamed: containerName 
	"Answer container with containerName or 
        default container, if container is not found."

	^self containerNamed: containerName ifAbsent: [^self defaultContainer]!

containerNamed: containerName ifAbsent: aBlock 
	"Answer container with containerName. 
        Evaluate aBlock, if container is not found."

	| name pos |
	name := self unifyContainerName: containerName.
	containers do: [:each | (each isNil or: [each name ~= name]) ifFalse: [^each]].
	pos := infoFile at: name ifAbsent: [^aBlock value].
	pos == 0 ifTrue: [^aBlock value].
	^self initContainerAt: pos!

containerNew: aString 
	"Create new container named aString.
        Answer container created."

	^self containerNew: aString path: ''!

containerNew: aString path: path 
	"Private - Create new container named aString 
	on given path. Signal an error if failed."

	| containerName containerID containerPath dirName cont pos stream |
	path = '' ifFalse: [OmniBase signalError: 'Not supported'].
	infoFile isLocked ifTrue: [OmniBase signalError: 'Object manager is currently locked !!'].
	idTable waitForAddingLock.
	
	[(cont := self containerNamed: aString ifAbsent: []) isNil 
		ifFalse: [OmniBase signalError: 'Container with this name allready exists'].
	containerName := self unifyContainerName: aString.
	containerID := idTable add: 0.
	pos := 0.
	dirName := self convert: aString.
	
	[containerPath := (path isEmpty ifTrue: [self dirName] ifFalse: [path]) 
				, ODBFileStream pathSeparatorString , dirName.
	ODBFileStream directoryExists: containerPath] 
			whileTrue: 
				[pos := pos + 1.
				dirName := (dirName copyFrom: 1 to: (dirName size min: 7)) , pos printString].
	ODBFileStream directoryCreate: containerPath.
	cont := (ODBContainer new)
				name: containerName;
				id: containerID;
				objectManager: self;
				createOn: containerPath.
	stream := infoFile stream.
	pos := stream setToEnd.
	stream
		putWord: containerID;
		putString: containerName;
		putString: path;
		putString: dirName.
	idTable at: containerID put: pos.
	infoFile at: containerName put: pos] 
			ensure: [idTable unlockAdding].
	containerID > containers size 
		ifTrue: 
			[pos := Array new: containerID.
			pos 
				replaceFrom: 1
				to: containers size
				with: containers
				startingAt: 1.
			containers := pos].
	^containers at: containerID put: cont!

containers
	"Answer collection of all containers in database."

	| coll |
	coll := OrderedCollection new.
	idTable indexesAndValuesDo: [:i :pos | coll add: (self containerAt: i)].
	^coll!

convert: containerName 
	"Private - Answer a String which is a directory name 
	abbreviated from containerName. Lower case
	vowels are dropped from the right of containerName
	until it is less than or equal to 8 characters."

	| size dirName asciiInteger |
	dirName := containerName select: 
					[:char | 
					asciiInteger := char asInteger.
					((asciiInteger > 96 and: [asciiInteger < 123]) 
						or: [asciiInteger > 64 and: [asciiInteger < 91]]) 
							or: [asciiInteger > 47 and: [asciiInteger < 58]]].
	size := dirName size.
	dirName := (dirName reverse select: 
					[:char | 
					(char isVowel and: [char isLowercase]) ifTrue: [(size := size - 1) < 8] ifFalse: [true]]) 
				reverse.
	^dirName isEmpty 
		ifTrue: ['Contanr0']
		ifFalse: [dirName copyFrom: 1 to: (dirName size min: 8)]!

createOn: anOmniBase 
	"Create new object manager."

	environment := anOmniBase.
	
	[(ODBFileStream directoryExists: self dirName) 
		ifFalse: [ODBFileStream directoryCreate: self dirName].
	idTable := ODBIDTable createOn: self idFileName.
	infoFile := ODBContainerInfoFile createOn: self infoFileName.
	self containerNew: 'Default'] 
			ifCurtailed: [self close]!

defaultContainer
	"Answer default container."

	| cont |
	^(cont := containers at: 1) isNil 
		ifFalse: [cont]
		ifTrue: [self initContainerAt: (idTable at: 1)]!

defaultObjectSpace
	^infoFile defaultObjectSpace!

defaultObjectSpace: anInteger 
	^infoFile defaultObjectSpace: anInteger!

dirName
	"Private - Answer directory where containers are placed."

	^environment dirName , ODBFileStream pathSeparatorString , 'Objects'!

environment
	^environment!

flushContainers
	"Flush all containers before commit."

	containers do: [:each | each isNil ifFalse: [each flushBytes]]!

holderAt: objectID 
	"Answer persistent object holder at objectID."

	^(self containerAt: objectID containerID ifAbsent: [^nil]) at: objectID index!

idFileName
	^environment dirName , ODBFileStream pathSeparatorString , 'omnibase.cid'!

infoFileName
	^environment dirName , ODBFileStream pathSeparatorString , 'omnibase.cif'!

initContainerAt: position 
	"Private - Initialize container stored in infoFile at position.
	Answer container."

	| id name path cont dirName stream newArray |
	stream := infoFile stream.
	stream position: position.
	id := stream getWord.
	name := stream getString.
	path := stream getString.
	path isEmpty ifTrue: [path := self dirName].
	dirName := stream getString.
	id > containers size 
		ifTrue: 
			[newArray := Array new: id.
			newArray 
				replaceFrom: 1
				to: containers size
				with: containers
				startingAt: 1.
			containers := newArray].
	cont := (ODBContainer new)
				name: name;
				id: id;
				objectManager: self;
				openOn: path , ODBFileStream pathSeparatorString , dirName.
	^containers at: id put: cont!

initialize
	"Private - Initialize receiver."

	containers := Array new: 32!

isLocked
	"Answer <true> if object manager is locked."

	^infoFile isLocked!

lock
	"Lock object manager."

	^infoFile lock!

openOn: anOmniBase 
	"Open receiver. Trigger an exception if failed."

	environment := anOmniBase.
	
	[idTable := ODBIDTable openOn: self idFileName.
	infoFile := ODBContainerInfoFile openOn: self infoFileName] 
			ifCurtailed: [self close]!

reopen
	idTable close.
	[idTable := ODBIDTable openOn: self idFileName] ifCurtailed: [environment close]!

reopenExclusively
	| result |
	result := false.
	idTable close.
	
	[idTable := ODBIDTable new openExclusivelyOn: self idFileName.
	result := true] on: Error
			do: [:ex | [idTable := ODBIDTable openOn: self idFileName] ifCurtailed: [environment close]].
	^result!

unifyContainerName: aString 
	"Private - unifies aString that represents a container name."

	aString trimBlanks.
	^aString size > 20 ifTrue: [aString copyFrom: 1 to: 20] ifFalse: [aString]!

unlock
	"Unlock object manager."

	^infoFile unlock! !
!ODBObjectManager categoriesFor: #close!public! !
!ODBObjectManager categoriesFor: #containerAt:!public! !
!ODBObjectManager categoriesFor: #containerAt:ifAbsent:!public! !
!ODBObjectManager categoriesFor: #containerNamed:!public! !
!ODBObjectManager categoriesFor: #containerNamed:ifAbsent:!public! !
!ODBObjectManager categoriesFor: #containerNew:!public! !
!ODBObjectManager categoriesFor: #containerNew:path:!public! !
!ODBObjectManager categoriesFor: #containers!public! !
!ODBObjectManager categoriesFor: #convert:!private! !
!ODBObjectManager categoriesFor: #createOn:!public! !
!ODBObjectManager categoriesFor: #defaultContainer!public! !
!ODBObjectManager categoriesFor: #defaultObjectSpace!public! !
!ODBObjectManager categoriesFor: #defaultObjectSpace:!private! !
!ODBObjectManager categoriesFor: #dirName!private! !
!ODBObjectManager categoriesFor: #environment!public! !
!ODBObjectManager categoriesFor: #flushContainers!public! !
!ODBObjectManager categoriesFor: #holderAt:!public! !
!ODBObjectManager categoriesFor: #idFileName!private! !
!ODBObjectManager categoriesFor: #infoFileName!private! !
!ODBObjectManager categoriesFor: #initContainerAt:!private! !
!ODBObjectManager categoriesFor: #initialize!private! !
!ODBObjectManager categoriesFor: #isLocked!public! !
!ODBObjectManager categoriesFor: #lock!public! !
!ODBObjectManager categoriesFor: #openOn:!public! !
!ODBObjectManager categoriesFor: #reopen!public! !
!ODBObjectManager categoriesFor: #reopenExclusively!public! !
!ODBObjectManager categoriesFor: #unifyContainerName:!private! !
!ODBObjectManager categoriesFor: #unlock!public! !

!ODBObjectManager class methodsFor!

new
	^super new initialize! !
!ODBObjectManager class categoriesFor: #new!private! !

ODBReferenceManager guid: (GUID fromString: '{8162ede1-0fb8-11d4-b091-000000000000}')!
ODBReferenceManager comment: ''!
!ODBReferenceManager categoriesForClass!No category! !
!ODBReferenceManager methodsFor!

addReference: aReference 
	references isNil ifTrue: [references := OrderedCollection new].
	references add: aReference.
	^references size!

asBytesWith: endBytes 
	"Answer aByteArray with reference manager and endBytes as a single byte array."

	| pos oidSize bytes refsSize len |
	references isNil ifTrue: [^endBytes].
	refsSize := references size.
	oidSize := ODBObjectID sizeInBytes.
	len := refsSize * oidSize + endBytes size.
	references size > 256 
		ifFalse: 
			[bytes := ByteArray new: len + 1.
			bytes at: 1 put: refsSize - 1.
			pos := 2]
		ifTrue: 
			[bytes := ByteArray new: len + 2.
			bytes
				at: 1 put: (refsSize - 1 bitAnd: 255);
				at: 2 put: (refsSize - 1 bitShift: -8).
			pos := 3].
	references do: 
			[:each | 
			each putBytesTo: bytes at: pos.
			pos := pos + oidSize].
	bytes 
		replaceFrom: pos
		to: bytes size
		with: endBytes
		startingAt: 1.
	^bytes!

createMax256From: bytes 
	"Update receiver from bytes. Answer number of bytes used."

	| pos oidSize refsSize |
	references := Array new: (refsSize := (bytes at: 1) + 1).
	pos := 2.
	oidSize := ODBObjectID sizeInBytes.
	1 to: refsSize
		do: 
			[:i | 
			references at: i put: (ODBObjectID new fromBytes: bytes at: pos).
			pos := pos + oidSize].
	^pos - 1!

createMax65536From: bytes 
	"Update receiver from bytes. Answer number of bytes used."

	| pos oidSize refsSize |
	references := Array new: (refsSize := ((bytes at: 2) bitShift: 8) + (bytes at: 1) + 1).
	pos := 3.
	oidSize := ODBObjectID sizeInBytes.
	1 to: refsSize
		do: 
			[:i | 
			references at: i put: (ODBObjectID new fromBytes: bytes at: pos).
			pos := pos + oidSize].
	^pos - 1!

databaseObjectClassID
	references isNil ifTrue: [^ODBSerializedDBObjectWithoutReferences classID].
	references size < 257 ifTrue: [^ODBSerializedDBObject256References classID].
	references size < 65537 ifTrue: [^ODBSerializedDBObject65536References classID]!

loadFromStream: stream 
	| n |
	n := stream getPositiveInteger.
	n > 10000 ifTrue: [self error: '[Deserialization] Too many external references'].
	n > 0 
		ifTrue: 
			[references := OrderedCollection new: n.
			n timesRepeat: [references add: (ODBObjectID new loadFromStream: stream)]]!

loadFromStream: stream externalReferencesLoaderBlock: referencedObjectLoaderBlock 
	| n |
	n := stream getPositiveInteger.
	n > 10000 ifTrue: [self error: '[Deserialization] Too many external references'].
	n > 0 
		ifTrue: 
			[references := OrderedCollection new: n.
			n timesRepeat: [references add: (referencedObjectLoaderBlock value: stream)]]!

referenceAt: index 
	^references at: index!

referencesDo: aBlock 
	references do: aBlock!

saveOnStream: stream 
	references isNil 
		ifTrue: [stream putPositiveInteger: 0]
		ifFalse: 
			[stream putPositiveInteger: references size.
			references do: [:each | each storeOnStream: stream]]!

transaction: aTransaction 
	1 to: references size
		do: [:index | references at: index put: (aTransaction referenceAt: (references at: index))]! !
!ODBReferenceManager categoriesFor: #addReference:!public! !
!ODBReferenceManager categoriesFor: #asBytesWith:!public! !
!ODBReferenceManager categoriesFor: #createMax256From:!public! !
!ODBReferenceManager categoriesFor: #createMax65536From:!public! !
!ODBReferenceManager categoriesFor: #databaseObjectClassID!public! !
!ODBReferenceManager categoriesFor: #loadFromStream:!load/store!private! !
!ODBReferenceManager categoriesFor: #loadFromStream:externalReferencesLoaderBlock:!load/store!private! !
!ODBReferenceManager categoriesFor: #referenceAt:!public! !
!ODBReferenceManager categoriesFor: #referencesDo:!public! !
!ODBReferenceManager categoriesFor: #saveOnStream:!load/store!private! !
!ODBReferenceManager categoriesFor: #transaction:!public! !

ODBSerializer guid: (GUID fromString: '{8162ede2-0fb8-11d4-b091-000000000000}')!
ODBSerializer comment: ''!
!ODBSerializer categoriesForClass!No category! !
!ODBSerializer methodsFor!

addExternalReference: anObject objectId: anObjectId 
	"Adds anObject as externaly referenced object.
	If this anObject is encountered during the serialization it will be replaced with an external reference to anObjectId and will not be serialized together."

	| dict |
	(dict := externalObjects at: anObject class) isNil 
		ifTrue: [dict := externalObjects at: anObject class put: anObject class odbGetRegDictionary].
	dict at: anObject put: anObjectId!

cantSave: anObject 
	anObject class name , ' can''t be stored!!' odbSerialize: self!

initialize
	externalObjects := OmniBase newFastIdentityDictionary: 127!

register: anObject 
	| class dict id |
	(dict := objects at: (class := anObject class)) isNil 
		ifTrue: 
			[(objects at: class put: class odbGetRegDictionary) at: anObject
				put: (counter := counter + 1).
			anObject == mainObject ifTrue: [^false].
			(dict := externalObjects at: class) isNil 
				ifFalse: 
					[(id := dict at: anObject) isNil 
						ifFalse: 
							[self saveExternalReference: id.
							^true]].
			^false].
	(id := dict at: anObject ifAbsentPutValue: counter + 1) > counter 
		ifTrue: 
			[counter := id.
			anObject == mainObject 
				ifFalse: 
					[(dict := externalObjects at: class) isNil 
						ifFalse: 
							[(id := dict at: anObject) isNil 
								ifFalse: 
									[self saveExternalReference: id.
									^true]]].
			^false].
	self saveInternalReference: id.
	^true!

registerClass: class 
	| index classInfo |
	(index := classes at: class) isNil 
		ifTrue: 
			[classInfo := classManager register: class.
			stream
				putByte: 2;
				putPositiveInteger: classInfo classID.
			classCollection add: classInfo.
			classes at: class put: (classesCounter := classesCounter + 1).
			^classInfo].
	stream
		putByte: 3;
		putPositiveInteger: index.
	classInfo := classCollection at: index.
	^classInfo!

saveExternalReference: anObjectId 
	stream
		putByte: 5;
		putPositiveInteger: (referenceManager addReference: anObjectId)!

saveInternalReference: anInteger 
	"Shrani referenco na interni objekt z indeksom anInteger."

	stream
		putByte: 4;
		putPositiveInteger: anInteger!

serialize: anObject onStream: aStream referenceManager: aReferenceManager classManager: aClassManager 
	| startPos endPos |
	stream := aStream.
	referenceManager := aReferenceManager.
	classManager := aClassManager.
	mainObject := anObject.
	classes := OmniBase newFastIdentityDictionary: 31.
	objects := OmniBase newFastIdentityDictionary: 63.
	counter := 0.
	classesCounter := 0.
	classCollection := OrderedCollection new: 30.
	startPos := stream position.
	stream putLong: 0.
	mainObject odbSerialize: self.
	endPos := stream position.
	stream
		position: startPos;
		putLong: counter;
		position: endPos!

serializeToBytes: anObject 
	| byteStream2 |
	self 
		serialize: anObject
		onStream: ODBMemoryWriteStream new
		referenceManager: ODBReferenceManager new
		classManager: ODBClassManagerForSerialization new initializeForSerialization.
	byteStream2 := ODBMemoryWriteStream new.
	referenceManager saveOnStream: byteStream2.
	classManager saveOnStream: byteStream2.
	^byteStream2 asByteArray , stream asByteArray!

stream
	^stream! !
!ODBSerializer categoriesFor: #addExternalReference:objectId:!public! !
!ODBSerializer categoriesFor: #cantSave:!private! !
!ODBSerializer categoriesFor: #initialize!private! !
!ODBSerializer categoriesFor: #register:!private! !
!ODBSerializer categoriesFor: #registerClass:!private! !
!ODBSerializer categoriesFor: #saveExternalReference:!private! !
!ODBSerializer categoriesFor: #saveInternalReference:!private! !
!ODBSerializer categoriesFor: #serialize:onStream:referenceManager:classManager:!public! !
!ODBSerializer categoriesFor: #serializeToBytes:!public! !
!ODBSerializer categoriesFor: #stream!public! !

!ODBSerializer class methodsFor!

classDescriptionFor: aClass 
	^ODBClassDescription new createFor: aClass!

classDescriptionFrom: aStream 
	^ODBClassDescription new loadFromStream: aStream!

new
	^super new initialize!

serialize: anObject on: aWriteStream 
	| classManager byteStream byteStream2 |
	classManager := ODBClassManagerForSerialization new initializeForSerialization.
	byteStream := ODBMemoryWriteStream new.
	self new 
		serialize: anObject
		onStream: byteStream
		referenceManager: nil
		classManager: classManager.
	byteStream2 := ODBMemoryWriteStream new.
	byteStream2 putPositiveInteger: 0.
	classManager saveOnStream: byteStream2.
	byteStream2 writeOn: aWriteStream.
	byteStream writeOn: aWriteStream!

serializeToBytes: anObject 
	"Serialize anObject to bytes."

	| classManager byteStream byteStream2 |
	classManager := ODBClassManagerForSerialization new initializeForSerialization.
	byteStream := ODBMemoryWriteStream new.
	self new 
		serialize: anObject
		onStream: byteStream
		referenceManager: nil
		classManager: classManager.
	byteStream2 := ODBMemoryWriteStream new.
	"brez reference manager-ja"
	byteStream2 putPositiveInteger: 0.
	classManager saveOnStream: byteStream2.
	^byteStream2 asByteArray , byteStream asByteArray! !
!ODBSerializer class categoriesFor: #classDescriptionFor:!public! !
!ODBSerializer class categoriesFor: #classDescriptionFrom:!public! !
!ODBSerializer class categoriesFor: #new!public! !
!ODBSerializer class categoriesFor: #serialize:on:!public! !
!ODBSerializer class categoriesFor: #serializeToBytes:!public! !

ODBSortedDictionary guid: (GUID fromString: '{8162ede3-0fb8-11d4-b091-000000000000}')!
ODBSortedDictionary comment: ''!
!ODBSortedDictionary categoriesForClass!No category! !
!ODBSortedDictionary methodsFor!

at: aKey 
	| index |
	(index := self findKey: aKey) > 0 ifTrue: [^values at: index].
	^nil!

at: aKey put: value 
	| index |
	(index := self findKey: aKey) > 0 ifTrue: [^values at: index put: value].
	index := 0 - index.
	elementCount = keys size 
		ifTrue: 
			[keys := (Array new: elementCount * 2) 
						replaceFrom: 1
						to: elementCount
						with: keys
						startingAt: 1.
			values := (Array new: elementCount * 2) 
						replaceFrom: 1
						to: elementCount
						with: values
						startingAt: 1].
	elementCount := elementCount + 1.
	keys 
		replaceFrom: index + 1
		to: elementCount
		with: keys
		startingAt: index.
	values 
		replaceFrom: index + 1
		to: elementCount
		with: values
		startingAt: index.
	keys at: index put: aKey.
	^values at: index put: value!

do: aBlock 
	1 to: elementCount do: [:i | aBlock value: (values at: i)]!

findKey: aKey 
	"Private - Answer index of aKey. If aKey does not 
        exist answer its index as negative integer."

	| a b key i |
	elementCount == 0 ifTrue: [^-1].
	a := 1.
	b := elementCount + 1.
	
	[key := keys at: (i := (a + b) // 2).
	(aKey odbIsLessOrEqualTo: key) 
		ifTrue: 
			[key = aKey ifTrue: [^i].
			b := i]
		ifFalse: [a := i + 1].
	a == b] 
			whileFalse: [].
	^0 - a!

getCurrent
	currentIndex < 1 ifTrue: [^nil].
	^ODBBTreeDictionaryAssociation new setKey: (keys at: currentIndex)
		value: (values at: currentIndex)!

getFirst
	currentIndex := 1.
	^ODBBTreeDictionaryAssociation new setKey: (keys at: 1) value: (values at: 1)!

getLast
	currentIndex := elementCount.
	^ODBBTreeDictionaryAssociation new setKey: (keys at: currentIndex)
		value: (values at: currentIndex)!

goTo: aKey 
	currentIndex := self findKey: aKey!

goToNext
	currentIndex := (currentIndex < 1 ifTrue: [0 - currentIndex] ifFalse: [currentIndex + 1]) 
				min: elementCount!

goToPrevious
	currentIndex := currentIndex abs - 1 max: 1!

includes: aKey 
	^(self findKey: aKey) > 0!

initialize
	keys := Array new: 128.
	values := Array new: 128.
	elementCount := 0!

keysAndValuesDo: aBlock 
	1 to: elementCount do: [:i | aBlock value: (keys at: i) value: (values at: i)]!

peekNext
	| i |
	currentIndex < 1 ifTrue: [i := 0 - currentIndex] ifFalse: [i := currentIndex + 1].
	i > elementCount ifTrue: [^nil].
	^ODBBTreeDictionaryAssociation new setKey: (keys at: i) value: (values at: i)!

peekPrevious
	| i |
	i := currentIndex abs - 1.
	i < 1 ifTrue: [^nil].
	^ODBBTreeDictionaryAssociation new setKey: (keys at: i) value: (values at: i)! !
!ODBSortedDictionary categoriesFor: #at:!public! !
!ODBSortedDictionary categoriesFor: #at:put:!public! !
!ODBSortedDictionary categoriesFor: #do:!public! !
!ODBSortedDictionary categoriesFor: #findKey:!private! !
!ODBSortedDictionary categoriesFor: #getCurrent!enumerating!public! !
!ODBSortedDictionary categoriesFor: #getFirst!enumerating!public! !
!ODBSortedDictionary categoriesFor: #getLast!enumerating!public! !
!ODBSortedDictionary categoriesFor: #goTo:!enumerating!public! !
!ODBSortedDictionary categoriesFor: #goToNext!enumerating!public! !
!ODBSortedDictionary categoriesFor: #goToPrevious!enumerating!public! !
!ODBSortedDictionary categoriesFor: #includes:!public! !
!ODBSortedDictionary categoriesFor: #initialize!private! !
!ODBSortedDictionary categoriesFor: #keysAndValuesDo:!public! !
!ODBSortedDictionary categoriesFor: #peekNext!enumerating!public! !
!ODBSortedDictionary categoriesFor: #peekPrevious!enumerating!public! !

!ODBSortedDictionary class methodsFor!

new
	^super new initialize! !
!ODBSortedDictionary class categoriesFor: #new!instance creation!public! !

ODBStream guid: (GUID fromString: '{8162ede4-0fb8-11d4-b091-000000000000}')!
ODBStream comment: ''!
!ODBStream categoriesForClass!No category! !
!ODBStream methodsFor!

atEnd
	"Answer <true> if at end of stream."

	^self position == self size!

flush
	!

getBoolean
	^self getByte = 1!

getBytesFor: aByteCollection 
	^self getBytesFor: aByteCollection len: aByteCollection size!

getChar
	^Character value: self getByte!

getInteger
	"Answer the next Integer encoded in the receiver."

	| int |
	((int := self getPositiveInteger) bitAnd: 1) == 0 ifTrue: [^int bitShift: -1].
	^0 - (int bitShift: -1)!

getLong
	^self getWord bitOr: (self getWord bitShift: 16)!

getPositiveInteger
	"Answer the next Integer encoded in the receiver."

	| answer |
	(answer := self getByte) < 128 ifTrue: [^answer].
	^(self getPositiveInteger bitShift: 7) bitOr: (answer bitAnd: 127)!

getString

	| size bytes |
	^(size := self getPositiveInteger) = 0
		ifTrue: [String new]
		ifFalse: [
			bytes := ByteArray new: size.
			self getBytesFor: bytes len: size.
			bytes asString ]!

getWord
	^self getByte bitOr: (self getByte bitShift: 8)!

putBoolean: aBool 
	self putByte: (aBool ifTrue: [1] ifFalse: [0])!

putBytesFrom: aByteCollection 
	^self putBytesFrom: aByteCollection len: aByteCollection size!

putChar: aCharacter 
	self putByte: aCharacter asInteger!

putInteger: anInteger 
	anInteger < 0 ifTrue: [^self putPositiveInteger: (0 - anInteger bitShift: 1) + 1].
	self putPositiveInteger: (anInteger bitShift: 1)!

putLong: anInteger 
	self
		putWord: (anInteger bitAnd: 65535);
		putWord: (anInteger bitShift: -16)!

putPositiveInteger: anInteger 
	anInteger < 128 ifTrue: [^self putByte: anInteger].
	self
		putByte: ((anInteger bitAnd: 127) bitOr: 128);
		putPositiveInteger: (anInteger bitShift: -7)!

putString: aString 
	self
		putPositiveInteger: aString basicSize;
		putBytesFrom: aString len: aString basicSize!

putWord: anInteger 
	self
		putByte: (anInteger bitAnd: 255);
		putByte: (anInteger bitShift: -8)!

setToEnd
	"Set to stream to end and answer position."

	^self position: self size! !
!ODBStream categoriesFor: #atEnd!public! !
!ODBStream categoriesFor: #flush!public! !
!ODBStream categoriesFor: #getBoolean!public! !
!ODBStream categoriesFor: #getBytesFor:!public! !
!ODBStream categoriesFor: #getChar!public! !
!ODBStream categoriesFor: #getInteger!public! !
!ODBStream categoriesFor: #getLong!public! !
!ODBStream categoriesFor: #getPositiveInteger!public! !
!ODBStream categoriesFor: #getString!public! !
!ODBStream categoriesFor: #getWord!public! !
!ODBStream categoriesFor: #putBoolean:!public! !
!ODBStream categoriesFor: #putBytesFrom:!public! !
!ODBStream categoriesFor: #putChar:!public! !
!ODBStream categoriesFor: #putInteger:!public! !
!ODBStream categoriesFor: #putLong:!public! !
!ODBStream categoriesFor: #putPositiveInteger:!public! !
!ODBStream categoriesFor: #putString:!public! !
!ODBStream categoriesFor: #putWord:!public! !
!ODBStream categoriesFor: #setToEnd!public! !

ODBTransaction guid: (GUID fromString: '{8162ede5-0fb8-11d4-b091-000000000000}')!
ODBTransaction comment: ''!
!ODBTransaction categoriesForClass!No category! !
!ODBTransaction methodsFor!

abort
	"Abort transaction. After aborting it, it can not be used anymore."

	transactionManager isNil ifFalse: [transactionManager critical: [self basicAbort]]!

basicAbort
	"Private - Abort transaction. After aborting it, it can not be used anymore."

	| changes |
	dbConnection isNil 
		ifFalse: 
			[locks isNil 
				ifFalse: 
					[(changes := transactionFile recovery) isNil 
						ifFalse: 
							[changes
								transaction: self;
								rollback.
							transactionFile recovery: nil].
					locks do: 
							[:each | 
							each
								transaction: self;
								unlock]].
			transactionManager transactionAborted: self.
			client transactionRemove: self].
	objectIndex := nil.
	objects := nil.
	client := nil.
	dbConnection := nil.
	transactionManager := nil.
	cacheMutex isNil 
		ifFalse: 
			[cacheMutex odbTerminateWaitingProcesses.
			cacheMutex := nil]!

cachedObjectAt: objectID 
	"Answer object identified by the given objectID.
	Answer <nil> if the object is not found in the local transaction cache.
	This method will not load the object from the disk drive."

	| transactionObject |
	^(objects isNil 
		or: [(transactionObject := self cachedTransactionObjectAt: objectID) isNil]) 
			ifFalse: [transactionObject value]!

cachedTransactionObjectAt: objectID 
	"Private - Answer cached transaction object at objectID."

	| obj |
	cacheMutex critical: [obj := objects at: objectID].
	^obj!

canReconnectConnectionOnClosedDatabase
	^false!

client
	^client!

environment
	^dbConnection!

getLoadedObjects
	"Answer collection of associations of all objects loaded in current transaction."

	| coll |
	coll := OrderedCollection new.
	objectIndex do: [:each | each objectID containerID > 0 ifTrue: [coll add: each value]].
	^coll!

getObjectID: anObject 
	"Answer <objectID> coresponding to anObject."

	| transactionObject oid |
	anObject odbObjectID isNil ifFalse: [^anObject odbObjectID].
	cacheMutex critical: [transactionObject := objectIndex at: anObject].
	transactionObject isNil 
		ifTrue: 
			[OmniBase 
				signalError: 'Object is not persistent or is contained in another persistent object'].
	(oid := transactionObject objectID) index == 0 
		ifTrue: 
			[OmniBase 
				signalError: 'Object ID is not allocated yet. Object ID will be allocated after transaction checkpoint or commit.'].
	^oid!

getObjectIDOrNil: anObject 
	"Private - Answer <objectID> coresponding to anObject 
        or <nil> if not allready stored."

	| transactionObject oid |
	anObject odbObjectID isNil ifFalse: [^anObject odbObjectID].
	cacheMutex critical: [transactionObject := objectIndex at: anObject].
	^transactionObject isNil 
		ifFalse: [(oid := transactionObject objectID) index == 0 ifFalse: [oid]]!

getTransactionObject: anObject ifAbsent: aBlock 
	"Private - Answer transaction object corresponding to anObject.
	Evaluate aBlock if none."

	| transactionObject |
	anObject isODBReference 
		ifTrue: 
			[anObject odbTransaction == self 
				ifFalse: [OmniBase signalError: 'Reference from another transaction'].
			^anObject odbTransactionObject].
	cacheMutex critical: [transactionObject := objectIndex at: anObject].
	^transactionObject isNil ifTrue: [aBlock value] ifFalse: [transactionObject]!

getVersionNumberOfCurrentObjectVersionFor: anObject 
	"Answer version number of the newest i.e. the current version of anObject in the database.
	This version number can be used if an old version of the whole database has to be recreated (see OmniBaseArchiver)."

	| holder objectID |
	(objectID := self getObjectIDOrNil: anObject) isNil ifTrue: [^nil].
	(holder := dbConnection objectManager holderAt: objectID) isNil ifTrue: [^nil].
	^holder versionNumber!

getVersionNumberOfFirstObjectVersionFor: anObject 
	"Answer version number of the oldest version of anObject in the database.
	This version number can be used if an old version of the whole database has to be recreated (see OmniBaseArchiver)."

	| holder objectID |
	(objectID := self getObjectIDOrNil: anObject) isNil ifTrue: [^nil].
	(holder := dbConnection objectManager holderAt: objectID) isNil ifTrue: [^nil].
	[holder loadPreviousVersionOrNilFrom: self oldHolders] whileTrue: [].
	^holder versionNumber!

initialize
	cacheMutex := Semaphore forMutualExclusion.
	objects := ODBObjectIDDictionary new.
	objectIndex := OmniBase newFastIdentityDictionary: 1000!

isChanged
	"Answer <true> if changes were made to the database."

	^false!

isGlobalLocked
	"Answer <true> if transaction was started in 
	a global locked database session."

	^false!

isReadOnly
	"Answer <true> if this is a read-only transaction."

	^false!

objectAt: objectID 
	"Answer object at objectID, <nil> if it does not exist."

	| transactionObject |
	objects isNil ifTrue: [OmniBase signalError: 'Transaction was already aborted'].
	objectID containerID == 0 ifTrue: [^self transactionReferenceAt: objectID index].
	^(transactionObject := self transactionObjectAt: objectID) isNil 
		ifFalse: [transactionObject value]!

objectHolderAt: objectID 
	"Private - Answer object holder at objectID."

	| trObj |
	^(trObj := self cachedTransactionObjectAt: objectID) isNil 
		ifFalse: [trObj objectHolder]
		ifTrue: [dbConnection objectManager holderAt: objectID]!

odbBasicSerialize: serializer 
	serializer stream putByte: 84!

odbObjectID
	^ODBObjectID containerID: 0 index: 1000!

odbSerialize: serializer 
	serializer stream putByte: 84!

oldHolders
	"Private - Answer file used to store old holder versions."

	^transactionManager oldHolders!

referenceAt: objectID 
	"Private - Answer reference at objectID. If object is already loaded, answer its value."

	| refObj |
	objectID containerID == 0 ifTrue: [^self transactionReferenceAt: objectID index].
	(refObj := self cachedTransactionObjectAt: objectID) isNil ifFalse: [^refObj value].
	refObj := ODBReference new.
	^refObj odbSetLoader: (ODBDemandLoader new 
				setTransaction: self
				objectID: objectID
				proxyObject: refObj)!

root
	"Answer the database root object. Root object represents an entry point into the database.
	Only objects that are being referenced from the root object will remain after the garbage
	collection on the database."

	| rootObjectHolder |
	^(rootObjectHolder := self objectAt: (ODBObjectID containerID: 1 index: 1)) isNil 
		ifFalse: [rootObjectHolder rootObject]!

setClient: aClient environment: anOmniBase 
	client := aClient.
	dbConnection := anOmniBase.
	transactionManager := dbConnection transactionManager!

transactionFile
	^transactionFile!

transactionObjectAt: objectID 
	"Private - Answer transaction object at objectID."

	| holder transactionObject t2 |
	cacheMutex isNil ifTrue: [^ODBExpiredProxyObject on: objectID].
	cacheMutex critical: [transactionObject := objects at: objectID].
	transactionObject isNil ifFalse: [^transactionObject].
	dbConnection objectManager isNil 
		ifTrue: 
			[self canReconnectConnectionOnClosedDatabase 
				ifTrue: 
					["long read only transactions are allowed to go on after database is closed so that proxy objects can still be used after the image is restarted"
					dbConnection := dbConnection class allSessions 
								detect: [:each | each dirName = dbConnection dirName]
								ifNone: [OmniBase openOn: dbConnection dirName]]
				ifFalse: [^ODBExpiredProxyObject on: objectID]].
	(holder := dbConnection objectManager holderAt: objectID) isNil 
		ifTrue: 
			["OID (1:1) = nil"
			^transactionObject := (objectID index = 1 and: [objectID containerID = 1]) 
						ifFalse: [OmniBase signalError: 'Invalid object ID']].
	[versionDescriptor versionOK: holder versionNumber] 
		whileFalse: [holder loadPreviousVersionFrom: self oldHolders].
	[transactionObject := holder getObject makeTransactionObject: self] 
		ifCurtailed: [self becomeInconsistent].
	cacheMutex critical: 
			[(t2 := objects at: objectID) isNil 
				ifTrue: 
					[objects at: objectID put: transactionObject.
					objectIndex at: transactionObject value put: transactionObject]].
	^t2 isNil ifTrue: [transactionObject objectLoaded] ifFalse: [t2]!

transactionReferenceAt: objectIDindex 
	"Private - Answer object at objectID index."

	objectIDindex == 1000 ifTrue: [^self].
	^transactionManager transactionReferenceAt: objectIDindex!

transactionReferences
	"Private - Answer collection of transaction dependent 
	objects and their object IDs (starting with 1000)."

	^(OrderedCollection new: 512)
		add: (Association key: self value: self odbObjectID);
		add: (Association key: dbConnection value: dbConnection odbObjectID);
		yourself!

versionDescriptor
	^versionDescriptor!

versionDescriptor: aVersionDescriptor 
	versionDescriptor := aVersionDescriptor!

versionNumber
	^versionDescriptor versionNumber! !
!ODBTransaction categoriesFor: #abort!public! !
!ODBTransaction categoriesFor: #basicAbort!private! !
!ODBTransaction categoriesFor: #cachedObjectAt:!public! !
!ODBTransaction categoriesFor: #cachedTransactionObjectAt:!private! !
!ODBTransaction categoriesFor: #canReconnectConnectionOnClosedDatabase!private! !
!ODBTransaction categoriesFor: #client!public! !
!ODBTransaction categoriesFor: #environment!public! !
!ODBTransaction categoriesFor: #getLoadedObjects!public! !
!ODBTransaction categoriesFor: #getObjectID:!public! !
!ODBTransaction categoriesFor: #getObjectIDOrNil:!private! !
!ODBTransaction categoriesFor: #getTransactionObject:ifAbsent:!private! !
!ODBTransaction categoriesFor: #getVersionNumberOfCurrentObjectVersionFor:!public! !
!ODBTransaction categoriesFor: #getVersionNumberOfFirstObjectVersionFor:!public! !
!ODBTransaction categoriesFor: #initialize!private! !
!ODBTransaction categoriesFor: #isChanged!public! !
!ODBTransaction categoriesFor: #isGlobalLocked!public! !
!ODBTransaction categoriesFor: #isReadOnly!public! !
!ODBTransaction categoriesFor: #objectAt:!public! !
!ODBTransaction categoriesFor: #objectHolderAt:!private! !
!ODBTransaction categoriesFor: #odbBasicSerialize:!private! !
!ODBTransaction categoriesFor: #odbObjectID!private! !
!ODBTransaction categoriesFor: #odbSerialize:!private! !
!ODBTransaction categoriesFor: #oldHolders!private! !
!ODBTransaction categoriesFor: #referenceAt:!private! !
!ODBTransaction categoriesFor: #root!public! !
!ODBTransaction categoriesFor: #setClient:environment:!private! !
!ODBTransaction categoriesFor: #transactionFile!private! !
!ODBTransaction categoriesFor: #transactionObjectAt:!private! !
!ODBTransaction categoriesFor: #transactionReferenceAt:!private! !
!ODBTransaction categoriesFor: #transactionReferences!private! !
!ODBTransaction categoriesFor: #versionDescriptor!public! !
!ODBTransaction categoriesFor: #versionDescriptor:!private! !
!ODBTransaction categoriesFor: #versionNumber!public! !

!ODBTransaction class methodsFor!

new
	^super new initialize!

odbDeserialize: deserializer 
	^deserializer transaction! !
!ODBTransaction class categoriesFor: #new!private! !
!ODBTransaction class categoriesFor: #odbDeserialize:!private! !

ODBTransactionManager guid: (GUID fromString: '{8162ede6-0fb8-11d4-b091-000000000000}')!
ODBTransactionManager comment: ''!
!ODBTransactionManager categoriesForClass!No category! !
!ODBTransactionManager methodsFor!

close
	versionControl notNil 
		ifTrue: 
			[versionControl close.
			versionControl := nil].
	oldHolders notNil 
		ifTrue: 
			[oldHolders close.
			oldHolders := nil].
	dbConnection := nil!

createOn: aDatabase 
	self initializeOn: aDatabase.
	
	[versionControl := ODBVersionControlFile createOn: self vcFileName.
	oldHolders := ODBOldHoldersFile createOn: self oldHoldersFileName.
	self initializeReferences] 
			ifCurtailed: [self close]!

critical: aBlock 
	mutex critical: aBlock!

currentVersionDescriptor
	^versionControl versionDescriptor copy!

initializeOn: aDatabase 
	dbConnection := aDatabase.
	mutex := Semaphore forMutualExclusion.
	serializingTransactionsSemaphore := Semaphore new.
	serializingTransactionsSemaphore signal!

initializeReferences
	"Private - Initialize dictionary of transaction references."

	transactionReferences := Array new: 4.
	transactionReferences
		at: 1 put: nil;
		at: 2 put: true;
		at: 3 put: false;
		at: 4 put: dbConnection!

oldHolders
	^oldHolders!

oldHoldersFileName
	^dbConnection dirName , ODBFileStream pathSeparatorString , 'omnibase.log'!

openOn: anOmniBase 
	self initializeOn: anOmniBase.
	
	[versionControl := ODBVersionControlFile openOn: self vcFileName.
	[oldHolders := ODBOldHoldersFile openOn: self oldHoldersFileName] on: Error
		do: [:er | oldHolders := ODBOldHoldersFile createOn: self oldHoldersFileName].
	self initializeReferences] 
			ifCurtailed: [self close]!

transactionAborted: aTransaction 
	"Discard version descriptor. Default do nothing."

	committingTransaction == aTransaction 
		ifTrue: 
			[versionControl removeCommittingFor: aTransaction client clientID.
			committingTransaction := nil.
			serializingTransactionsSemaphore signal]!

transactionCommitBegin: aTransaction 
	| versionNumber |
	serializingTransactionsSemaphore wait.
	committingTransaction notNil 
		ifTrue: [OmniBase signalError: 'Concurrent commit is not allowed'].
	committingTransaction := aTransaction.
	versionNumber := versionControl getNewVersionNumberFor: aTransaction client clientID.
	aTransaction versionDescriptor versionNumber: versionNumber!

transactionCommitEnd: aTransaction 
	committingTransaction == aTransaction 
		ifTrue: 
			[versionControl removeCommittingFor: aTransaction client clientID.
			committingTransaction := nil.
			serializingTransactionsSemaphore signal]!

transactionReferenceAt: index 
	^(index > transactionReferences size or: [index = 0]) 
		ifFalse: [transactionReferences at: index]!

transactionStart: aTransaction 
	"Set transaction version descriptor upon transaction start."

	aTransaction versionDescriptor: versionControl versionDescriptor copy!

vcFileName
	^dbConnection dirName , ODBFileStream pathSeparatorString , 'omnibase.vcf'!

versionControl
	^versionControl! !
!ODBTransactionManager categoriesFor: #close!public! !
!ODBTransactionManager categoriesFor: #createOn:!public! !
!ODBTransactionManager categoriesFor: #critical:!public! !
!ODBTransactionManager categoriesFor: #currentVersionDescriptor!public! !
!ODBTransactionManager categoriesFor: #initializeOn:!private! !
!ODBTransactionManager categoriesFor: #initializeReferences!private! !
!ODBTransactionManager categoriesFor: #oldHolders!public! !
!ODBTransactionManager categoriesFor: #oldHoldersFileName!private! !
!ODBTransactionManager categoriesFor: #openOn:!public! !
!ODBTransactionManager categoriesFor: #transactionAborted:!public! !
!ODBTransactionManager categoriesFor: #transactionCommitBegin:!public! !
!ODBTransactionManager categoriesFor: #transactionCommitEnd:!public! !
!ODBTransactionManager categoriesFor: #transactionReferenceAt:!public! !
!ODBTransactionManager categoriesFor: #transactionStart:!public! !
!ODBTransactionManager categoriesFor: #vcFileName!private! !
!ODBTransactionManager categoriesFor: #versionControl!private! !

ODBTransactionObject guid: (GUID fromString: '{8162ede7-0fb8-11d4-b091-000000000000}')!
ODBTransactionObject comment: ''!
!ODBTransactionObject categoriesForClass!No category! !
!ODBTransactionObject methodsFor!

dataBaseObject
	^dataBaseObject!

initialize!

isLocked
	"Answer <true> if the receiver is localy locked."

	^lockObject notNil!

isODBTransactionObject
	^true!

lock
	"Lock receiver."

	| lockID lockObj |
	lockObject isNil 
		ifTrue: 
			[(lockID := transaction lockID) isNil ifTrue: [^false].
			transaction isGlobalLocked ifTrue: [^true].
			lockObj := ODBObjectLock new.
			lockObj
				objectID: holder objectID;
				lockID: lockID.
			transaction addLock: lockObj.
			(holder lockWith: lockID) 
				ifFalse: 
					[transaction removeLock: lockObj.
					^false].
			lockObject := lockObj].
	^true!

objectChanged
	"This message is sent from transaction the first time it is marked as dirty."

	!

objectHolder
	^holder!

objectID
	^holder objectID!

objectLoaded
	"Sent to transaction object when it is loaded into transaction."

	!

objectStored
	"Sent to transaction object when it is stored for the first time."

	!

setDataBaseObject: anObject 
	dataBaseObject := anObject!

setObjectHolder: anObjectHolder 
	holder := anObjectHolder!

setObjectHolder: anObjectHolder dataBaseObject: aDatabaseObject transaction: aTransaction 
	holder := anObjectHolder.
	dataBaseObject := aDatabaseObject.
	transaction := aTransaction!

setObjectHolder: anObjectHolder transaction: aTransaction 
	holder := anObjectHolder.
	transaction := aTransaction!

transaction
	^transaction!

unlock
	"Unlock receiver."

	lockObject isNil 
		ifFalse: 
			[(holder unlockWith: lockObject lockID) ifFalse: [^false].
			transaction removeLock: lockObject.
			lockObject := nil].
	^true!

value
	"Answer object represented by receiver. Default <self>."

	! !
!ODBTransactionObject categoriesFor: #dataBaseObject!public! !
!ODBTransactionObject categoriesFor: #initialize!initialization!public! !
!ODBTransactionObject categoriesFor: #isLocked!public! !
!ODBTransactionObject categoriesFor: #isODBTransactionObject!public! !
!ODBTransactionObject categoriesFor: #lock!public! !
!ODBTransactionObject categoriesFor: #objectChanged!public! !
!ODBTransactionObject categoriesFor: #objectHolder!public! !
!ODBTransactionObject categoriesFor: #objectID!public! !
!ODBTransactionObject categoriesFor: #objectLoaded!public! !
!ODBTransactionObject categoriesFor: #objectStored!public! !
!ODBTransactionObject categoriesFor: #setDataBaseObject:!public! !
!ODBTransactionObject categoriesFor: #setObjectHolder:!public! !
!ODBTransactionObject categoriesFor: #setObjectHolder:dataBaseObject:transaction:!public! !
!ODBTransactionObject categoriesFor: #setObjectHolder:transaction:!public! !
!ODBTransactionObject categoriesFor: #transaction!public! !
!ODBTransactionObject categoriesFor: #unlock!public! !
!ODBTransactionObject categoriesFor: #value!public! !

!ODBTransactionObject class methodsFor!

new
	^super new initialize! !
!ODBTransactionObject class categoriesFor: #new!public! !

ODBUndefinedObject guid: (GUID fromString: '{8162ede8-0fb8-11d4-b091-000000000000}')!
ODBUndefinedObject comment: 'This object is used as a value holder for persistent objects for which there is no class in the image.

Example:

An object of class A was stored in the database. Later this object is loaded but there is no class A defined in the image. In this case an instance of ODBUndefinedObject is created with attribute values of A.
'!
!ODBUndefinedObject categoriesForClass!No category! !
!ODBUndefinedObject methodsFor!

className
	^classInfo name!

instVarNames
	^classInfo instVarNames!

instVarValues
	^variables!

odbLoadVariables: deserializer classInfo: aClassInfo 
	"Private - Deserialize instance of a nonexisting class."

	| stream |
	stream := deserializer stream.
	classInfo := aClassInfo.
	classInfo isVariable 
		ifTrue: [basicSize := stream getPositiveInteger]
		ifFalse: [basicSize := 0].
	deserializer register: self.
	classInfo isBytes 
		ifTrue: [stream getBytesFor: (bytes := ByteArray new: basicSize) len: basicSize]
		ifFalse: 
			[variables := Array new: classInfo instSize.
			1 to: classInfo instSize do: [:i | variables at: i put: deserializer odbNextObject].
			basicSize > 0 ifTrue: [indexedVariables := Array new: basicSize].
			1 to: basicSize do: [:i | indexedVariables at: i put: deserializer odbNextObject]].
	^self odbDeserialized: deserializer! !
!ODBUndefinedObject categoriesFor: #className!public! !
!ODBUndefinedObject categoriesFor: #instVarNames!public! !
!ODBUndefinedObject categoriesFor: #instVarValues!public! !
!ODBUndefinedObject categoriesFor: #odbLoadVariables:classInfo:!private! !

ODBVersionDescriptor guid: (GUID fromString: '{8162ede9-0fb8-11d4-b091-000000000000}')!
ODBVersionDescriptor comment: ''!
!ODBVersionDescriptor categoriesForClass!No category! !
!ODBVersionDescriptor methodsFor!

= anObject 
	anObject class == self class ifFalse: [^false].
	^topVersionNumber == anObject topVersionNumber 
		and: [committingTransactions size == anObject committingTransactions size]!

committingTransactions
	^committingTransactions!

copy
	^self class new 
		topVersionNumber: topVersionNumber
		readVersionNumber: readVersionNumber
		committingTransactions: committingTransactions!

fromVersionTable: aByteArray 
	"Private - Initialize receiver."

	| i vn size |
	topVersionNumber := aByteArray odbLongAt: 1.
	readVersionNumber := topVersionNumber.
	committingTransactions := OrderedCollection new.
	i := 5.
	size := aByteArray size.
	[i < size] whileTrue: 
			[(vn := aByteArray odbLongAt: i) == 0 
				ifFalse: 
					[committingTransactions add: vn.
					vn <= readVersionNumber ifTrue: [readVersionNumber := vn - 1]].
			i := i + 4]!

topVersionNumber
	^topVersionNumber!

topVersionNumber: tvn readVersionNumber: rvn committingTransactions: ct 
	"Private - Initialize receiver variables."

	topVersionNumber := tvn.
	readVersionNumber := rvn.
	committingTransactions := ct asArray!

versionAtStartOK: aVersionNumber 
	"Answer true if object with aVersionNumber can be read. 
	Current transaction commits are ignored."

	aVersionNumber <= readVersionNumber ifTrue: [^true].
	aVersionNumber <= topVersionNumber ifFalse: [^false].
	^(committingTransactions includes: aVersionNumber) not!

versionNumber
	"Answer version number for read-write transactions."

	^versionNumber!

versionNumber: anInteger 
	"Private - Set version number."

	| index |
	(versionNumber := anInteger) isNil 
		ifFalse: 
			[myCommits isNil ifTrue: [myCommits := OrderedCollection new: 4].
			(index := committingTransactions indexOf: anInteger) == 0 
				ifFalse: [committingTransactions at: index put: -1].
			myCommits add: anInteger]!

versionOK: aVersionNumber 
	"Answer true if object with aVersionNumber can be read."

	aVersionNumber <= readVersionNumber ifTrue: [^true].
	aVersionNumber <= topVersionNumber ifTrue: [^(committingTransactions includes: aVersionNumber) not].
	myCommits isNil ifTrue: [^false].
	^myCommits includes: aVersionNumber! !
!ODBVersionDescriptor categoriesFor: #=!public! !
!ODBVersionDescriptor categoriesFor: #committingTransactions!private! !
!ODBVersionDescriptor categoriesFor: #copy!public! !
!ODBVersionDescriptor categoriesFor: #fromVersionTable:!private! !
!ODBVersionDescriptor categoriesFor: #topVersionNumber!private! !
!ODBVersionDescriptor categoriesFor: #topVersionNumber:readVersionNumber:committingTransactions:!private! !
!ODBVersionDescriptor categoriesFor: #versionAtStartOK:!public! !
!ODBVersionDescriptor categoriesFor: #versionNumber!public! !
!ODBVersionDescriptor categoriesFor: #versionNumber:!private! !
!ODBVersionDescriptor categoriesFor: #versionOK:!public! !

OmniBase guid: (GUID fromString: '{8162edeb-0fb8-11d4-b091-000000000000}')!
OmniBase comment: ''!
!OmniBase categoriesForClass!No category! !
!OmniBase methodsFor!

classManager
	^classManager!

clientManager
	^clientManager!

close
	clientManager notNil 
		ifTrue: 
			[clientManager close.
			clientManager := nil].
	classManager notNil 
		ifTrue: 
			[classManager close.
			classManager := nil].
	objectManager notNil 
		ifTrue: 
			[objectManager close.
			objectManager := nil].
	transactionManager notNil 
		ifTrue: 
			[transactionManager close.
			transactionManager := nil].
	self class remove: self!

compactContainerNamed: containerName 
	"Reorganize container object storage file.
	This will do the following:
		- compact all container files and remove old object versions
		- reorganize all b-trees
	"

	(ODBGarbageCollector new)
		openOn: self;
		reorganizeDictionaries: true;
		reorganizeIndexSets: true;
		compactContainerNamed: containerName silentMode: false!

createBackupOn: newDirectoryName 
	"Starts an on-line backup process and creates a backup copy
	of the receiver database.
	The database will be copied based on the current version of the data.
	The copy of the database will have its containers compacted with no old versions.
	The version counter will be reset to zero and b-trees will be reorganized to be up to 1 node full."

	OmniBaseArchiver new onlineBackup: self to: newDirectoryName!

createOn: dirName 
	"Create new database. If a database already exists signal error."

	
	[rootDir := dirName.
	(ODBFileStream directoryExists: rootDir) 
		ifFalse: [ODBFileStream directoryCreate: rootDir].
	classManager := ODBClassManager new createOn: self.
	objectManager := ODBObjectManager new createOn: self.
	transactionManager := ODBTransactionManager new createOn: self.
	clientManager := ODBClientManager new createOn: self.
	self opened.
	clientManager localClient makeRootObject] 
			ifCurtailed: [self close]!

dirName
	^rootDir!

existsContainerNamed: aString 
	"Answer <true> if container named aString exists."

	objectManager containerNamed: aString ifAbsent: [^false].
	^true!

freeDiskSpace
	^(DiskVolumeInformation forPath: rootDir) totalFreeBytes!

garbageCollect
	"Garbage collect the database.
	This will do the following:
		- remove all objects which are not referenced from the database root
		- compact all container files and remove old object versions
	B-tree dictionaries will not be compacted."

	(ODBGarbageCollector new)
		reorganizeDictionaries: false;
		reorganizeIndexSets: false;
		runOn: self!

globalLock
	"Lock database so that only one user can change objects in
	it. No locks will be made to objects stored in the database
	files while the database is globaly locked. Answer <true>
	if successfull or <false> if failed. Global write lock will
	fail if there are read-write transactions already running."

	clientManager removeDisconnectedClients.
	^clientManager localClient globalLock!

globalUnlock
	"Release global write lock set by the local client."

	^clientManager localClient globalUnlock!

initialize
	ODBDatabaseObject initialize!

isGlobalLocked
	^self localClient isGlobalLocked!

localClient
	^clientManager localClient!

newBTreeDictionary: keySize 
	^self class newBTreeDictionary: keySize!

newBTreeIdentityDictionary
	"Factory method - create a new instance of a persistent B-tree identity dictionary.
	This kind of persistent dictionary is using a file system b-tree below to store dictionary associations for quick access.
	A b-tree persistent identity dictionary can store only persistent objects or nil as keys and persistent objects or nil as value."

	^self class newBTreeIdentityDictionary!

newBTreeIndexDictionary: keySize 
	^self class newBTreeIndexDictionary: keySize!

newContainer: aString 
	"Create new container named aString."

	^objectManager containerNew: aString!

newLongReadOnlyTransaction
	"Answer new long read-only transaction. Read only transactions
	are here only to prevent user code from writing into the database.
	Read-only transaction are not meant to improve concurrency since
	multi-version concurrency control is used in OmniBase and therefore
	all transactions run as read-only transactions up to the point when the
	first object is locked.

	Long transactions allow database restart without disrupting proxy objects."

	^clientManager localClient newLongReadOnlyTransaction!

newPersistentDictionary
	^self class newPersistentDictionary!

newReadOnlyTransaction
	"Answer new read-only transaction. Read only transactions
	are here only to prevent user code from writing into the database.
	Read-only transaction are not meant to improve concurrency since
	multi-version concurrency control is used in OmniBase and therefore
	all transactions run as read-only transactions up to the point when the
	first object is locked."

	^clientManager localClient newReadOnlyTransaction!

newTransaction
	^clientManager localClient newTransaction!

numberOfClients
	"Answer total number of client connections currently working with database.
	(this will answer how many times a database on a given directory has been opened)"

	| clients count |
	count := 0.
	clients := clientManager
				removeDisconnectedClients;
				clients.
	clients do: [:eachClient | eachClient isTerminated ifFalse: [count := count + 1]].
	clientManager closeForeignClients.
	^count!

objectManager
	^objectManager!

odbObjectID
	"Private - answer an object ID of the database connection instance.
	This is used when a persistent object is referencing current database connection.
	When deserialized it will set reference to the current database connection."

	^ODBObjectID containerID: 0 index: 4!

opened
	"Private - Receiver has just been opened."

	self class add: self.
	
	[clientManager
		removeDisconnectedClients;
		closeForeignClients] on: Error
			do: [:er | #odbTODO]!

openOn: dirName 
	"Open an already existing database environment. 
	Trigger an exception if failed."

	
	[rootDir := dirName.
	classManager := ODBClassManager new openOn: self.
	objectManager := ODBObjectManager new openOn: self.
	transactionManager := ODBTransactionManager new openOn: self.
	clientManager := ODBClientManager new openOn: self.
	self opened] 
			ifCurtailed: [self close].
	self freeDiskSpace < 5242880 ifTrue: [OmniBase warningMessage: 'Low disk space !!']!

reorganize
	"Reorganize database files.
	This will do the following:
		- remove all objects which are not referenced from the database root
		- compact all container files and remove old object versions
		- compact b-tree index files"

	(ODBGarbageCollector new)
		reorganizeDictionaries: true;
		reorganizeIndexSets: true;
		runOn: self!

setUserDescription: aString 
	"Set user description.
	This string can be read by other database connections to identify who has opened a database."

	self localClient description: aString!

transactionManager
	^transactionManager! !
!OmniBase categoriesFor: #classManager!private! !
!OmniBase categoriesFor: #clientManager!private! !
!OmniBase categoriesFor: #close!public! !
!OmniBase categoriesFor: #compactContainerNamed:!public! !
!OmniBase categoriesFor: #createBackupOn:!public! !
!OmniBase categoriesFor: #createOn:!public! !
!OmniBase categoriesFor: #dirName!private! !
!OmniBase categoriesFor: #existsContainerNamed:!public! !
!OmniBase categoriesFor: #freeDiskSpace!public! !
!OmniBase categoriesFor: #garbageCollect!public! !
!OmniBase categoriesFor: #globalLock!public! !
!OmniBase categoriesFor: #globalUnlock!public! !
!OmniBase categoriesFor: #initialize!private! !
!OmniBase categoriesFor: #isGlobalLocked!public! !
!OmniBase categoriesFor: #localClient!public! !
!OmniBase categoriesFor: #newBTreeDictionary:!public! !
!OmniBase categoriesFor: #newBTreeIdentityDictionary!public! !
!OmniBase categoriesFor: #newBTreeIndexDictionary:!public! !
!OmniBase categoriesFor: #newContainer:!public! !
!OmniBase categoriesFor: #newLongReadOnlyTransaction!public! !
!OmniBase categoriesFor: #newPersistentDictionary!public! !
!OmniBase categoriesFor: #newReadOnlyTransaction!public! !
!OmniBase categoriesFor: #newTransaction!public! !
!OmniBase categoriesFor: #numberOfClients!public! !
!OmniBase categoriesFor: #objectManager!private! !
!OmniBase categoriesFor: #odbObjectID!private! !
!OmniBase categoriesFor: #opened!private! !
!OmniBase categoriesFor: #openOn:!public! !
!OmniBase categoriesFor: #reorganize!public! !
!OmniBase categoriesFor: #setUserDescription:!public! !
!OmniBase categoriesFor: #transactionManager!private! !

!OmniBase class methodsFor!

add: anOmniBase 
	"Private - Registers an opened database session."

	sessions isNil ifTrue: [sessions := OrderedCollection new].
	sessions add: anOmniBase!

allSessions
	"Answers a collection of all opened database sessions."

	^sessions!

checkpoint
	"Commit all changes in persistent objects to the database
	and leave all locks set. Current transaction can still be used
	to change more objects."

	self currentTransaction checkpoint!

closeAll
	"Closes all opened database sessions. Do not use this method if you're using
	the Source Tracking System for development since it will also close its connection
	to the source code repository."

	sessions isNil ifTrue: [^false].
	sessions copy 
		do: [:each | [each close] on: Error do: [:er | sessions remove: each ifAbsent: []]]!

commit
	"Commit all changes in persistent objects to the database
	and release all locks. Current transaction can not be used
	anymore."

	self currentTransaction commit!

confirmationMessage: aString 
	^MessageBox confirm: aString!

createOn: dirName 
	"Creates new database on a given directory pathname."

	^self new createOn: dirName!

current
	"Answers the database session of the current active transaction."

	^self currentTransaction environment!

currentTransaction
	| transaction |
	transaction := currentTransaction.
	processToTransactionMutex critical: 
			[transaction := processToTransactionDict at: Processor activeProcess
						ifAbsent: [transaction]].
	transaction isNil ifFalse: [^transaction].
	self signalError: 'No transaction is active'!

currentTransaction: anODBLocalTransaction 
	currentTransaction := anODBLocalTransaction!

currentTransactionOrNil
	| transaction |
	transaction := currentTransaction.
	processToTransactionMutex critical: 
			[transaction := processToTransactionDict at: Processor activeProcess
						ifAbsent: [transaction]].
	^transaction!

getCurrentAndSet: anOmniBaseTransaction for: aProcess 
	"Private - Associaties anOmniBaseTransaction with aProcess.
	Answer previous active transaction in case transactions are nested."

	| previousTxn |
	processToTransactionMutex critical: 
			[previousTxn := processToTransactionDict at: aProcess ifAbsent: [].
			processToTransactionDict at: aProcess put: anOmniBaseTransaction].
	^previousTxn!

initialize
	processToTransactionMutex isNil 
		ifTrue: 
			[processToTransactionDict := IdentityDictionary new.
			processToTransactionMutex := Semaphore forMutualExclusion]!

logWarning: aString 
	(Transcript isNil or: [aString isNil]) 
		ifFalse: 
			[Transcript
				nextPutAll: aString;
				cr]!

new
	self initialize.
	^super new initialize!

newBTreeDictionary: keySize 
	"Factory method - create a new instance of a persistent B-tree dictionary.
	This kind of persistent dictionary is using a file system b-tree below to store dictionary associations for quick access.
	A b-tree persistent dictionary can store any object that implements #asBtreeKeyOfSize: as key, and any persistent object as its value."

	^ODBBTreeDictionary createWithKeyLength: keySize!

newBTreeIdentityDictionary
	"Factory method - create a new instance of a persistent B-tree identity dictionary.
	This kind of persistent dictionary is using a file system b-tree below to store dictionary associations for quick access.
	A b-tree persistent identity dictionary can store only persistent objects or nil as keys and persistent objects or nil as value."

	^ODBBTreeIdentityDictionary new!

newBTreeIndexDictionary: keySize 
	^ODBBTreeIndexDictionary createWithKeyLength: keySize!

newFastIdentityDictionary: initialSize 
	^ODBIdentityDictionary new: initialSize!

newIdentitySet: initialSize 
	^IdentitySet new: initialSize!

newPersistentDictionary
	"Create new persistent dictionary. All dictionary keys will be 
	stored together with the dictionary if not already persistent. All
	dictionary values will be stored separately and will be made
	persistent each with its own object ID."

	| dict |
	dict := ODBPersistentDictionary new.
	self currentTransactionOrNil notNil ifTrue: [dict makePersistent].
	^dict!

objectAt: anODBObjectID 
	"Answer a persistent object with a given object id. The object will be fetched right away 
	without instantiating a proxy object first. Answer <nil> if object id is nonexistent i.e. 
	there is no persistent object with such oid."

	^self currentTransaction objectAt: anODBObjectID!

openOn: dirName 
	^self new openOn: dirName!

remove: anOmniBase 
	"Private - Deregisters an opened database session."

	sessions isNil ifTrue: [^self].
	sessions remove: anOmniBase ifAbsent: []!

removeFor: aProcess 
	"Private - Disassociaties a transaction from aProcess."

	processToTransactionMutex 
		critical: [processToTransactionDict removeKey: aProcess ifAbsent: []]!

rollback
	"Release all locks set in the current transaction and forget 
	all changes done on persistent objects."

	self currentTransaction abort!

root
	"Answer the database root object. Root object represents an entry point into the database.
	Only objects referenced from the root object will remain after the garbage collection is 
	performed on the database. By default the root object is a dictionary with persistent objects
	as its values. This can be changed if needed using message #root: on transaction."

	^self currentTransaction root!

setTransaction: aTransaction for: aProcess 
	"Private - Associaties a transaction to aProcess."

	processToTransactionMutex 
		critical: [processToTransactionDict at: aProcess put: aTransaction]!

signalCannotLockBTreeDictionaryKey
	^ODBCannotLockKey signal!

signalCannotSetFileLockError
	^ODBCannotLock signal!

signalError: errorMessage 
	ODBError signal: errorMessage!

signalFileLockWaitNotification
	^ODBLockNotification signal!

signalObjectAlreadyChangedInAnotherTransactionError
	^ODBCannotLockObject signal: 'Object has already been changed in another transaction'!

signalObjectAlreadyLockedInAnotherTransactionError
	^ODBCannotLockObject signal: 'Object is already locked in another transaction'!

warningMessage: aString 
	MessageBox warning: aString caption: 'OmniBase warning'! !
!OmniBase class categoriesFor: #add:!private! !
!OmniBase class categoriesFor: #allSessions!public! !
!OmniBase class categoriesFor: #checkpoint!public! !
!OmniBase class categoriesFor: #closeAll!public! !
!OmniBase class categoriesFor: #commit!public! !
!OmniBase class categoriesFor: #confirmationMessage:!public! !
!OmniBase class categoriesFor: #createOn:!public! !
!OmniBase class categoriesFor: #current!public! !
!OmniBase class categoriesFor: #currentTransaction!public! !
!OmniBase class categoriesFor: #currentTransaction:!public! !
!OmniBase class categoriesFor: #currentTransactionOrNil!public!transaction management! !
!OmniBase class categoriesFor: #getCurrentAndSet:for:!handling!private! !
!OmniBase class categoriesFor: #initialize!public! !
!OmniBase class categoriesFor: #logWarning:!public! !
!OmniBase class categoriesFor: #new!private! !
!OmniBase class categoriesFor: #newBTreeDictionary:!public! !
!OmniBase class categoriesFor: #newBTreeIdentityDictionary!public! !
!OmniBase class categoriesFor: #newBTreeIndexDictionary:!public! !
!OmniBase class categoriesFor: #newFastIdentityDictionary:!creating!public! !
!OmniBase class categoriesFor: #newIdentitySet:!creating!public! !
!OmniBase class categoriesFor: #newPersistentDictionary!creating!public! !
!OmniBase class categoriesFor: #objectAt:!public! !
!OmniBase class categoriesFor: #openOn:!public! !
!OmniBase class categoriesFor: #remove:!private! !
!OmniBase class categoriesFor: #removeFor:!handling!private! !
!OmniBase class categoriesFor: #rollback!public! !
!OmniBase class categoriesFor: #root!public! !
!OmniBase class categoriesFor: #setTransaction:for:!handling!private! !
!OmniBase class categoriesFor: #signalCannotLockBTreeDictionaryKey!exceptions!private! !
!OmniBase class categoriesFor: #signalCannotSetFileLockError!exceptions!private! !
!OmniBase class categoriesFor: #signalError:!exceptions!private! !
!OmniBase class categoriesFor: #signalFileLockWaitNotification!exceptions!private! !
!OmniBase class categoriesFor: #signalObjectAlreadyChangedInAnotherTransactionError!exceptions!private! !
!OmniBase class categoriesFor: #signalObjectAlreadyLockedInAnotherTransactionError!exceptions!private! !
!OmniBase class categoriesFor: #warningMessage:!public! !

OmniBaseArchiver guid: (GUID fromString: '{1b8a89b7-cae9-42c3-b085-b3ea2fa89db4}')!
OmniBaseArchiver comment: ''!
!OmniBaseArchiver categoriesForClass!Unclassified! !
!OmniBaseArchiver methodsFor!

copyClassManager
	| lastClassId classDescription |
	self progressNotification: 'Copying class meta information' value: 0.
	lastClassId := db classManager lastClassId.
	1 to: lastClassId
		do: 
			[:i | 
			classDescription := nil.
			[classDescription := db classManager classDescriptionAt: i] on: Error do: [:ex | ].
			newDb classManager addClassDescription: classDescription withId: i.
			self progressNotification: nil value: i / lastClassId]!

copyContainer: container 
	| size newContainer newIndexFile dbClass holderVisibilityResult |
	self progressNotification: 'Copying container ' , container name value: 0.
	newContainer := newDb objectManager containerAt: container id
				ifAbsent: [newDb objectManager containerNew: container name].
	newIndexFile := newContainer indexFile.
	newIndexFile setLastIndex: container indexFile getLastIndex.
	size := container numberOfObjects.
	container objectHoldersDo: 
			[:eachHolder | 
			eachHolder isRemoved 
				ifTrue: [newIndexFile removeIndex: eachHolder objectID index]
				ifFalse: 
					[holderVisibilityResult := true.
					[holderVisibilityResult == false or: [versionDescriptor versionOK: eachHolder versionNumber]] 
						whileFalse: [holderVisibilityResult := eachHolder loadPreviousVersionOrNilFrom: oldHolders].
					holderVisibilityResult 
						ifFalse: [newIndexFile removeIndex: eachHolder objectID index]
						ifTrue: 
							[eachHolder versionNumber: newVersionNumber.
							dbClass := ODBDatabaseObject persistentClassAt: eachHolder persistentClassID.
							dbClass hasBytes 
								ifTrue: 
									[eachHolder setContainer: newContainer.
									newContainer addByteStorageRequest: (ODBGarbageCollectorRequest new objectHolder: eachHolder
												bytes: (container loadBytesAt: eachHolder objectPosition length: eachHolder objectLength))]
								ifFalse: 
									[dbClass hasExternalFiles 
										ifTrue: 
											["backup objects using external files (b-trees)"
											eachHolder getObject 
												createBackupCopyIn: newContainer
												versionDescriptor: versionDescriptor
												oldHolders: db transactionManager oldHolders
												versionNumber: newVersionNumber].
									newIndexFile at: eachHolder objectID index put: eachHolder contents]]].
			self progressNotification: nil value: eachHolder objectID index / size].
	newContainer flushBytes!

copyContainers
	| container i |
	i := 1.
	
	[container := db objectManager containerAt: i ifAbsent: [].
	i := i + 1.
	container isNil] 
			whileFalse: [self copyContainer: container]!

copyDatabase
	self
		copyContainers;
		copyClassManager!

copyDatabase: silentBool 
	silentBool = true 
		ifTrue: [self copyDatabase]
		ifFalse: 
			[progressDialog := ProgressDialog operation: 
							[:valueHolder | 
							progressValue := valueHolder.
							[self copyDatabase] ifCurtailed: [progressDialog view close]].
			progressDialog
				caption: 'Starting on-line backup';
				showModal]!

onlineBackup: anOmniBase to: newPath 
	self 
		onlineBackup: anOmniBase
		to: newPath
		silent: false!

onlineBackup: anOmniBase to: newPath silent: silentBool 
	^self 
		onlineBackup: anOmniBase
		to: newPath
		silent: silentBool
		fromVersionNumber: nil!

onlineBackup: anOmniBase to: newPath silent: silentBool fromVersionNumber: anInteger 
	"Backup database into another database instance. Method arguments are as follows:

		anOmniBase - database instance of which a backup will be made
		newPath - location where new backup database will be stored
		silentBool - true if no progress bar should be shown
		anInteger - if nil, then data as it was when the backup started will be copied,
				else a historic version of anOmniBase will be created as it was visible in version anInteger.
	"

	newDb := OmniBase createOn: newPath.
	
	[newDb objectManager reopenExclusively.
	db := anOmniBase.
	oldHolders := db transactionManager oldHolders.
	versionDescriptor := db transactionManager versionControl versionDescriptor copy.
	anInteger isNil 
		ifFalse: 
			["create/reconstruct a copy of the database as it was in some particular moment in the past"
			versionDescriptor 
				topVersionNumber: anInteger
				readVersionNumber: anInteger
				committingTransactions: #()].
	newVersionNumber := newDb transactionManager versionControl 
				getNewVersionNumberFor: newDb localClient clientID.
	newDb transactionManager versionControl removeCommittingFor: newDb localClient clientID.
	self copyDatabase: silentBool] 
			ensure: [newDb close]!

progressNotification: aString value: aFraction 
	progressDialog isNil 
		ifFalse: 
			[aString isNil ifFalse: [progressDialog caption: aString].
			aFraction isNil ifFalse: [progressValue value: 100 * aFraction]]! !
!OmniBaseArchiver categoriesFor: #copyClassManager!private! !
!OmniBaseArchiver categoriesFor: #copyContainer:!private! !
!OmniBaseArchiver categoriesFor: #copyContainers!private! !
!OmniBaseArchiver categoriesFor: #copyDatabase!public! !
!OmniBaseArchiver categoriesFor: #copyDatabase:!public! !
!OmniBaseArchiver categoriesFor: #onlineBackup:to:!public! !
!OmniBaseArchiver categoriesFor: #onlineBackup:to:silent:!public! !
!OmniBaseArchiver categoriesFor: #onlineBackup:to:silent:fromVersionNumber:!public! !
!OmniBaseArchiver categoriesFor: #progressNotification:value:!private! !

OmniBaseTester guid: (GUID fromString: '{2cfec1ef-b746-4249-93c4-e54ef5d7a2d0}')!
OmniBaseTester comment: ''!
!OmniBaseTester categoriesForClass!Unclassified! !
!OmniBaseTester class methodsFor!

benchmarkCommitNewObjects
	| db trn dict time timeArray maxIndex maxTime stream |
	stream := WriteStream on: String new.
	db := OmniBase openOn: self testDir.
	timeArray := Array new: 6.
	maxTime := 0.
	1 to: timeArray size
		do: 
			[:count | 
			trn := db newTransaction.
			dict := OmniBase newPersistentDictionary.
			trn store: dict.
			1 to: 100
				do: 
					[:i | 
					dict at: i
						put: (Array 
								with: 'Test array'
								with: i
								with: i printString
								with: (Association key: 'Bla' value: 'Blala'))].
			time := Time millisecondsToRun: [trn commit].
			trn abort.
			stream
				nextPutAll: ' Commit time: ' , (time / 1000) asFloat printString , ' sec';
				cr.
			timeArray at: count put: time.
			time > maxTime 
				ifTrue: 
					[maxTime := time.
					maxIndex := count]].
	time := 0.
	1 to: timeArray size do: [:i | i = maxIndex ifFalse: [time := time + (timeArray at: i)]].
	time := time / (timeArray size - 1).
	stream
		nextPutAll: '------------------------';
		cr.
	stream
		nextPutAll: 'Average time: ' , (time / 1000) asFloat printString , ' sec';
		cr.
	db close.
	Transcript show: stream contents!

test1
	| db |

	(File exists: self testDir)
		ifFalse: [ File createDirectory: self testDir ].
	[ [ 
			db := OmniBase createOn: self testDir ]
			on: Win32Error 
			do: [ :sig | sig exit: nil ] ] ensure: [ db ifNotNil: [ db close ] ]!

test10
	"Test basic B-Tree dictionary functionality."

	| db t dict |
	db := OmniBase openOn: self testDir.
	
	[t := db newTransaction.
	dict := db newBTreeDictionary: 20.
	dict
		at: 1 put: self testCollection;
		at: 2 put: 'Dva';
		at: 3 put: nil;
		at: Date today put: 'danes';
		at: 'Test' put: 'test';
		at: 'temp' put: 'temp';
		removeKey: 'temp'.
	(dict at: 2) = 'Dva' ifFalse: [self halt].
	(dict at: 3) = nil ifFalse: [self halt].
	(dict at: Date today) = 'danes' ifFalse: [self halt].
	(dict at: 'Test') = 'test' ifFalse: [self halt].
	(dict includesKey: 'Test') ifFalse: [self halt].
	(dict includesKey: 'none') ifTrue: [self halt].
	(dict includesKey: 3) ifFalse: [self halt].
	(dict includesKey: 'temp') ifTrue: [self halt].
	dict size = 5 ifFalse: [self halt].
	t makePersistent: dict.
	(dict at: 2) = 'Dva' ifFalse: [self halt].
	(dict at: 3) = nil ifFalse: [self halt].
	(dict at: Date today) = 'danes' ifFalse: [self halt].
	(dict at: 'Test') = 'test' ifFalse: [self halt].
	(dict includesKey: 'Test') ifFalse: [self halt].
	(dict includesKey: 'none') ifTrue: [self halt].
	(dict includesKey: 3) ifFalse: [self halt].
	dict size = 5 ifFalse: [self halt].
	t checkpoint.
	(dict at: 2) = 'Dva' ifFalse: [self halt].
	(dict at: 3) = nil ifFalse: [self halt].
	(dict at: Date today) = 'danes' ifFalse: [self halt].
	(dict at: 'Test') = 'test' ifFalse: [self halt].
	(dict includesKey: 'Test') ifFalse: [self halt].
	(dict includesKey: 'none') ifTrue: [self halt].
	(dict includesKey: 3) ifFalse: [self halt].
	dict size = 5 ifFalse: [self halt].
	t root at: 'b-tree' put: dict.
	t commit.
	t := db newTransaction.
	dict := t root at: 'b-tree'.
	(dict at: 2) = 'Dva' ifFalse: [self halt].
	(dict at: 3) = nil ifFalse: [self halt].
	(dict at: Date today) = 'danes' ifFalse: [self halt].
	(dict at: 'Test') = 'test' ifFalse: [self halt].
	(dict includesKey: 'Test') ifFalse: [self halt].
	(dict includesKey: 'none') ifTrue: [self halt].
	(dict includesKey: 3) ifFalse: [self halt].
	dict size = 5 ifFalse: [self halt].
	dict removeKey: 2.
	(dict includesKey: 2) ifTrue: [self halt].
	dict size = 4 ifFalse: [self halt].
	(dict at: 2) isNil ifFalse: [self halt].
	t checkpoint.
	dict at: 2 put: 'blabla'.
	dict size = 5 ifFalse: [self halt].
	t commit.
	t := db newTransaction.
	dict := t root at: 'b-tree'.
	(dict at: 2) = 'blabla' ifFalse: [self halt]] 
			ensure: [db isNil ifFalse: [db close]]!

test10a
	"Test B-Tree identity dictionary functionality."

	| db t dict1 dict2 obj1 obj2 obj3 |
	db := OmniBase openOn: self testDir.
	
	[t := db newTransaction.
	dict1 := db newBTreeIdentityDictionary.
	dict2 := db newBTreeIdentityDictionary.
	obj1 := Array with: 'Array with String as obj1'.
	obj2 := Array with: obj1 with: 'Array with String and obj1 as obj2'.
	obj3 := Array with: Date today.
	t root at: 'obj2' put: obj2.
	dict1 at: obj1 put: obj2.
	(dict1 at: obj1) == obj2 ifFalse: [self halt].
	dict2 at: obj1 put: t root.
	dict2 at: t root put: obj1.
	dict1 at: t root put: obj1.
	dict2 at: t root put: dict1.
	dict2 at: dict2 put: obj1.
	(dict2 at: obj1) == t root ifFalse: [self halt].
	dict1 size = 2 ifFalse: [self halt].
	dict2 size = 3 ifFalse: [self halt].
	dict1 at: obj3 put: Date today.
	t makePersistent: dict2.
	dict2 at: obj3 put: Date today.
	dict1 removeKey: obj3.
	dict2 removeKey: obj3.
	t makePersistent: dict1.
	dict1 size = 2 ifFalse: [self halt].
	dict2 size = 3 ifFalse: [self halt].
	t checkpoint.
	(dict1 at: obj1) == obj2 ifFalse: [self halt].
	t root at: 'identity-dict1' put: dict1.
	dict1 at: t root put: dict2.
	t commit.
	t := db newTransaction.
	dict1 := t root at: 'identity-dict1'.
	dict2 := dict1 at: t root.
	obj1 := dict2 at: dict2.
	obj2 := dict1 at: obj1.
	((dict2 at: obj1) isIdenticalTo: t root) ifFalse: [self halt].
	((dict2 at: t root) isIdenticalTo: dict1) ifFalse: [self halt].
	t checkpoint.
	t commit.
	t := db newTransaction] 
			ensure: [db isNil ifFalse: [db close]]!

test11
	"Test b-tree iterator by inserting large number of associations into b-tree dictionary."

	| db dict |
	db := OmniBase openOn: self testDir.
	
	[
	[dict := OmniBase newBTreeDictionary: 5.
	OmniBase root at: 'big-dict' put: dict.
	0 to: 300
		by: 2
		do: [:i | dict at: i put: i printString].
	299 to: 1
		by: -2
		do: [:i | dict at: i put: i printString]] 
			evaluateAndCommitIn: db newTransaction.
	
	[dict := OmniBase root at: 'big-dict'.
	299 to: 1
		by: -2
		do: [:i | (dict at: i) = i printString ifFalse: [self halt]].
	0 to: 300
		by: 2
		do: [:i | (dict at: i) = i printString ifFalse: [self halt]]] 
			evaluateIn: db newTransaction] 
			ensure: [db isNil ifFalse: [db close]]!

test12
	"Test local B-Tree key locking"

	| db1 db2 t1 t2 dict dict2 |
	db1 := OmniBase openOn: self testDir.
	db2 := OmniBase openOn: self testDir.
	
	[t1 := db1 newTransaction.
	dict := db1 newBTreeDictionary: 5.
	t1 root at: 'concurrent-btree' put: dict.
	t1 checkpoint.
	t2 := db2 newTransaction.

	"inserting keys in one transaction"
	1 to: 100 do: [:i | dict at: i put: 'test'].
	t1 checkpoint.
	dict2 := t2 root at: 'concurrent-btree'.
	"inserting keys in another transaction"
	101 to: 200 do: [:i | dict2 at: i put: 'test'].
	t2 checkpoint.

	"every transaction sees only its own associations since t1 and t2 overlap
		(t2 was started before the t1 checkpointed its state)"
	dict size = 100 ifFalse: [self halt].
	dict2 size = 100 ifFalse: [self halt].
	t1 commit.
	t2 commit.
	t1 := db1 newTransaction.
	t2 := db2 newTransaction.
	dict := t1 root at: 'concurrent-btree'.
	dict2 := t2 root at: 'concurrent-btree'.
	(dict lockKey: 10) ifFalse: [self halt].
	(dict2 lockKey: 10) ifTrue: [self halt].
	dict unlockKey: 10.
	(dict2 lockKey: 10) ifFalse: [self halt].
	dict2 at: 10 put: 'changed'.
	t2 commit.
	(dict lockKey: 10) ifTrue: [self halt].
	"wait for half a second to ensure that version descriptor will be reloaded"
	(Delay forMilliseconds: 501) wait.
	t1 := db1 newTransaction.
	t2 := db2 newTransaction.
	dict := t1 root at: 'concurrent-btree'.
	dict at: 10 put: 'changed-again'.
	t1 commit.
	dict2 := t2 root at: 'concurrent-btree'.
	"in t2 the value should stay as it was since the t2 was started before t1 committed"
	(dict2 at: 10) = 'changed' ifFalse: [self halt].
	(dict2 lockKey: 10) ifTrue: [self halt]] 
			ensure: 
				[db1 close.
				db2 close]!

test13
	"Test garbage collection"

	| db |
	db := OmniBase openOn: self testDir.
	[db garbageCollect] ensure: [db isNil ifFalse: [db close]]!

test14
	"Test database reorganization (garbage collection with b-tree index reorganization)."

	| db |
	db := OmniBase openOn: self testDir.
	[db garbageCollect] ensure: [db isNil ifFalse: [db close]]!

test15
	"Test database backup."

	| db t obj backupDir |
	backupDir := self testDir , '_BackupTest' 
				, ('_' , Date today printString , '_' , Time now printString 
						select: [:each | each = $_ or: [each isDigit]]).
	db := OmniBase openOn: self testDir.
	
	[t := db newTransaction.
	obj := Array with: 'to je test'.
	t makePersistent: obj.
	t root at: 'backup1' put: obj.
	obj := OmniBase newBTreeDictionary: 20.
	t makePersistent: obj.
	obj at: 'test' put: 'test'.
	t root at: 'backup2' put: obj.
	t commit.
	db createBackupOn: backupDir.
	db close.
	db := OmniBase openOn: backupDir.
	t := db newTransaction.
	(t root at: 'backup1') = (Array with: 'to je test') ifFalse: [self halt].
	((t root at: 'backup2') at: 'test') = 'test' ifFalse: [self halt]] 
			ensure: [db isNil ifFalse: [db close]]!

test16
	"Test single container compaction - file reorganization."

	| db t obj |
	db := OmniBase openOn: self testDir.
	
	[t := db newTransaction.
	obj := Array with: 'to je test'.
	t makePersistent: obj.
	t root at: 'backup1' put: obj.
	obj := OmniBase newBTreeDictionary: 20.
	t makePersistent: obj.
	obj at: 'test' put: 'test'.
	t root at: 'backup2' put: obj.
	t commit.
	db compactContainerNamed: 'Default'.
	self test5.
	db compactContainerNamed: 'Default'.
	self test5.
	db compactContainerNamed: 'Default'] 
			ensure: [db isNil ifFalse: [db close]]!

test2
	| db |
	
	[db := OmniBase openOn: self testDir.
	db numberOfClients] ensure: [db isNil ifFalse: [db close]]!

test3

	| db |
	[
		db := OmniBase openOn: self testDir.
		[ OrderedCollection newPersistent
			add: 'string object';
			add: 1;
			add: Date today ] evaluateAndCommitIn: db newTransaction.
	] ensure: [db close]!

test4

	| db txn |
	[
		db := OmniBase openOn: self testDir.
		txn := db newTransaction.
		txn makePersistent: self testCollection.
		txn commit.
	] ensure: [db close]!

test5

	| db coll |
	[
		db := OmniBase openOn: self testDir.
		[ OmniBase root
			at: 'test'
			put: self testCollection ] evaluateAndCommitIn: db newTransaction.
		coll := db newTransaction root at: 'test'.
		#( 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 ) do: [:i |
			(coll at: i) = (self testCollection at: i)
				ifFalse: [ self error: 'Contents does not match' ]].
	] ensure: [db close]!

test6

	| db |
	[
		db := OmniBase openOn: self testDir.
		[| coll1 coll2 str |
		coll1 := OrderedCollection new.
		coll2 := OrderedCollection new.
		str := 'This is a string'.
		coll1 add: str.
		coll2 add: str.
		OmniBase root at: 'one' put: coll1.
		OmniBase root at: 'two' put: coll2. ]
			evaluateAndCommitIn: db newTransaction.
		[| coll1 coll2 |
		coll1 := OmniBase root at: 'one'.
		coll2 := OmniBase root at: 'two'.
		(coll1 first isIdenticalTo: coll2 first)
			ifTrue: [self error: 'Objects should not be identical' ].
		]
			evaluateIn: db newTransaction.
	] ensure: [db close]!

test7

	| db |
	[
		db := OmniBase openOn: self testDir.
		[ | coll1 coll2 str |
		coll1 := OrderedCollection new.
		coll2 := OrderedCollection new.
		str := 'This is a string'.
		str makePersistent.
		coll1 add: str.
		coll2 add: str.
		OmniBase root at: 'one' put: coll1.
		OmniBase root at: 'two' put: coll2. ]
			evaluateAndCommitIn: db newTransaction.
		[ | coll1 coll2 |
		coll1 := OmniBase root at: 'one'.
		coll2 := OmniBase root at: 'two'.
		(coll1 first isIdenticalTo: coll2 first)
			ifFalse: [ self error: 'Objects should be identical' ].
		] evaluateIn: db newTransaction.
	] ensure: [db close]!

test8
	"Test if local object locking works with transactions running within one database connection."

	| db t1 t2 coll collCopy |
	
	[db := OmniBase openOn: self testDir.
	"prepare"
	
	[coll := OrderedCollection with: 'This collection will be locked'.
	OmniBase root at: 'lockTest' put: coll] 
			evaluateAndCommitIn: db newTransaction.
	"test"
	t1 := db newTransaction.
	t2 := db newTransaction.
	coll := t1 root at: 'lockTest'.
	(t1 lock: coll) ifFalse: [self error: 'Object locking failed'].
	collCopy := t2 root at: 'lockTest'.
	(t2 lock: collCopy) ifTrue: [self error: 'Object locking should fail'].
	t1 abort.
	(t2 lock: collCopy) ifFalse: [self error: 'Object locking failed'].
	t1 := db newTransaction.
	coll := t1 root at: 'lockTest'.
	coll first.
	(t1 lock: coll) ifTrue: [self error: 'Object locking should fail'].
	t2 unlock: collCopy.
	t2 := db newTransaction.
	(t1 lock: coll) ifFalse: [self error: 'Object locking failed'].
	coll at: 1 put: 'Changed collection'.
	t1
		markDirty: coll;
		commit.
	collCopy := t2 root at: 'lockTest'.
	collCopy first = 'This collection will be locked' 
		ifFalse: [self error: 'Object should not change'].
	(t2 lock: collCopy) 
		ifTrue: [self error: 'Lock should fail as it is already changed in t1'].
	t2 := db newTransaction.
	coll := t2 root at: 'lockTest'.
	coll first = 'Changed collection' ifFalse: [self error: 'Object should be changed']] 
			ensure: [db close]!

test9
	"Test if object locking works with transactions running in two database connections."

	| db1 db2 t1 t2 coll collCopy |
	
	[db1 := OmniBase openOn: self testDir.
	db2 := OmniBase openOn: self testDir.
	"prepare"
	
	[coll := OrderedCollection with: 'This collection will be locked'.
	OmniBase root at: 'lockTest' put: coll] 
			evaluateAndCommitIn: db1 newTransaction.
	"test"
	t1 := db1 newTransaction.
	t2 := db2 newTransaction.
	coll := t1 root at: 'lockTest'.
	(t1 lock: coll) ifFalse: [self error: 'Object locking failed'].
	collCopy := t2 root at: 'lockTest'.
	(t2 lock: collCopy) ifTrue: [self error: 'Object locking should fail'].
	t1 abort.
	(t2 lock: collCopy) ifFalse: [self error: 'Object locking failed'].
	t1 := db1 newTransaction.
	coll := t1 root at: 'lockTest'.
	coll first.
	(t1 lock: coll) ifTrue: [self error: 'Object locking should fail'].
	t2 unlock: collCopy.
	t2 := db2 newTransaction.
	(t1 lock: coll) ifFalse: [self error: 'Object locking failed'].
	coll at: 1 put: 'Changed collection'.
	t1
		markDirty: coll;
		commit.
	collCopy := t2 root at: 'lockTest'.
	collCopy first = 'This collection will be locked' 
		ifFalse: [self error: 'Object should not change'].
	(t2 lock: collCopy) 
		ifTrue: [self error: 'Lock should fail as it is already changed in t1'].
	"wait here a little since changes are updated every half a second (500 ms)"
	(Delay forMilliseconds: 501) wait.
	t2 := db2 newTransaction.
	coll := t2 root at: 'lockTest'.
	coll first = 'Changed collection' ifFalse: [self error: 'Object should be changed']] 
			ensure: 
				[db1 close.
				db2 close]!

testAll
	self
		test1;
		test2;
		test3;
		test4;
		test5;
		test6;
		test7;
		test8;
		test9;
		test10;
		test10a;
		test11;
		test12;
		test13;
		test14;
		test15;
		test16!

testCollection

	| coll |
	coll := OrderedCollection new.
	coll
		add: 1;
		add: -1;
		add: true;
		add: false;
		add: nil;
		add: 1000;
		add: -1000;
		add: 0.0;
		add: 1.0;
		add: -123.43;
		add: 13 factorial;
		add: 215345245.3425;
		add: 2 / 3;
		add: Date today;
		add: (Time fromSeconds: 20000);
		add: $a;
		add: #symbol;
		add: '';
		add: 'Hello world';
		add: self;
		add: Smalltalk;
		add: (Dictionary new at: 'key' put: 'value'; yourself);
		add: IdentityDictionary new;
		add: (Array with: 'a' with: 'b');
		add: coll.
	^coll!

testDir

	^'c:\temp\OmniBaseDolphin7'! !
!OmniBaseTester class categoriesFor: #benchmarkCommitNewObjects!public!test! !
!OmniBaseTester class categoriesFor: #test1!public!testing! !
!OmniBaseTester class categoriesFor: #test10!public!testing! !
!OmniBaseTester class categoriesFor: #test10a!public!testing! !
!OmniBaseTester class categoriesFor: #test11!public!testing! !
!OmniBaseTester class categoriesFor: #test12!public!test! !
!OmniBaseTester class categoriesFor: #test13!public!test! !
!OmniBaseTester class categoriesFor: #test14!public!test! !
!OmniBaseTester class categoriesFor: #test15!public!test! !
!OmniBaseTester class categoriesFor: #test16!public!test! !
!OmniBaseTester class categoriesFor: #test2!public!testing! !
!OmniBaseTester class categoriesFor: #test3!public!testing! !
!OmniBaseTester class categoriesFor: #test4!public!testing! !
!OmniBaseTester class categoriesFor: #test5!public!testing! !
!OmniBaseTester class categoriesFor: #test6!public!testing! !
!OmniBaseTester class categoriesFor: #test7!public!testing! !
!OmniBaseTester class categoriesFor: #test8!public!testing! !
!OmniBaseTester class categoriesFor: #test9!public!testing! !
!OmniBaseTester class categoriesFor: #testAll!public!test! !
!OmniBaseTester class categoriesFor: #testCollection!public!testing! !
!OmniBaseTester class categoriesFor: #testDir!public!testing! !

ODBPersistentDictionary guid: (GUID fromString: '{8162edec-0fb8-11d4-b091-000000000000}')!
ODBPersistentDictionary comment: ''!
!ODBPersistentDictionary categoriesForClass!No category! !
!ODBPersistentDictionary methodsFor!

add: anAssociation 
	| t |
	t := transaction.
	anAssociation key isODBReference ifTrue: [self error: 'Invalid key!!'].
	super add: anAssociation.
	transaction := t.
	transaction isNil ifTrue: [^anAssociation].
	anAssociation value isImmediate 
		ifFalse: [transaction makePersistent: anAssociation value].
	transaction markDirty: self.
	^anAssociation!

asDictionary
	| dict |
	dict := Dictionary new.
	self associationsDo: [:assoc | dict add: assoc].
	^dict!

at: key ifAbsentPut: operation 
	^self at: key ifAbsent: [self at: key put: operation value]!

at: key put: value 
	| oldValue |
	key isODBReference ifTrue: [self error: 'Invalid key!!'].
	oldValue := super at: key ifAbsent: [].
	value == oldValue ifTrue: [^value].
	oldValue := transaction.
	super at: key put: value.
	transaction := oldValue.
	transaction isNil ifTrue: [^value].
	transaction markDirty: self.
	(value isImmediate or: [value == key]) ifFalse: [transaction makePersistent: value].
	^value!

odbBasicSerialize: serializer 
	(serializer stream)
		putByte: 83;
		putPositiveInteger: self size.
	self keysAndValuesDo: 
			[:key :value | 
			key odbSerialize: serializer.
			value odbSerialize: serializer]!

odbLoadedIn: anOmniBaseTransaction 
	"This method is sent when the object is loaded from the database."

	transaction := anOmniBaseTransaction!

odbMadePersistentIn: anOmniBaseTransaction 
	"This method is sent when the object is made persistent."

	transaction notNil 
		ifTrue: [self error: 'Object is already persistent in another transaction'].
	transaction := anOmniBaseTransaction.
	self do: [:each | each isImmediate ifFalse: [transaction makePersistent: each]]!

removeKey: aKey ifAbsent: aBlock 
	| t |
	t := transaction.
	super removeKey: aKey ifAbsent: [^aBlock value].
	transaction := t.
	transaction isNil ifFalse: [transaction markDirty: self]!

superAt: key put: value 
	^super at: key put: value!

transaction
	^transaction! !
!ODBPersistentDictionary categoriesFor: #add:!public! !
!ODBPersistentDictionary categoriesFor: #asDictionary!public! !
!ODBPersistentDictionary categoriesFor: #at:ifAbsentPut:!public! !
!ODBPersistentDictionary categoriesFor: #at:put:!public! !
!ODBPersistentDictionary categoriesFor: #odbBasicSerialize:!public! !
!ODBPersistentDictionary categoriesFor: #odbLoadedIn:!private! !
!ODBPersistentDictionary categoriesFor: #odbMadePersistentIn:!private! !
!ODBPersistentDictionary categoriesFor: #removeKey:ifAbsent:!public! !
!ODBPersistentDictionary categoriesFor: #superAt:put:!public! !
!ODBPersistentDictionary categoriesFor: #transaction!public! !

!ODBPersistentDictionary class methodsFor!

odbDeserialize: deserializer 
	| size dict key |
	size := deserializer stream getPositiveInteger.
	dict := self new: size.
	deserializer register: dict.
	size timesRepeat: 
			[key := deserializer odbNextObject.
			dict superAt: key put: deserializer odbNextObject].
	^dict! !
!ODBPersistentDictionary class categoriesFor: #odbDeserialize:!public! !

ODBError guid: (GUID fromString: '{8162eded-0fb8-11d4-b091-000000000000}')!
ODBError comment: ''!
!ODBError categoriesForClass!No category! !
ODBCannotLock guid: (GUID fromString: '{8162edf0-0fb8-11d4-b091-000000000000}')!
ODBCannotLock comment: ''!
!ODBCannotLock categoriesForClass!No category! !
ODBLockingConflict guid: (GUID fromString: '{8162edf1-0fb8-11d4-b091-000000000000}')!
ODBLockingConflict comment: ''!
!ODBLockingConflict categoriesForClass!No category! !
ODBUnexpectedNetworkError guid: (GUID fromString: '{8162edef-0fb8-11d4-b091-000000000000}')!
ODBUnexpectedNetworkError comment: ''!
!ODBUnexpectedNetworkError categoriesForClass!No category! !
ODBCannotLockKey guid: (GUID fromString: '{8162edf2-0fb8-11d4-b091-000000000000}')!
ODBCannotLockKey comment: ''!
!ODBCannotLockKey categoriesForClass!No category! !
ODBCannotLockObject guid: (GUID fromString: '{8162edf3-0fb8-11d4-b091-000000000000}')!
ODBCannotLockObject comment: ''!
!ODBCannotLockObject categoriesForClass!No category! !
ODBLockNotification guid: (GUID fromString: '{8162edf4-0fb8-11d4-b091-000000000000}')!
ODBLockNotification comment: ''!
!ODBLockNotification categoriesForClass!No category! !
!ODBLockNotification methodsFor!

defaultAction
	"Display a notifier and then continue."

	^OmniBase confirmationMessage: 'File can not be locked. Do you want to try again?'! !
!ODBLockNotification categoriesFor: #defaultAction!public! !

ODBStreamLockedNotification guid: (GUID fromString: '{8162edf5-0fb8-11d4-b091-000000000000}')!
ODBStreamLockedNotification comment: ''!
!ODBStreamLockedNotification categoriesForClass!No category! !
!ODBStreamLockedNotification methodsFor!

defaultAction
	^OmniBase 
		confirmationMessage: 'File can not be read because it is locked. Do you want to try again ?'! !
!ODBStreamLockedNotification categoriesFor: #defaultAction!public! !

ODBGarbageCollectorRequest guid: (GUID fromString: '{8162edfb-0fb8-11d4-b091-000000000000}')!
ODBGarbageCollectorRequest comment: ''!
!ODBGarbageCollectorRequest categoriesForClass!No category! !
!ODBGarbageCollectorRequest methodsFor!

bytesStored
	objectHolder container indexFile at: objectHolder objectID index
		put: objectHolder contents! !
!ODBGarbageCollectorRequest categoriesFor: #bytesStored!public! !

ODBAssociationChanged guid: (GUID fromString: '{8162edfc-0fb8-11d4-b091-000000000000}')!
ODBAssociationChanged comment: ''!
!ODBAssociationChanged categoriesForClass!No category! !
!ODBAssociationChanged methodsFor!

commit
	transactionObject dataBaseObject at: key put: newValue!

key: aString 
	key := aString!

loadFromStream: aStream 
	objectID := ODBObjectID new loadFromStream: aStream.
	key := aStream getString asByteArray.
	oldValue := ODBValueHolder new loadFromStream: aStream.
	newValue := ODBValueHolder new loadFromStream: aStream!

newValue: aValue 
	newValue := aValue!

oldValue: aValue 
	oldValue := aValue!

rollback
	self transactionObject dataBaseObject at: key put: oldValue!

storeOnStream: aStream 
	objectID storeOnStream: aStream.
	aStream putString: key.
	oldValue storeOnStream: aStream.
	newValue storeOnStream: aStream! !
!ODBAssociationChanged categoriesFor: #commit!public! !
!ODBAssociationChanged categoriesFor: #key:!public! !
!ODBAssociationChanged categoriesFor: #loadFromStream:!public! !
!ODBAssociationChanged categoriesFor: #newValue:!public! !
!ODBAssociationChanged categoriesFor: #oldValue:!public! !
!ODBAssociationChanged categoriesFor: #rollback!public! !
!ODBAssociationChanged categoriesFor: #storeOnStream:!public! !

!ODBAssociationChanged class methodsFor!

changeClassID
        "Answer unique class ID used for storing changes into 
        transaction file or <nil> if change does not need to be stored."

    ^2! !
!ODBAssociationChanged class categoriesFor: #changeClassID!public! !

ODBDictionaryChanged guid: (GUID fromString: '{8162edfd-0fb8-11d4-b091-000000000000}')!
ODBDictionaryChanged comment: '"Nonpersistent change. "'!
!ODBDictionaryChanged categoriesForClass!No category! !
!ODBDictionaryChanged methodsFor!

committed
	"Changes have been committed, update transaction object."

	dataBaseObject isNil ifFalse: [transactionObject setDataBaseObject: dataBaseObject].
	transactionObject objectCommitted!

dataBaseObject: anObject 
	dataBaseObject := anObject! !
!ODBDictionaryChanged categoriesFor: #committed!public! !
!ODBDictionaryChanged categoriesFor: #dataBaseObject:!public! !

ODBNewObjectVersion guid: (GUID fromString: '{8162edfe-0fb8-11d4-b091-000000000000}')!
ODBNewObjectVersion comment: ''!
!ODBNewObjectVersion categoriesForClass!No category! !
!ODBNewObjectVersion methodsFor!

commit
	"Commit changes."

	newVersion store!

committed
	"Changes have been committed, update transaction object."

	transactionObject
		setObjectHolder: newVersion;
		objectCommitted!

loadFromStream: aStream 
	objectID := ODBObjectID new loadFromStream: aStream.
	oldVersion := ODBObjectHolder new loadFromStream: aStream.
	newVersion := ODBObjectHolder new loadFromStream: aStream!

newVersion
	^newVersion!

newVersion: anObjectHolder 
	newVersion := anObjectHolder!

oldVersion
	^oldVersion!

oldVersion: anObjectHolder 
	oldVersion := anObjectHolder!

rollback
	"Rollback changes."

	| currentHolder |
	(currentHolder := transaction objectHolderAt: objectID) isNil ifTrue: [^self].
	currentHolder versionNumber > newVersion versionNumber 
		ifFalse: 
			[currentHolder
				contents: oldVersion contents;
				store]!

storeOnStream: aStream 
	objectID storeOnStream: aStream.
	oldVersion storeOnStream: aStream.
	newVersion storeOnStream: aStream! !
!ODBNewObjectVersion categoriesFor: #commit!public! !
!ODBNewObjectVersion categoriesFor: #committed!public! !
!ODBNewObjectVersion categoriesFor: #loadFromStream:!public! !
!ODBNewObjectVersion categoriesFor: #newVersion!public! !
!ODBNewObjectVersion categoriesFor: #newVersion:!public! !
!ODBNewObjectVersion categoriesFor: #oldVersion!public! !
!ODBNewObjectVersion categoriesFor: #oldVersion:!public! !
!ODBNewObjectVersion categoriesFor: #rollback!public! !
!ODBNewObjectVersion categoriesFor: #storeOnStream:!public! !

!ODBNewObjectVersion class methodsFor!

changeClassID
        "Answer unique class ID used for storing changes into 
        transaction file or <nil> if change does not need to be stored."

    ^1! !
!ODBNewObjectVersion class categoriesFor: #changeClassID!public! !

ODBSizeChanged guid: (GUID fromString: '{8162edff-0fb8-11d4-b091-000000000000}')!
ODBSizeChanged comment: ''!
!ODBSizeChanged categoriesForClass!No category! !
!ODBSizeChanged methodsFor!

commit
	transaction := transactionObject transaction.
	transactionObject dataBaseObject iterator 
		updateSizeAt: transaction versionNumber
		oldHolders: transaction oldHolders
		deltaSize: deltaSize!

deltaSize: anInteger 
	deltaSize := anInteger!

loadFromStream: aStream 
	objectID := ODBObjectID new loadFromStream: aStream.
	deltaSize := aStream getInteger!

rollback
	self transactionObject dataBaseObject iterator 
		updateSizeAt: transaction versionNumber
		oldHolders: transaction oldHolders
		deltaSize: 0 - deltaSize!

storeOnStream: aStream 
	objectID storeOnStream: aStream.
	aStream putInteger: deltaSize! !
!ODBSizeChanged categoriesFor: #commit!public! !
!ODBSizeChanged categoriesFor: #deltaSize:!public! !
!ODBSizeChanged categoriesFor: #loadFromStream:!public! !
!ODBSizeChanged categoriesFor: #rollback!public! !
!ODBSizeChanged categoriesFor: #storeOnStream:!public! !

!ODBSizeChanged class methodsFor!

changeClassID
        "Answer unique class ID used for storing changes into 
        transaction file or <nil> if change does not need to be stored."

    ^4! !
!ODBSizeChanged class categoriesFor: #changeClassID!public! !

ODBForeignClient guid: (GUID fromString: '{8162ee00-0fb8-11d4-b091-000000000000}')!
ODBForeignClient comment: '"Used to monitor clients connected to database. Foreign clients can not modify
objects in the database. "'!
!ODBForeignClient categoriesForClass!No category! !
!ODBForeignClient methodsFor!

isForeign

    ^true!

openOn: aClientManager clientID: clientID

    | fName |
    id := clientID.
    clientManager := aClientManager.
    fName := clientManager clientFileName: id.
    [ clientFile := ODBClientFile new openReadOnlyOn: fName ]
        on: Error do: [ :er | ^nil ].
    clientManager addOpenedClient: self
!

remove
	"Remove client from database. 
	Close files only, because client may be still active."

	clientFile isNil 
		ifFalse: 
			[self transactions copy do: [:each | each abort].
			clientFile close.
			clientFile := nil.
			clientManager removeForeignActiveClient: id]!

transactions
        "Answer all R/W transactions started by receiver."

    self updateTransactions.
    ^transactions!

updateTransactions
	"Private - Update transactions from transaction files."

	! !
!ODBForeignClient categoriesFor: #isForeign!public! !
!ODBForeignClient categoriesFor: #openOn:clientID:!public! !
!ODBForeignClient categoriesFor: #remove!public! !
!ODBForeignClient categoriesFor: #transactions!public! !
!ODBForeignClient categoriesFor: #updateTransactions!private! !

ODBLocalClient guid: (GUID fromString: '{8162ee01-0fb8-11d4-b091-000000000000}')!
ODBLocalClient comment: '"Local clients are active. Only local clients can change objects in the database. "'!
!ODBLocalClient categoriesForClass!No category! !
!ODBLocalClient methodsFor!

createOn: aClientManager clientID: anInteger 
	| userName machineName |
	
	[userName := SessionManager current userName asLowercase.
	machineName := SessionManager current computerName asLowercase] 
			on: Error
			do: [:ex | ].
	(userName isNil or: [userName isEmpty]) ifTrue: [userName := 'unknown-user'].
	(machineName isNil or: [machineName isEmpty]) ifTrue: [machineName := 'unknown-host'].
	id := anInteger.
	clientManager := aClientManager.
	clientFile := ODBClientFile createOn: (clientManager clientFileName: id).
	clientManager addOpenedClient: self.
	self description: 'OmniBase 2.1 [clientID=' , id printString , '] ' , userName , '@' 
				, machineName!

currentGlobalLockedTransaction

    transactions do: [:each | each transactionFile == nil ifFalse: [ ^each ]].
    ^nil!

description: aString
        "Set client description string."

    clientFile clientDescription: aString!

globalLock
        "Set global write lock to all objects in the database.
        No other client will be able to write to the database
        until the lock is released by globalUnlock. Answer <true>
        if sucessfull or <false> if failed. Global lock will fail if
        any client (including local client) allready has read-write
        transactions running. When database is globaly locked only one
        read-write transaction can run at that time."

    | count |
    count := transactionFiles size.
    freeTransactionFile isNil ifFalse: [ count := count - 1 ].
    (hasGlobalLock not and: [ count == 0 ])
        ifTrue: [ hasGlobalLock := clientManager setGlobalLockFor: id ].
    ^hasGlobalLock!

globalUnlock
        "Release global lock on database.
        Answer <true> if successfull."

    hasGlobalLock ifFalse: [ ^false ].
    transactions do: [:each | each isGlobalLocked ifTrue: [ ^false ]].
    clientManager globalUnlock.
    hasGlobalLock := false.
    ^true
!

initialize
	"Private - Initialize receiver."

	transactions := OmniBase newIdentitySet: 20.
	transactionFiles := OrderedCollection new.
	hasGlobalLock := false!

isGlobalLocked

    ^hasGlobalLock!

isLocal

    ^true!

makeRootObject
	"Private - Initialize root object."

	(self newTransaction)
		root: OmniBase newPersistentDictionary;
		commit!

newLongReadOnlyTransaction
	"Answer new long read-only transaction for receiver."

	^(ODBLongReadOnlyTransaction new)
		setClient: self environment: clientManager environment;
		start!

newReadOnlyTransaction
	"Answer new read-only transaction for receiver."

	^(ODBReadOnlyTransaction new)
		setClient: self environment: clientManager environment;
		start!

newTransaction
	"Answer new transaction for receiver."

	| transaction |
	hasGlobalLock 
		ifFalse: [transaction := ODBLocalTransaction new]
		ifTrue: [transaction := ODBGlobalLockedTransaction new].
	^transaction
		setClient: self environment: clientManager environment;
		start!

newTransactionFileFor: aTransaction 
	| transactionFile transactionID count |
	count := transactionFiles size.
	freeTransactionFile isNil ifFalse: [count := count - 1].
	hasGlobalLock 
		ifTrue: 
			[aTransaction isGlobalLocked ifFalse: [^nil].
			count == 0 ifFalse: [^nil]]
		ifFalse: 
			[aTransaction isGlobalLocked ifTrue: [^nil].
			count == 0 ifTrue: [(clientManager requestLocksFor: id) ifFalse: [^nil]]].
	freeTransactionFile isNil 
		ifFalse: 
			[transactionFile := freeTransactionFile.
			freeTransactionFile := nil.
			transactions add: aTransaction.
			^transactionFile].
	transactionID := id bitShift: 8.
	256 timesRepeat: 
			[(transactionFiles includes: transactionID) 
				ifFalse: 
					[transactionFiles add: transactionID.
					clientFile transactionIDs: transactionFiles.
					[transactionFile := ODBTransactionFile createOn: (self trnFileName: transactionID)] 
						on: Error
						do: [:er | transactionFile := nil].
					transactionFile isNil 
						ifTrue: [transactionFiles remove: transactionID]
						ifFalse: 
							[transactions add: aTransaction.
							^transactionFile transactionID: transactionID]].
			transactionID := transactionID + 1].
	OmniBase signalError: 'Maximum number of active read-write transactions reached'!

newTransactionFrom: aTransaction
        "Answer new transaction for receiver from aTransaction. 
        Objects accessible in aTransaction will also be accessible 
        in new transaction."

    | transaction |
    transaction := aTransaction class new.
    ^transaction setClient: self environment: clientManager environment; startFrom: aTransaction!

newTransactionInVersion: aVersionDescriptor
        "Answer new transaction with given version descriptor."

    | transaction |
    hasGlobalLock
        ifFalse: [ transaction := ODBLocalTransaction new ]
        ifTrue: [ transaction := ODBGlobalLockedTransaction new ].
    ^transaction setClient: self environment: clientManager environment; startInVersion: aVersionDescriptor!

remove

    freeTransactionFile isNil ifFalse: [ freeTransactionFile remove ].
    freeTransactionFile := true. "do not cache transaction files anymore"
    ^super remove!

transactionRemove: aTransaction
        "Private - Remove aTransaction."

    | trnFile trID |
    (trnFile := aTransaction transactionFile) == nil ifTrue: [ ^self ].
    freeTransactionFile == nil
        ifTrue: [ freeTransactionFile := trnFile reinitialize ]
        ifFalse: [
            trID := trnFile transactionID.
            trnFile remove
                ifTrue: [
                    transactionFiles remove: trID ifAbsent: [].
                    clientFile transactionIDs: transactionFiles.
                ]
        ].
    transactionFiles size > 1 ifFalse: [ clientManager removeLocksFor: id ].
    transactions remove: aTransaction ifAbsent: []! !
!ODBLocalClient categoriesFor: #createOn:clientID:!public! !
!ODBLocalClient categoriesFor: #currentGlobalLockedTransaction!private! !
!ODBLocalClient categoriesFor: #description:!public! !
!ODBLocalClient categoriesFor: #globalLock!public! !
!ODBLocalClient categoriesFor: #globalUnlock!public! !
!ODBLocalClient categoriesFor: #initialize!private! !
!ODBLocalClient categoriesFor: #isGlobalLocked!public! !
!ODBLocalClient categoriesFor: #isLocal!public! !
!ODBLocalClient categoriesFor: #makeRootObject!private! !
!ODBLocalClient categoriesFor: #newLongReadOnlyTransaction!public! !
!ODBLocalClient categoriesFor: #newReadOnlyTransaction!public! !
!ODBLocalClient categoriesFor: #newTransaction!public! !
!ODBLocalClient categoriesFor: #newTransactionFileFor:!private! !
!ODBLocalClient categoriesFor: #newTransactionFrom:!public! !
!ODBLocalClient categoriesFor: #newTransactionInVersion:!public! !
!ODBLocalClient categoriesFor: #remove!public! !
!ODBLocalClient categoriesFor: #transactionRemove:!private! !

ODBTerminatedClient guid: (GUID fromString: '{8162ee02-0fb8-11d4-b091-000000000000}')!
ODBTerminatedClient comment: '"Terminated clients are clients that were left connected when the database
was not closed (they still hold locks and their transactions might have been
interrupted while being committed). "'!
!ODBTerminatedClient categoriesForClass!No category! !
!ODBTerminatedClient methodsFor!

isTerminated

    ^true!

loadTransactions

    | transactionFile transaction |
    clientFile transactionIDs do: [:fileID |
        [ transactionFile := ODBTransactionFile openOn: (self trnFileName: fileID) ]
            on: Error do: [:er | transactionFile := nil ].
        transactionFile notNil
            ifTrue: [
                transaction := ODBTerminatedTransaction new.
                transaction transactionFile: transactionFile.
                self transactionAdd: transaction.
                transaction start
            ]
    ]!

openOn: aClientManager clientID: clientID

    | fName |
    id := clientID.
    clientManager := aClientManager.
    fName := clientManager clientFileName: id.
    [ clientFile := ODBClientFile new openOn: fName ]
        on: Error do: [:er | ^nil ].
    clientManager addOpenedClient: self.
    self loadTransactions! !
!ODBTerminatedClient categoriesFor: #isTerminated!public! !
!ODBTerminatedClient categoriesFor: #loadTransactions!private! !
!ODBTerminatedClient categoriesFor: #openOn:clientID:!public! !

ODBDBBTreeIndexDictionary guid: (GUID fromString: '{8162ee03-0fb8-11d4-b091-000000000000}')!
ODBDBBTreeIndexDictionary comment: ''!
!ODBDBBTreeIndexDictionary categoriesForClass!No category! !
!ODBDBBTreeIndexDictionary methodsFor!

associationsDo: aBlock 
	| association |
	iterator critical: [association := iterator getFirst].
	[association isNil] whileFalse: 
			[aBlock value: (Association key: association key
						value: (ODBValueHolder createOn: association value)).
			iterator critical: 
					[association := iterator
								goTo: association key;
								getNext]]!

at: aKey ifAbsent: aBlock 
	| association |
	^(association := iterator goToAndGetCurrentAt: ((ByteArray new: iterator keyLength) 
						replaceFrom: 1
						to: (aKey size min: iterator keyLength)
						with: aKey
						startingAt: 1)) 
		isNil ifTrue: [aBlock value] ifFalse: [ODBValueHolder createOn: association value]!

at: aKey put: value 
	iterator goTo: aKey put: value contents!

close
	iterator notNil 
		ifTrue: 
			[objectHolder container closeObjectFile: objectHolder fileID.
			iterator := nil]!

createBackupCopyIn: newContainer versionDescriptor: versionDescriptor oldHolders: oldHolders versionNumber: versionNumber 
	"Create a backup copy of receiver in a newContainer."

	| newIterator assoc size realSize valueHolder |
	newContainer onNewObjectFileDo: 
			[:index :fileName | 
			objectHolder fileID: index.
			newIterator := (ODBGcBTreeIterator new)
						keyLength: iterator keyLength;
						valueLength: ODBValueHolder sizeInBytes;
						createOn: fileName.
			size := iterator getSizeAt: versionDescriptor oldHolders: oldHolders.
			realSize := 0.
			
			[assoc := iterator getFirst.
			[assoc isNil] whileFalse: 
					[valueHolder := ODBValueHolder createOn: assoc value.
					[versionDescriptor versionOK: valueHolder versionNumber] 
						whileFalse: [valueHolder loadPreviousVersionFrom: oldHolders].
					valueHolder isRemoved 
						ifFalse: 
							[realSize := realSize + 1.
							valueHolder versionNumber: versionNumber.
							newIterator goTo: assoc key put: valueHolder contents].
					assoc := iterator getNext].
			"realSize = size ifFalse: [OmniBase warningMessage: 'Cached dictionary size does not match real size']."
			newIterator putSizeHolder: ((ODBSizeHolder new)
						dictionarySize: realSize;
						previousVersionPosition: 0;
						versionNumber: versionNumber;
						yourself).
			newIterator close] 
					ifCurtailed: [newIterator remove].
			iterator := nil]!

createOn: anObjectHolder keySize: anInteger 
	objectHolder := anObjectHolder.
	objectHolder container onNewObjectFileDo: 
			[:index :fileName | 
			objectHolder fileID: index.
			iterator := (ODBBTreeIterator new)
						keyLength: anInteger;
						valueLength: ODBValueHolder sizeInBytes;
						createOn: fileName]!

garbageCollectOn: anODBGarbageCollector 
	anODBGarbageCollector reorganizeIndexSets ifTrue: [self reorganizeBTree]!

iterator
	^iterator!

makeTransactionObject: aTransaction 
	iterator version = aTransaction versionDescriptor 
		ifFalse: 
			[iterator
				clearSearchCache;
				version: aTransaction versionDescriptor].
	^(ODBBTreeIndexDictionary new)
		setObjectHolder: objectHolder
			dataBaseObject: self
			transaction: aTransaction;
		keySize: iterator keyLength!

openOn: anObjectHolder 
	objectHolder := anObjectHolder.
	iterator := objectHolder container openObjectFile: objectHolder fileID
				ifAbsentPut: [:fileName | ODBBTreeIterator openOn: fileName]!

remove
	iterator isNil 
		ifFalse: 
			[objectHolder container removeObjectFile: objectHolder fileID.
			iterator := nil]!

reorganizeBTree
	"Reorganize B-Tree dictionary."

	| newIterator assoc oldIndex |
	objectHolder container onNewObjectFileDo: 
			[:index :fileName | 
			oldIndex := objectHolder fileID.
			objectHolder fileID: index.
			newIterator := (ODBGcBTreeIterator new)
						keyLength: iterator keyLength;
						valueLength: ODBValueHolder sizeInBytes;
						createOn: fileName.
			
			[newIterator putSizeHolder: iterator getSizeHolder.
			assoc := iterator getFirst.
			[assoc isNil] whileFalse: 
					[(ODBValueHolder createOn: assoc value) isRemoved 
						ifFalse: [newIterator goTo: assoc key put: assoc value].
					assoc := iterator getNext].
			newIterator close] 
					ifCurtailed: [newIterator remove].
			objectHolder store.
			iterator := nil].
	objectHolder container removeObjectFile: oldIndex!

valuesDo: aBlock 
	| association |
	iterator critical: [association := iterator getFirst].
	[association isNil] whileFalse: 
			[aBlock value: (ODBValueHolder createOn: association value).
			iterator critical: 
					[association := iterator
								goTo: association key;
								getNext]]! !
!ODBDBBTreeIndexDictionary categoriesFor: #associationsDo:!public! !
!ODBDBBTreeIndexDictionary categoriesFor: #at:ifAbsent:!public! !
!ODBDBBTreeIndexDictionary categoriesFor: #at:put:!public! !
!ODBDBBTreeIndexDictionary categoriesFor: #close!public! !
!ODBDBBTreeIndexDictionary categoriesFor: #createBackupCopyIn:versionDescriptor:oldHolders:versionNumber:!public! !
!ODBDBBTreeIndexDictionary categoriesFor: #createOn:keySize:!public! !
!ODBDBBTreeIndexDictionary categoriesFor: #garbageCollectOn:!public! !
!ODBDBBTreeIndexDictionary categoriesFor: #iterator!public! !
!ODBDBBTreeIndexDictionary categoriesFor: #makeTransactionObject:!public! !
!ODBDBBTreeIndexDictionary categoriesFor: #openOn:!public! !
!ODBDBBTreeIndexDictionary categoriesFor: #remove!public! !
!ODBDBBTreeIndexDictionary categoriesFor: #reorganizeBTree!public! !
!ODBDBBTreeIndexDictionary categoriesFor: #valuesDo:!public! !

!ODBDBBTreeIndexDictionary class methodsFor!

classID
	"Answer database object classID."

	^67!

hasExternalFiles
	"Answer <true> if the object stores its contents into external files."

	^true! !
!ODBDBBTreeIndexDictionary class categoriesFor: #classID!public! !
!ODBDBBTreeIndexDictionary class categoriesFor: #hasExternalFiles!accessing!public! !

ODBRootObjectDBHolder guid: (GUID fromString: '{8162ee04-0fb8-11d4-b091-000000000000}')!
ODBRootObjectDBHolder comment: ''!
!ODBRootObjectDBHolder categoriesForClass!No category! !
!ODBRootObjectDBHolder methodsFor!

makeTransactionObject: aTransaction 
	^ODBRootObjectHolder new 
		setObjectHolder: objectHolder
		dataBaseObject: objectHolder rootObjectID
		transaction: aTransaction!

referencesDo: aBlock 
	aBlock value: objectHolder rootObjectID! !
!ODBRootObjectDBHolder categoriesFor: #makeTransactionObject:!public! !
!ODBRootObjectDBHolder categoriesFor: #referencesDo:!public! !

!ODBRootObjectDBHolder class methodsFor!

classID
	"Answer database object classID."

	^1! !
!ODBRootObjectDBHolder class categoriesFor: #classID!public! !

ODBSerializedDBObjectWithoutReferences guid: (GUID fromString: '{8162ee05-0fb8-11d4-b091-000000000000}')!
ODBSerializedDBObjectWithoutReferences comment: ''!
!ODBSerializedDBObjectWithoutReferences categoriesForClass!No category! !
!ODBSerializedDBObjectWithoutReferences methodsFor!

garbageCollectOn: anODBGarbageCollector 
	objectHolder container 
		addByteStorageRequest: (ODBGarbageCollectorRequest new objectHolder: objectHolder
				bytes: objectHolder loadBytes)!

makeTransactionObject: aTransaction

	| mStream bytes |
	bytes := objectHolder loadBytes.
	mStream := ODBMemoryReadStream new createOn: bytes.
	^ODBSerializedObject new
		setObjectHolder: objectHolder
		dataBaseObject: (ODBDeserializer new
						deserializeFrom: mStream
						referenceManager: nil
						transaction: aTransaction)
		transaction: aTransaction! !
!ODBSerializedDBObjectWithoutReferences categoriesFor: #garbageCollectOn:!public! !
!ODBSerializedDBObjectWithoutReferences categoriesFor: #makeTransactionObject:!public! !

!ODBSerializedDBObjectWithoutReferences class methodsFor!

classID
	"Answer database object classID."

	^3!

hasBytes
	"Answer <true> if the object stores its contents as bytes."

	^true! !
!ODBSerializedDBObjectWithoutReferences class categoriesFor: #classID!public! !
!ODBSerializedDBObjectWithoutReferences class categoriesFor: #hasBytes!accessing!public! !

ODBDBBTreeDictionary guid: (GUID fromString: '{8162ee06-0fb8-11d4-b091-000000000000}')!
ODBDBBTreeDictionary comment: ''!
!ODBDBBTreeDictionary categoriesForClass!No category! !
!ODBDBBTreeDictionary methodsFor!

garbageCollectOn: anODBGarbageCollector 
	anODBGarbageCollector reorganizeDictionaries ifTrue: [self reorganizeBTree]!

makeTransactionObject: aTransaction 
	iterator version = aTransaction versionDescriptor 
		ifFalse: 
			[iterator
				clearSearchCache;
				version: aTransaction versionDescriptor].
	^(ODBBTreeDictionary new)
		setObjectHolder: objectHolder
			dataBaseObject: self
			transaction: aTransaction;
		keySize: iterator keyLength!

referencesDo: aBlock 
	| valueHolder association |
	iterator critical: [association := iterator getFirst].
	[association isNil] whileFalse: 
			[(valueHolder := ODBValueHolder createOn: association value) isRemoved 
				ifFalse: [aBlock value: valueHolder objectID].
			iterator critical: 
					[association := iterator
								goTo: association key;
								getNext]]!

unlockKey: aKey with: lockID 
	| result |
	iterator critical: 
			[result := iterator
						goTo: aKey;
						unlockCurrentWith: lockID].
	^result! !
!ODBDBBTreeDictionary categoriesFor: #garbageCollectOn:!public! !
!ODBDBBTreeDictionary categoriesFor: #makeTransactionObject:!public! !
!ODBDBBTreeDictionary categoriesFor: #referencesDo:!public! !
!ODBDBBTreeDictionary categoriesFor: #unlockKey:with:!public! !

!ODBDBBTreeDictionary class methodsFor!

classID
	"Answer database object classID."

	^65! !
!ODBDBBTreeDictionary class categoriesFor: #classID!public! !

ODBDBBTreeIntegerIndexDictionary guid: (GUID fromString: '{db775ef8-2475-481d-9b26-ce21f5164daf}')!
ODBDBBTreeIntegerIndexDictionary comment: ''!
!ODBDBBTreeIntegerIndexDictionary categoriesForClass!No category! !
!ODBDBBTreeIntegerIndexDictionary methodsFor!

makeTransactionObject: aTransaction 
	iterator version = aTransaction versionDescriptor 
		ifFalse: 
			[iterator
				clearSearchCache;
				version: aTransaction versionDescriptor].
	^(ODBBTreeIntegerIndexDictionary new)
		setObjectHolder: objectHolder
			dataBaseObject: self
			transaction: aTransaction;
		keySize: iterator keyLength! !
!ODBDBBTreeIntegerIndexDictionary categoriesFor: #makeTransactionObject:!public! !

!ODBDBBTreeIntegerIndexDictionary class methodsFor!

classID
	"Answer database object classID."

	^70! !
!ODBDBBTreeIntegerIndexDictionary class categoriesFor: #classID!public! !

ODBDBBTreeMultiValueDictionary guid: (GUID fromString: '{cccaa6eb-a9e7-4c14-b43b-53237f14b6a9}')!
ODBDBBTreeMultiValueDictionary comment: ''!
!ODBDBBTreeMultiValueDictionary categoriesForClass!No category! !
!ODBDBBTreeMultiValueDictionary methodsFor!

makeTransactionObject: aTransaction 
	iterator version = aTransaction versionDescriptor 
		ifFalse: 
			[iterator
				clearSearchCache;
				version: aTransaction versionDescriptor].
	^(ODBBTreeMultiValueDictionary new)
		setObjectHolder: objectHolder
			dataBaseObject: self
			transaction: aTransaction;
		keySize: iterator keyLength!

referencesDo: aBlock 
	| valueHolder association |
	iterator critical: [association := iterator getFirst].
	[association isNil] whileFalse: 
			[(valueHolder := ODBValueHolder createOn: association value) isRemoved 
				ifFalse: [aBlock value: valueHolder objectID].
			iterator critical: 
					[association := iterator
								goTo: association key;
								getNext]]! !
!ODBDBBTreeMultiValueDictionary categoriesFor: #makeTransactionObject:!public! !
!ODBDBBTreeMultiValueDictionary categoriesFor: #referencesDo:!public! !

!ODBDBBTreeMultiValueDictionary class methodsFor!

classID
	"Answer database object classID."

	^69! !
!ODBDBBTreeMultiValueDictionary class categoriesFor: #classID!public! !

ODBDBBTreeIdentityDictionary guid: (GUID fromString: '{d6774546-5a08-49c3-b577-14b960a34efa}')!
ODBDBBTreeIdentityDictionary comment: ''!
!ODBDBBTreeIdentityDictionary categoriesForClass!No category! !
!ODBDBBTreeIdentityDictionary methodsFor!

makeTransactionObject: aTransaction 
	iterator version = aTransaction versionDescriptor 
		ifFalse: 
			[iterator
				clearSearchCache;
				version: aTransaction versionDescriptor].
	^(ODBBTreeIdentityDictionary new)
		setObjectHolder: objectHolder
			dataBaseObject: self
			transaction: aTransaction;
		keySize: iterator keyLength!

referencesDo: aBlock 
	"A key is a persistent object and a value is a persistent object.
	Therefore we need to iterate over both."

	| valueHolder association |
	iterator critical: [association := iterator getFirst].
	[association isNil] whileFalse: 
			[(valueHolder := ODBValueHolder createOn: association value) isRemoved 
				ifFalse: 
					[aBlock value: (ODBObjectID new fromBytes: association key at: 1).
					aBlock value: valueHolder objectID].
			iterator critical: 
					[association := iterator
								goTo: association key;
								getNext]]! !
!ODBDBBTreeIdentityDictionary categoriesFor: #makeTransactionObject:!public! !
!ODBDBBTreeIdentityDictionary categoriesFor: #referencesDo:!public! !

!ODBDBBTreeIdentityDictionary class methodsFor!

classID
	"Answer database object classID."

	^68! !
!ODBDBBTreeIdentityDictionary class categoriesFor: #classID!public! !

ODBSerializedDBObject256References guid: (GUID fromString: '{8162ee07-0fb8-11d4-b091-000000000000}')!
ODBSerializedDBObject256References comment: ''!
!ODBSerializedDBObject256References categoriesForClass!No category! !
!ODBSerializedDBObject256References methodsFor!

makeTransactionObject: aTransaction

	| mStream bytes referenceManager |
	bytes := objectHolder loadBytes.
	mStream := ODBMemoryReadStream new
				createOn: bytes;
				position: ((referenceManager := ODBReferenceManager new) createMax256From: bytes).
	referenceManager transaction: aTransaction.
	^ODBSerializedObject new
		setObjectHolder: objectHolder
		dataBaseObject: (ODBDeserializer new
						deserializeFrom: mStream
						referenceManager: referenceManager
						transaction: aTransaction)
		transaction: aTransaction!

referencesDo: aBlock 
	(ODBReferenceManager new)
		createMax256From: objectHolder loadBytes;
		referencesDo: aBlock! !
!ODBSerializedDBObject256References categoriesFor: #makeTransactionObject:!public! !
!ODBSerializedDBObject256References categoriesFor: #referencesDo:!public!public/transaction processing! !

!ODBSerializedDBObject256References class methodsFor!

classID
	"Answer database object classID."

	^5! !
!ODBSerializedDBObject256References class categoriesFor: #classID!public! !

ODBSerializedDBObject65536References guid: (GUID fromString: '{8162ee08-0fb8-11d4-b091-000000000000}')!
ODBSerializedDBObject65536References comment: ''!
!ODBSerializedDBObject65536References categoriesForClass!No category! !
!ODBSerializedDBObject65536References methodsFor!

makeTransactionObject: aTransaction 
	| mStream bytes referenceManager |
	bytes := objectHolder loadBytes.
	mStream := (ODBMemoryReadStream new)
				createOn: bytes;
				position: ((referenceManager := ODBReferenceManager new) createMax65536From: bytes).
	referenceManager transaction: aTransaction.
	^ODBSerializedObject new 
		setObjectHolder: objectHolder
		dataBaseObject: (ODBDeserializer new 
				deserializeFrom: mStream
				referenceManager: referenceManager
				transaction: aTransaction)
		transaction: aTransaction!

referencesDo: aBlock 
	(ODBReferenceManager new)
		createMax65536From: objectHolder loadBytes;
		referencesDo: aBlock! !
!ODBSerializedDBObject65536References categoriesFor: #makeTransactionObject:!public! !
!ODBSerializedDBObject65536References categoriesFor: #referencesDo:!public!public/transaction processing! !

!ODBSerializedDBObject65536References class methodsFor!

classID
	"Answer database object classID."

	^6! !
!ODBSerializedDBObject65536References class categoriesFor: #classID!public! !

ODB1CharacterString guid: (GUID fromString: '{8162ee09-0fb8-11d4-b091-000000000000}')!
ODB1CharacterString comment: ''!
!ODB1CharacterString categoriesForClass!No category! !
!ODB1CharacterString class methodsFor!

odbDeserialize: deserializer 
	| str |
	(str := String new: 1) at: 1 put: deserializer stream getChar.
	^deserializer register: str! !
!ODB1CharacterString class categoriesFor: #odbDeserialize:!accessing!public! !

ODB8ByteFloat guid: (GUID fromString: '{8162ee0a-0fb8-11d4-b091-000000000000}')!
ODB8ByteFloat comment: ''!
!ODB8ByteFloat categoriesForClass!No category! !
!ODB8ByteFloat class methodsFor!

odbDeserialize: deserializer 
	| float |
	float := Float basicNew: 8.
	deserializer stream getBytesFor: (ExternalAddress fromInteger: float yourAddress) len: 8.
	^float! !
!ODB8ByteFloat class categoriesFor: #odbDeserialize:!accessing!public! !

ODBCopyValue guid: (GUID fromString: '{8162ee0b-0fb8-11d4-b091-000000000000}')!
ODBCopyValue comment: ''!
!ODBCopyValue categoriesForClass!No category! !
!ODBCopyValue methodsFor!

odbDeserialize: deserializer

	^value copy!

value: anObject

    value := anObject.! !
!ODBCopyValue categoriesFor: #odbDeserialize:!private! !
!ODBCopyValue categoriesFor: #value:!private! !

!ODBCopyValue class methodsFor!

value: anObject 
	^self new value: anObject! !
!ODBCopyValue class categoriesFor: #value:!accessing!public! !

ODBDoubleByteCharacter guid: (GUID fromString: '{8162ee0c-0fb8-11d4-b091-000000000000}')!
ODBDoubleByteCharacter comment: ''!
!ODBDoubleByteCharacter categoriesForClass!No category! !
!ODBDoubleByteCharacter class methodsFor!

odbDeserialize: deserializer 
	^Character value: deserializer stream getWord! !
!ODBDoubleByteCharacter class categoriesFor: #odbDeserialize:!public!serialization! !

ODBEmptyString guid: (GUID fromString: '{8162ee0d-0fb8-11d4-b091-000000000000}')!
ODBEmptyString comment: ''!
!ODBEmptyString categoriesForClass!No category! !
!ODBEmptyString class methodsFor!

odbDeserialize: deserializer 
	^deserializer register: String new! !
!ODBEmptyString class categoriesFor: #odbDeserialize:!accessing!public! !

ODBExistingObject guid: (GUID fromString: '{8162ee0e-0fb8-11d4-b091-000000000000}')!
ODBExistingObject comment: ''!
!ODBExistingObject categoriesForClass!No category! !
!ODBExistingObject class methodsFor!

odbDeserialize: deserializer 
	^deserializer existingObject! !
!ODBExistingObject class categoriesFor: #odbDeserialize:!accessing!public! !

ODBExternalReference guid: (GUID fromString: '{8162edd9-0fb8-11d4-b091-000000000000}')!
ODBExternalReference comment: ''!
!ODBExternalReference categoriesForClass!No category! !
!ODBExternalReference class methodsFor!

odbDeserialize: deserializer 
	^deserializer loadReference! !
!ODBExternalReference class categoriesFor: #odbDeserialize:!public! !

ODBFloatAs100Integer guid: (GUID fromString: '{8162ee0f-0fb8-11d4-b091-000000000000}')!
ODBFloatAs100Integer comment: ''!
!ODBFloatAs100Integer categoriesForClass!No category! !
!ODBFloatAs100Integer class methodsFor!

odbDeserialize: deserializer 
	^deserializer stream getInteger / 100.0! !
!ODBFloatAs100Integer class categoriesFor: #odbDeserialize:!accessing!public! !

ODBFloatAsInteger guid: (GUID fromString: '{8162ee10-0fb8-11d4-b091-000000000000}')!
ODBFloatAsInteger comment: '"""ODBFloatAsIntegerNo comment available "" "'!
!ODBFloatAsInteger categoriesForClass!No category! !
!ODBFloatAsInteger class methodsFor!

odbDeserialize: deserializer 
	^deserializer stream getInteger asFloat! !
!ODBFloatAsInteger class categoriesFor: #odbDeserialize:!accessing!public! !

ODBLargeNegativeInteger guid: (GUID fromString: '{8162ee11-0fb8-11d4-b091-000000000000}')!
ODBLargeNegativeInteger comment: ''!
!ODBLargeNegativeInteger categoriesForClass!No category! !
!ODBLargeNegativeInteger class methodsFor!

odbDeserialize: deserializer 
	^0 - deserializer stream getPositiveInteger! !
!ODBLargeNegativeInteger class categoriesFor: #odbDeserialize:!public! !

ODBLargePositiveInteger guid: (GUID fromString: '{8162ee12-0fb8-11d4-b091-000000000000}')!
ODBLargePositiveInteger comment: ''!
!ODBLargePositiveInteger categoriesForClass!No category! !
!ODBLargePositiveInteger class methodsFor!

odbDeserialize: deserializer 
	^deserializer stream getPositiveInteger! !
!ODBLargePositiveInteger class categoriesFor: #odbDeserialize:!public! !

ODBnCharacterString guid: (GUID fromString: '{8162ee13-0fb8-11d4-b091-000000000000}')!
ODBnCharacterString comment: ''!
!ODBnCharacterString categoriesForClass!No category! !
!ODBnCharacterString methodsFor!

n: anInteger

    n := anInteger.!

odbDeserialize: deserializer

    | str |
    deserializer stream getBytesFor: (str := String new: n) len: n.
    ^deserializer register: str! !
!ODBnCharacterString categoriesFor: #n:!private! !
!ODBnCharacterString categoriesFor: #odbDeserialize:!accessing!public! !

!ODBnCharacterString class methodsFor!

length: anInteger 
	^self new n: anInteger! !
!ODBnCharacterString class categoriesFor: #length:!creation!public! !

ODBNewObject guid: (GUID fromString: '{8162ee14-0fb8-11d4-b091-000000000000}')!
ODBNewObject comment: ''!
!ODBNewObject categoriesForClass!No category! !
!ODBNewObject class methodsFor!

odbDeserialize: deserializer 
	^deserializer newObjectOldClass! !
!ODBNewObject class categoriesFor: #odbDeserialize:!accessing!public! !

ODBNewObjectNewClass guid: (GUID fromString: '{8162ee15-0fb8-11d4-b091-000000000000}')!
ODBNewObjectNewClass comment: ''!
!ODBNewObjectNewClass categoriesForClass!No category! !
!ODBNewObjectNewClass class methodsFor!

odbDeserialize: deserializer 
	^deserializer newObjectNewClass! !
!ODBNewObjectNewClass class categoriesFor: #odbDeserialize:!accessing!public! !

ODBBTreePage guid: (GUID fromString: '{8162edf6-0fb8-11d4-b091-000000000000}')!
ODBBTreePage comment: ''!
!ODBBTreePage categoriesForClass!No category! !
!ODBBTreePage methodsFor!

association
	| offset |
	offset := itemLength * indexOnPage + 2.
	^Association key: (contents copyFrom: offset to: offset + keyLength - 1)
		value: (contents copyFrom: offset + keyLength to: offset + keyLength + valueLength - 1)!

bytesPerPage
	"Private - Answer number of bytes needed to load a page."

	"(keyLen + valueLen + next + lockID) * pageSize + next0 + count"

	^(itemLength + 4) * self pageSize + 5!

createOnFile: anODBTreeIterator position: position keyLength: keyLen valueLength: valueLen 
	"Private - Create receiver on file."

	iterator := anODBTreeIterator.
	keyLength := keyLen.
	valueLength := valueLen.
	itemLength := keyLength + valueLength + 2.	"key+value+lockID"
	pagePosition := position.
	indexOnPage := 0.
	contents := ByteArray new: self bytesPerPage!

currentAssociation
	"Answer current association or <nil> 
        if upper pages have to be loaded."

	^(indexOnPage == self numberOfItems or: [indexOnPage < 0]) ifFalse: [self association]!

insertKey: key value: value lockID: lockID 
	"Insert key, value and lockID at current position on page. Answer 
        array with page split information or <nil> if no page split occured."

	| n startOffset |
	startOffset := itemLength * indexOnPage + 1.
	n := self numberOfItems.
	n == self pageSize 
		ifTrue: 
			["split page"
			contents at: 1 put: ((contents at: 1) bitOr: 128).	"this page must be leaf"
			n := ByteArray new: itemLength.
			n
				replaceFrom: 1
					to: keyLength
					with: key
					startingAt: 1;
				replaceFrom: keyLength + 1
					to: keyLength + valueLength
					with: value
					startingAt: 1;
				odbShortAt: itemLength - 1 put: lockID.
			^self 
				splitPageWith: n
				leftNext: 0
				rightNext: 0].
	n > indexOnPage 
		ifTrue: 
			[self bytesAtOffset: startOffset + itemLength
				put: (self bytesAtOffset: startOffset count: (n - indexOnPage) * itemLength)].
	self
		bytesAtOffset: startOffset put: key;
		bytesAtOffset: startOffset + keyLength put: value;
		uShortAtOffset: startOffset + keyLength + valueLength put: lockID.
	self numberOfItems: n + 1.
	^nil!

insertPageSplit: pageSplit 
	"Insert page split at current position on page. Answer array 
        with page split information if another page split is needed 
        or <nil> if current page is not full."

	| n itemOffset nextOffset pageSize item leftNext rightNext |
	leftNext := (pageSplit at: 1) position.
	item := pageSplit at: 2.
	rightNext := (pageSplit at: 3) position.
	pageSize := self pageSize.
	n := self numberOfItems.
	n == pageSize 
		ifTrue: 
			[^self 
				splitPageWith: item
				leftNext: leftNext
				rightNext: rightNext].
	itemOffset := itemLength * indexOnPage + 1.
	nextOffset := itemLength * pageSize + (indexOnPage * 4) + 1.
	n > indexOnPage 
		ifTrue: 
			[self bytesAtOffset: itemOffset + itemLength
				put: (self bytesAtOffset: itemOffset count: (n - indexOnPage) * itemLength).
			self bytesAtOffset: nextOffset + 8
				put: (self bytesAtOffset: nextOffset + 4 count: (n - indexOnPage) * 4)].
	self
		bytesAtOffset: itemOffset put: item;
		uLongAtOffset: nextOffset put: leftNext;
		uLongAtOffset: nextOffset + 4 put: rightNext;
		numberOfItems: n + 1.
	^nil!

insertSplitItem: item leftNext: leftNext rightNext: rightNext 
	"Private - Insert aByteArray at indexOnPage. Answer item 
	at pageSize // 2 that is going to be moved up the tree."

	| itemOffset nextOffset n |
	n := self pageSize // 2.
	itemOffset := itemLength * indexOnPage + 1.
	nextOffset := itemLength * self pageSize + (indexOnPage * 4) + 1.
	self bytesAtOffset: itemOffset + itemLength
		put: (self bytesAtOffset: itemOffset count: (n - indexOnPage) * itemLength).
	self bytesAtOffset: nextOffset + 8
		put: (self bytesAtOffset: nextOffset + 4 count: (n - indexOnPage) * 4).
	self
		bytesAtOffset: itemOffset put: item;
		uLongAtOffset: nextOffset put: leftNext;
		uLongAtOffset: nextOffset + 4 put: rightNext!

leftNext
	"Answer leftmost pointer to next page. And 
        set indexOnPage to zero."

	indexOnPage := 0.
	^self nextAt: 0!

loadFromFile: anODBTreeIterator position: position keyLength: keyLen valueLength: valueLen 
	"Private - Load receiver from stream."

	iterator := anODBTreeIterator.
	keyLength := keyLen.
	valueLength := valueLen.
	itemLength := keyLen + valueLen + 2.	"key+value+lockID"
	pagePosition := position.
	contents := ByteArray new: self bytesPerPage.
	iterator stream atPosition: position getBytesFor: contents!

lockID
	^self uShortAtOffset: (indexOnPage + 1) * itemLength - 1!

lockID: anInteger 
	self uShortAtOffset: (indexOnPage + 1) * itemLength - 1 put: anInteger!

nextAt: index 
	(contents at: 1) > 127 ifTrue: [^0].
	^self uLongAtOffset: itemLength * self pageSize + 1 + (index * 4)!

nextAt: index put: position 
	self uLongAtOffset: itemLength * self pageSize + 1 + (index * 4) put: position!

nextPage
	"Increase indexOnPage and answer pointer to nextPage. 
        Answer <nil> if indexOnPage equals numberOfItems."

	indexOnPage < self numberOfItems ifFalse: [^nil].
	indexOnPage := indexOnPage + 1.
	^self nextAt: indexOnPage!

numberOfItems
	^(contents at: 1) bitAnd: 127!

numberOfItems: anInteger 
	"Private - Set number of items on page."

	(contents at: 1) < 128 
		ifTrue: [contents at: 1 put: anInteger]
		ifFalse: [contents at: 1 put: anInteger + 128]!

pageSize
	"Private - Answer maximum number of keys on page."

	"change methods #positionToCachedKey: and #positionToKey: too!!"

	^32!

position
	^pagePosition!

position: anInteger 
	pagePosition := anInteger!

positionToCachedKey: aKey 
	"Search for aKey on page. Answer <true> if found. 
        If not answer position of child page where aKey could 
        be located. Answer 0 if this is a leaf page. Answer 
        <nil> if position can not be determined (i.e. indexOnPage 
        is at the start or at the end of this page)."

	| n min max result flag |
	min := 0.
	max := n := (flag := contents at: 1) bitAnd: 127.
	indexOnPage := max bitShift: -1.
	n == 0 ifTrue: [^nil].
	
	[(result := iterator 
				isKey: contents
				at: indexOnPage * itemLength + 1
				lessThan: aKey) isNil 
		ifTrue: [^true].
	result ifTrue: [min := indexOnPage + 1] ifFalse: [max := indexOnPage].
	min == max] 
			whileFalse: [indexOnPage := min + max bitShift: -1].
	(indexOnPage := min) == n ifTrue: [^nil].
	indexOnPage == 0 ifTrue: [^nil].
	"Optimization for: ^self nextAt: indexOnPage"
	flag > 127 ifTrue: [^0].
	"PAGE SIZE=32 (bitShift: 5)"
	^self uLongAtOffset: (itemLength bitShift: 5) + 1 + (indexOnPage bitShift: 2)!

positionToKey: aKey 
	"Search for aKey on page. Answer <true> if found. 
        If not answer position of child page where aKey could 
        be located. Answer 0 if this is a leaf page."

	| min max result flag |
	min := 0.
	max := (flag := contents at: 1) bitAnd: 127.
	indexOnPage := max bitShift: -1.
	max = 0 ifTrue: [^0].
	
	[(result := iterator 
				isKey: contents
				at: indexOnPage * itemLength + 1
				lessThan: aKey) == nil 
		ifTrue: [^true].
	result ifTrue: [min := indexOnPage + 1] ifFalse: [max := indexOnPage].
	min = max] 
			whileFalse: [indexOnPage := min + max bitShift: -1].
	indexOnPage := min.
	"Optimization for: ^self nextAt: indexOnPage"
	flag > 127 ifTrue: [^0].
	"PAGE SIZE=32 (bitShift: 5)"
	^self uLongAtOffset: (itemLength bitShift: 5) + 1 + (indexOnPage bitShift: 2)!

previousAssociation
	"Answer previous association or <nil> 
        if upper pages have to be loaded."

	| offset |
	(indexOnPage := indexOnPage - 1) < 0 ifTrue: [^nil].
	offset := indexOnPage * itemLength + 2.
	^Association key: (contents copyFrom: offset to: offset + keyLength - 1)
		value: (contents copyFrom: offset + keyLength to: offset + keyLength + valueLength - 1)!

previousPage
	"Answer pointer to nextPage or <nil> if none."

	indexOnPage < 0 ifTrue: [^nil].
	^self nextAt: indexOnPage!

rightNext
	"Answer rightmost pointer to next page and set 
        indexOnPage to numberOfItems."

	indexOnPage := self numberOfItems.
	^self nextAt: indexOnPage!

shiftPageLeft: count 
	"Private - Shift page to left count times. 
        Used for splitting pages."

	| nextOffset |
	indexOnPage := indexOnPage - count.
	nextOffset := self pageSize * itemLength + 1.
	self bytesAtOffset: 1 put: (contents copyFrom: itemLength * count + 2 to: nextOffset).
	self bytesAtOffset: nextOffset
		put: (contents copyFrom: count * 4 + nextOffset + 1 to: contents size)!

splitPageWith: item leftNext: leftNext rightNext: rightNext 
	"Private - Split current page into left and right page. 
	Answer array with leftPage, middle item and rightPage."

	| newPage halfPage newItem itemOffset |
	newPage := self class 
				createOnFile: iterator
				position: 0
				keyLength: keyLength
				valueLength: valueLength.
	halfPage := self pageSize // 2.
	(contents at: 1) < 127 
		ifTrue: [contents at: 1 put: halfPage]
		ifFalse: [contents at: 1 put: halfPage + 128].
	indexOnPage == halfPage 
		ifTrue: 
			[self nextAt: halfPage put: leftNext.
			newPage contents: contents shallowCopy.
			self
				shiftPageLeft: halfPage;
				nextAt: 0 put: rightNext.
			^Array 
				with: newPage
				with: item
				with: self].
	itemOffset := halfPage * itemLength + 2.
	indexOnPage < halfPage 
		ifTrue: 
			[newPage
				contents: contents shallowCopy;
				shiftPageLeft: halfPage.
			self 
				insertSplitItem: item
				leftNext: leftNext
				rightNext: rightNext.
			newItem := contents copyFrom: itemOffset to: itemOffset + itemLength - 1.
			^Array 
				with: self
				with: newItem
				with: newPage].
	newPage contents: contents shallowCopy.
	newItem := contents copyFrom: itemOffset to: itemOffset + itemLength - 1.
	self
		shiftPageLeft: halfPage + 1;
		insertSplitItem: item
			leftNext: leftNext
			rightNext: rightNext.
	^Array 
		with: newPage
		with: newItem
		with: self!

store
	"Store page on iterator stream."

	iterator stream 
		atPosition: pagePosition
		putBytesFrom: contents
		len: ((contents at: 1) > 127 
				ifFalse: [(itemLength + 4) * self pageSize + 5]
				ifTrue: [itemLength * self pageSize + 1])!

storeItem
	"Store page on iterator stream."

	| offset |
	offset := itemLength * indexOnPage + 1 + keyLength.
	iterator stream atPosition: pagePosition + offset
		putBytesFrom: (contents copyFrom: 1 + offset to: offset + valueLength + 2)!

storeItemLocked
	"Store item at indexOnPage to iterator stream."

	| offset |
	offset := itemLength * indexOnPage + 1 + keyLength.
	iterator waitForLockAt: pagePosition + offset length: valueLength + 2.
	iterator stream atPosition: pagePosition + offset
		putBytesFrom: (contents copyFrom: 1 + offset to: offset + valueLength + 2).
	iterator unlockAt: pagePosition + offset length: valueLength + 2!

storeLocked
	"Store page on iterator stream."

	| length |
	(contents at: 1) > 127 
		ifFalse: [length := (itemLength + 4) * self pageSize + 5]
		ifTrue: [length := itemLength * self pageSize + 1].
	iterator waitForLockAt: pagePosition length: length.
	iterator stream 
		atPosition: pagePosition
		putBytesFrom: contents
		len: length.
	iterator unlockAt: pagePosition length: length!

value: aByteArray 
	self bytesAtOffset: itemLength * indexOnPage + 1 + keyLength put: aByteArray! !
!ODBBTreePage categoriesFor: #association!public! !
!ODBBTreePage categoriesFor: #bytesPerPage!private! !
!ODBBTreePage categoriesFor: #createOnFile:position:keyLength:valueLength:!private! !
!ODBBTreePage categoriesFor: #currentAssociation!public! !
!ODBBTreePage categoriesFor: #insertKey:value:lockID:!public! !
!ODBBTreePage categoriesFor: #insertPageSplit:!public! !
!ODBBTreePage categoriesFor: #insertSplitItem:leftNext:rightNext:!private! !
!ODBBTreePage categoriesFor: #leftNext!public! !
!ODBBTreePage categoriesFor: #loadFromFile:position:keyLength:valueLength:!private! !
!ODBBTreePage categoriesFor: #lockID!public! !
!ODBBTreePage categoriesFor: #lockID:!public! !
!ODBBTreePage categoriesFor: #nextAt:!private! !
!ODBBTreePage categoriesFor: #nextAt:put:!private! !
!ODBBTreePage categoriesFor: #nextPage!public! !
!ODBBTreePage categoriesFor: #numberOfItems!private! !
!ODBBTreePage categoriesFor: #numberOfItems:!private! !
!ODBBTreePage categoriesFor: #pageSize!private! !
!ODBBTreePage categoriesFor: #position!accessing!public! !
!ODBBTreePage categoriesFor: #position:!accessing!public! !
!ODBBTreePage categoriesFor: #positionToCachedKey:!public! !
!ODBBTreePage categoriesFor: #positionToKey:!public! !
!ODBBTreePage categoriesFor: #previousAssociation!public! !
!ODBBTreePage categoriesFor: #previousPage!public! !
!ODBBTreePage categoriesFor: #rightNext!public! !
!ODBBTreePage categoriesFor: #shiftPageLeft:!private! !
!ODBBTreePage categoriesFor: #splitPageWith:leftNext:rightNext:!private! !
!ODBBTreePage categoriesFor: #store!public! !
!ODBBTreePage categoriesFor: #storeItem!public! !
!ODBBTreePage categoriesFor: #storeItemLocked!public! !
!ODBBTreePage categoriesFor: #storeLocked!public! !
!ODBBTreePage categoriesFor: #value:!public! !

!ODBBTreePage class methodsFor!

createOnFile: anODBTreeIterator position: position keyLength: keyLen valueLength: valueLen 
	^self basicNew 
		createOnFile: anODBTreeIterator
		position: position
		keyLength: keyLen
		valueLength: valueLen!

loadFromFile: anODBTreeIterator position: position keyLength: keyLen valueLength: valueLen 
	^self basicNew 
		loadFromFile: anODBTreeIterator
		position: position
		keyLength: keyLen
		valueLength: valueLen! !
!ODBBTreePage class categoriesFor: #createOnFile:position:keyLength:valueLength:!instance creation!public! !
!ODBBTreePage class categoriesFor: #loadFromFile:position:keyLength:valueLength:!instance creation!public! !

ODBObjectHolder guid: (GUID fromString: '{8162edf7-0fb8-11d4-b091-000000000000}')!
ODBObjectHolder comment: ''!
!ODBObjectHolder categoriesForClass!No category! !
!ODBObjectHolder methodsFor!

container
	^container!

createOn: aByteArray 
	"Private - Create and initialize receiver."

	contents := aByteArray.
	oldVersion := false!

fileID
	^self uLongAtOffset: 9!

fileID: anInteger 
	self uLongAtOffset: 9 put: anInteger!

getObject
	"Answer database object."

	^(ODBDatabaseObject persistentClassAt: self persistentClassID) new openOn: self!

initialize
	"Private - Initialize receiver."

	oldVersion := false!

isRemoved
	1 to: contents size do: [:i | (contents at: i) == 0 ifFalse: [^false]].
	^true!

loadBytes
	"Load bytes at object position and answer a byte array."

	^container loadBytesAt: self objectPosition length: self objectLength!

loadPreviousVersionFrom: oldHolders 
	"Load previous version holder from oldHolders."

	oldVersion := true.
	oldHolders loadAt: self previousVersionPosition for: contents!

loadPreviousVersionOrNilFrom: oldHolders 
	"Load previous version holder from oldHolders.
	Answer <false> in case of doing online backup for a version in the past and the new version is not yet valid, else answer <true>."

	^oldHolders loadAtOrNil: self previousVersionPosition for: contents!

lockStartPosition
	"Answer start position at which object ID locks are set."

	^2147483648	"at 2 GB"!

lockWith: lockID 
	| indexFile |
	oldVersion ifTrue: [^false].
	indexFile := container indexFile.
	
	[(indexFile
		lock: objectID index;
		at: objectID index) = contents 
		ifTrue: [^indexFile stream lockAt: self lockStartPosition + objectID index length: 1].
	oldVersion := true] 
			ensure: [container indexFile unlock: objectID index].
	^false!

makeNewVersion: oldHolders

        | position |
        self versionNumber = 0 "new object"
                ifTrue: [ position := 0]
                ifFalse: [ position := oldHolders store: contents ].
        ^(self class createOn: contents shallowCopy)
                setContainer: container objectID: objectID;
                previousVersionPosition: position!

objectID
	^objectID!

objectLength
	^((contents at: 10) bitOr: ((contents at: 11) bitShift: 8)) 
		bitOr: ((contents at: 12) bitShift: 16)!

objectLength: anInteger 
	contents
		at: 10 put: (anInteger bitAnd: 255);
		at: 11 put: ((anInteger bitShift: -8) bitAnd: 255);
		at: 12 put: (anInteger bitShift: -16)!

objectPosition
	^self uLongAtOffset: 12!

objectPosition: anInteger 
	self uLongAtOffset: 12 put: anInteger!

oldVersion
	^oldVersion!

persistentClassID
	^contents at: 9!

persistentClassID: anInteger 
	contents at: 9 put: anInteger!

previousVersionPosition
	^self uLongAtOffset: 4!

previousVersionPosition: anInteger 
	self uLongAtOffset: 4 put: anInteger!

printOn: aStream 
	super printOn: aStream.
	aStream nextPut: $(.
	objectID printOn: aStream.
	aStream nextPutAll: ';version='.
	self versionNumber printOn: aStream.
	aStream nextPutAll: ';pid='.
	self persistentClassID printOn: aStream.
	aStream nextPut: $)!

rootObjectID
	"Answer root object ID for root object holder."

	^ODBObjectID new fromBytes: contents at: 10!

rootObjectID: anObjectID 
	"Set root object ID for root object holder."

	anObjectID putBytesTo: contents at: 10!

setContainer: aContainer 
	container := aContainer!

setContainer: aContainer objectID: anObjectID 
	objectID := anObjectID.
	container := aContainer!

store
	"Store contents to indexFile."

	| indexFile index |
	
	[(indexFile := container indexFile)
		lock: (index := objectID index);
		at: index put: contents] 
			ensure: [indexFile unlock: index]!

storeBytes: aByteArray 
	self objectLength: aByteArray size.
	container 
		addByteStorageRequest: (ODBByteStorageRequest new objectHolder: self bytes: aByteArray)!

unlockWith: lockID 
	oldVersion ifTrue: [^false].
	^container indexFile stream unlockAt: self lockStartPosition + objectID index length: 1!

versionNumber
	^self uLongAtOffset: 0!

versionNumber: anInteger 
	self uLongAtOffset: 0 put: anInteger! !
!ODBObjectHolder categoriesFor: #container!accessing!public! !
!ODBObjectHolder categoriesFor: #createOn:!initializing!private! !
!ODBObjectHolder categoriesFor: #fileID!accessing!public! !
!ODBObjectHolder categoriesFor: #fileID:!accessing!public! !
!ODBObjectHolder categoriesFor: #getObject!public! !
!ODBObjectHolder categoriesFor: #initialize!initializing!private! !
!ODBObjectHolder categoriesFor: #isRemoved!public! !
!ODBObjectHolder categoriesFor: #loadBytes!public! !
!ODBObjectHolder categoriesFor: #loadPreviousVersionFrom:!public! !
!ODBObjectHolder categoriesFor: #loadPreviousVersionOrNilFrom:!public! !
!ODBObjectHolder categoriesFor: #lockStartPosition!initializing!private! !
!ODBObjectHolder categoriesFor: #lockWith:!public! !
!ODBObjectHolder categoriesFor: #makeNewVersion:!public! !
!ODBObjectHolder categoriesFor: #objectID!accessing!public! !
!ODBObjectHolder categoriesFor: #objectLength!accessing!private! !
!ODBObjectHolder categoriesFor: #objectLength:!accessing!private! !
!ODBObjectHolder categoriesFor: #objectPosition!accessing!private! !
!ODBObjectHolder categoriesFor: #objectPosition:!accessing!private! !
!ODBObjectHolder categoriesFor: #oldVersion!accessing!public! !
!ODBObjectHolder categoriesFor: #persistentClassID!accessing!private! !
!ODBObjectHolder categoriesFor: #persistentClassID:!accessing!private! !
!ODBObjectHolder categoriesFor: #previousVersionPosition!accessing!private! !
!ODBObjectHolder categoriesFor: #previousVersionPosition:!accessing!private! !
!ODBObjectHolder categoriesFor: #printOn:!public! !
!ODBObjectHolder categoriesFor: #rootObjectID!accessing!public! !
!ODBObjectHolder categoriesFor: #rootObjectID:!accessing!public! !
!ODBObjectHolder categoriesFor: #setContainer:!initializing!private! !
!ODBObjectHolder categoriesFor: #setContainer:objectID:!initializing!private! !
!ODBObjectHolder categoriesFor: #store!public! !
!ODBObjectHolder categoriesFor: #storeBytes:!public! !
!ODBObjectHolder categoriesFor: #unlockWith:!public! !
!ODBObjectHolder categoriesFor: #versionNumber!accessing!public! !
!ODBObjectHolder categoriesFor: #versionNumber:!accessing!public! !

!ODBObjectHolder class methodsFor!

createOn: aByteArray 
	^self basicNew createOn: aByteArray!

new
	^super new initialize!

sizeInBytes
	"Private - Answer number of bytes required to store receiver into a file."

	^16! !
!ODBObjectHolder class categoriesFor: #createOn:!private! !
!ODBObjectHolder class categoriesFor: #new!private! !
!ODBObjectHolder class categoriesFor: #sizeInBytes!private! !

ODBSizeHolder guid: (GUID fromString: '{8162edf8-0fb8-11d4-b091-000000000000}')!
ODBSizeHolder comment: ''!
!ODBSizeHolder categoriesForClass!No category! !
!ODBSizeHolder methodsFor!

dictionarySize

    ^self uLongAtOffset: 0!

dictionarySize: anInteger

    self uLongAtOffset: 0 put: anInteger!

loadPreviousVersionFrom: oldHolders 
	oldHolders loadAt: self previousVersionPosition for: contents!

makeNewVersion: oldHolders
        "Store receiver to oldHolders and make new instance 
        of receiver class that points to receiver in oldHolders."

    | newVersion position |
    self versionNumber = 0
        ifTrue: [ position := 0 ]
        ifFalse: [ position := oldHolders store: contents ].
    newVersion := self class new.
    ^newVersion previousVersionPosition: position!

previousVersionPosition

    ^self uLongAtOffset: 8!

previousVersionPosition: anInteger

    self uLongAtOffset: 8 put: anInteger!

versionNumber
	^self uLongAtOffset: 4!

versionNumber: anInteger

    self uLongAtOffset: 4 put: anInteger! !
!ODBSizeHolder categoriesFor: #dictionarySize!accessing!public! !
!ODBSizeHolder categoriesFor: #dictionarySize:!accessing!public! !
!ODBSizeHolder categoriesFor: #loadPreviousVersionFrom:!public! !
!ODBSizeHolder categoriesFor: #makeNewVersion:!public! !
!ODBSizeHolder categoriesFor: #previousVersionPosition!accessing!private! !
!ODBSizeHolder categoriesFor: #previousVersionPosition:!accessing!private! !
!ODBSizeHolder categoriesFor: #versionNumber!accessing!public! !
!ODBSizeHolder categoriesFor: #versionNumber:!accessing!public! !

!ODBSizeHolder class methodsFor!

sizeInBytes
	^12! !
!ODBSizeHolder class categoriesFor: #sizeInBytes!private! !

ODBValueHolder guid: (GUID fromString: '{8162edf9-0fb8-11d4-b091-000000000000}')!
ODBValueHolder comment: ''!
!ODBValueHolder categoriesForClass!No category! !
!ODBValueHolder methodsFor!

getObjectIn: aTransaction 
	objectSet == true ifTrue: [^object].
	^aTransaction objectAt: self objectID!

isRemoved
	"Answer <true> if the key has been removed 
	(there is no value associated with it)."

	removed isNil ifFalse: [^removed].
	^removed := (self uLongAtOffset: 8) = 0!

loadPreviousVersionFrom: oldHolders 
	| previousVersionPosition |
	previousVersionPosition := self previousVersionPosition.
	previousVersionPosition = 0 
		ifTrue: [contents := ByteArray new: contents size]
		ifFalse: [oldHolders loadAt: previousVersionPosition for: contents]!

makeNewVersion: oldHolders 
	"Store receiver to oldHolders and make new instance
	of receiver class that points to receiver in oldKeys."

	| position |
	self versionNumber = 0 
		ifTrue: [position := 0]
		ifFalse: [position := oldHolders store: contents].
	^(self class new)
		previousVersionPosition: position;
		updateOn: self!

makeRemoved
	"Mark valueHolder as removed."

	contents at: 8 put: ((contents at: 8) bitOr: 128)!

object
	^object!

object: anObject 
	object := anObject.
	removed := false.
	objectSet := true!

objectID
	^ODBObjectID new fromBytes: contents at: 9!

objectID: anObjectID 
	anObjectID putBytesTo: contents at: 9!

previousVersionPosition
	^self uLongAtOffset: 4!

previousVersionPosition: anInteger 
	self uLongAtOffset: 4 put: anInteger!

removed
	"Key has been removed."

	object := nil.
	removed := true!

updateOn: aValueHolder 
	"Private - Make new version from aValueHolder."

	(removed := aValueHolder isRemoved) 
		ifFalse: 
			[object := aValueHolder object.
			objectSet := true]!

versionNumber
	^self uLongAtOffset: 0!

versionNumber: anInteger 
	self uLongAtOffset: 0 put: anInteger! !
!ODBValueHolder categoriesFor: #getObjectIn:!public!public/unclassified! !
!ODBValueHolder categoriesFor: #isRemoved!public! !
!ODBValueHolder categoriesFor: #loadPreviousVersionFrom:!public! !
!ODBValueHolder categoriesFor: #makeNewVersion:!public! !
!ODBValueHolder categoriesFor: #makeRemoved!public! !
!ODBValueHolder categoriesFor: #object!accessing!public! !
!ODBValueHolder categoriesFor: #object:!public!public/accessing! !
!ODBValueHolder categoriesFor: #objectID!accessing!public! !
!ODBValueHolder categoriesFor: #objectID:!accessing!public! !
!ODBValueHolder categoriesFor: #previousVersionPosition!accessing!private! !
!ODBValueHolder categoriesFor: #previousVersionPosition:!accessing!private! !
!ODBValueHolder categoriesFor: #removed!public! !
!ODBValueHolder categoriesFor: #updateOn:!private/unclassified!public! !
!ODBValueHolder categoriesFor: #versionNumber!accessing!public! !
!ODBValueHolder categoriesFor: #versionNumber:!accessing!public! !

!ODBValueHolder class methodsFor!

sizeInBytes
	"versionNumber          4 bytes
	previousVersionPosition 4 bytes
	objectID                4 bytes
	-------------------------------
	total                   12 bytes"

	^12! !
!ODBValueHolder class categoriesFor: #sizeInBytes!private! !

ODBGcBTreePage guid: (GUID fromString: '{8162edfa-0fb8-11d4-b091-000000000000}')!
ODBGcBTreePage comment: ''!
!ODBGcBTreePage categoriesForClass!No category! !
!ODBGcBTreePage methodsFor!

splitPageWith: item leftNext: leftNext rightNext: rightNext 
	"Private - Split current page into left and right page. 
	Answer array with leftPage, middle item and rightPage. 
	Left page in split will be full up to space for one item. 
	Split item will be put on the right page."

	| pageSize newPage newItem itemOffset leafBit |
	pageSize := self pageSize - 1.
	indexOnPage > pageSize 
		ifFalse: 
			[^super 
				splitPageWith: item
				leftNext: leftNext
				rightNext: rightNext].
	newPage := self class 
				createOnFile: iterator
				position: 0
				keyLength: keyLength
				valueLength: valueLength.
	leafBit := (contents at: 1) bitAnd: 128.
	"make left page"
	contents at: 1 put: pageSize + leafBit.
	itemOffset := pageSize * itemLength + 2.
	newItem := contents copyFrom: itemOffset to: itemOffset + itemLength - 1.
	newPage contents: contents shallowCopy.
	"make right page"
	contents at: 1 put: 1 + leafBit.
	self
		nextAt: 0 put: leftNext;
		nextAt: 1 put: rightNext.
	contents 
		replaceFrom: 2
		to: itemLength + 1
		with: item
		startingAt: 1.
	^Array 
		with: newPage
		with: newItem
		with: self! !
!ODBGcBTreePage categoriesFor: #splitPageWith:leftNext:rightNext:!public! !

ODBBTreeIterator guid: (GUID fromString: '{8162ee16-0fb8-11d4-b091-000000000000}')!
ODBBTreeIterator comment: ''!
!ODBBTreeIterator categoriesForClass!No category! !
!ODBBTreeIterator methodsFor!

at: aString ifAbsent: aBlock 
	| key association |
	key := ByteArray new: keyLength.
	key 
		replaceFrom: 1
		to: (aString size min: keyLength)
		with: aString
		startingAt: 1.
	association := self goToAndGetCurrentAt: key.
	self clearSearchCache.
	association isNil ifTrue: [^aBlock value].
	^association value odbLongAt: 1!

at: aString put: anInteger 
	| key value |
	key := ByteArray new: keyLength.
	key 
		replaceFrom: 1
		to: (aString size min: keyLength)
		with: aString
		startingAt: 1.
	value := ByteArray new: 4.
	value odbLongAt: 1 put: anInteger.
	self
		goTo: key put: value;
		clearSearchCache.
	^anInteger!

basicPut: aValue 
	self lockTree.
	
	[self loadCurrentKey.
	currentKeyExists 
		ifTrue: 
			[(self lastPage)
				value: aValue;
				storeItemLocked]
		ifFalse: [self insertValue: aValue lockID: 0]] 
			ensure: [self unlockTree]!

clearSearchCache
	"Clear search path."

	mutex critical: [self clearSearchPath]!

clearSearchPath
	"Private - Clear search path."

	[searchPathHeight == 0] whileFalse: 
			[searchPath at: searchPathHeight put: nil.
			searchPathHeight := searchPathHeight - 1]!

created
	"Private - File has just been created."

	| buffer bufSize |
	bufSize := ODBSizeHolder sizeInBytes + 4.
	buffer := ByteArray new: bufSize.
	buffer
		odbShortAt: bufSize - 3 put: keyLength;
		odbShortAt: bufSize - 1 put: valueLength.
	stream putBytesFrom: buffer len: bufSize.
	(self pageClass 
		createOnFile: self
		position: rootPagePosition
		keyLength: keyLength
		valueLength: valueLength) store.
	currentKey := ByteArray new: keyLength.
	nextKey := ByteArray new: keyLength.
	stream flush!

createOn: aString 
	"Create a database file."

	stream := ODBFileStream 
				createOn: aString
				createMode: ODBFileStream createModeCreateNew
				accessMode: ODBFileStream accessModeReadWrite
				shareMode: ODBFileStream shareModeShareAll
				cacheMode: ODBFileStream cacheModeAtomicWrite.
	^self writeHeader!

critical: aBlock 
	^mutex critical: aBlock!

descriptionString
	^'BTree File
OmniBase 1.0, David Gorisek (c) 1998

'!

getCurrent
	"Answer association at current key or <nil> if none."

	self updateCurrentKey.
	currentKeyExists ifFalse: [^nil].
	^self lastPage association!

getFirst
	nextKey := ByteArray new: keyLength.
	self updateCurrentKey.
	currentKeyExists ifTrue: [^self lastPage association].
	^self searchNextAssociation!

getLast
	nextKey := (ByteArray new: keyLength) atAllPut: 255.
	self updateCurrentKey.
	currentKeyExists ifTrue: [^self lastPage association].
	^self searchPreviousAssociation!

getNext
	"Move to the next key and answer association."

	self updateCurrentKey.
	^self searchNextAssociation!

getPrevious
	"Move to the previous key and answer association."

	self updateCurrentKey.
	^self searchPreviousAssociation!

getSizeAt: versionDescriptor oldHolders: oldHolders 
	| sizeHolder |
	sizeHolder := (ODBSizeHolder new)
				loadFromStream: stream at: self headerLength;
				yourself.
	[versionDescriptor versionAtStartOK: sizeHolder versionNumber] 
		whileFalse: [sizeHolder loadPreviousVersionFrom: oldHolders].
	^sizeHolder dictionarySize!

getSizeHolder
	^(ODBSizeHolder new)
		loadFromStream: stream at: self headerLength;
		yourself!

goTo: aByteArray 
	aByteArray isNil ifFalse: [nextKey := aByteArray]!

goTo: aByteArray put: aValue 
	mutex critical: 
			[aByteArray isNil ifFalse: [nextKey := aByteArray].
			self basicPut: aValue].
	^aValue!

goToAndGetCurrentAt: aKey 
	| result |
	mutex critical: 
			[result := self
						goTo: aKey;
						getCurrent].
	^result!

initialize
	"Private - Initialize receiver."

	searchPath := Array new: 20.
	searchPathHeight := 0.
	rootPagePosition := self headerLength + ODBSizeHolder sizeInBytes + 4.
	mutex := Semaphore forMutualExclusion!

insertValue: aValue lockID: lockID 
	"Private - Insert aValue and lockID at currentKey. 
        Precondition: search path to currentKey is loaded and 
        currentKey does not exists."

	| page pageSplit |
	page := searchPath at: searchPathHeight.
	pageSplit := page 
				insertKey: currentKey
				value: aValue
				lockID: lockID.
	pageSplit isNil 
		ifTrue: 
			[currentKeyExists := true.
			page storeLocked.
			^self].
	
	[(pageSplit at: 1)
		position: stream setToEnd;
		store.
	(pageSplit at: 3)
		position: stream position;
		store.
	searchPath at: searchPathHeight put: nil.
	searchPathHeight := searchPathHeight - 1.
	searchPathHeight == 0 
		ifFalse: [page := searchPath at: searchPathHeight]
		ifTrue: 
			[page := self pageClass 
						createOnFile: self
						position: rootPagePosition
						keyLength: keyLength
						valueLength: valueLength].
	pageSplit := page insertPageSplit: pageSplit.
	pageSplit isNil] 
			whileFalse: [].
	self clearSearchPath.
	page storeLocked!

isCurrentKeySet
	"Private - Answer <true> if currentKey is the same as the next key."

	nextKey == currentKey ifTrue: [^true].
	1 to: keyLength do: [:i | (currentKey at: i) == (nextKey at: i) ifFalse: [^false]].
	^true!

isKey: keyBytes at: startPos lessThan: key2 
	"Private - Answer <true> if key located at keyBytes from startPos + 1 
        is less than key2. Answer <nil> if keys are equal."

	| b1 b2 |
	1 to: keyLength
		do: [:i | (b1 := keyBytes at: startPos + i) == (b2 := key2 at: i) ifFalse: [^b1 < b2]].
	^nil!

isKey: key1 lessOrEqualTo: key2 
	"Answer <true> if key1 is less or equal to key2."

	| i |
	i := 1.
	[(key1 at: i) == (key2 at: i) and: [i < keyLength]] whileTrue: [i := i + 1].
	^(key1 at: i) <= (key2 at: i)!

isLocked
	"Answer <true> if current key is locked."

	self updateCurrentKey.
	currentKeyExists ifFalse: [^false].
	^self lastPage lockID ~= 0!

keyLength
	^keyLength!

keyLength: anInteger 
	keyLength := anInteger!

lastPage
	"Private - Answer last page in search path."

	^searchPath at: searchPathHeight!

loadCurrentKey
	"Private - Load current key from file when it is going to be updated."

	currentKey := nextKey.
	currentKeyExists := false.
	self
		clearSearchPath;
		searchCurrentKeyFrom: rootPagePosition!

loadPageAt: pagePosition 
	"Private - Load B-Tree page, store it in searchPath. 
        Answer loaded page."

	| page |
	page := self pageClass 
				loadFromFile: self
				position: pagePosition
				keyLength: keyLength
				valueLength: valueLength.
	searchPathHeight := searchPathHeight + 1.
	^searchPath at: searchPathHeight put: page!

lockCurrentValue: value with: lockID 
	"Try to lock currentKey & value with lockID. 
	Answer <true> if successfull."

	| result page |
	result := false.
	self lockTree.
	
	[self loadCurrentKey.
	currentKeyExists 
		ifTrue: 
			[page := self lastPage.
			(result := page lockID == 0 and: [page association value = value]) 
				ifTrue: 
					[page
						lockID: lockID;
						storeItem]]
		ifFalse: 
			[self insertValue: value lockID: lockID.
			result := true]] 
			ensure: [self unlockTree].
	^result!

lockTree
	"Private - Lock tree when it is being updated."

	self waitForAddingLock!

opened
	"Private - File has just been opened."

	| buffer bufSize |
	bufSize := ODBSizeHolder sizeInBytes + 2 + 2.
	buffer := ByteArray new: bufSize.
	stream getBytesFor: buffer.
	keyLength := buffer odbShortAt: bufSize - 3.
	valueLength := buffer odbShortAt: bufSize - 1.
	currentKey := ByteArray new: keyLength.
	nextKey := ByteArray new: keyLength!

openOn: aString 
	"Open transaction file. Signal an error if failed."

	stream := ODBFileStream 
				createOn: aString
				createMode: ODBFileStream createModeOpenExisting
				accessMode: ODBFileStream accessModeReadWrite
				shareMode: ODBFileStream shareModeShareAll
				cacheMode: ODBFileStream cacheModeAtomicWrite.
	^self compareHeader!

pageClass
	"Private - Answer B-Tree page class."

	^ODBBTreePage!

put: aValue 
	mutex critical: [self basicPut: aValue]!

putSizeHolder: aSizeHolder 
	stream position: self headerLength.
	aSizeHolder storeOnStream: stream!

removeLastPage
	"Private - Remove last page in search path. 
        Answer current last page in search path."

	searchPath at: searchPathHeight put: nil.
	searchPathHeight := searchPathHeight - 1.
	^searchPath at: searchPathHeight!

searchCurrentKeyFrom: pagePosition 
	"Private - Search current key and remember all pages following."

	| currentPage nextPagePosition |
	currentPage := self loadPageAt: pagePosition.
	
	[(nextPagePosition := currentPage positionToKey: currentKey) == true 
		ifTrue: 
			[currentKeyExists := true.
			^self].
	nextPagePosition = 0] 
			whileFalse: [currentPage := self loadPageAt: nextPagePosition]!

searchNextAssociation
	"Private - Search for next association. Answer <nil> if none."

	| page association nextPagePosition |
	page := self lastPage.
	currentKeyExists ifFalse: [association := page currentAssociation].
	[association isNil] whileTrue: 
			[(nextPagePosition := page nextPage) = 0 
				ifFalse: 
					[nextPagePosition isNil 
						ifTrue: 
							[searchPathHeight = 1 
								ifTrue: 
									[nextKey := (ByteArray new: keyLength) atAllPut: 255.
									self clearSearchPath.
									^nil].
							page := self removeLastPage]
						ifFalse: 
							[
							[page := self loadPageAt: nextPagePosition.
							(nextPagePosition := page leftNext) = 0] 
									whileFalse: []]].
			association := page currentAssociation].
	nextKey := currentKey := association key.
	currentKeyExists := true.
	^association!

searchPreviousAssociation
	"Private - Search for the previous association. Answer <nil> if none."

	| page association pagePosition |
	page := self lastPage.
	[association isNil] whileTrue: 
			[(pagePosition := page previousPage) = 0 
				ifFalse: 
					[pagePosition isNil 
						ifTrue: 
							[searchPathHeight = 1 
								ifTrue: 
									[nextKey := ByteArray new: keyLength.
									self clearSearchPath.
									^nil].
							page := self removeLastPage]
						ifFalse: 
							[
							[page := self loadPageAt: pagePosition.
							(pagePosition := page rightNext) = 0] 
									whileFalse: []]].
			association := page previousAssociation].
	nextKey := currentKey := association key.
	currentKeyExists := true.
	^association!

unlockCurrentWith: lockID 
	"Try to unlock currentKey with lockID. 
        Answer <true> if successfull."

	| fileLockID |
	self lockTree.
	
	[self loadCurrentKey.
	currentKeyExists ifFalse: [^true].
	fileLockID := self lastPage lockID.
	fileLockID == 0 ifTrue: [^true].
	fileLockID == lockID 
		ifTrue: 
			[(self lastPage)
				lockID: 0;
				storeItem.
			^true]] 
			ensure: [self unlockTree].
	^false!

unlockTree
	"Private - Unlock tree after it has been updated."

	self unlockAdding!

updateCurrentKey
	"Private - Check if iterator has been moved
        and update cache if it has been moved."

	| nextPagePosition |
	searchPathHeight = 0 
		ifTrue: 
			[currentKey := nextKey.
			currentKeyExists := false.
			^self searchCurrentKeyFrom: rootPagePosition].
	self isCurrentKeySet ifTrue: [^self].
	currentKey := nextKey.
	currentKeyExists := false.
	[searchPathHeight > 1] whileTrue: 
			[(nextPagePosition := (searchPath at: searchPathHeight) positionToCachedKey: currentKey) 
				== true 
					ifTrue: 
						[currentKeyExists := true.
						^self].
			nextPagePosition isNil 
				ifFalse: 
					[nextPagePosition = 0 ifTrue: [^self].
					^self searchCurrentKeyFrom: nextPagePosition].
			searchPath at: searchPathHeight put: nil.
			searchPathHeight := searchPathHeight - 1].
	(nextPagePosition := (searchPath at: 1) positionToKey: currentKey) == true 
		ifTrue: 
			[currentKeyExists := true.
			^self].
	nextPagePosition = 0 ifFalse: [self searchCurrentKeyFrom: nextPagePosition]!

updateSizeAt: versionNumber oldHolders: oldHolders deltaSize: deltaSize 
	| oldHolder newHolder pos |
	pos := self headerLength.
	self waitForLockAt: pos length: ODBSizeHolder sizeInBytes.
	
	[oldHolder := (ODBSizeHolder new)
				loadFromStream: stream at: pos;
				yourself.
	oldHolders isNil 
		ifTrue: [newHolder := oldHolder]
		ifFalse: 
			[newHolder := oldHolder makeNewVersion: oldHolders.
			oldHolders flush].
	newHolder
		dictionarySize: oldHolder dictionarySize + deltaSize;
		versionNumber: versionNumber.
	newHolder storeOnStream: stream at: pos] 
			ensure: [self unlockAt: pos length: ODBSizeHolder sizeInBytes]!

value: key1 value: key2 
	"Answer <true> if key1 is less or equal to key2. 
	Receiver can be used as sortBlock for SortedCollection."

	| s1 s2 a1 a2 |
	s1 := key1 size.
	s2 := key2 size.
	1 to: keyLength
		do: 
			[:i | 
			i > s1 ifTrue: [a1 := 0] ifFalse: [a1 := key1 at: i].
			i > s2 ifTrue: [a2 := 0] ifFalse: [a2 := key2 at: i].
			a1 = a2 ifFalse: [^a1 < a2]].
	^true!

valueLength: anInteger 
	valueLength := anInteger!

version
	^version!

version: anObject 
	version := anObject! !
!ODBBTreeIterator categoriesFor: #at:ifAbsent:!public! !
!ODBBTreeIterator categoriesFor: #at:put:!public! !
!ODBBTreeIterator categoriesFor: #basicPut:!private! !
!ODBBTreeIterator categoriesFor: #clearSearchCache!public! !
!ODBBTreeIterator categoriesFor: #clearSearchPath!private! !
!ODBBTreeIterator categoriesFor: #created!public! !
!ODBBTreeIterator categoriesFor: #createOn:!public! !
!ODBBTreeIterator categoriesFor: #critical:!public! !
!ODBBTreeIterator categoriesFor: #descriptionString!public! !
!ODBBTreeIterator categoriesFor: #getCurrent!public! !
!ODBBTreeIterator categoriesFor: #getFirst!public! !
!ODBBTreeIterator categoriesFor: #getLast!public! !
!ODBBTreeIterator categoriesFor: #getNext!public! !
!ODBBTreeIterator categoriesFor: #getPrevious!public! !
!ODBBTreeIterator categoriesFor: #getSizeAt:oldHolders:!public! !
!ODBBTreeIterator categoriesFor: #getSizeHolder!public! !
!ODBBTreeIterator categoriesFor: #goTo:!public! !
!ODBBTreeIterator categoriesFor: #goTo:put:!public! !
!ODBBTreeIterator categoriesFor: #goToAndGetCurrentAt:!public! !
!ODBBTreeIterator categoriesFor: #initialize!private! !
!ODBBTreeIterator categoriesFor: #insertValue:lockID:!private! !
!ODBBTreeIterator categoriesFor: #isCurrentKeySet!public! !
!ODBBTreeIterator categoriesFor: #isKey:at:lessThan:!public! !
!ODBBTreeIterator categoriesFor: #isKey:lessOrEqualTo:!public! !
!ODBBTreeIterator categoriesFor: #isLocked!public! !
!ODBBTreeIterator categoriesFor: #keyLength!public! !
!ODBBTreeIterator categoriesFor: #keyLength:!public! !
!ODBBTreeIterator categoriesFor: #lastPage!private! !
!ODBBTreeIterator categoriesFor: #loadCurrentKey!private! !
!ODBBTreeIterator categoriesFor: #loadPageAt:!private! !
!ODBBTreeIterator categoriesFor: #lockCurrentValue:with:!public! !
!ODBBTreeIterator categoriesFor: #lockTree!public! !
!ODBBTreeIterator categoriesFor: #opened!public! !
!ODBBTreeIterator categoriesFor: #openOn:!public! !
!ODBBTreeIterator categoriesFor: #pageClass!public! !
!ODBBTreeIterator categoriesFor: #put:!public! !
!ODBBTreeIterator categoriesFor: #putSizeHolder:!public! !
!ODBBTreeIterator categoriesFor: #removeLastPage!private! !
!ODBBTreeIterator categoriesFor: #searchCurrentKeyFrom:!public! !
!ODBBTreeIterator categoriesFor: #searchNextAssociation!private! !
!ODBBTreeIterator categoriesFor: #searchPreviousAssociation!private! !
!ODBBTreeIterator categoriesFor: #unlockCurrentWith:!public! !
!ODBBTreeIterator categoriesFor: #unlockTree!public! !
!ODBBTreeIterator categoriesFor: #updateCurrentKey!private! !
!ODBBTreeIterator categoriesFor: #updateSizeAt:oldHolders:deltaSize:!public! !
!ODBBTreeIterator categoriesFor: #value:value:!public! !
!ODBBTreeIterator categoriesFor: #valueLength:!public! !
!ODBBTreeIterator categoriesFor: #version!public! !
!ODBBTreeIterator categoriesFor: #version:!public! !

ODBClientFile guid: (GUID fromString: '{8162ee17-0fb8-11d4-b091-000000000000}')!
ODBClientFile comment: ''!
!ODBClientFile categoriesForClass!No category! !
!ODBClientFile methodsFor!

clientDescription
	"Answer client description string."

	| str |
	str := String new: 128.
	stream atPosition: self headerLength getBytesFor: str.
	^(ReadStream on: str) upTo: 0 asCharacter!

clientDescription: aString 
	"Set client description string."

	stream 
		atPosition: self headerLength
		putBytesFrom: ((String new: 128) 
				replaceFrom: 1
				to: (aString size min: 128)
				with: aString
				startingAt: 1)
		len: 128!

created
	"Private - Put default values into file."

	"client description = 128 bytes"

	"distributed objects hostname=32 bytes"

	"transactions count = 4 bytes"

	stream
		putBytesFrom: (ByteArray new: 164);
		flush!

createOn: aString 
	"Create client file. Signal an error if failed."

	stream := ODBFileStream 
				createOn: aString
				createMode: ODBFileStream createModeCreateNew
				accessMode: ODBFileStream accessModeReadWrite
				shareMode: ODBFileStream shareModeShareRead.
	^self writeHeader!

descriptionString
	^'OmniBase Client File
OmniBase 1.0, David Gorisek (c) 1998

'!

openOn: aString 
	"Open client file. Signal an error if failed."

	stream := ODBFileStream 
				createOn: aString
				createMode: ODBFileStream createModeOpenExisting
				accessMode: ODBFileStream accessModeReadWrite
				shareMode: ODBFileStream shareModeShareRead.
	^self compareHeader!

transactionIDs
	"Answer array of transaction IDs."

	| buf array count |
	buf := ByteArray new: 128.
	stream
		position: self headerLength + 160;
		getBytesFor: buf.
	count := buf odbLongAt: 1.
	array := Array new: count.
	1 to: (count min: 31) do: [:i | array at: i put: (buf odbLongAt: (i * 4) + 1)].
	count > 31 
		ifTrue: 
			[buf := ByteArray new: (count - 31) * 4.
			stream getBytesFor: buf.
			32 to: count do: [:i | array at: i put: (buf odbLongAt: (i * 4) - 127)]].
	^array!

transactionIDs: anArray 
	"Set array of transaction IDs."

	| buf count |
	count := anArray size.
	buf := ByteArray new: count * 4 + 4.
	buf odbLongAt: 1 put: count.
	1 to: count do: [:i | buf odbLongAt: (i * 4) + 1 put: (anArray at: i)].
	stream
		position: self headerLength + 160;
		putBytesFrom: buf;
		flush! !
!ODBClientFile categoriesFor: #clientDescription!public! !
!ODBClientFile categoriesFor: #clientDescription:!public! !
!ODBClientFile categoriesFor: #created!public! !
!ODBClientFile categoriesFor: #createOn:!public! !
!ODBClientFile categoriesFor: #descriptionString!public! !
!ODBClientFile categoriesFor: #openOn:!public! !
!ODBClientFile categoriesFor: #transactionIDs!public! !
!ODBClientFile categoriesFor: #transactionIDs:!public! !

ODBClientTable guid: (GUID fromString: '{8162ee18-0fb8-11d4-b091-000000000000}')!
ODBClientTable comment: ''!
!ODBClientTable categoriesForClass!No category! !
!ODBClientTable methodsFor!

activateClientID: clientID 
	"Mark clientID as active."

	self clientTableAt: clientID lockAndPut: 1!

clientTableAt: index 
	"Private - Answer value at client table index."

	^table at: index + 1!

clientTableAt: index lockAndPut: value 
	"Private - Put value at client table index."

	self waitForLockAt: self headerLength + index length: 1.
	[self clientTableAt: index put: value] 
		ensure: [self unlockAt: self headerLength + index length: 1]!

clientTableAt: index put: value 
	"Private - Put value at client table index."

	stream
		position: self headerLength + index;
		putByte: value!

created
	"Private - Put default values into file."

	"client table"

	stream
		putBytesFrom: (ByteArray new: 258);
		flush!

descriptionString
	^'OmniBase Client Table
OmniBase 1.0, David Gorisek (c) 1998

'!

globalLockClientID
	"Private - Answer clientID of client that has set global lock."

	^table at: 1!

globalLockClientID: clientID 
	"Private - Write clientID of client that has put global lock."

	stream
		position: self headerLength;
		putByte: clientID!

globalUnlock
	self lockTable.
	[self globalLockClientID: 0] ensure: [self unlockTable]!

initialize
	table := ByteArray new: self class maxClients + 1!

isBeingRemoved: clientID 
	"Answer <true> if clientID is being removed."

	^(self clientTableAt: clientID) == 2!

loadTable
	"Private - Load client table from file."

	stream atPosition: self headerLength getBytesFor: table!

lockTable
	"Private - Lock client table from being changed."

	self waitForLockAt: self headerLength length: table size!

onClientIDsDo: aBlock 
	"Evaluate aBlock on every active or disconnected clientID."

	self loadTable.
	1 to: self class maxClients
		do: [:i | (self clientTableAt: i) == 0 ifFalse: [aBlock value: i]]!

onNewClientIDDo: aBlock 
	"Evaluate aBlock with new clientID.
	aBlock will not be evaluated if no clientID is avaiable."

	self lockTable.
	
	[self loadTable.
	1 to: self class maxClients
		do: 
			[:i | 
			(self clientTableAt: i) == 0 
				ifTrue: 
					[self clientTableAt: i put: 2.
					stream flush.
					aBlock value: i.
					self clientTableAt: i put: 1.
					^self]]] 
			ensure: [self unlockTable]!

removeClientID: clientID 
	"Remove clientID."

	self clientTableAt: clientID lockAndPut: 0!

removingClientID: clientID 
	"Client clientID is being removed."

	self lockTable.
	
	[self loadTable.
	self globalLockClientID == clientID ifTrue: [self globalLockClientID: 0].
	(self clientTableAt: clientID) > 0 ifTrue: [self clientTableAt: clientID put: 2]] 
			ensure: [self unlockTable]!

requestLockForClientID: clientID 
	"If global lock has not been set yet, mark that 
	clientID has requested transaction file to store locks. 
	Answer <true> if client can lock objects or <false> if not."

	self lockTable.
	
	[self loadTable.
	self globalLockClientID == 0 ifFalse: [^false].
	self clientTableAt: clientID put: 10.
	^true] 
			ensure: [self unlockTable]!

setGlobalLockFor: clientID 
	"Try to global lock database. Answer <true> if successfull."

	self lockTable.
	
	[self loadTable.
	self globalLockClientID == 0 ifFalse: [^false].
	1 to: self class maxClients do: [:i | (self clientTableAt: i) == 10 ifTrue: [^false]].
	self globalLockClientID: clientID.
	^true] 
			ensure: [self unlockTable]!

unlockTable
	"Private - Unlock client table."

	self unlockAt: self headerLength length: table size! !
!ODBClientTable categoriesFor: #activateClientID:!public! !
!ODBClientTable categoriesFor: #clientTableAt:!public! !
!ODBClientTable categoriesFor: #clientTableAt:lockAndPut:!public! !
!ODBClientTable categoriesFor: #clientTableAt:put:!public! !
!ODBClientTable categoriesFor: #created!public! !
!ODBClientTable categoriesFor: #descriptionString!public! !
!ODBClientTable categoriesFor: #globalLockClientID!public! !
!ODBClientTable categoriesFor: #globalLockClientID:!public! !
!ODBClientTable categoriesFor: #globalUnlock!public! !
!ODBClientTable categoriesFor: #initialize!public! !
!ODBClientTable categoriesFor: #isBeingRemoved:!public! !
!ODBClientTable categoriesFor: #loadTable!public! !
!ODBClientTable categoriesFor: #lockTable!public! !
!ODBClientTable categoriesFor: #onClientIDsDo:!public! !
!ODBClientTable categoriesFor: #onNewClientIDDo:!public! !
!ODBClientTable categoriesFor: #removeClientID:!public! !
!ODBClientTable categoriesFor: #removingClientID:!public! !
!ODBClientTable categoriesFor: #requestLockForClientID:!public! !
!ODBClientTable categoriesFor: #setGlobalLockFor:!public! !
!ODBClientTable categoriesFor: #unlockTable!public! !

!ODBClientTable class methodsFor!

maxClients
	"Answer maximum number of clients connected to database. 
	Valid numbers are from 1 to 255."

	^64! !
!ODBClientTable class categoriesFor: #maxClients!public! !

ODBGarbageCollectorFile guid: (GUID fromString: '{8162ee19-0fb8-11d4-b091-000000000000}')!
ODBGarbageCollectorFile comment: ''!
!ODBGarbageCollectorFile categoriesForClass!No category! !
!ODBGarbageCollectorFile methodsFor!

created
	"status=1 byte"

	"new object space=1 byte"

	stream
		putBytesFrom: (ByteArray new: 4);
		flush!

createOn: aString 
	"Create garbage collector file. Answer <nil> if failed."

	stream := ODBFileStream 
				createOn: aString
				createMode: ODBFileStream createModeCreateNew
				accessMode: ODBFileStream accessModeReadWrite
				shareMode: ODBFileStream shareModeShareRead.
	^self writeHeader!

newObjectSpace
	"Answer garbage collector new object space."

	^stream
		position: self headerLength + 1;
		getByte!

newObjectSpace: anInteger 
	"Set garbage collector new object space."

	stream
		position: self headerLength + 1;
		putByte: anInteger;
		flush!

openOn: aString 
	"Open garbage collector file. Signal an error if failed."

	stream := ODBFileStream 
				createOn: aString
				createMode: ODBFileStream createModeOpenExisting
				accessMode: ODBFileStream accessModeReadWrite
				shareMode: ODBFileStream shareModeShareRead.
	^self compareHeader!

status
	"Answer garbage collector status."

	status isNil 
		ifTrue: 
			[status := stream
						position: self headerLength;
						getByte].
	^status!

status: anInteger 
	"Set garbage collector status."

	status := anInteger.
	stream
		position: self headerLength;
		putByte: anInteger;
		flush! !
!ODBGarbageCollectorFile categoriesFor: #created!public! !
!ODBGarbageCollectorFile categoriesFor: #createOn:!public! !
!ODBGarbageCollectorFile categoriesFor: #newObjectSpace!public! !
!ODBGarbageCollectorFile categoriesFor: #newObjectSpace:!public! !
!ODBGarbageCollectorFile categoriesFor: #openOn:!public! !
!ODBGarbageCollectorFile categoriesFor: #status!public! !
!ODBGarbageCollectorFile categoriesFor: #status:!public! !

ODBIDTable guid: (GUID fromString: '{8162ee1a-0fb8-11d4-b091-000000000000}')!
ODBIDTable comment: ''!
!ODBIDTable categoriesForClass!No category! !
!ODBIDTable methodsFor!

add: anInteger 
	"Store anInteger and answer its ID."

	lastID := self getLastID + 1.
	stream
		atPosition: lastID * 4 + self headerLength putLong: anInteger;
		atPosition: self headerLength putLong: lastID.
	^lastID!

at: anInteger 
	"Answer <position> at anInteger or <nil> if absent."

	anInteger > lastID ifTrue: [anInteger > self getLastID ifTrue: [^nil]].
	^stream atPositionGetLong: anInteger * 4 + self headerLength!

at: anInteger ifAbsent: aBlock 
	"Answer <position> at anInteger. Evaluate aBlock if absent."

	anInteger > lastID ifTrue: [anInteger > self getLastID ifTrue: [^aBlock value]].
	^stream atPositionGetLong: anInteger * 4 + self headerLength!

at: anInteger put: aPosition 
	"Put aPosition at anInteger."

	^stream atPosition: anInteger * 4 + self headerLength putLong: aPosition!

created
	"Private - Initialize lastID count."

	stream
		putLong: 0;
		flush!

descriptionString
	^'OmniBase ID Table
OmniBase 1.0, David Gorisek (c) 1998

'!

getLastID
	"Answer value of last ID in file."

	^lastID := stream atPositionGetLong: self headerLength!

indexesAndValuesDo: aBlock 
	1 to: self getLastID do: [:index | aBlock value: index value: (self at: index)]!

initialize
	lastID := 0! !
!ODBIDTable categoriesFor: #add:!public! !
!ODBIDTable categoriesFor: #at:!public! !
!ODBIDTable categoriesFor: #at:ifAbsent:!public! !
!ODBIDTable categoriesFor: #at:put:!public! !
!ODBIDTable categoriesFor: #created!public! !
!ODBIDTable categoriesFor: #descriptionString!public! !
!ODBIDTable categoriesFor: #getLastID!public! !
!ODBIDTable categoriesFor: #indexesAndValuesDo:!public! !
!ODBIDTable categoriesFor: #initialize!public! !

ODBIntegerSet guid: (GUID fromString: '{8162ee1b-0fb8-11d4-b091-000000000000}')!
ODBIntegerSet comment: ''!
!ODBIntegerSet categoriesForClass!No category! !
!ODBIntegerSet methodsFor!

add: anInteger 
	| pageNumber i j |
	pageNumber := anInteger bitShift: -15.	"-12-3=-15"
	i := ((anInteger bitAnd: 32767) bitShift: -3) + 1.	"8*4096=32768"
	j := 1 bitShift: (anInteger bitAnd: 7).
	self loadPage: pageNumber.
	((bitField at: i) bitAnd: j) == 0 
		ifTrue: 
			[changed := true.
			bitField at: i put: ((bitField at: i) bitOr: j)]!

close
	"Close stream associated with receiver."

	stream isNil 
		ifFalse: 
			[(changed and: [currentPage ~~ nil]) 
				ifTrue: 
					[stream
						position: (currentPage bitShift: 12) + self headerLength;
						putBytesFrom: bitField len: 4096	"2^12=4096"]].
	^super close!

includes: anInteger 
	| pageNumber i j |
	pageNumber := anInteger bitShift: -15.	"-12-3=-15"
	i := ((anInteger bitAnd: 32767) bitShift: -3) + 1.	"4096*8=32768"
	j := 1 bitShift: (anInteger bitAnd: 7).
	self loadPage: pageNumber.
	^((bitField at: i) bitAnd: j) == j!

initialize
	bitField := ByteArray new: 4096.
	changed := false!

loadPage: pageNumber 
	"Private - Check if page pageNumber is loaded. If not, 
	store current page to disk and load page pageNumber."

	| pagePos |
	pageNumber == currentPage ifTrue: [^self].
	changed 
		ifTrue: 
			[stream 
				atPosition: (currentPage bitShift: 12) + self headerLength
				putBytesFrom: bitField
				len: 4096].
	changed := false.
	(pagePos := (pageNumber bitShift: 12) + self headerLength) < stream size 
		ifTrue: 
			[stream 
				atPosition: pagePos
				getBytesFor: bitField
				len: 4096]
		ifFalse: 
			[1 to: bitField size do: [:i | bitField at: i put: 0].
			
			[stream 
				atPosition: stream size
				putBytesFrom: bitField
				len: 4096.
			pagePos > stream size] 
					whileTrue: []].
	currentPage := pageNumber! !
!ODBIntegerSet categoriesFor: #add:!public! !
!ODBIntegerSet categoriesFor: #close!public! !
!ODBIntegerSet categoriesFor: #includes:!public! !
!ODBIntegerSet categoriesFor: #initialize!public! !
!ODBIntegerSet categoriesFor: #loadPage:!public! !

ODBObjectIdStack guid: (GUID fromString: '{8162ee1c-0fb8-11d4-b091-000000000000}')!
ODBObjectIdStack comment: ''!
!ODBObjectIdStack categoriesForClass!No category! !
!ODBObjectIdStack methodsFor!

add: objectID 
	| oid index pos |
	top > self doubleCacheSize ifTrue: [self makeSpace].
	pos := top.
	top := top + 1.
	pos > self cacheSize ifTrue: [^(cache at: 2) at: pos - self cacheSize put: objectID].
	(cache at: 1) at: pos put: objectID!

cacheSize
	^5000!

doubleCacheSize
	^10000!

initialize
	cache := Array with: (Array new: self cacheSize) with: (Array new: self cacheSize).
	top := 1.
	bottom := 1.
	filePos := self headerLength.
	valueSize := ODBObjectID sizeInBytes!

isEmpty
	^top == bottom and: [filePos == self headerLength]!

loadPage
	| count buf pos subCache |
	count := self cacheSize.
	buf := ByteArray new: count * valueSize.
	stream
		position: filePos - buf size;
		getBytesFor: buf.
	pos := 1.
	subCache := cache at: 1.
	1 to: count
		do: 
			[:i | 
			subCache at: i put: (ODBObjectID new fromBytes: buf at: pos).
			pos := pos + valueSize].
	filePos := filePos - buf size.
	top := count + 1.
	bottom := 1!

makeSpace
	"Private - Make space on stack."

	| cache1 pos |
	bottom == 1 ifTrue: [^self storePage].
	cache1 := cache at: 1.
	cache
		at: 1 put: (cache at: 2);
		at: 2 put: cache1.
	bottom > self cacheSize 
		ifTrue: 
			[top := top - self cacheSize.
			bottom := bottom - self cacheSize.
			^self].
	pos := bottom - 1.
	bottom := 1.
	top := top - pos.
	1 to: top - 1 - self cacheSize do: [:i | cache1 at: i put: (cache1 at: i + pos)]!

removeLast
	top == bottom ifTrue: [self loadPage].
	bottom > self cacheSize ifTrue: [^self removeLastCache2].
	^self removeLastCache1!

removeLastCache1
	| cache1 result |
	cache1 := cache at: 1.
	result := cache1 at: bottom.
	cache1 at: bottom put: nil.
	bottom := bottom + 1.
	^result!

removeLastCache2
	| cache2 result |
	cache2 := cache at: 2.
	result := cache2 at: bottom - self cacheSize.
	cache2 at: bottom - self cacheSize put: nil.
	bottom := bottom + 1.
	^result!

storePage
	| count buf pos subCache |
	count := self cacheSize.
	buf := ByteArray new: count * valueSize.
	pos := 1.
	subCache := cache at: 1.
	1 to: count
		do: 
			[:i | 
			(subCache at: i) putBytesTo: buf at: pos.
			subCache at: i put: nil.
			pos := pos + valueSize].
	stream
		position: filePos;
		putBytesFrom: buf.
	filePos := filePos + buf size.
	cache
		at: 1 put: (cache at: 2);
		at: 2 put: subCache.	"swap halves"
	top := count + 1.
	bottom := 1! !
!ODBObjectIdStack categoriesFor: #add:!public! !
!ODBObjectIdStack categoriesFor: #cacheSize!public! !
!ODBObjectIdStack categoriesFor: #doubleCacheSize!public! !
!ODBObjectIdStack categoriesFor: #initialize!public! !
!ODBObjectIdStack categoriesFor: #isEmpty!public! !
!ODBObjectIdStack categoriesFor: #loadPage!public! !
!ODBObjectIdStack categoriesFor: #makeSpace!public! !
!ODBObjectIdStack categoriesFor: #removeLast!public! !
!ODBObjectIdStack categoriesFor: #removeLastCache1!public! !
!ODBObjectIdStack categoriesFor: #removeLastCache2!public! !
!ODBObjectIdStack categoriesFor: #storePage!public! !

ODBObjectIndexFile guid: (GUID fromString: '{8162ee1d-0fb8-11d4-b091-000000000000}')!
ODBObjectIndexFile comment: ''!
!ODBObjectIndexFile categoriesForClass!No category! !
!ODBObjectIndexFile methodsFor!

addHolders: holders 
	"Add object holders to table and initialize their object ID indexes."

	| lastIndex freeHolders count count2 buffer holder |
	count := holders size.
	count2 := 0.
	buffer := ByteArray new: 8.
	self waitForAddingLock.
	
	[stream 
		atPosition: self headerLength + 4
		getBytesFor: buffer
		len: 8.
	lastIndex := buffer odbLongAt: 1.
	"       (freeHolders := buffer odLongAt: 5) == 0 ifFalse: [
            count2 := count min: freeHolders.
            count := count - count2.
            stream position: self headerLength + 8; putLong: freeHolders - count2; flush.
            buffer := ByteArray new: count2 * 4.
            bufPos := lastIndex * valueLength + start + (freeHolders - count2 * 4).
            stream position: bufPos; getBytesFor: buffer; truncate: bufPos.
            1 to: count2 do: [:i |
                holder := holders at: i.
                bufPos := buffer odLongAt: (i * 4 - 3).
                holder objectID index: bufPos."
	"               self at: bufPos put: holder contents"
	"           ].
            stream flush
        ].
        count == 0 ifTrue: [ ^self ]."
	stream atPosition: self headerLength + 4 putLong: lastIndex + count] 
			ensure: [self unlockAdding].
	buffer := ByteArray new: count * valueLength.
	count2 + 1 to: holders size
		do: 
			[:i | 
			holder := holders at: i.
			lastIndex := lastIndex + 1.
			holder objectID index: lastIndex
			"       buffer replaceFrom: bufPos to: bufPos + valueLength - 1 with: holder contents startingAt: 1.
        bufPos := bufPos + valueLength"].
	stream
		atPosition: lastIndex * valueLength + start putBytesFrom: buffer;
		flush!

at: anInteger 
	"Answer bytes at index anInteger, <nil> if none."

	| bytes |
	anInteger < 1 ifTrue: [OmniBase signalError: 'Invalid object ID'].
	bytes := ByteArray new: valueLength.
	(stream 
		atPosition: (anInteger - 1) * valueLength + start
		getBytesFor: bytes
		len: valueLength) == valueLength 
		ifFalse: [^nil].
	"   (bytes at: 1) == 0 ifFalse: [ ^bytes ].
    (bytes at: 2) == 0 ifFalse: [ ^bytes ].
    (bytes at: 3) == 0 ifFalse: [ ^bytes ].
    (bytes at: 4) == 0 ifFalse: [ ^bytes ]."
	(bytes at: 9) == 0 ifFalse: [^bytes].
	^nil!

at: anInteger put: value 
	"Put value at anInteger."

	anInteger < 1 ifTrue: [OmniBase signalError: 'Invalid object ID'].
	stream 
		atPosition: (anInteger - 1) * valueLength + start
		putBytesFrom: value
		len: valueLength!

COMMENT
	"header				- self getHeaderLength
	last file index			- 4 bytes long integer
	last object ID index		- 4 bytes long integer
	unused				- 7 bytes
	swapped object space flag	- 1 byte
	...					- object headers"

	!

created
	stream
		putBytesFrom: (ByteArray new: 16);
		flush!

createOn: aString 
	stream := ODBFileStream 
				createOn: aString
				createMode: ODBFileStream createModeCreateNew
				accessMode: ODBFileStream accessModeReadWrite
				shareMode: ODBFileStream shareModeShareAll
				cacheMode: ODBFileStream cacheModeAtomicWrite.
	^self writeHeader!

descriptionString
	^'OmniBase Object Index File
OmniBase 1.0, David Gorisek (c) 1998

'!

flushGCBuffer
	stream 
		atPosition: gcPosition
		putBytesFrom: gcBuffer
		len: ((gcCount - 1) \\ 256 + 1) * 4.
	gcPosition := stream position.
	stream
		truncate: gcPosition;
		flush;
		atPosition: self headerLength + 8 putLong: gcCount;
		flush!

getLastIndex
	"Private - Answer index of last object holder."

	^stream atPositionGetLong: self headerLength + 4!

indexesAndValuesDo: aBlock 
	| lastIndex buffer bufSize bufPos value |
	buffer := ByteArray new: 400 * valueLength.
	lastIndex := self getLastIndex.
	
	[gcCount := 0.
	gcPosition := lastIndex * valueLength + start.
	gcBuffer := ByteArray new: 1024.
	bufSize := stream
				position: start;
				getBytesFor: buffer.
	bufPos := 1.
	1 to: lastIndex
		do: 
			[:index | 
			value := buffer copyFrom: bufPos to: bufPos + valueLength - 1.
			(value at: 9) == 0 ifFalse: [aBlock value: index value: value].
			bufPos := bufPos + valueLength.
			bufPos >= bufSize 
				ifTrue: 
					[stream position: index * valueLength + start.
					bufSize := stream getBytesFor: buffer.
					bufPos := 1]].
	gcCount \\ 256 = 0 ifFalse: [self flushGCBuffer]] 
			ensure: 
				[gcCount := nil.
				gcBuffer := nil]!

initialize
	start := self headerLength + 16.
	valueLength := ODBObjectHolder sizeInBytes!

lock: index 
	"Lock <value> at index."

	self waitForLockAt: (index - 1) * valueLength + start length: valueLength!

newObjectFileID
	"Get new ID for object file. Thread-safe."

	| newID |
	self waitForLockAt: self headerLength length: 4.
	
	[newID := (stream atPositionGetLong: self headerLength) + 1.
	stream atPosition: self headerLength putLong: newID] 
			ensure: [self unlockAt: self headerLength length: 4].
	^newID!

openOn: aString 
	"Open transaction file. Signal an error if failed."

	stream := ODBFileStream 
				createOn: aString
				createMode: ODBFileStream createModeOpenExisting
				accessMode: ODBFileStream accessModeReadWrite
				shareMode: ODBFileStream shareModeShareAll
				cacheMode: ODBFileStream cacheModeAtomicWrite.
	^self compareHeader!

removeIndex: index 
	self at: index put: (ByteArray new: valueLength).
	gcCount isNil 
		ifFalse: 
			[gcBuffer odbLongAt: ((gcCount \\ 256) * 4) + 1 put: index.
			gcCount := gcCount + 1.
			gcCount \\ 256 = 0 ifTrue: [self flushGCBuffer]]!

setLastIndex: anInteger 
	"Private - Answer set index of last object holder."

	^stream atPosition: self headerLength + 4 putLong: anInteger!

swappedObjectSpaces
	"Answer <true> if object space A and B were swapped due to single container reorganization."

	| buf |
	buf := ByteArray new: 1.
	(stream atPosition: self headerLength + 15 getBytesFor: buf) = 1 ifTrue: [^(buf at: 1) = 1].
	OmniBase signalError: 'File read error'!

swappedObjectSpaces: aBoolean 
	"Set to <true> if object space A and B were swapped due to single container reorganization."

	| buf |
	buf := ByteArray new: 1.
	buf at: 1 put: (aBoolean ifTrue: [1] ifFalse: [0]).
	stream
		atPosition: self headerLength + 15 putBytesFrom: buf;
		flush!

unlock: index 
	"Unlock  <value> at index."

	self unlockAt: (index - 1) * valueLength + start length: valueLength! !
!ODBObjectIndexFile categoriesFor: #addHolders:!public! !
!ODBObjectIndexFile categoriesFor: #at:!public! !
!ODBObjectIndexFile categoriesFor: #at:put:!public! !
!ODBObjectIndexFile categoriesFor: #COMMENT!public! !
!ODBObjectIndexFile categoriesFor: #created!public! !
!ODBObjectIndexFile categoriesFor: #createOn:!public! !
!ODBObjectIndexFile categoriesFor: #descriptionString!public! !
!ODBObjectIndexFile categoriesFor: #flushGCBuffer!public! !
!ODBObjectIndexFile categoriesFor: #getLastIndex!public! !
!ODBObjectIndexFile categoriesFor: #indexesAndValuesDo:!public! !
!ODBObjectIndexFile categoriesFor: #initialize!public! !
!ODBObjectIndexFile categoriesFor: #lock:!public! !
!ODBObjectIndexFile categoriesFor: #newObjectFileID!public! !
!ODBObjectIndexFile categoriesFor: #openOn:!public! !
!ODBObjectIndexFile categoriesFor: #removeIndex:!public! !
!ODBObjectIndexFile categoriesFor: #setLastIndex:!public! !
!ODBObjectIndexFile categoriesFor: #swappedObjectSpaces!public! !
!ODBObjectIndexFile categoriesFor: #swappedObjectSpaces:!public! !
!ODBObjectIndexFile categoriesFor: #unlock:!public! !

ODBObjectStorage guid: (GUID fromString: '{8162ee1e-0fb8-11d4-b091-000000000000}')!
ODBObjectStorage comment: ''!
!ODBObjectStorage categoriesForClass!No category! !
!ODBObjectStorage methodsFor!

descriptionString
	^'OmniBase Object Storage
OmniBase 1.0, David Gorisek (c) 1998

'!

isEmpty
	^stream size == self headerLength!

removeAll
	stream truncate: self headerLength! !
!ODBObjectStorage categoriesFor: #descriptionString!public! !
!ODBObjectStorage categoriesFor: #isEmpty!public! !
!ODBObjectStorage categoriesFor: #removeAll!public! !

ODBOldHoldersFile guid: (GUID fromString: '{8162ee1f-0fb8-11d4-b091-000000000000}')!
ODBOldHoldersFile comment: ''!
!ODBOldHoldersFile categoriesForClass!No category! !
!ODBOldHoldersFile methodsFor!

allocateBuffer
	"Private - Allocate space in file for buffer so that less locking 
	and file I/O calls are needed when transaction is committing."

	self waitForAddingLock.
	
	[filePos := stream setToEnd.
	stream truncate: filePos + 512] ensure: [self unlockAdding].
	buffer := ByteArray new: 512.
	bufPos := 0!

descriptionString
	^'OmniBase Old Holders
OmniBase 1.0, David Gorisek (c) 1998

'!

flush
	(buffer isNil or: [bufPos == 0]) ifTrue: [^self].
	stream 
		atPosition: filePos
		putBytesFrom: buffer
		len: bufPos.
	buffer size - bufPos < 16 
		ifTrue: [buffer := nil]
		ifFalse: 
			[filePos := filePos + bufPos.
			buffer := buffer copyFrom: bufPos + 1 to: buffer size.
			bufPos := 0]!

loadAt: anInteger for: aByteArray 
	"Load holder contents at position anInteger."

	anInteger == 0 ifTrue: [OmniBase signalError: 'Previous version position error !!'].
	stream atPosition: anInteger getBytesFor: aByteArray!

loadAtOrNil: anInteger for: aByteArray 
	"Load holder contents at position anInteger.
	Answer <false> in case of doing online backup for a version in the past and the new version is not yet valid, else answer <true>."

	anInteger == 0 ifTrue: [^false].
	stream atPosition: anInteger getBytesFor: aByteArray.
	^true!

store: aByteArray 
	"Store holder contents and answer its position on the stream."

	| result |
	buffer isNil 
		ifTrue: [self allocateBuffer]
		ifFalse: 
			[buffer size - bufPos < aByteArray size 
				ifTrue: 
					[self
						flush;
						allocateBuffer]].
	buffer 
		replaceFrom: bufPos + 1
		to: bufPos + aByteArray size
		with: aByteArray
		startingAt: 1.
	result := filePos + bufPos.
	bufPos := bufPos + aByteArray size.
	^result!

truncate
	stream truncate: self headerLength! !
!ODBOldHoldersFile categoriesFor: #allocateBuffer!public! !
!ODBOldHoldersFile categoriesFor: #descriptionString!public! !
!ODBOldHoldersFile categoriesFor: #flush!public! !
!ODBOldHoldersFile categoriesFor: #loadAt:for:!public! !
!ODBOldHoldersFile categoriesFor: #loadAtOrNil:for:!public! !
!ODBOldHoldersFile categoriesFor: #store:!public! !
!ODBOldHoldersFile categoriesFor: #truncate!public! !

ODBTransactionFile guid: (GUID fromString: '{8162ee20-0fb8-11d4-b091-000000000000}')!
ODBTransactionFile comment: ''!
!ODBTransactionFile categoriesForClass!No category! !
!ODBTransactionFile methodsFor!

collectLockClassIDsFrom: rootClass to: aDictionary 
	"Private - Collect all lock classIDs and store them to aDictionary."

	rootClass lockClassID notNil 
		ifTrue: [aDictionary at: rootClass lockClassID put: rootClass].
	rootClass subclasses do: [:each | self collectLockClassIDsFrom: each to: aDictionary]!

created
	stream
		putBytesFrom: (ByteArray new: 11);
		flush.
	newLockPosition := self headerLength + 10!

createOn: aString 
	stream := ODBFileStream 
				createOn: aString
				createMode: ODBFileStream createModeCreateAlways
				accessMode: ODBFileStream accessModeReadWrite
				shareMode: ODBFileStream shareModeShareRead
				cacheMode: ODBFileStream cacheModeAtomicWrite.
	^self writeHeader!

descriptionString
	^'OmniBase Transaction Log File
OmniBase 1.0, David Gorisek (c) 1998

'!

initialize
	locks := OrderedCollection new.
	lockPositions := OrderedCollection new!

lockAdd: anODBLock 
	"Add lock to transaction file."

	| mStream bytes |
	recovery isNil ifFalse: [OmniBase signalError: 'Can not lock in the middle of commit'].
	anODBLock lockIndex isNil ifFalse: [OmniBase signalError: 'Lock is allready stored'].
	locks add: anODBLock.
	lockPositions add: newLockPosition.
	anODBLock lockIndex: locks size.
	(mStream := ODBMemoryWriteStream new) putByte: 0.
	anODBLock storeOnStream: mStream.
	mStream putByte: 0.
	stream
		position: newLockPosition;
		putBytesFrom: (bytes := mStream asByteArray);
		position: newLockPosition;
		putByte: anODBLock class lockClassID.
	stream flush.
	newLockPosition := newLockPosition + bytes size - 1!

lockRemove: anODBLock 
	"Remove lock from transaction file."

	| i |
	(i := anODBLock lockIndex) isNil 
		ifTrue: [OmniBase signalError: 'Lock has not been stored yet'].
	locks at: i put: nil.
	stream position: (lockPositions at: i).
	stream putByte: 100 + anODBLock class lockClassID.
	anODBLock lockIndex: nil.
	stream flush!

locks
	"Answer all locks stored in transaction file."

	^locks select: [:each | each notNil]!

opened
	"Private - Load all stored locks and recovery information."

	"collect lock classes class IDs"

	| classes storedID classID obj startingPosition |
	classes := IdentityDictionary new.
	self collectLockClassIDsFrom: ODBLock to: classes.
	"load locks first"
	locks := OrderedCollection new.
	lockPositions := OrderedCollection new.
	stream position: self headerLength + 10.
	
	[startingPosition := stream position.
	(storedID := stream getByte) == 0] whileFalse: 
				[storedID > 100 ifTrue: [classID := storedID - 100] ifFalse: [classID := storedID].	"removed locks have classID > 100"
				obj := (classes at: classID ifAbsent: [OmniBase signalError: 'Unknown lock classID']) new 
							loadFromStream: stream.
				storedID > 100 
					ifFalse: 
						["if lock is still active"
						locks add: obj.
						obj lockIndex: locks size.
						lockPositions add: startingPosition]].
	"load recovery information next"
	stream position: self headerLength + 4.
	(startingPosition := stream getLong) == 0 
		ifFalse: 
			[stream position: startingPosition.
			recovery := ODBChangesPackage new loadFromStream: stream]!

openOn: aString 
	"Open transaction file. Signal an error if failed."

	stream := ODBFileStream 
				createOn: aString
				createMode: ODBFileStream createModeOpenExisting
				accessMode: ODBFileStream accessModeReadWrite
				shareMode: ODBFileStream shareModeShareRead
				cacheMode: ODBFileStream cacheModeAtomicWrite.
	^self compareHeader!

recovery
	^recovery!

recovery: anODBChangesPackage 
	"Set recovery instance variable and save recovery information."

	| recoveryPosition |
	anODBChangesPackage isNil 
		ifTrue: [recoveryPosition := 0]
		ifFalse: 
			[recoveryPosition := newLockPosition + 1.
			stream position: recoveryPosition.
			anODBChangesPackage storeOnStream: stream].
	stream
		atPosition: self headerLength + 4 putLong: recoveryPosition;
		flush.
	recovery := anODBChangesPackage!

reinitialize
	"Reinitialize an opened transaction file."

	| bytes |
	newLockPosition := self headerLength + 10.
	bytes := ByteArray new: 11.
	bytes odbShortAt: 9 put: transactionID.
	stream
		position: newLockPosition - 10;
		putBytesFrom: bytes.
	recovery := nil.
	self initialize!

transactionID
	transactionID isNil 
		ifTrue: 
			[transactionID := stream
						position: self headerLength + 8;
						getWord].
	^transactionID!

transactionID: anInteger 
	transactionID := anInteger.
	stream
		position: self headerLength + 8;
		putWord: anInteger!

versionNumber
	^stream
		position: self headerLength;
		getLong!

versionNumber: anInteger 
	stream
		position: self headerLength;
		putLong: anInteger! !
!ODBTransactionFile categoriesFor: #collectLockClassIDsFrom:to:!public! !
!ODBTransactionFile categoriesFor: #created!public! !
!ODBTransactionFile categoriesFor: #createOn:!public! !
!ODBTransactionFile categoriesFor: #descriptionString!public! !
!ODBTransactionFile categoriesFor: #initialize!public! !
!ODBTransactionFile categoriesFor: #lockAdd:!public! !
!ODBTransactionFile categoriesFor: #lockRemove:!public! !
!ODBTransactionFile categoriesFor: #locks!public! !
!ODBTransactionFile categoriesFor: #opened!public! !
!ODBTransactionFile categoriesFor: #openOn:!public! !
!ODBTransactionFile categoriesFor: #recovery!public! !
!ODBTransactionFile categoriesFor: #recovery:!public! !
!ODBTransactionFile categoriesFor: #reinitialize!public! !
!ODBTransactionFile categoriesFor: #transactionID!public! !
!ODBTransactionFile categoriesFor: #transactionID:!public! !
!ODBTransactionFile categoriesFor: #versionNumber!public! !
!ODBTransactionFile categoriesFor: #versionNumber:!public! !

ODBVersionControlFile guid: (GUID fromString: '{8162ee21-0fb8-11d4-b091-000000000000}')!
ODBVersionControlFile comment: ''!
!ODBVersionControlFile categoriesForClass!No category! !
!ODBVersionControlFile methodsFor!

created
	"Create version table for maximum 255 clients."

	stream
		putBytesFrom: (ByteArray new: (255 + 1) * 4);
		flush!

createOn: aString 
	stream := ODBFileStream 
				createOn: aString
				createMode: ODBFileStream createModeCreateAlways
				accessMode: ODBFileStream accessModeReadWrite
				shareMode: ODBFileStream shareModeShareAll
				cacheMode: ODBFileStream cacheModeAtomicWrite.
	^self writeHeader!

descriptionString
	^'OmniBase Version Control
OmniBase 1.0, David Gorisek (c) 1998

'!

getNewVersionNumberFor: clientID 
	"Answer new version number for clientID."

	| versionNumber |
	(clientID > 0 and: [clientID <= ODBClientTable maxClients]) 
		ifFalse: [OmniBase signalError: 'Bad OmniBase connection ID'].
	self waitForLockAt: self headerLength length: 4.
	versionNumber := (stream atPositionGetLong: self headerLength) + 1.
	stream
		atPosition: self headerLength putLong: versionNumber;
		atPosition: clientID * 4 + self headerLength putLong: versionNumber;
		flush.
	self unlockAt: self headerLength length: 4.
	^versionNumber!

openOn: aString 
	"Open transaction file. Signal an error if failed."

	stream := ODBFileStream 
				createOn: aString
				createMode: ODBFileStream createModeOpenExisting
				accessMode: ODBFileStream accessModeReadWrite
				shareMode: ODBFileStream shareModeShareAll
				cacheMode: ODBFileStream cacheModeAtomicWrite.
	^self compareHeader!

removeCommittingFor: clientID 
	"Remove committing version number for clientID."

	(clientID > 0 and: [clientID <= ODBClientTable maxClients]) 
		ifFalse: [OmniBase signalError: 'Bad client ID'].
	stream atPosition: clientID * 4 + self headerLength putLong: 0.
	versionDescriptor := nil!

versionDescriptor
	"Answer read versionDescriptor."

	| versionTable size time |
	(versionDescriptor isNil 
		or: [((time := Time millisecondClockValue) - lastReadTime) abs > 500]) 
			ifTrue: 
				[size := (ODBClientTable maxClients + 1) * 4.
				versionTable := ByteArray new: size.
				stream 
					atPosition: self headerLength
					getBytesFor: versionTable
					len: size.
				lastReadTime := time isNil ifTrue: [Time millisecondClockValue] ifFalse: [time].
				versionDescriptor := ODBVersionDescriptor new fromVersionTable: versionTable].
	^versionDescriptor! !
!ODBVersionControlFile categoriesFor: #created!public! !
!ODBVersionControlFile categoriesFor: #createOn:!public! !
!ODBVersionControlFile categoriesFor: #descriptionString!public! !
!ODBVersionControlFile categoriesFor: #getNewVersionNumberFor:!public! !
!ODBVersionControlFile categoriesFor: #openOn:!public! !
!ODBVersionControlFile categoriesFor: #removeCommittingFor:!public! !
!ODBVersionControlFile categoriesFor: #versionDescriptor!public! !

ODBClassInfoFile guid: (GUID fromString: '{8162ee22-0fb8-11d4-b091-000000000000}')!
ODBClassInfoFile comment: ''!
!ODBClassInfoFile categoriesForClass!No category! !
!ODBClassInfoFile methodsFor!

created
	"Private - File has just been created."

	(self pageClass 
		createOnFile: self
		position: rootPagePosition
		keyLength: keyLength
		valueLength: valueLength) store.
	currentKey := ByteArray new: keyLength.
	stream flush!

descriptionString
	^'Class Info File
OmniBase 1.0, David Gorisek (c) 1998

'!

initialize
	"Private - Initialize receiver."

	super initialize.
	keyLength := 128.
	valueLength := 4.
	rootPagePosition := self headerLength!

opened
	! !
!ODBClassInfoFile categoriesFor: #created!public! !
!ODBClassInfoFile categoriesFor: #descriptionString!public! !
!ODBClassInfoFile categoriesFor: #initialize!public! !
!ODBClassInfoFile categoriesFor: #opened!public! !

ODBContainerInfoFile guid: (GUID fromString: '{8162ee23-0fb8-11d4-b091-000000000000}')!
ODBContainerInfoFile comment: ''!
!ODBContainerInfoFile categoriesForClass!No category! !
!ODBContainerInfoFile methodsFor!

created
	"Private - File has just been created."

	stream putWord: 0.
	(self pageClass 
		createOnFile: self
		position: rootPagePosition
		keyLength: keyLength
		valueLength: valueLength) store.
	currentKey := ByteArray new: keyLength.
	stream flush!

defaultObjectSpace
	^stream
		position: self headerLength;
		getByte!

defaultObjectSpace: anInteger 
	stream
		position: self headerLength;
		putByte: anInteger!

descriptionString
	^'Container Info File
OmniBase 1.0, David Gorisek (c) 1998

'!

initialize
	"Private - Initialize receiver."

	super initialize.
	keyLength := 20.
	valueLength := 4.
	rootPagePosition := self headerLength + 2!

isLocked
	^(stream
		position: self headerLength + 1;
		getByte) == 1!

lock
	| pos |
	pos := self headerLength + 1.
	self waitForLockAt: pos length: 1.
	
	[(stream
		position: pos;
		getByte) == 0 
		ifFalse: [^false]
		ifTrue: 
			[stream
				position: pos;
				putByte: 1.
			^true]] 
			ensure: [self unlockAt: pos length: 1]!

opened
	!

unlock
	| pos |
	pos := self headerLength + 1.
	self waitForLockAt: pos length: 1.
	
	[(stream
		position: pos;
		getByte) == 1 
		ifFalse: [^false]
		ifTrue: 
			[stream
				position: pos;
				putByte: 0.
			^true]] 
			ensure: [self unlockAt: pos length: 1]! !
!ODBContainerInfoFile categoriesFor: #created!public! !
!ODBContainerInfoFile categoriesFor: #defaultObjectSpace!public! !
!ODBContainerInfoFile categoriesFor: #defaultObjectSpace:!public! !
!ODBContainerInfoFile categoriesFor: #descriptionString!public! !
!ODBContainerInfoFile categoriesFor: #initialize!public! !
!ODBContainerInfoFile categoriesFor: #isLocked!public! !
!ODBContainerInfoFile categoriesFor: #lock!public! !
!ODBContainerInfoFile categoriesFor: #opened!public! !
!ODBContainerInfoFile categoriesFor: #unlock!public! !

ODBGcBTreeIterator guid: (GUID fromString: '{8162ee24-0fb8-11d4-b091-000000000000}')!
ODBGcBTreeIterator comment: ''!
!ODBGcBTreeIterator categoriesForClass!No category! !
!ODBGcBTreeIterator methodsFor!

insertValue: aValue lockID: lockID 
	"Private - Insert aValue and lockID at currentKey. 
	Precondition: search path to currentKey is loaded and 
	currentKey does not exists."

	| page pageSplit |
	page := searchPath at: searchPathHeight.
	pageSplit := page 
				insertKey: currentKey
				value: aValue
				lockID: lockID.
	pageSplit isNil 
		ifTrue: [currentKeyExists := true]
		ifFalse: 
			[
			[searchPathHeight > 1 
				ifTrue: 
					[(pageSplit at: 1)
						position: page position;
						store.
					(pageSplit at: 3)
						position: stream setToEnd;
						store]
				ifFalse: 
					[(pageSplit at: 1)
						position: stream setToEnd;
						store.
					(pageSplit at: 3)
						position: stream position;
						store].
			searchPath at: searchPathHeight put: nil.
			searchPathHeight := searchPathHeight - 1.
			searchPathHeight == 0 
				ifFalse: [page := searchPath at: searchPathHeight]
				ifTrue: 
					[page := self pageClass 
								createOnFile: self
								position: rootPagePosition
								keyLength: keyLength
								valueLength: valueLength].
			pageSplit := page insertPageSplit: pageSplit.
			pageSplit isNil] 
					whileFalse: [].
			self clearSearchPath].
	page store!

pageClass
	"Private - Answer B-Tree page class."

	^ODBGcBTreePage!

put: aValue 
	self updateCurrentKey.
	currentKeyExists 
		ifTrue: 
			[(self lastPage)
				value: aValue;
				store]
		ifFalse: [self insertValue: aValue lockID: 0]! !
!ODBGcBTreeIterator categoriesFor: #insertValue:lockID:!private! !
!ODBGcBTreeIterator categoriesFor: #pageClass!public! !
!ODBGcBTreeIterator categoriesFor: #put:!public! !

ODBWeakValueIdentityDictionary guid: (GUID fromString: '{8162ee25-0fb8-11d4-b091-000000000000}')!
ODBWeakValueIdentityDictionary comment: ''!
!ODBWeakValueIdentityDictionary categoriesForClass!No category! !
!ODBWeakValueIdentityDictionary methodsFor!

at: anObject 
	"Answer value at anObject, <nil> if absent."

	| index lastIndex key value |
	lastIndex := keys size.
	index := anObject identityHash \\ lastIndex.
	[anObject == (key := keys at: (index := index + 1))] whileFalse: 
			[key isNil ifTrue: [^nil].
			index == lastIndex ifTrue: [index := 0]].
	(value := values at: index) == DeadObject current ifFalse: [^value].
	keys at: index put: DeadObject current.
	^nil!

at: anObject ifAbsent: aBlock 
	| index lastIndex key value |
	lastIndex := keys size.
	index := anObject identityHash \\ lastIndex.
	[anObject == (key := keys at: (index := index + 1))] whileFalse: 
			[key isNil ifTrue: [^aBlock value].
			index == lastIndex ifTrue: [index := 0]].
	(value := values at: index) == DeadObject current ifFalse: [^value].
	keys at: index put: DeadObject current.
	^aBlock value!

at: aKey put: anObject 
	"Answer anObject. If aKey exists in the receiver,
        replace the corresponding value with anObject, else
        add the aKey/anObject pair to the receiver."

	| index lastIndex key |
	lastIndex := keys size.
	index := aKey identityHash \\ lastIndex.
	[aKey == (key := keys at: (index := index + 1))] whileFalse: 
			[key isNil 
				ifTrue: 
					[keys at: index put: aKey.
					values at: index put: anObject.
					(elementCount := elementCount + 1) >= sizeLimit ifTrue: [self grow].
					^anObject].
			(key == DeadObject current or: [(values at: index) == DeadObject current]) 
				ifTrue: 
					[keys at: index put: aKey.
					^values at: index put: anObject].
			index == lastIndex ifTrue: [index := 0]].
	^values at: index put: anObject!

do: aBlock 
	"Evaluate aBlock for each value in dictionary."

	| value key |
	1 to: keys size
		do: 
			[:i | 
			key := keys at: i.
			(key isNil 
				or: [key == DeadObject current or: [(value := values at: i) == DeadObject current]]) 
					ifFalse: [aBlock value: value]]!

initialize: anInteger 
	super initialize: anInteger.
	values beWeak! !
!ODBWeakValueIdentityDictionary categoriesFor: #at:!public! !
!ODBWeakValueIdentityDictionary categoriesFor: #at:ifAbsent:!public! !
!ODBWeakValueIdentityDictionary categoriesFor: #at:put:!public! !
!ODBWeakValueIdentityDictionary categoriesFor: #do:!public! !
!ODBWeakValueIdentityDictionary categoriesFor: #initialize:!private! !

ODBKeyLock guid: (GUID fromString: '{8162ee26-0fb8-11d4-b091-000000000000}')!
ODBKeyLock comment: ''!
!ODBKeyLock categoriesForClass!No category! !
!ODBKeyLock methodsFor!

key
	^key!

key: aString 
	key := aString!

loadFromStream: aStream 
	objectID := ODBObjectID new loadFromStream: aStream.
	lockID := aStream getLong.
	key := aStream getString asByteArray!

storeOnStream: aStream 
	objectID storeOnStream: aStream.
	aStream putLong: lockID.
	aStream putString: key!

unlock
	self transactionObject dataBaseObject unlockKey: key with: lockID! !
!ODBKeyLock categoriesFor: #key!accessing!public! !
!ODBKeyLock categoriesFor: #key:!accessing!public! !
!ODBKeyLock categoriesFor: #loadFromStream:!public! !
!ODBKeyLock categoriesFor: #storeOnStream:!public! !
!ODBKeyLock categoriesFor: #unlock!public! !

!ODBKeyLock class methodsFor!

lockClassID
	"Answer unique class ID used for storing locks 
        or <nil> if lock does not need to be stored."

	^2! !
!ODBKeyLock class categoriesFor: #lockClassID!public! !

ODBObjectLock guid: (GUID fromString: '{8162ee27-0fb8-11d4-b091-000000000000}')!
ODBObjectLock comment: ''!
!ODBObjectLock categoriesForClass!No category! !
!ODBObjectLock methodsFor!

loadFromStream: aStream 
	objectID := ODBObjectID new loadFromStream: aStream.
	lockID := aStream getLong!

storeOnStream: aStream 
	objectID storeOnStream: aStream.
	aStream putLong: lockID!

unlock
	^(transaction objectHolderAt: objectID) unlockWith: lockID! !
!ODBObjectLock categoriesFor: #loadFromStream:!public! !
!ODBObjectLock categoriesFor: #storeOnStream:!public! !
!ODBObjectLock categoriesFor: #unlock!public! !

!ODBObjectLock class methodsFor!

lockClassID
	"Answer unique class ID used for storing locks 
        or <nil> if lock does not need to be stored."

	^1! !
!ODBObjectLock class categoriesFor: #lockClassID!public! !

ODBFileStream guid: (GUID fromString: '{8162ee28-0fb8-11d4-b091-000000000000}')!
ODBFileStream comment: ''!
!ODBFileStream categoriesForClass!No category! !
!ODBFileStream methodsFor!

atPosition: anInteger getBytesFor: aByteCollection 
	"Read bytes from stream at position anInteger. 
        Answer number of bytes actualy read."

	| result |
	mutex critical: 
			[result := self
						basicPosition: anInteger;
						basicGetBytesFor: aByteCollection len: aByteCollection size].
	^result!

atPosition: anInteger getBytesFor: aByteCollection len: len 
	"Read len bytes from stream at position anInteger to aByteCollection. 
        Answer number of bytes actualy read."

	| result |
	mutex critical: 
			[result := self
						basicPosition: anInteger;
						basicGetBytesFor: aByteCollection len: len].
	^result!

atPosition: pos putBytesFrom: aByteCollection 
	"Write bytes from aByteCollection to file."

	mutex critical: 
			[self
				basicPosition: pos;
				basicPutBytesFrom: aByteCollection len: aByteCollection size]!

atPosition: pos putBytesFrom: aByteCollection len: len 
	"Write len bytes from aByteCollection to file."

	mutex critical: 
			[self
				basicPosition: pos;
				basicPutBytesFrom: aByteCollection len: len]!

atPosition: pos putLong: anInteger 
	| buf |
	buf := ByteArray new: 4.
	buf odbLongAt: 1 put: anInteger.
	self 
		atPosition: pos
		putBytesFrom: buf
		len: 4!

atPositionGetLong: pos 
	"Read long integer from stream. 
	Answer <nil> if end of file has been reached."

	| buf |
	buf := ByteArray new: 4.
	^(self 
		atPosition: pos
		getBytesFor: buf
		len: 4) == 4 
		ifTrue: [buf dwordAtOffset: 0]!

basicGetBytesFor: aByteCollection len: len 
	"Private - Read len bytes from stream to aByteCollection. 
	Answer number of bytes actualy read."

	| startTime currentTime errorCode externalLong |
	externalLong := DWORD new.
	(kernelLibrary 
		readFile: fileHandle
		lpBuffer: aByteCollection
		nNumberOfBytesToRead: len
		lpNumberOfBytesRead: externalLong
		lpOverlapped: nil) 
			ifFalse: 
				[currentTime := startTime := Time secondClockValue.
				
				[errorCode := self lastOsError.
				errorCode = 33 or: [errorCode = 5	"access denied"]	"lock violation"] 
						whileTrue: 
							[currentTime - startTime < 12 
								ifFalse: 
									[ODBStreamLockedNotification signal 
										ifTrue: [startTime := currentTime]
										ifFalse: [self fileIOError: errorCode]].
							(kernelLibrary 
								readFile: fileHandle
								lpBuffer: aByteCollection
								nNumberOfBytesToRead: len
								lpNumberOfBytesRead: externalLong asParameter
								lpOverlapped: nil) ifTrue: [^externalLong asInteger].
							currentTime := Time secondClockValue.
							currentTime < startTime ifTrue: [currentTime := currentTime + 86400]].
				self fileIOError: errorCode].
	^externalLong asInteger!

basicPosition: anInteger 
	"Private - Positiones stream to anInteger. Answer anInteger."

	| result externalLong lowDWord hiDWord |
	anInteger < 0 ifTrue: [OmniBase signalError: 'File position can not be negative'].
	anInteger > 2147483647 
		ifFalse: 
			[lowDWord := anInteger.
			hiDWord := 0]
		ifTrue: 
			[lowDWord := (DWORD fromInteger: anInteger \\ (2 raisedTo: 32)) asSignedInteger.
			hiDWord := anInteger // (2 raisedTo: 32).
			externalLong := DWORD fromInteger: hiDWord].
	result := kernelLibrary 
				setFilePointer: fileHandle
				lDistanceToMove: lowDWord
				lpDistanceToMoveHigh: externalLong
				dwMoveMethod: FILE_BEGIN.
	^externalLong isNil 
		ifTrue: [16rFFFFFFFF = result ifFalse: [result] ifTrue: [self fileIOError]]
		ifFalse: 
			[(16rFFFFFFFF = result and: [kernelLibrary getLastError ~= 0]) 
				ifTrue: [self fileIOError]
				ifFalse: [result + (externalLong asUnsignedInteger * (2 raisedTo: 32))]]!

basicPutBytesFrom: aByteCollection len: len 
	"Private - Write len bytes from aByteCollection to file."

	| externalLong |
	externalLong := DWORD new.
	(kernelLibrary 
		writeFile: fileHandle
		lpBuffer: aByteCollection
		nNumberOfBytesToWrite: len
		lpNumberOfBytesWritten: externalLong
		lpOverlapped: nil) ifFalse: [self fileIOError]!

close
	"Close file associatied with receiver."

	kernelLibrary closeHandle: fileHandle.
	fileHandle := nil!

compare: aString at: pos 
	"Answer <true>, if aString is stored at pos."

	| str str2 len |
	len := aString size.
	str := String new: len.
	(self 
		atPosition: pos
		getBytesFor: str
		len: len) == len ifFalse: [^false].
	str := str select: [:each | each isDigit or: [each isLetter]].
	str2 := aString select: [:each | each isDigit or: [each isLetter]].
	^str = str2!

fileIOError
	^self fileIOError: self lastOsError!

fileIOError: errorCode 
	errorCode = 59 ifTrue: [ODBUnexpectedNetworkError signal].
	FileException signalOn: self!

flush
	"Force all data written to the receiver to be recorded on disk."

	(kernelLibrary flushFileBuffers: fileHandle) ifFalse: [^self fileIOError]!

getByte
	"Read byte from file stream. Answer <nil> if
	end of file has been reached."

	| buf |
	buf := ByteArray new: 1.
	^(self getBytesFor: buf len: 1) == 1 ifTrue: [buf at: 1]!

getBytesFor: aByteCollection len: len 
	"Read len bytes from stream to aByteCollection. 
	Answer number of bytes actualy read."

	| result |
	mutex critical: [result := self basicGetBytesFor: aByteCollection len: len].
	^result!

getLong
	"Read long integer from stream. 
	Answer <nil> if end of file has been reached."

	| buf |
	buf := ByteArray new: 4.
	^(self getBytesFor: buf len: 4) == 4 ifTrue: [buf odbLongAt: 1]!

getWord
	"Read word from file stream.
	Answer <nil> if end of file has been reached."

	| buf |
	buf := ByteArray new: 2.
	^(self getBytesFor: buf len: 2) == 2 ifTrue: [buf odbShortAt: 1]!

lastOsError
	^kernelLibrary getLastError!

lockAt: pos length: length 
	"Lock portion of file starting at position pos. 
        Answer <true> if successfull."

	| errorCode |
	(kernelLibrary 
		odbLockFile: fileHandle
		offsetLow: pos
		offsetHigh: 0
		lengthLow: length
		lengthHigh: 0) ifTrue: [^true].
	"is lock violation ?"
	(errorCode := self lastOsError) = 33 ifTrue: [^false].
	^self fileIOError: errorCode!

name
	^pathName!

openOn: aString fileHandle: aFileHandle 
	"Private - Initialize receiver."

	pathName := aString.
	fileHandle := aFileHandle.
	kernelLibrary := KernelLibrary default.
	mutex := Semaphore forMutualExclusion!

pathName
	^pathName!

position
	| pos |
	pos := kernelLibrary 
				setFilePointer: fileHandle
				lDistanceToMove: 0
				lpDistanceToMoveHigh: nil
				dwMoveMethod: FILE_CURRENT.
	^16rFFFFFFFF = pos ifFalse: [pos] ifTrue: [self fileIOError]!

position: anInteger 
	"Positiones stream to anInteger. Answer anInteger."

	| result |
	mutex critical: [result := self basicPosition: anInteger].
	^result!

printOn: aStream 
	aStream nextPutAll: 'ODBFileStream on: ''' , pathName , ''''!

putByte: anInteger 
	self putBytesFrom: (ByteArray with: anInteger) len: 1!

putBytesFrom: aByteCollection len: len 
	"Write len bytes from aByteCollection to file."

	mutex critical: [self basicPutBytesFrom: aByteCollection len: len]!

putLong: anInteger 
	| buf |
	buf := ByteArray new: 4.
	buf odbLongAt: 1 put: anInteger.
	self putBytesFrom: buf len: 4!

putWord: anInteger 
	| buf |
	buf := ByteArray new: 2.
	buf odbShortAt: 1 put: anInteger.
	self putBytesFrom: buf len: 2!

remove
	"Close and remove receiver. Answer <true> if removed."

	self close.
	^self class remove: pathName!

size
	"Answer the size of the file in bytes or
	signal a FileException if the operation fails."

	| result |
	result := kernelLibrary getFileSize: fileHandle lpFileSizeHigh: nil.
	^16rFFFFFFFF = result ifFalse: [result] ifTrue: [self fileIOError]!

truncate: anInteger 
	"Truncate stream so that its size will be anInteger. 
        Position to anInteger."

	mutex critical: 
			[self basicPosition: anInteger.
			(kernelLibrary odbSetEndOfFile: fileHandle) ifFalse: [self fileIOError]]!

unlockAt: pos length: length 
	"Unlock portion of file at position pos. 
        Answer <true> if successfull, <false> if failed."

	^kernelLibrary 
		odbUnlockFile: fileHandle
		offsetLow: pos
		offsetHigh: 0
		lengthLow: length
		lengthHigh: 0! !
!ODBFileStream categoriesFor: #atPosition:getBytesFor:!public! !
!ODBFileStream categoriesFor: #atPosition:getBytesFor:len:!public! !
!ODBFileStream categoriesFor: #atPosition:putBytesFrom:!public! !
!ODBFileStream categoriesFor: #atPosition:putBytesFrom:len:!public! !
!ODBFileStream categoriesFor: #atPosition:putLong:!public! !
!ODBFileStream categoriesFor: #atPositionGetLong:!public! !
!ODBFileStream categoriesFor: #basicGetBytesFor:len:!private! !
!ODBFileStream categoriesFor: #basicPosition:!private! !
!ODBFileStream categoriesFor: #basicPutBytesFrom:len:!private! !
!ODBFileStream categoriesFor: #close!public! !
!ODBFileStream categoriesFor: #compare:at:!public! !
!ODBFileStream categoriesFor: #fileIOError!private! !
!ODBFileStream categoriesFor: #fileIOError:!private! !
!ODBFileStream categoriesFor: #flush!public! !
!ODBFileStream categoriesFor: #getByte!public! !
!ODBFileStream categoriesFor: #getBytesFor:len:!public! !
!ODBFileStream categoriesFor: #getLong!public! !
!ODBFileStream categoriesFor: #getWord!public! !
!ODBFileStream categoriesFor: #lastOsError!private! !
!ODBFileStream categoriesFor: #lockAt:length:!public! !
!ODBFileStream categoriesFor: #name!public! !
!ODBFileStream categoriesFor: #openOn:fileHandle:!private! !
!ODBFileStream categoriesFor: #pathName!public! !
!ODBFileStream categoriesFor: #position!public! !
!ODBFileStream categoriesFor: #position:!public! !
!ODBFileStream categoriesFor: #printOn:!private! !
!ODBFileStream categoriesFor: #putByte:!public! !
!ODBFileStream categoriesFor: #putBytesFrom:len:!public! !
!ODBFileStream categoriesFor: #putLong:!public! !
!ODBFileStream categoriesFor: #putWord:!public! !
!ODBFileStream categoriesFor: #remove!public! !
!ODBFileStream categoriesFor: #size!public! !
!ODBFileStream categoriesFor: #truncate:!public! !
!ODBFileStream categoriesFor: #unlockAt:length:!public! !

!ODBFileStream class methodsFor!

accessModeReadOnly
	^GENERIC_READ!

accessModeReadWrite
	^GENERIC_READ | GENERIC_WRITE!

accessModeWriteOnly
	^GENERIC_WRITE!

cacheModeAtomicWrite
	"FILE_FLAG_ATOMIC_WRITE"

	^512!

cacheModeRandomAccess
	"FILE_FLAG_RANDOMACCESS"

	^268435456!

cacheModeSequentialScan
	"FILE_FLAG_SEQUENTIAL_SCAN"

	^134217728!

cacheModeWriteThrough
	"FILE_FLAG_WRITE_THROUGH"

	^2147483648!

createModeCreateAlways
	^CREATE_ALWAYS!

createModeCreateNew
	^CREATE_NEW!

createModeOpenAlways
	^OPEN_ALWAYS!

createModeOpenExisting
	^OPEN_EXISTING!

createNewOn: pathName 
	"Create new file on pathName. Trigger an error 
        if the file allready exists or if it can not be created."

	^self 
		createOn: pathName
		createMode: self createModeCreateNew
		accessMode: self accessModeReadWrite
		shareMode: self shareModeShareAll!

createOn: pathName 
	"Create new file on pathName. Trigger an 
        exception if the file can not be created."

	^self 
		createOn: pathName
		createMode: self createModeCreateAlways
		accessMode: self accessModeReadWrite
		shareMode: self shareModeShareAll!

createOn: pathName createMode: createMode accessMode: accessMode shareMode: shareMode 
	"Create new instance of file stream on pathName with given flags."

	^self 
		createOn: pathName
		createMode: createMode
		accessMode: accessMode
		shareMode: shareMode
		cacheMode: 0!

createOn: pathName createMode: createMode accessMode: accessMode shareMode: shareMode cacheMode: cacheMode 
	"Create new instance of file stream on pathName with given flags."

	| fd repeat |
	repeat := true.
	
	[(fd := KernelLibrary default 
				createFile: pathName
				dwDesiredAccess: accessMode
				dwSharedMode: shareMode
				lpSecurityAttributes: nil
				dwCreationDistribution: createMode
				dwFlagsAndAttributes: FILE_ATTRIBUTE_NORMAL | cacheMode
				hTemplateFile: nil) = INVALID_HANDLE_VALUE 
		ifFalse: [^self new openOn: pathName fileHandle: fd].
	repeat] 
			whileTrue: [repeat := false].
	^Win32Error signal!

directoryCreate: aString 
	File createDirectory: aString!

directoryExists: aString 
	^false!

exists: aString 
	^File exists: aString!

openExclusivelyOn: pathName 
	"Open an existing file on pathName. Trigger an 
	exception if the file can not be opened."

	^self 
		createOn: pathName
		createMode: self createModeOpenExisting
		accessMode: self accessModeReadWrite
		shareMode: self shareModeShareNone!

openOn: pathName 
	"Open an existing file on pathName. Trigger an 
        exception if the file can not be opened."

	^self 
		createOn: pathName
		createMode: self createModeOpenExisting
		accessMode: self accessModeReadWrite
		shareMode: self shareModeShareAll!

openReadOnlyOn: pathName 
	"Open an existing file on pathName. Trigger an 
        exception if the file can not be opened."

	^self 
		createOn: pathName
		createMode: self createModeOpenExisting
		accessMode: self accessModeReadOnly
		shareMode: self shareModeShareAll!

pathSeparatorString
	^'\'!

remove: fileName 
	"Remove file named fileName. Answer <true> if successfull, <false> if failed."

	
	[File delete: fileName.
	^true] on: Error do: [:ex | ^false]!

shareModeShareAll
	^FILE_SHARE_READ | FILE_SHARE_WRITE!

shareModeShareNone
	^0!

shareModeShareRead
	^FILE_SHARE_READ!

shareModeShareWrite
	^FILE_SHARE_WRITE! !
!ODBFileStream class categoriesFor: #accessModeReadOnly!public! !
!ODBFileStream class categoriesFor: #accessModeReadWrite!public! !
!ODBFileStream class categoriesFor: #accessModeWriteOnly!public! !
!ODBFileStream class categoriesFor: #cacheModeAtomicWrite!public! !
!ODBFileStream class categoriesFor: #cacheModeRandomAccess!public! !
!ODBFileStream class categoriesFor: #cacheModeSequentialScan!public! !
!ODBFileStream class categoriesFor: #cacheModeWriteThrough!public! !
!ODBFileStream class categoriesFor: #createModeCreateAlways!public! !
!ODBFileStream class categoriesFor: #createModeCreateNew!public! !
!ODBFileStream class categoriesFor: #createModeOpenAlways!public! !
!ODBFileStream class categoriesFor: #createModeOpenExisting!public! !
!ODBFileStream class categoriesFor: #createNewOn:!public! !
!ODBFileStream class categoriesFor: #createOn:!public! !
!ODBFileStream class categoriesFor: #createOn:createMode:accessMode:shareMode:!public! !
!ODBFileStream class categoriesFor: #createOn:createMode:accessMode:shareMode:cacheMode:!public! !
!ODBFileStream class categoriesFor: #directoryCreate:!public! !
!ODBFileStream class categoriesFor: #directoryExists:!public! !
!ODBFileStream class categoriesFor: #exists:!public! !
!ODBFileStream class categoriesFor: #openExclusivelyOn:!public! !
!ODBFileStream class categoriesFor: #openOn:!public! !
!ODBFileStream class categoriesFor: #openReadOnlyOn:!public! !
!ODBFileStream class categoriesFor: #pathSeparatorString!public! !
!ODBFileStream class categoriesFor: #remove:!public! !
!ODBFileStream class categoriesFor: #shareModeShareAll!public! !
!ODBFileStream class categoriesFor: #shareModeShareNone!public! !
!ODBFileStream class categoriesFor: #shareModeShareRead!public! !
!ODBFileStream class categoriesFor: #shareModeShareWrite!public! !

ODBMemoryReadStream guid: (GUID fromString: '{8162ee29-0fb8-11d4-b091-000000000000}')!
ODBMemoryReadStream comment: ''!
!ODBMemoryReadStream categoriesForClass!No category! !
!ODBMemoryReadStream methodsFor!

createOn: aByteArray 
	position := 0.
	current := aByteArray!

getByte
	^current at: (position := position + 1)!

getByteOr14forUndefinedObject
	^(position := position + 1) > current size ifFalse: [current at: position] ifTrue: [14]!

getBytesFor: aByteCollection len: len 
	current 
		replaceBytesOf: aByteCollection
		from: 1
		to: len
		startingAt: position + 1.
	position := position + len!

getChar
	^Character value: (current at: (position := position + 1))!

getLong
	position := position + 4.
	^current dwordAtOffset: position - 4!

getPositiveInteger
	"Answer the next Integer encoded in the receiver. 
	Works for one collection only."

	| answer |
	(answer := current at: (position := position + 1)) > 127 ifFalse: [^answer].
	^(self getPositiveInteger bitShift: 7) bitOr: (answer bitAnd: 127)!

getWord
	position := position + 2.
	^current wordAtOffset: position - 2!

position
	"Answer current position on stream."

	^position!

position: anInteger 
	position := anInteger!

readFrom: aStream 
	"Read receivers contents from aStream."

	| size |
	size := aStream getLong.
	aStream position + size > aStream size ifTrue: [^self error: 'Read beyond stream size !!'].
	current := ByteArray new: size.
	aStream getBytesFor: current len: size.
	position := 0!

size
	^current size! !
!ODBMemoryReadStream categoriesFor: #createOn:!initializing!public! !
!ODBMemoryReadStream categoriesFor: #getByte!public! !
!ODBMemoryReadStream categoriesFor: #getByteOr14forUndefinedObject!public! !
!ODBMemoryReadStream categoriesFor: #getBytesFor:len:!public! !
!ODBMemoryReadStream categoriesFor: #getChar!public! !
!ODBMemoryReadStream categoriesFor: #getLong!public! !
!ODBMemoryReadStream categoriesFor: #getPositiveInteger!public! !
!ODBMemoryReadStream categoriesFor: #getWord!public! !
!ODBMemoryReadStream categoriesFor: #position!public! !
!ODBMemoryReadStream categoriesFor: #position:!public! !
!ODBMemoryReadStream categoriesFor: #readFrom:!initializing!public! !
!ODBMemoryReadStream categoriesFor: #size!public! !

!ODBMemoryReadStream class methodsFor!

createOn: bytes

    ^self new createOn: bytes!

readFrom: aStream

    ^self new readFrom: aStream! !
!ODBMemoryReadStream class categoriesFor: #createOn:!public! !
!ODBMemoryReadStream class categoriesFor: #readFrom:!public! !

ODBMemoryWriteStream guid: (GUID fromString: '{8162ee2a-0fb8-11d4-b091-000000000000}')!
ODBMemoryWriteStream comment: ''!
!ODBMemoryWriteStream categoriesForClass!No category! !
!ODBMemoryWriteStream methodsFor!

asByteArray
	"Answer receiver as byte array."

	| i bytes pos len coll bytesSize |
	bytes := ByteArray new: (bytesSize := self size).
	pos := 0.
	i := 1.
	
	[coll := collections at: i.
	len := coll size.
	pos + len < bytesSize] whileTrue: 
				[bytes 
					replaceFrom: pos + 1
					to: (pos := pos + len)
					with: coll
					startingAt: 1.
				i := i + 1].
	bytes 
		replaceFrom: pos + 1
		to: bytesSize
		with: coll
		startingAt: 1.
	^bytes!

asStringObject
	"Answer receiver as string
        (selector #asString is not used because of printing on screen)."

	| i string pos len coll bytesSize |
	string := String new: (bytesSize := self size).
	pos := 0.
	i := 1.
	
	[coll := collections at: i.
	len := coll size.
	pos + len < bytesSize] whileTrue: 
				[string 
					replaceFrom: pos + 1
					to: (pos := pos + len)
					with: coll
					startingAt: 1.
				i := i + 1].
	string 
		replaceFrom: pos + 1
		to: bytesSize
		with: coll
		startingAt: 1.
	^string!

initialize
	collections := OrderedCollection new.
	readLimit := 0.
	position := 0!

makeSpace
	"Private - Add space on end of stream (add new collection)."

	collections add: (current := ByteArray new: (readLimit := 1024)).
	position := 0.
	lastSize := 0!

moveToNext
	"Private - Move to next collection or
        add space on end of stream if at last collection."

	position := 0.
	(current isNil or: [current == collections last]) 
		ifTrue: 
			[collections add: (current := ByteArray new: (readLimit := 1024)).
			lastSize := 0]
		ifFalse: 
			[1 to: collections size
				do: [:i | (collections at: i) == current ifTrue: [^current := collections at: i + 1]]]!

position
	"Answer current position on stream."

	| i size coll |
	current isNil ifTrue: [^0].
	i := 1.
	size := 0.
	[(coll := collections at: i) == current] whileFalse: 
			[i := i + 1.
			size := size + coll size].
	^size + position!

position: anInteger 
	"Set current position on stream."

	collections last == current ifTrue: [lastSize < position ifTrue: [lastSize := position]].
	position := anInteger.
	1 to: collections size
		do: 
			[:i | 
			current := collections at: i.
			position <= (readLimit := current size) ifTrue: [^self].
			position := position - readLimit].
	^self error: 'Position outside of stream !!'!

putByte: aByte 
	position < readLimit ifFalse: [self moveToNext].
	current at: (position := position + 1) put: aByte!

putBytesFrom: aByteCollection len: len 
	"Write aByteCollection to stream."

	len > (readLimit - position) 
		ifTrue: 
			[(current notNil 
				and: [collections last == current and: [len > 64 and: [len <= aByteCollection size]]]) 
					ifTrue: 
						[collections at: collections size put: (current copyFrom: 1 to: position).
						aByteCollection size = len 
							ifTrue: [collections add: aByteCollection]
							ifFalse: [collections add: (aByteCollection copyFrom: 1 to: len)].
						self makeSpace]
					ifFalse: [1 to: len do: [:i | self putByte: (aByteCollection at: i) asInteger]]]
		ifFalse: 
			[current 
				replaceFrom: position + 1
				to: position + len
				with: aByteCollection
				startingAt: 1.
			position := position + len]!

size
	"Answer stream size."

	| size count |
	current isNil ifTrue: [^0].
	size := 0.
	count := collections size.
	1 to: count - 1 do: [:i | size := size + (collections at: i) size].
	current == (collections at: count) 
		ifTrue: [lastSize < position ifTrue: [lastSize := position]].
	^size + lastSize!

writeOn: aStream 
	"Write receivers contents on aStream."

	| count |
	aStream putLong: self size.
	(count := collections size) == 0 
		ifFalse: 
			[1 to: count - 1 do: [:i | aStream putBytesFrom: (collections at: i)].
			aStream putBytesFrom: (collections at: count) len: lastSize]! !
!ODBMemoryWriteStream categoriesFor: #asByteArray!public! !
!ODBMemoryWriteStream categoriesFor: #asStringObject!public! !
!ODBMemoryWriteStream categoriesFor: #initialize!private! !
!ODBMemoryWriteStream categoriesFor: #makeSpace!private! !
!ODBMemoryWriteStream categoriesFor: #moveToNext!private! !
!ODBMemoryWriteStream categoriesFor: #position!public! !
!ODBMemoryWriteStream categoriesFor: #position:!public! !
!ODBMemoryWriteStream categoriesFor: #putByte:!public! !
!ODBMemoryWriteStream categoriesFor: #putBytesFrom:len:!public! !
!ODBMemoryWriteStream categoriesFor: #size!public! !
!ODBMemoryWriteStream categoriesFor: #writeOn:!public! !

!ODBMemoryWriteStream class methodsFor!

new

    ^super new initialize! !
!ODBMemoryWriteStream class categoriesFor: #new!instance creation!public! !

ODBLocalTransaction guid: (GUID fromString: '{8162ee2b-0fb8-11d4-b091-000000000000}')!
ODBLocalTransaction comment: ''!
!ODBLocalTransaction categoriesForClass!No category! !
!ODBLocalTransaction methodsFor!

addLock: aLock 
	"Private - Add aLock to receiver."

	locks add: aLock!

addLoggedLock: aLock 
	"Private - Add aLock to receiver and store it to transaction file."

	locks add: aLock.
	transactionFile lockAdd: aLock!

application
	^application!

application: anObject 
	"Set application object for the transaction.
	This is just a value holder that can be used by the end user.
	Setting application has no effect in OmniBase."

	application := anObject!

becomeInconsistent
	"Mark that transaction changes are inconsistent. 
	If transaction is inconsistent, it can not be committed!! "

	inconsistent := true!

changesPackage
	^changesPackage!

checkpoint
	"Checkpoint transaction i.e. write all persistent objects that are marked as dirty or new into database.
	Only changes are written into the database. This is an atomic operation which will either complete successfully
	or fail completely with no changes whatsoever written into the database. After writing changes all locks on already
	existing object will still be set. Objects that were new, had no locks set and are thus not locked. Transaction can
	be checkpointed more than once. As seen below the whole process of writing changes into the database (files)
	is executed using a semaphore therefore only one transaction per database session can write its changes at a time."

	self isInconsistent ifTrue: [OmniBase signalError: 'Transaction is inconsistent'].
	transactionManager critical: 
			[[self prepare] ifCurtailed: 
					[self becomeInconsistent.
					transactionManager transactionCommitEnd: self].
			[changesPackage commit] ifCurtailed: 
					[self
						becomeInconsistent;
						basicAbort]].
	self committed!

commit
	self
		checkpoint;
		abort!

committed
	"Private - Transaction has just been committed."

	"End of transaction"

	transactionFile recovery: nil.
	transactionManager transactionCommitEnd: self.
	"Update transaction objects"
	changesPackage committed.
	changesPackage := nil!

initialize
	"Private - Initialize receiver."

	super initialize.
	newObjects := Array new: 16!

isChanged
	"Answer true if changes were made to objects in this transaction."

	objectIndex do: [:transactionObject | transactionObject isChanged ifTrue: [^true]].
	^false!

isInconsistent
	"Answer true if transaction changes are inconsistent. 
	If transaction is inconsistent, it can not be committed."

	^inconsistent == true!

lock: anObject 
	"Lock anObject."

	| transactionObject |
	transactionObject := self getTransactionObject: anObject ifAbsent: [^true].
	transactionObject objectID index == 0 ifTrue: [^true].
	^transactionObject lock!

lockID
	"Private - Answer unique lock ID. Create transaction 
	file, if no locks have been set before. Answer <nil> 
	if database is globally locked by another user and no 
	locks can currently be set."

	locks isNil 
		ifTrue: 
			[(transactionFile := client newTransactionFileFor: self) isNil ifTrue: [^nil].
			locks := OrderedCollection new].
	^transactionFile transactionID!

makePersistent: anObject 
	^self makePersistent: anObject in: dbConnection objectManager defaultContainer!

makePersistent: anObject in: aContainerOrContainerName 
	"Store anObject into specified container if it is not stored yet, else do nothing.
	Answer anObject."

	| container |
	anObject odbObjectID isNil ifFalse: [^anObject].
	self getTransactionObject: anObject
		ifAbsent: 
			[aContainerOrContainerName class == ODBContainer 
				ifFalse: 
					[container := dbConnection objectManager containerNamed: aContainerOrContainerName
								ifAbsent: [OmniBase signalError: 'Container does not exist']]
				ifTrue: [container := aContainerOrContainerName].
			self storeNewObject: anObject inContainer: container].
	^anObject!

markDirty: anObject 
	"Mark anObject as dirty so that it will be written to the 
	database when message #commit is sent.
	Note: if an object is not loaded yet i.e. the message #markDirty is sent to an unresolved ODBReference the object will not be marked as dirty.
	Therefore send #markDirty after you've loaded and changed the object, not before, else use #odbResolve before sending #markDirty."

	| objectToStore transactionObject |
	cacheMutex isNil 
		ifTrue: 
			["transaction is already aborted"
			OmniBase signalError: 'Transaction is already aborted.'].
	(objectToStore := anObject) odbObjectID isNil 
		ifFalse: 
			[anObject isODBReference ifFalse: [^self].
			anObject odbNotLoaded ifTrue: [^self].
			anObject odbTransaction == self ifFalse: [objectToStore := anObject odbResolve]].
	transactionObject := self getTransactionObject: objectToStore
				ifAbsent: 
					[OmniBase 
						signalError: 'Object is not persistent or is a part of composite persistent object'].
	transactionObject objectID index = 0 ifTrue: [^true].
	transactionObject lock ifFalse: [^self signalLockingConflictAt: anObject].
	transactionObject objectChanged!

peekTransactionObjectAt: objectID 
	"Answer transaction object at objectID but do not cache it in transaction."

	| holder transactionObject |
	(transactionObject := self cachedTransactionObjectAt: objectID) isNil 
		ifFalse: [^transactionObject].
	(holder := dbConnection objectManager holderAt: objectID) == nil 
		ifTrue: [OmniBase signalError: 'Invalid object ID'].
	[versionDescriptor versionOK: holder versionNumber] 
		whileFalse: [holder loadPreviousVersionFrom: self oldHolders].
	transactionObject := holder getObject makeTransactionObject: self.
	^transactionObject objectLoaded!

prepare
	"Private - Prepare for commit."

	| serializer coll holder array index allObjects lastSize notFirstPass |
	allObjects := OmniBase newIdentitySet: objectIndex size.
	notFirstPass := false.
	"send #odbAboutToCommitIn: to every persistent object in cache"
	"if any object stores additional objects do it again for new objects"
	
	[lastSize := objectIndex size.
	objectIndex values do: 
			[:each | 
			(notFirstPass and: [allObjects includes: each]) 
				ifFalse: 
					[each odbAboutToCommitIn: self.
					allObjects add: each]].
	lastSize = objectIndex size] 
			whileFalse: [notFirstPass := true].
	cacheMutex critical: 
			["initialize object ID indexes for new objects & lock & store them"
			1 to: newObjects size
				do: 
					[:i | 
					(coll := newObjects at: i) isNil 
						ifFalse: 
							[array := Array new: coll size.
							index := 0.
							coll do: 
									[:each | 
									index := index + 1.
									holder := each objectHolder.
									array at: index put: holder].
							holder container initHolders: array.
							coll do: [:each | objects at: each objectHolder objectID put: each].
							newObjects at: i put: nil]].
			self lockID isNil ifTrue: [OmniBase signalError: 'Database is globaly locked by another user'].
			"make reference map"
			serializer := ODBSerializer new.
			self transactionReferences 
				do: [:each | serializer addExternalReference: each key objectId: each value].
			objectIndex 
				keysAndValuesDo: [:key :value | serializer addExternalReference: key objectId: value objectID]].
	"get new version number"
	transactionManager transactionCommitBegin: self.
	transactionFile versionNumber: versionDescriptor versionNumber.
	"collect changes on transaction objects"
	changesPackage := ODBChangesPackage new.
	allObjects do: [:transactionObject | transactionObject commit: serializer].
	dbConnection objectManager flushContainers.
	self oldHolders flush.
	transactionFile recovery: changesPackage!

removeCachedObjectID: objectID 
	"Remove transaction object associated with objectID."

	objects isNil ifFalse: [cacheMutex critical: [objects removeKey: objectID]]!

removeLock: aLock 
	"Private - Remove aLock from collection of set locks."

	locks remove: aLock ifAbsent: []!

removeLoggedLock: aODBLock 
	"Private - Remove anODBLock from receiver and remove it from transaction file."

	locks remove: aODBLock ifAbsent: [].
	transactionFile lockRemove: aODBLock!

root: anObject 
	"Set the root object of the database."

	| rootObjectHolder rootOID |
	rootOID := ODBObjectID containerID: 1 index: 1.
	(rootObjectHolder := self objectAt: rootOID) isNil 
		ifTrue: 
			[rootObjectHolder := ODBRootObjectHolder new.
			self store: rootObjectHolder.
			cacheMutex critical: [objects at: rootOID put: rootObjectHolder]].
	rootObjectHolder rootObject: anObject!

signalLockingConflictAt: anObject 
	"Private - anObject could not have been locked. 
	Signal an error."

	| transactionObject |
	transactionObject := self getTransactionObject: anObject
				ifAbsent: [OmniBase signalError: 'Internal locking error'].
	transactionObject objectHolder oldVersion 
		ifTrue: [OmniBase signalObjectAlreadyChangedInAnotherTransactionError]
		ifFalse: [OmniBase signalObjectAlreadyLockedInAnotherTransactionError]!

start
	"Start transaction. Transaction is read-only 
	until no objects are locked."

	transactionManager transactionStart: self!

startFrom: aTransaction 
	"Start transaction.
	Transaction is read-only until no objects are locked.
	Version descriptor from aTransaction is valid at start."

	versionDescriptor := aTransaction versionDescriptor copy!

startInVersion: aVersionDescriptor 
	versionDescriptor := aVersionDescriptor!

store: anObject 
	^self 
		store: anObject
		in: dbConnection objectManager defaultContainer
		ifLocked: [self signalLockingConflictAt: anObject]!

store: anObject ifLocked: aBlock 
	^self 
		store: anObject
		in: dbConnection objectManager defaultContainer
		ifLocked: aBlock!

store: anObject in: aContainerOrContainerName 
	^self 
		store: anObject
		in: aContainerOrContainerName
		ifLocked: [self signalLockingConflictAt: anObject]!

store: anObject in: anODBContainerOrString ifLocked: aBlock 
	"Store anObject into given container anODBContainerOrString which can be either a String (container name) or an ODBContainer.
	Evaluate aBlock if anObject can not be locked."

	| objectToStore transactionObject container |
	(objectToStore := anObject) odbObjectID isNil 
		ifFalse: 
			[anObject isODBReference ifFalse: [^self].
			anObject odbNotLoaded ifTrue: [^self].
			anObject odbTransaction == self ifFalse: [objectToStore := anObject odbResolve]].
	transactionObject := self getTransactionObject: objectToStore
				ifAbsent: 
					[anODBContainerOrString class == ODBContainer 
						ifFalse: 
							[container := dbConnection objectManager containerNamed: anODBContainerOrString
										ifAbsent: [OmniBase signalError: 'Invalid container name']]
						ifTrue: [container := anODBContainerOrString].
					^self storeNewObject: objectToStore inContainer: container].
	"* namesto: (self lock: anObject) ifFalse: [ ^aBlock value ]."
	transactionObject objectID index == 0 ifTrue: [^true].	"*"
	transactionObject lock ifFalse: [^aBlock value].	"*"
	transactionObject objectChanged!

storeNewObject: anObject inContainer: aContainer 
	"Store anObject into specified container."

	| transactionObject holder coll id |
	holder := aContainer newObjectHolder.
	anObject isODBTransactionObject 
		ifFalse: [transactionObject := ODBSerializedObject new value: anObject]
		ifTrue: [transactionObject := anObject].
	transactionObject setObjectHolder: holder transaction: self.
	cacheMutex critical: 
			[(id := aContainer id) > newObjects size 
				ifTrue: 
					[(coll := Array new: id) 
						replaceFrom: 1
						to: newObjects size
						with: newObjects
						startingAt: 1.
					newObjects := coll].
			(coll := newObjects at: id) isNil 
				ifTrue: 
					[coll := OrderedCollection new: 32.
					newObjects at: id put: coll].
			coll add: transactionObject.
			objectIndex at: anObject put: transactionObject].
	transactionObject objectStored!

unlock: anObject 
	"Unlock anObject."

	| transactionObject |
	transactionObject := self getTransactionObject: anObject ifAbsent: [^true].
	transactionObject isChanged ifTrue: [^false].	"Changed objects can not be unlocked."
	^transactionObject unlock! !
!ODBLocalTransaction categoriesFor: #addLock:!private! !
!ODBLocalTransaction categoriesFor: #addLoggedLock:!private! !
!ODBLocalTransaction categoriesFor: #application!public! !
!ODBLocalTransaction categoriesFor: #application:!public! !
!ODBLocalTransaction categoriesFor: #becomeInconsistent!public! !
!ODBLocalTransaction categoriesFor: #changesPackage!private! !
!ODBLocalTransaction categoriesFor: #checkpoint!public! !
!ODBLocalTransaction categoriesFor: #commit!public! !
!ODBLocalTransaction categoriesFor: #committed!private! !
!ODBLocalTransaction categoriesFor: #initialize!private! !
!ODBLocalTransaction categoriesFor: #isChanged!public! !
!ODBLocalTransaction categoriesFor: #isInconsistent!public! !
!ODBLocalTransaction categoriesFor: #lock:!public! !
!ODBLocalTransaction categoriesFor: #lockID!private! !
!ODBLocalTransaction categoriesFor: #makePersistent:!public! !
!ODBLocalTransaction categoriesFor: #makePersistent:in:!public! !
!ODBLocalTransaction categoriesFor: #markDirty:!public! !
!ODBLocalTransaction categoriesFor: #peekTransactionObjectAt:!private! !
!ODBLocalTransaction categoriesFor: #prepare!private! !
!ODBLocalTransaction categoriesFor: #removeCachedObjectID:!private! !
!ODBLocalTransaction categoriesFor: #removeLock:!private! !
!ODBLocalTransaction categoriesFor: #removeLoggedLock:!private! !
!ODBLocalTransaction categoriesFor: #root:!public! !
!ODBLocalTransaction categoriesFor: #signalLockingConflictAt:!private! !
!ODBLocalTransaction categoriesFor: #start!public! !
!ODBLocalTransaction categoriesFor: #startFrom:!public! !
!ODBLocalTransaction categoriesFor: #startInVersion:!public! !
!ODBLocalTransaction categoriesFor: #store:!public! !
!ODBLocalTransaction categoriesFor: #store:ifLocked:!public! !
!ODBLocalTransaction categoriesFor: #store:in:!public! !
!ODBLocalTransaction categoriesFor: #store:in:ifLocked:!public! !
!ODBLocalTransaction categoriesFor: #storeNewObject:inContainer:!private! !
!ODBLocalTransaction categoriesFor: #unlock:!public! !

ODBTerminatedTransaction guid: (GUID fromString: '{8162ee2c-0fb8-11d4-b091-000000000000}')!
ODBTerminatedTransaction comment: ''!
!ODBTerminatedTransaction categoriesForClass!No category! !
!ODBTerminatedTransaction methodsFor!

start
	"Start transaction. Transaction has been terminated 
        without being aborted in previous session."

	transactionManager transactionStart: self.
	versionDescriptor versionNumber: transactionFile versionNumber.
	locks := transactionFile locks!

transactionFile: aTransactionFile 
	transactionFile := aTransactionFile! !
!ODBTerminatedTransaction categoriesFor: #start!public! !
!ODBTerminatedTransaction categoriesFor: #transactionFile:!private! !

ODBGlobalLockedTransaction guid: (GUID fromString: '{8162ee2d-0fb8-11d4-b091-000000000000}')!
ODBGlobalLockedTransaction comment: ''!
!ODBGlobalLockedTransaction categoriesForClass!No category! !
!ODBGlobalLockedTransaction methodsFor!

addLock: aLock 
	"Private - Add aLock to receiver."

	OmniBase signalError: 'Global transaction should not set locks'!

isGlobalLocked
	"Answer <true> if transaction was started in a global locked database session."

	^true!

removeLock: aLock 
	"Private - Remove aLock from receiver."

	OmniBase signalError: 'Global transaction should not set locks'! !
!ODBGlobalLockedTransaction categoriesFor: #addLock:!private! !
!ODBGlobalLockedTransaction categoriesFor: #isGlobalLocked!public! !
!ODBGlobalLockedTransaction categoriesFor: #removeLock:!private! !

ODBReadOnlyTransaction guid: (GUID fromString: '{d1eb92fd-3f84-11d4-b102-000000000000}')!
ODBReadOnlyTransaction comment: ''!
!ODBReadOnlyTransaction categoriesForClass!Unclassified! !
!ODBReadOnlyTransaction methodsFor!

addLock: aLock 
	"Private - Add anODBLock to receiver."

	OmniBase signalError: 'Read-only transaction should not set locks'!

checkpoint
	"Do nothing."

	!

commit
	"Do nothing."

	self abort!

isChanged
	^false!

isReadOnly
	"Answer <true> if this is a read-only transaction."

	^true!

lock: anObject 
	^true!

makePersistent: anObject in: aContainerOrContainerName 
	"Do nothing."

	^anObject!

markDirty: anObject 
	"Do nothing."

	!

removeLock: aLock 
	"Private - Remove anODBLock from receiver."

	OmniBase signalError: 'Read-only transaction should not set locks'!

store: anObject in: containerName ifLocked: aBlock 
	"Do nothing."

	^anObject!

unlock: anObject 
	^true! !
!ODBReadOnlyTransaction categoriesFor: #addLock:!private! !
!ODBReadOnlyTransaction categoriesFor: #checkpoint!public! !
!ODBReadOnlyTransaction categoriesFor: #commit!public! !
!ODBReadOnlyTransaction categoriesFor: #isChanged!public! !
!ODBReadOnlyTransaction categoriesFor: #isReadOnly!public! !
!ODBReadOnlyTransaction categoriesFor: #lock:!public! !
!ODBReadOnlyTransaction categoriesFor: #makePersistent:in:!public! !
!ODBReadOnlyTransaction categoriesFor: #markDirty:!public! !
!ODBReadOnlyTransaction categoriesFor: #removeLock:!private! !
!ODBReadOnlyTransaction categoriesFor: #store:in:ifLocked:!public! !
!ODBReadOnlyTransaction categoriesFor: #unlock:!public! !

ODBLongReadOnlyTransaction guid: (GUID fromString: '{5e3ff872-36a8-4295-afa5-6f91f1d17b94}')!
ODBLongReadOnlyTransaction comment: ''!
!ODBLongReadOnlyTransaction categoriesForClass!Unclassified! !
!ODBLongReadOnlyTransaction methodsFor!

canReconnectConnectionOnClosedDatabase
	^true! !
!ODBLongReadOnlyTransaction categoriesFor: #canReconnectConnectionOnClosedDatabase!private! !

ODBBTreeIndexDictionary guid: (GUID fromString: '{8162ee2e-0fb8-11d4-b091-000000000000}')!
ODBBTreeIndexDictionary comment: ''!
!ODBBTreeIndexDictionary categoriesForClass!No category! !
!ODBBTreeIndexDictionary methodsFor!

at: aKey 
	^self at: aKey ifAbsent: []!

at: aKey ifAbsent: aBlock 
	| key value |
	key := self bytesFromKey: aKey.
	value := self valueAt: key ifAbsent: [^aBlock value].
	value isRemoved ifTrue: [^aBlock value].
	^value getObjectIn: transaction!

at: aKey ifAbsentPut: aBlock 
	^self at: aKey ifAbsent: [self at: aKey put: aBlock value]!

at: aKey put: anObject 
	"Associate aKey with anObject. Answer anObject."

	| key value |
	key := self bytesFromKey: aKey.
	value := self valueAt: key.
	value object: anObject.
	changed isNil ifTrue: [changed := self newChangedDictionary].
	changed at: key put: value.
	^anObject!

basicGoTo: aByteArray 
	currentKey := aByteArray.
	changed isNil ifFalse: [changed goTo: currentKey]!

bytesFromKey: anObject 
	^anObject asBtreeKeyOfSize: keySize!

commit: serializer 
	"Commit changes."

	dataBaseObject isNil ifTrue: [self commitNew] ifFalse: [self commitChanged]!

commitChanged
	"Private - Commit changes on an already existing dictionary."

	| changesPackage newValue vn oldHolders |
	changesPackage := transaction changesPackage.
	changesPackage add: (ODBDictionaryChanged new transactionObject: self).
	vn := transaction versionNumber.
	oldHolders := transaction oldHolders.
	changed isNil 
		ifFalse: 
			[changed keysAndValuesDo: 
					[:key :oldValue | 
					newValue := oldValue makeNewVersion: oldHolders.
					newValue versionNumber: vn.
					oldValue isRemoved 
						ifFalse: [newValue objectID: (transaction getObjectID: newValue object)].
					changesPackage add: ((ODBAssociationChanged new)
								key: key;
								setObjectID: holder objectID transactionObject: self;
								oldValue: oldValue;
								newValue: newValue)]]!

commitNew
	"Private - Commit changes when new database object needs to be created."

	| newHolder newDBObject vn |
	vn := transaction versionNumber.
	newHolder := (holder makeNewVersion: transaction oldHolders)
				persistentClassID: self databaseObjectClass classID;
				versionNumber: vn.
	newDBObject := self databaseObjectClass new createOn: newHolder keySize: keySize.
	changed notNil 
		ifTrue: 
			[changed keysAndValuesDo: 
					[:key :value | 
					value isRemoved 
						ifFalse: 
							[value
								objectID: (transaction getObjectID: value object);
								versionNumber: vn.
							newDBObject at: key put: value]]].
	(transaction changesPackage)
		add: ((ODBNewObjectVersion new)
					setObjectID: holder objectID transactionObject: self;
					oldVersion: holder;
					newVersion: newHolder);
		add: ((ODBDictionaryChanged new)
					transactionObject: self;
					dataBaseObject: newDBObject)!

databaseObjectClass
	^ODBDBBTreeIndexDictionary!

dbPeekNext
	| iterator assoc valueHolder |
	dataBaseObject isNil ifTrue: [^nil].
	iterator := dataBaseObject iterator.
	"critical section begin"
	iterator critical: 
			[iterator goTo: currentKey.
			
			[(assoc := iterator getNext) isNil ifTrue: [^nil].
			valueHolder := ODBValueHolder createOn: assoc value.
			[transaction versionDescriptor versionOK: valueHolder versionNumber] 
				whileFalse: [valueHolder loadPreviousVersionFrom: transaction oldHolders].
			valueHolder isRemoved] 
					whileTrue: []].
	"critical section end"
	^ODBBTreeDictionaryAssociation new 
		setTransaction: transaction
		key: (self keyFromBytes: assoc key)
		value: valueHolder!

dbPeekPrevious
	| iterator assoc valueHolder |
	dataBaseObject isNil ifTrue: [^nil].
	iterator := dataBaseObject iterator.
	"critical section begin"
	iterator critical: 
			[iterator goTo: currentKey.
			
			[(assoc := iterator getPrevious) isNil ifTrue: [^nil].
			valueHolder := ODBValueHolder createOn: assoc value.
			[transaction versionDescriptor versionOK: valueHolder versionNumber] 
				whileFalse: [valueHolder loadPreviousVersionFrom: transaction oldHolders].
			valueHolder isRemoved] 
					whileTrue: []].
	"critical section end"
	^ODBBTreeDictionaryAssociation new 
		setTransaction: transaction
		key: (self keyFromBytes: assoc key)
		value: valueHolder!

do: aBlock 
	"Evaluate aBlock for each object in the dictionary.
	NOTE: All objects will be loaded in one transaction at once.
	Do not use this method if there are a lot of objects in the dictionary since this could take some time."

	| assoc |
	assoc := self getFirst.
	[assoc isNil] whileFalse: 
			[aBlock value: assoc value.
			assoc := self getNext]!

forKeysStartingWith: aStringOrByteArray do: aBlock 
	"Evaluate aOneArgumentBlock for every key that starts with aStringOrByteArray."

	| fromKey toKey assoc |
	fromKey := self bytesFromKey: aStringOrByteArray.
	toKey := fromKey copy.
	aStringOrByteArray size + 1 to: keySize do: [:i | toKey at: i put: 255].
	self basicGoTo: fromKey.
	(assoc := self getCurrent) isNil ifTrue: [assoc := self getNext].
	[assoc isNil] whileFalse: 
			[(toKey odbIsLessThan: assoc key) ifTrue: [^self].
			aBlock value: assoc value.
			assoc := self getNext]!

getCurrent
	| a |
	changed isNil 
		ifFalse: 
			[(a := changed getCurrent) isNil 
				ifFalse: 
					[a valueHolder isRemoved ifTrue: [^nil].
					^a]].
	(dataBaseObject isNil 
		or: [(a := dataBaseObject iterator goToAndGetCurrentAt: currentKey) isNil]) ifTrue: [^nil].
	a := ODBValueHolder createOn: a value.
	[transaction versionDescriptor versionOK: a versionNumber] 
		whileFalse: [a loadPreviousVersionFrom: transaction oldHolders].
	a isRemoved ifTrue: [^nil].
	^ODBBTreeDictionaryAssociation new 
		setTransaction: transaction
		key: (self keyFromBytes: currentKey)
		value: a!

getFirst
	| assoc |
	self basicGoTo: (ByteArray new: keySize).
	(assoc := self getCurrent) isNil ifTrue: [^self getNext].
	^assoc!

getLast
	| assoc |
	self basicGoTo: ((ByteArray new: keySize) atAllPut: 255).
	(assoc := self getCurrent) isNil ifTrue: [^self getPrevious].
	^assoc!

getNext
	| a1 a2 |
	changed isNil 
		ifFalse: 
			[[(a1 := changed peekNext) isNil] whileFalse: 
					[((a2 := self dbPeekNext) notNil and: [a2 < a1]) 
						ifTrue: 
							[changed goTo: (currentKey := a2 key).
							^a2].
					currentKey := a1 key.
					changed goToNext.
					a1 valueHolder isRemoved ifFalse: [^a1]]].
	(a2 := self dbPeekNext) isNil ifTrue: [^nil].
	currentKey := self bytesFromKey: a2 key.
	^a2!

getPrevious
	| a1 a2 |
	changed isNil 
		ifFalse: 
			[[(a1 := changed peekPrevious) isNil] whileFalse: 
					[((a2 := self dbPeekPrevious) notNil and: [a1 < a2]) 
						ifTrue: 
							[changed goTo: (currentKey := a2 key).
							^a2].
					currentKey := a1 key.
					changed goToPrevious.
					a1 valueHolder isRemoved ifFalse: [^a1]]].
	(a2 := self dbPeekPrevious) isNil ifTrue: [^nil].
	currentKey := self bytesFromKey: a2 key.
	^a2!

goTo: aKey 
	self basicGoTo: (self bytesFromKey: aKey)!

includesKey: aKey 
	| value |
	value := self valueAt: (self bytesFromKey: aKey) ifAbsent: [^false].
	^value isRemoved not!

initialize
	"Private - Initialize receiver."

	super initialize.
	keySize := 32!

isChanged
	"Answer <true> if object has been changed."

	^changed notNil or: [dataBaseObject isNil]!

isEmpty
	^self size = 0!

keyFromBytes: aByteArray 
	^aByteArray!

keyLength
	^keySize!

keys
	"Answer collection of all keys in the dictionary."

	| assoc keysColl |
	keysColl := OrderedCollection new.
	assoc := self getFirst.
	[assoc isNil] whileFalse: 
			[keysColl add: (self keyFromBytes: assoc key).
			assoc := self getNext].
	^keysColl!

keysFrom: key1 to: key2 do: aBlock 
	"Evaluate aBlock for each key in the given key range."

	| toKey assoc |
	toKey := self bytesFromKey: key2.
	self goTo: key1.
	(assoc := self getCurrent) isNil ifTrue: [assoc := self getNext].
	[assoc isNil] whileFalse: 
			[(toKey odbIsLessThan: assoc key) ifTrue: [^self].
			aBlock value: assoc key.
			assoc := self getNext]!

keySize: anInteger 
	"Private - Set the key upon creation size."

	keySize := anInteger.
	(keySize < 300 and: [keySize > 1]) 
		ifFalse: [OmniBase signalError: 'Please choose key size between 2 and 300 bytes']!

newChangedDictionary
	^ODBSortedDictionary new!

objectCommitted
	"Private - Changes have been committed, update object."

	changed := nil!

removeKey: aKey 
	| key value |
	key := self bytesFromKey: aKey.
	value := self valueAt: key ifAbsent: [^nil].
	value isRemoved 
		ifFalse: 
			[value removed.
			changed isNil ifTrue: [changed := self newChangedDictionary].
			changed at: key put: value]!

selectKeysFrom: prefix1 to: prefix2 
	"Select all keys between prefix1 and prefix2."

	| toKey keys |
	keys := OrderedCollection new.
	prefix1 size > keySize ifTrue: [^keys].
	toKey := prefix2 , ((String new: keySize - prefix2 size) atAllPut: 255 asCharacter).
	self 
		keysFrom: prefix1
		to: toKey
		do: [:key | keys add: key].
	^keys!

selectKeysStartingWith: aString 
	"Select all keys that start with aString."

	| toKey keys |
	keys := OrderedCollection new.
	aString size > keySize ifTrue: [^keys].
	toKey := aString , ((String new: keySize - aString size) atAllPut: 255 asCharacter).
	self 
		keysFrom: aString
		to: toKey
		do: [:key | keys add: key].
	^keys!

transactionAssociationsDo: aBlock 
	"Evaluate a block for each association in dictionary.
        New transaction will be created for each key."

	| subTransaction valueHolder versionDescriptor client |
	dataBaseObject isNil ifTrue: [OmniBase signalError: 'Object has not been stored yet'].
	versionDescriptor := transaction versionDescriptor.
	client := transaction client.
	dataBaseObject associationsDo: 
			[:assoc | 
			valueHolder := assoc value.
			[versionDescriptor versionOK: valueHolder versionNumber] 
				whileFalse: [valueHolder loadPreviousVersionFrom: transaction oldHolders].
			valueHolder isRemoved 
				ifFalse: 
					[subTransaction := client newTransactionFrom: transaction.
					aBlock value: subTransaction
						value: (Association key: assoc key
								value: (subTransaction referenceAt: valueHolder objectID)).
					subTransaction abort]]!

transactionDo: aBlock 
	"Evaluate a block for every object in dictionary.
        New transaction will be created for each key+value pair."

	| subTransaction client versionDescriptor |
	dataBaseObject isNil ifTrue: [OmniBase signalError: 'Object has not been stored yet'].
	versionDescriptor := transaction versionDescriptor.
	client := transaction client.
	dataBaseObject valuesDo: 
			[:valueHolder | 
			[versionDescriptor versionOK: valueHolder versionNumber] 
				whileFalse: [valueHolder loadPreviousVersionFrom: transaction oldHolders].
			valueHolder isRemoved 
				ifFalse: 
					[subTransaction := client newTransaction.
					"take new version descriptor"
					versionDescriptor := subTransaction versionDescriptor.
					aBlock value: subTransaction value: (subTransaction objectAt: valueHolder objectID).
					subTransaction abort]]!

transactionReadOnlyDo: aBlock 
	"Evaluate a block for every object in dictionary.
	New transaction will be created for each key+value pair."

	| subTransaction versionDescriptor client |
	dataBaseObject isNil ifTrue: [OmniBase signalError: 'Object has not been stored yet'].
	versionDescriptor := transaction versionDescriptor.
	client := transaction client.
	dataBaseObject valuesDo: 
			[:valueHolder | 
			[versionDescriptor versionOK: valueHolder versionNumber] 
				whileFalse: [valueHolder loadPreviousVersionFrom: transaction oldHolders].
			valueHolder isRemoved 
				ifFalse: 
					[subTransaction := client newTransactionFrom: transaction.
					aBlock value: subTransaction value: (subTransaction objectAt: valueHolder objectID).
					subTransaction abort]]!

transactionValueBlocksDo: aBlock 
	"Evaluate a block for every 100 objects in dictionary.
        New transaction is created each time aBlock is evaluated."

	| subTransaction objects count client versionDescriptor |
	dataBaseObject isNil ifTrue: [OmniBase signalError: 'Object has not been stored yet'].
	client := transaction client.
	count := 0.
	objects := OrderedCollection new: 40.
	subTransaction := client newTransaction.
	"take new version descriptor"
	versionDescriptor := subTransaction versionDescriptor.
	
	[dataBaseObject valuesDo: 
			[:valueHolder | 
			[versionDescriptor versionOK: valueHolder versionNumber] 
				whileFalse: [valueHolder loadPreviousVersionFrom: transaction oldHolders].
			valueHolder isRemoved 
				ifFalse: 
					[objects add: (subTransaction objectAt: valueHolder objectID).
					(count := count + 1) == 40 
						ifTrue: 
							[aBlock value: subTransaction value: objects.
							subTransaction abort.
							count := 0.
							objects := OrderedCollection new: 40.
							subTransaction := client newTransaction.
							"take new version descriptor"
							versionDescriptor := subTransaction versionDescriptor]]].
	count > 0 ifTrue: [aBlock value: subTransaction value: objects]] 
			ensure: [subTransaction abort]!

valueAt: key 
	"Private - Answer persistent object value at key  with right version loaded."

	^self valueAt: key ifAbsent: [ODBValueHolder new]!

valueAt: aKey ifAbsent: aBlock 
	"Private - Answer correct version of value holder at aKey, evaluate aBlock if absent."

	| value |
	changed isNil 
		ifFalse: 
			[value := changed at: aKey.
			value isNil ifFalse: [^value]].
	dataBaseObject isNil ifTrue: [^aBlock value].
	(value := dataBaseObject iterator goToAndGetCurrentAt: aKey) isNil 
		ifTrue: [^aBlock value].
	value := ODBValueHolder createOn: value value.
	[transaction versionDescriptor versionOK: value versionNumber] 
		whileFalse: [value loadPreviousVersionFrom: transaction oldHolders].
	^value!

values
	"Answer collection of all objects in the dictionary.
	NOTE: All objects will be loaded in one transaction at once.
	Do not use this method if there are a lot of objects in the dictionary since this could block your image for some time."

	| coll assoc |
	coll := OrderedCollection new.
	assoc := self getFirst.
	[assoc isNil] whileFalse: 
			[coll add: assoc value.
			assoc := self getNext].
	^coll! !
!ODBBTreeIndexDictionary categoriesFor: #at:!public! !
!ODBBTreeIndexDictionary categoriesFor: #at:ifAbsent:!public! !
!ODBBTreeIndexDictionary categoriesFor: #at:ifAbsentPut:!public! !
!ODBBTreeIndexDictionary categoriesFor: #at:put:!public! !
!ODBBTreeIndexDictionary categoriesFor: #basicGoTo:!private! !
!ODBBTreeIndexDictionary categoriesFor: #bytesFromKey:!private! !
!ODBBTreeIndexDictionary categoriesFor: #commit:!private! !
!ODBBTreeIndexDictionary categoriesFor: #commitChanged!private! !
!ODBBTreeIndexDictionary categoriesFor: #commitNew!private! !
!ODBBTreeIndexDictionary categoriesFor: #databaseObjectClass!private! !
!ODBBTreeIndexDictionary categoriesFor: #dbPeekNext!private! !
!ODBBTreeIndexDictionary categoriesFor: #dbPeekPrevious!private! !
!ODBBTreeIndexDictionary categoriesFor: #do:!public! !
!ODBBTreeIndexDictionary categoriesFor: #forKeysStartingWith:do:!public! !
!ODBBTreeIndexDictionary categoriesFor: #getCurrent!enumerating!public! !
!ODBBTreeIndexDictionary categoriesFor: #getFirst!enumerating!public! !
!ODBBTreeIndexDictionary categoriesFor: #getLast!enumerating!public! !
!ODBBTreeIndexDictionary categoriesFor: #getNext!enumerating!public! !
!ODBBTreeIndexDictionary categoriesFor: #getPrevious!enumerating!public! !
!ODBBTreeIndexDictionary categoriesFor: #goTo:!enumerating!public! !
!ODBBTreeIndexDictionary categoriesFor: #includesKey:!public! !
!ODBBTreeIndexDictionary categoriesFor: #initialize!private! !
!ODBBTreeIndexDictionary categoriesFor: #isChanged!public! !
!ODBBTreeIndexDictionary categoriesFor: #isEmpty!public! !
!ODBBTreeIndexDictionary categoriesFor: #keyFromBytes:!private! !
!ODBBTreeIndexDictionary categoriesFor: #keyLength!public! !
!ODBBTreeIndexDictionary categoriesFor: #keys!public! !
!ODBBTreeIndexDictionary categoriesFor: #keysFrom:to:do:!public! !
!ODBBTreeIndexDictionary categoriesFor: #keySize:!private! !
!ODBBTreeIndexDictionary categoriesFor: #newChangedDictionary!private! !
!ODBBTreeIndexDictionary categoriesFor: #objectCommitted!private! !
!ODBBTreeIndexDictionary categoriesFor: #removeKey:!public! !
!ODBBTreeIndexDictionary categoriesFor: #selectKeysFrom:to:!public! !
!ODBBTreeIndexDictionary categoriesFor: #selectKeysStartingWith:!public! !
!ODBBTreeIndexDictionary categoriesFor: #transactionAssociationsDo:!public! !
!ODBBTreeIndexDictionary categoriesFor: #transactionDo:!public! !
!ODBBTreeIndexDictionary categoriesFor: #transactionReadOnlyDo:!public! !
!ODBBTreeIndexDictionary categoriesFor: #transactionValueBlocksDo:!public! !
!ODBBTreeIndexDictionary categoriesFor: #valueAt:!private! !
!ODBBTreeIndexDictionary categoriesFor: #valueAt:ifAbsent:!private! !
!ODBBTreeIndexDictionary categoriesFor: #values!public! !

!ODBBTreeIndexDictionary class methodsFor!

createWithKeyLength: keyLength 
	"Answer new instance of dictionary with max keyLength characters for keys."

	^self new keySize: keyLength! !
!ODBBTreeIndexDictionary class categoriesFor: #createWithKeyLength:!public! !

ODBRootObjectHolder guid: (GUID fromString: '{8162ee2f-0fb8-11d4-b091-000000000000}')!
ODBRootObjectHolder comment: ''!
!ODBRootObjectHolder categoriesForClass!No category! !
!ODBRootObjectHolder methodsFor!

commit: serializer 
	"Commit changes."

	| change newHolder |
	changed == true 
		ifTrue: 
			[newHolder := (holder makeNewVersion: transaction oldHolders)
						persistentClassID: ODBRootObjectDBHolder classID;
						versionNumber: transaction versionNumber;
						rootObjectID: (transaction getObjectID: dataBaseObject).
			change := (ODBNewObjectVersion new)
						setObjectID: holder objectID transactionObject: self;
						oldVersion: holder;
						newVersion: newHolder.
			transaction changesPackage add: change]!

isChanged
	"Answer <true> if object has been changed."

	^changed == true!

objectCommitted
	"Sent from change after it has committed."

	changed := false!

objectLoaded
	"Sent to transaction object when it has been loaded into transaction."

	dataBaseObject := transaction objectAt: dataBaseObject!

rootObject
	"Answer object represented by receiver."

	^dataBaseObject!

rootObject: anObject 
	"Set object represented by the receiver."

	changed := true.
	transaction makePersistent: anObject.
	dataBaseObject := anObject! !
!ODBRootObjectHolder categoriesFor: #commit:!public! !
!ODBRootObjectHolder categoriesFor: #isChanged!public! !
!ODBRootObjectHolder categoriesFor: #objectCommitted!public! !
!ODBRootObjectHolder categoriesFor: #objectLoaded!public! !
!ODBRootObjectHolder categoriesFor: #rootObject!public! !
!ODBRootObjectHolder categoriesFor: #rootObject:!public! !

ODBSerializedObject guid: (GUID fromString: '{8162ee30-0fb8-11d4-b091-000000000000}')!
ODBSerializedObject comment: ''!
!ODBSerializedObject categoriesForClass!No category! !
!ODBSerializedObject methodsFor!

commit: serializer 
	"Commit changes."

	| change bytes referenceManager newHolder classID |
	changed == true ifFalse: [^self].
	referenceManager := ODBReferenceManager new.
	bytes := ODBMemoryWriteStream new.
	serializer 
		serialize: dataBaseObject odbObject
		onStream: bytes
		referenceManager: referenceManager
		classManager: transaction environment classManager.
	bytes := referenceManager asBytesWith: bytes asByteArray.
	classID := referenceManager databaseObjectClassID.
	newHolder := (holder makeNewVersion: transaction oldHolders)
				persistentClassID: classID;
				versionNumber: transaction versionNumber.
	newHolder storeBytes: bytes.
	change := (ODBNewObjectVersion new)
				setObjectID: holder objectID transactionObject: self;
				oldVersion: holder;
				newVersion: newHolder.
	transaction changesPackage add: change!

isChanged
	"Answer <true> if object has been changed."

	^changed == true!

objectChanged
	"This message is sent from transaction the first time it is marked as dirty."

	changed := true!

objectCommitted
	"Sent from change after it has committed."

	changed := false!

objectLoaded
	"Sent to transaction object when it is loaded into transaction."

	dataBaseObject odbLoadedIn: transaction!

objectStored
	"Sent to transaction object when object was made persistent."

	changed := true.
	dataBaseObject odbMadePersistentIn: transaction!

value
	"Answer object represented by receiver."

	^dataBaseObject!

value: anObject 
	"Set the object represented by the receiver."

	dataBaseObject := anObject.
	changed := true! !
!ODBSerializedObject categoriesFor: #commit:!public! !
!ODBSerializedObject categoriesFor: #isChanged!public! !
!ODBSerializedObject categoriesFor: #objectChanged!public! !
!ODBSerializedObject categoriesFor: #objectCommitted!public! !
!ODBSerializedObject categoriesFor: #objectLoaded!public! !
!ODBSerializedObject categoriesFor: #objectStored!public! !
!ODBSerializedObject categoriesFor: #value!acessing!public! !
!ODBSerializedObject categoriesFor: #value:!acessing!public! !

ODBBTreeDictionary guid: (GUID fromString: '{8162ee31-0fb8-11d4-b091-000000000000}')!
ODBBTreeDictionary comment: ''!
!ODBBTreeDictionary categoriesForClass!No category! !
!ODBBTreeDictionary methodsFor!

addKey: key value: anObject 
	"Private - Add association to dictionary of changed associations."

	| value |
	(value := self valueAt: key) isRemoved 
		ifTrue: [deltaSize := deltaSize + 1]
		ifFalse: 
			[transaction isNil 
				ifFalse: 
					["ce je objekt identicen ga ne shranjuj znova"
					(transaction getObjectIDOrNil: anObject) = value objectID ifTrue: [^anObject]]].
	value object: anObject.
	changed isNil ifTrue: [changed := self newChangedDictionary].
	changed at: key put: value.
	^anObject!

at: aKey put: anObject 
	"Associate aKey with anObject.
	aKey can be any object which implements method #asBtreeKeyOfSize:
	Trigger an exception if aKey has already been locked or changed in a concurrently running transaction."

	^self 
		at: aKey
		put: anObject
		ifLocked: [OmniBase signalCannotLockBTreeDictionaryKey]!

at: aKey put: anObject ifLocked: aBlock 
	"Associate aKey with anObject.
	Evaluate aBlock if aKey has been locked before in some other transaction."

	| key |
	key := self bytesFromKey: aKey.
	(self basicLockKey: key) ifFalse: [^aBlock value].
	transaction isNil ifFalse: [transaction makePersistent: anObject in: holder container].
	^self addKey: key value: anObject!

basicLockKey: key 
	"Private - Lock key so that other transactions wont be able
	to change it. Answer <true> if successfull."

	| lock lockID value |
	dataBaseObject isNil ifTrue: [^true].
	(lockID := transaction lockID) isNil ifTrue: [^false].
	transaction isGlobalLocked ifTrue: [^true].
	locks isNil 
		ifTrue: [locks := LookupTable new]
		ifFalse: [(locks includesKey: key) ifTrue: [^true]].
	lock := (ODBKeyLock new)
				objectID: holder objectID;
				lockID: lockID;
				key: key.
	value := self valueAt: key.
	dataBaseObject iterator critical: 
			[transaction addLoggedLock: lock.
			((dataBaseObject iterator)
				goTo: key;
				lockCurrentValue: value contents with: lockID) 
					ifFalse: 
						[transaction removeLoggedLock: lock.
						^false]].
	locks at: key put: lock.
	^true!

commitChanged
	"Private - Commit changes on an already existing dictionary."

	| changesPackage newValue vn oldHolders |
	changesPackage := transaction changesPackage.
	changesPackage add: (ODBDictionaryChanged new transactionObject: self).
	deltaSize = 0 
		ifFalse: 
			[changesPackage add: ((ODBSizeChanged new)
						setObjectID: holder objectID transactionObject: self;
						deltaSize: deltaSize)].
	vn := transaction versionNumber.
	oldHolders := transaction oldHolders.
	changed isNil 
		ifFalse: 
			[changed keysAndValuesDo: 
					[:key :oldValue | 
					newValue := oldValue makeNewVersion: oldHolders.
					newValue versionNumber: vn.
					oldValue isRemoved 
						ifFalse: [newValue objectID: (transaction getObjectID: newValue object)].
					changesPackage add: ((ODBAssociationChanged new)
								key: key;
								setObjectID: holder objectID transactionObject: self;
								oldValue: oldValue;
								newValue: newValue)]]!

commitNew
	"Private - Commit changes when new database object needs to be created."

	| newHolder newDBObject vn |
	vn := transaction versionNumber.
	newHolder := (holder makeNewVersion: transaction oldHolders)
				persistentClassID: self databaseObjectClass classID;
				versionNumber: vn.
	newDBObject := self databaseObjectClass new createOn: newHolder keySize: keySize.
	changed notNil 
		ifTrue: 
			[changed keysAndValuesDo: 
					[:key :value | 
					value isRemoved 
						ifFalse: 
							[value
								objectID: (transaction getObjectID: value object);
								versionNumber: vn.
							newDBObject at: key put: value]]].
	newDBObject iterator 
		updateSizeAt: vn
		oldHolders: nil
		deltaSize: deltaSize.
	(transaction changesPackage)
		add: ((ODBNewObjectVersion new)
					setObjectID: holder objectID transactionObject: self;
					oldVersion: holder;
					newVersion: newHolder);
		add: ((ODBDictionaryChanged new)
					transactionObject: self;
					dataBaseObject: newDBObject)!

databaseObjectClass
	^ODBDBBTreeDictionary!

initialize
	"Private - Initialize receiver."

	super initialize.
	initialSize := 0.
	deltaSize := 0!

isKeyLocked: aKey 
	"Answer <true> if aKey is locked."

	| key result |
	dataBaseObject isNil ifTrue: [^false].
	transaction isGlobalLocked ifTrue: [^false].
	key := self bytesFromKey: aKey.
	dataBaseObject iterator critical: 
			[result := (locks notNil and: [locks includesKey: key]) or: 
							[(dataBaseObject iterator)
								goTo: key;
								isLocked]].
	^result!

lockKey: aKey 
	"Lock key aKey so that other transactions wont be able
	to change it. Answer <true> if successfull."

	^self basicLockKey: (self bytesFromKey: aKey)!

objectCommitted
	"Changes have been committed, update object."

	changed := nil.
	initialSize := initialSize + deltaSize.
	deltaSize := 0!

objectLoaded
	"Sent to transaction object when it is loaded into transaction."

	initialSize := dataBaseObject iterator getSizeAt: transaction versionDescriptor
				oldHolders: transaction oldHolders!

objectStored
	"Sent to transaction object when it is stored for the first time."

	| container |
	changed notNil 
		ifTrue: 
			[container := holder container.
			changed do: 
					[:eachValue | 
					eachValue isRemoved ifFalse: [transaction makePersistent: eachValue object in: container]]]!

removeKey: aKey 
	^self removeKey: aKey ifLocked: [OmniBase signalCannotLockBTreeDictionaryKey]!

removeKey: aKey ifLocked: aBlock 
	| key value |
	key := self bytesFromKey: aKey.
	(self basicLockKey: key) ifFalse: [^aBlock value].
	value := self valueAt: key ifAbsent: [^nil].
	value isRemoved 
		ifFalse: 
			[value removed.
			changed isNil ifTrue: [changed := self newChangedDictionary].
			changed at: key put: value.
			deltaSize := deltaSize - 1]!

size
	"Answer number of keys in receiver.
	(metodo je treba spremeniti, ce so reference na objekte iz 
	transakcije weak -> sizeHolder mora biti iz verzije pred startom transakcije)"

	^initialSize + deltaSize!

unlockKey: aKey 
	"Unlocks key aKey. Answer <true> if successfull."

	| lock key |
	dataBaseObject isNil ifTrue: [^true].
	key := self bytesFromKey: aKey.
	changed isNil ifFalse: [(changed includes: key) ifTrue: [^false]].
	locks isNil ifTrue: [^transaction isGlobalLocked].
	lock := locks at: key ifAbsent: [^false].
	(dataBaseObject unlockKey: key with: lock lockID) ifFalse: [^false].
	transaction removeLoggedLock: lock.
	locks removeKey: key.
	^true! !
!ODBBTreeDictionary categoriesFor: #addKey:value:!private! !
!ODBBTreeDictionary categoriesFor: #at:put:!public! !
!ODBBTreeDictionary categoriesFor: #at:put:ifLocked:!public! !
!ODBBTreeDictionary categoriesFor: #basicLockKey:!private! !
!ODBBTreeDictionary categoriesFor: #commitChanged!private! !
!ODBBTreeDictionary categoriesFor: #commitNew!private! !
!ODBBTreeDictionary categoriesFor: #databaseObjectClass!private! !
!ODBBTreeDictionary categoriesFor: #initialize!private! !
!ODBBTreeDictionary categoriesFor: #isKeyLocked:!public! !
!ODBBTreeDictionary categoriesFor: #lockKey:!public! !
!ODBBTreeDictionary categoriesFor: #objectCommitted!private! !
!ODBBTreeDictionary categoriesFor: #objectLoaded!private! !
!ODBBTreeDictionary categoriesFor: #objectStored!private! !
!ODBBTreeDictionary categoriesFor: #removeKey:!public! !
!ODBBTreeDictionary categoriesFor: #removeKey:ifLocked:!public! !
!ODBBTreeDictionary categoriesFor: #size!public! !
!ODBBTreeDictionary categoriesFor: #unlockKey:!public! !

ODBBTreeIntegerIndexDictionary guid: (GUID fromString: '{3227223a-72d0-4869-9ff1-781c849c1b2c}')!
ODBBTreeIntegerIndexDictionary comment: ''!
!ODBBTreeIntegerIndexDictionary categoriesForClass!No category! !
!ODBBTreeIntegerIndexDictionary methodsFor!

bytesFromKey: anInteger 
	^((ByteArray new: 4) odbLongAt: 1 put: anInteger) reverse!

databaseObjectClass
	^ODBDBBTreeIntegerIndexDictionary!

initialize
	"Private - Initialize receiver."

	super initialize.
	keySize := 4!

keyFromBytes: aByteArray 
	^aByteArray reverse odbLongAt: 1! !
!ODBBTreeIntegerIndexDictionary categoriesFor: #bytesFromKey:!private! !
!ODBBTreeIntegerIndexDictionary categoriesFor: #databaseObjectClass!private! !
!ODBBTreeIntegerIndexDictionary categoriesFor: #initialize!private! !
!ODBBTreeIntegerIndexDictionary categoriesFor: #keyFromBytes:!private! !

!ODBBTreeIntegerIndexDictionary class methodsFor!

new
	^super new keySize: 4! !
!ODBBTreeIntegerIndexDictionary class categoriesFor: #new!public! !

ODBBTreeMultiValueDictionary guid: (GUID fromString: '{9c3a735f-1975-434c-b8c5-a8182c9cf1b6}')!
ODBBTreeMultiValueDictionary comment: ''!
!ODBBTreeMultiValueDictionary categoriesForClass!No category! !
!ODBBTreeMultiValueDictionary methodsFor!

add: anAssociation 
"
	self atKey: anAssociation key put: anAssociation value.
	^anAssociation"!

at: aKey 
	^self valuesAt: aKey!

at: aKey put: anObject 
	^self atKey: aKey add: anObject!

atKey: aKey add: anObject!

COMMENT
	"This class is not yet implemented."

	!

initialize
	"Private - Initialize receiver."

	super initialize.
	initialSize := 0.
	deltaSize := 0!

valuesAt: aKey
! !
!ODBBTreeMultiValueDictionary categoriesFor: #add:!public! !
!ODBBTreeMultiValueDictionary categoriesFor: #at:!public! !
!ODBBTreeMultiValueDictionary categoriesFor: #at:put:!public! !
!ODBBTreeMultiValueDictionary categoriesFor: #atKey:add:!public! !
!ODBBTreeMultiValueDictionary categoriesFor: #COMMENT!public! !
!ODBBTreeMultiValueDictionary categoriesFor: #initialize!private! !
!ODBBTreeMultiValueDictionary categoriesFor: #valuesAt:!public! !

ODBBTreeIdentityDictionary guid: (GUID fromString: '{9d57bceb-f1db-439c-b3ae-84e89c325d9c}')!
ODBBTreeIdentityDictionary comment: ''!
!ODBBTreeIdentityDictionary categoriesForClass!No category! !
!ODBBTreeIdentityDictionary methodsFor!

at: aKey ifAbsent: aBlock 
	| oid |
	^transaction isNil 
		ifTrue: [newKeys at: aKey odbResolve ifAbsent: aBlock]
		ifFalse: 
			[(oid := transaction getObjectIDOrNil: aKey) isNil 
				ifTrue: [newKeys at: aKey ifAbsent: aBlock]
				ifFalse: [super at: oid ifAbsent: aBlock]]!

at: aKey put: anObject ifLocked: aBlock 
	"Associate aKey with anObject.
	Evaluate aBlock if aKey has been locked before in some other transaction."

	| oid |
	^transaction isNil 
		ifTrue: [newKeys at: aKey odbResolve put: anObject]
		ifFalse: 
			[(oid := transaction getObjectIDOrNil: aKey) isNil 
				ifTrue: [newKeys at: aKey put: anObject]
				ifFalse: 
					[super 
						at: oid
						put: anObject
						ifLocked: aBlock]]!

bytesFromKey: anObjectID 
	^anObjectID contents!

commit: serializer 
	"Object IDs have been allocated. Add associations."

	newKeys keysAndValuesDo: 
			[:eachKey :eachValue | 
			self addKey: (self bytesFromKey: (transaction getObjectID: eachKey)) value: eachValue].
	super commit: serializer!

databaseObjectClass
	^ODBDBBTreeIdentityDictionary!

includesKey: aKey 
	| oid |
	^transaction isNil 
		ifTrue: [newKeys includesKey: aKey odbResolve]
		ifFalse: 
			[(oid := transaction getObjectIDOrNil: aKey) isNil 
				ifTrue: [newKeys includesKey: aKey]
				ifFalse: [super includesKey: oid]]!

initialize
	super initialize.
	keySize := ODBObjectID sizeInBytes.
	newKeys := IdentityDictionary new!

isChanged
	^super isChanged or: [newKeys notEmpty]!

isKeyLocked: aKey 
	"Answer <true> if aKey is locked."

	| oid |
	^(transaction isNil or: [(oid := transaction getObjectIDOrNil: aKey) isNil]) 
		ifTrue: [false]
		ifFalse: [super isKeyLocked: oid]!

keyFromBytes: aByteArray 
	transaction referenceAt: (ODBObjectID new fromBytes: aByteArray at: 1)!

keys
	"Answer collection of all keys in the dictionary.
	NOTE: All objects will be loaded in one transaction at once.
	Do not use this method if there are a lot of objects in the dictionary since this could block your image for some time."

	| coll assoc |
	coll := OrderedCollection new: self size.
	coll addAll: newKeys keys.
	transaction isNil 
		ifFalse: 
			[assoc := self getFirst.
			[assoc isNil] whileFalse: 
					[coll add: (transaction referenceAt: (ODBObjectID new fromBytes: assoc key at: 1)).
					assoc := self getNext]].
	^coll!

keysFrom: key1 to: key2 do: aBlock 
	"Evaluate aBlock for each key in the given key range."

	self error: 'Invalid message for this class'!

lockKey: aKey 
	"Lock key aKey so that other transactions wont be able
	to change it. Answer <true> if successfull."

	| oid |
	^(transaction isNil or: [(oid := transaction getObjectIDOrNil: aKey) isNil]) 
		ifTrue: [true]
		ifFalse: [super lockKey: oid]!

objectCommitted
	"Changes have been committed, update object."

	super objectCommitted.
	newKeys := IdentityDictionary new!

objectStored
	"Sent to transaction object when it is stored for the first time.
	Remove all persistent objects which were put into dictionary before itself was persistent."

	| oid |
	super objectStored.
	newKeys copy keysAndValuesDo: 
			[:eachKey :eachValue | 
			(oid := transaction getObjectIDOrNil: eachKey) isNil 
				ifFalse: 
					[super 
						at: oid
						put: eachValue
						ifLocked: [OmniBase signalCannotLockBTreeDictionaryKey].
					newKeys removeKey: eachKey]]!

odbAboutToCommitIn: anOmniBaseTransaction 
	"Sent before transaction writes changes to the database (right before commit).
	In this method you can use transaction the same way as usual."

	| container |
	container := holder container.
	newKeys keysAndValuesDo: 
			[:eachKey :eachValue | 
			transaction
				makePersistent: eachKey in: container;
				makePersistent: eachValue in: container]!

removeKey: aKey ifLocked: aBlock 
	| oid |
	^transaction isNil 
		ifTrue: [newKeys removeKey: aKey odbResolve ifAbsent: []]
		ifFalse: 
			[(oid := transaction getObjectIDOrNil: aKey) isNil 
				ifTrue: [newKeys removeKey: aKey ifAbsent: []]
				ifFalse: [super removeKey: oid ifLocked: aBlock]]!

size
	^super size + newKeys size!

unlockKey: aKey 
	"Unlocks key aKey. Answer <true> if successfull."

	| oid |
	^(transaction isNil or: [(oid := transaction getObjectIDOrNil: aKey) isNil]) 
		ifTrue: [true]
		ifFalse: [super unlockKey: oid]!

values
	^newKeys values , super values! !
!ODBBTreeIdentityDictionary categoriesFor: #at:ifAbsent:!public! !
!ODBBTreeIdentityDictionary categoriesFor: #at:put:ifLocked:!public! !
!ODBBTreeIdentityDictionary categoriesFor: #bytesFromKey:!private! !
!ODBBTreeIdentityDictionary categoriesFor: #commit:!private! !
!ODBBTreeIdentityDictionary categoriesFor: #databaseObjectClass!private! !
!ODBBTreeIdentityDictionary categoriesFor: #includesKey:!public! !
!ODBBTreeIdentityDictionary categoriesFor: #initialize!private! !
!ODBBTreeIdentityDictionary categoriesFor: #isChanged!public! !
!ODBBTreeIdentityDictionary categoriesFor: #isKeyLocked:!public! !
!ODBBTreeIdentityDictionary categoriesFor: #keyFromBytes:!private! !
!ODBBTreeIdentityDictionary categoriesFor: #keys!public! !
!ODBBTreeIdentityDictionary categoriesFor: #keysFrom:to:do:!public! !
!ODBBTreeIdentityDictionary categoriesFor: #lockKey:!public! !
!ODBBTreeIdentityDictionary categoriesFor: #objectCommitted!private! !
!ODBBTreeIdentityDictionary categoriesFor: #objectStored!private! !
!ODBBTreeIdentityDictionary categoriesFor: #odbAboutToCommitIn:!private! !
!ODBBTreeIdentityDictionary categoriesFor: #removeKey:ifLocked:!public! !
!ODBBTreeIdentityDictionary categoriesFor: #size!public! !
!ODBBTreeIdentityDictionary categoriesFor: #unlockKey:!public! !
!ODBBTreeIdentityDictionary categoriesFor: #values!public! !

ODBReference guid: (GUID fromString: '{8162edca-0fb8-11d4-b091-000000000000}')!
ODBReference comment: ''!
!ODBReference categoriesForClass!No category! !
!ODBReference methodsFor!

= anObject 
	(self isIdenticalTo: anObject) == true ifTrue: [^true].
	^demandLoader perform: #= withArguments: (Array with: anObject)!

doesNotUnderstand: aMessage 
	^demandLoader perform: aMessage selector withArguments: aMessage arguments!

inspect
	^demandLoader perform: #inspect withArguments: #()!

instVarAt: index 
	^demandLoader perform: #instVarAt: withArguments: (Array with: index)!

isIdenticalTo: anObject 
	"Answer true if anObject is identical to receiver. This is necessary since with database
	proxies the real object identity is lost because while the object is not yet loaded from the
	database it is represented by its proxy. Later when the real object is loaded this proxy still
	represents the identical object but the #== identity check will answer false because it is not
	aware of this. It is implemented in this way because the #== method is inlined and can not
	be overridden."

	anObject isODBReference ifTrue: [^self odbObjectID = anObject odbObjectID].
	(anObject isNil or: [self odbNotLoaded]) ifTrue: [^false].
	^self odbTransactionObject value == anObject!

isImmediate
	"Private - Answer whether the receiver has an immediate representation (that is it is entirely
	encoded in an object pointer, e.g. SmallIntegers. Most objects are not immediate."

	^false!

isKindOf: candidateClass 
	^demandLoader perform: #isKindOf: withArguments: (Array with: candidateClass)!

isNil
	^false!

isODBReference
	"Answer <true> if receiver is kind of ODReference."

	^true!

makePersistent
	"Do nothing, object is already persistent."

	!

markDirty
	self odbNotLoaded ifFalse: [self odbGetTransaction markDirty: self odbResolve]!

notNil
	^true!

odbGetOID
	transactionObject == nil ifTrue: [^demandLoader odbObjectID].
	^transactionObject objectID!

odbGetTransaction
	"Answer transaction that owns the reference."

	transactionObject isNil ifTrue: [^demandLoader transaction].
	^transactionObject transaction!

odbNotLoaded
	"Answer <true> if the referenced object has not been loaded yet."

	transactionObject notNil ifTrue: [^false].
	^(demandLoader transaction cachedObjectAt: demandLoader odbObjectID) isNil!

odbObjectID
	transactionObject == nil ifTrue: [^demandLoader odbObjectID].
	^transactionObject objectID!

odbResolve
	"See Object>>#odbResolve for comment."

	^transactionObject isNil 
		ifTrue: [demandLoader getObject]
		ifFalse: [transactionObject value]!

odbSerialize: serializer 
	^demandLoader odbSerialize: serializer!

odbSetLoader: aDemandLoader 
	demandLoader := aDemandLoader!

odbSetTransactionObject: anODBTransactionObject 
	"Private - Set transaction object and answer its value."

	transactionObject := anODBTransactionObject.
	^demandLoader := transactionObject value!

odbTransaction
	"Answer transaction that owns the reference."

	transactionObject isNil ifTrue: [^demandLoader transaction].
	^transactionObject transaction!

odbTransactionObject
	transactionObject isNil ifTrue: [demandLoader getObject].
	^transactionObject! !
!ODBReference categoriesFor: #=!message dispatching!public! !
!ODBReference categoriesFor: #doesNotUnderstand:!message dispatching!public! !
!ODBReference categoriesFor: #inspect!message dispatching!public! !
!ODBReference categoriesFor: #instVarAt:!message dispatching!private! !
!ODBReference categoriesFor: #isIdenticalTo:!accessing!public! !
!ODBReference categoriesFor: #isImmediate!public! !
!ODBReference categoriesFor: #isKindOf:!message dispatching!public! !
!ODBReference categoriesFor: #isNil!message dispatching!public! !
!ODBReference categoriesFor: #isODBReference!accessing!public! !
!ODBReference categoriesFor: #makePersistent!accessing!public! !
!ODBReference categoriesFor: #markDirty!accessing!public! !
!ODBReference categoriesFor: #notNil!message dispatching!public! !
!ODBReference categoriesFor: #odbGetOID!accessing!public! !
!ODBReference categoriesFor: #odbGetTransaction!accessing!public! !
!ODBReference categoriesFor: #odbNotLoaded!accessing!private! !
!ODBReference categoriesFor: #odbObjectID!accessing!private! !
!ODBReference categoriesFor: #odbResolve!accessing!public! !
!ODBReference categoriesFor: #odbSerialize:!public!serialization! !
!ODBReference categoriesFor: #odbSetLoader:!accessing!private! !
!ODBReference categoriesFor: #odbSetTransactionObject:!accessing!private! !
!ODBReference categoriesFor: #odbTransaction!accessing!private! !
!ODBReference categoriesFor: #odbTransactionObject!accessing!private! !

"Binary Globals"!

